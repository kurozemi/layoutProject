import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Image, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import database from '@react-native-firebase/database';
import styles from "./Home.style"

const topCategories = [
    {
        image: "https://i.ytimg.com/vi/PCAwJs51D0k/maxresdefault.jpg",
        title: "Pizza",
    },
    {
        image: "https://assets.bonappetit.com/photos/5d1cb1880813410008e914fc/master/pass/Print-Summer-Smash-Burger.jpg",
        title: "Burger",
    },
    {
        image: "https://media.cooky.vn/images/blog-2016/steak-la-gi-nhung-loai-steak-thong-dung-nhat-tren-toan-the-gioi-ma-ban-nhat-dinh-nen-nem-thu-mot-lan-1.jpg",
        title: "Steak",
    },
    {
        image: "https://www.seriouseats.com/thmb/GSqpVkulyUZu-D6sPijmbFV_f4s=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__03__20200224-carretteira-pasta-vicky-wasik-21-ffe68515b25f4b348cbde845a59d6a62.jpg",
        title: "Pasta",
    }
]
const popularItem = [
    {
        id: 'Product01',
        image: 'https://www.onceuponachef.com/images/2020/05/best-grilled-chicken-scaled.jpg',
        name: 'Grilled Chicken',
        restaurant: 'KFC',
        price: "15.20",
        discountPercent: null,
        discount: "14.20",
    },
    {
        id: 'Product02',
        image: 'https://www.recipetineats.com/wp-content/uploads/2020/01/Fried-Chicken_2-SQ.jpg',
        name: 'Fried Chicken',
        restaurant: 'Jolibee',
        price: "8.0",
        discountPercent: null,
        discount: "7.20",
    }
]
const nearbyDeals = [
    {
        id: 'Product03',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nachos-supreme-vertical-2-1547669252.png?crop=1xw:1xh;center,top&resize=480:*',
        restaurant: 'McDonald\'s',
        name: 'Mexican Creammy nachos',
        price: "15.20",
        discount: "13.70",
        discountPercent: 10
    },
    {
        id: 'Product04',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCIhgPK1nBiWim1Lz1op6CBxPV0CTnGhwceg&usqp=CAU',
        restaurant: 'McDonald\'s',
        name: 'Mexican Creammy nachos',
        price: "10.50",
        discount: "10.00",
        discountPercent: 5
    },
]
const CategoriesList = ({ data, contentStyle, renderItem }) => {
    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={item => renderItem(item.item)}
                style={{ marginLeft: 24 }}
                contentContainerStyle={contentStyle}
            />
        </View>
    )
}

const reference = database().ref("/Cart");
const Home = () => {

    var cart = [];
    useEffect(() => {
        //get cart info from database
        const onValueChange = reference
            //get data whenever there's a change in database
            .on("value", snapshot => {
                let value = snapshot.val();
                //initilize cart variable
                cart = [];
                if (value != null) {
                    for (let key in value) {
                        cart.push(value[key]);
                    }
                }
            })
        return () => reference.off('value', onValueChange);
    }, [])
    const addToCart = (item) => {
        var isExists = false;
        cart.forEach((product) => {
            //update item
            if (product.id == item.id) {
                reference.child(item.id).update({
                    quantity: (product.quantity + 1),
                })
                isExists = true;
            }
        });

        //new item
        if (!isExists) {
            reference.child(item.id).set(item);
            reference.child(item.id).update({
                quantity: 1,
            })
        }
    }

    const renderHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <View style={styles.locationIcContainer}>
                    <Image style={styles.ic} source={require("../../assets/icon/pin.png")}></Image>
                </View>
                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search for meals or area" />
                    <View style={styles.searchIc}>
                        <Image style={styles.ic} source={require("../../assets/icon/loupe.png")}></Image>
                    </View>
                </View>
            </View>
        )
    }

    const renderTopCategoriesList = () => {

        const renderItem = (item) => (
            <View style={styles.topItem}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.topCategoriesImg}>
                </Image>
                <Text style={styles.foodTitle}>{item.title}</Text>
            </View>
        )

        return (
            <CategoriesList
                data={topCategories}
                contentStyle={styles.flatListTop}
                renderItem={renderItem}
            />
        )
    }
    const renderPopularItemList = () => {
        const renderItem = (item) => (
            <View style={styles.popularItemCard}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.popularItemImg}>
                </Image>
                <View style={styles.popularItemData}>
                    <View>
                        <Text style={styles.popularItemTitle}>{item.name}</Text>
                        <Text style={styles.popularItemRestaurant}>By {item.restaurant}</Text>
                    </View>
                    <View style={styles.smallSeperator}></View>
                    <TouchableOpacity
                        onPress={() => addToCart(item)}
                        style={styles.popularCartBtn}
                    >
                        <Image
                            source={require("../../assets/icon/add-cart.png")}
                            style={styles.cartIc}
                        />
                    </TouchableOpacity>
                    <View style={styles.popularPrice}>
                        <Text style={styles.price}>€ {item.price}</Text>
                        <Text style={styles.discount}>€ {item.discount}</Text>
                    </View>
                </View>
            </View>
        )

        return (
            <View>
                <CategoriesList
                    data={popularItem}
                    contentStyle={styles.popularItemList}
                    renderItem={renderItem}
                />
            </View>
        )
    }
    const renderNearbyDealsList = () => {
        const renderItem = (item) => {
            return (
                <View style={styles.nearbyCard}>
                    <View>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.nearbyImg}
                        />
                        <View style={styles.discountContainer}>
                            <Text style={styles.discountPercent}>{item.discountPercent}% OFF</Text>
                        </View>
                    </View>
                    <Text style={styles.nearbyDealsTitle}>{item.restaurant}</Text>
                    <Text style={styles.nearbyDealsSubTitle}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.price}>€ {item.price}</Text>
                        <Text style={styles.discount}>€ {item.discount}</Text>
                        <TouchableOpacity
                            onPress={() => addToCart(item)}
                            style={styles.nearbyCartBtn}
                        >
                            <Image
                                source={require("../../assets/icon/add-cart.png")}
                                style={styles.cartIc}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        return (
            <View>
                <CategoriesList
                    data={nearbyDeals}
                    contentStyle={styles.popularItemList}
                    renderItem={renderItem}
                />
            </View>
        )
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                bounces={false}
            >
                <View style={styles.main}>
                    {renderHeader()}
                    <View style={styles.categoriesRow}>
                        <Text style={styles.title}>Top Categories</Text>
                        <View style={styles.filterContainer}>
                            <Image style={styles.ic} source={require("../../assets/icon/filter.png")}></Image>
                            <Text style={styles.subTitle}>Filter</Text>
                        </View>
                    </View>
                    {renderTopCategoriesList()}
                    <View style={styles.seperator}></View>
                    <View style={styles.categoriesRow}>
                        <Text style={styles.title}>Popular Items</Text>
                        <Text style={styles.subTitle}>View all</Text>
                    </View>
                    {renderPopularItemList()}
                    <View style={styles.seperator}></View>
                    <View style={styles.categoriesRow}>
                        <Text style={styles.title}>Nearby Deals</Text>
                        <Text style={styles.subTitle}>View all</Text>
                    </View>
                    {renderNearbyDealsList()}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;