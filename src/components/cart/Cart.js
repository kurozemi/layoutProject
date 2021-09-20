import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity,TextInput } from 'react-native'
import styles from './Cart.style'

import database from '@react-native-firebase/database';

//screen components
import CartDetails from './cartDetails/CartDetails';
import Header from './header/Header';
import EmptyCart from './emptyCart/EmptyCart';

const reference = database().ref();

const Cart = ({ navigation }) => {

    var cart = [];
    useEffect(() => {
        const onValueChange = reference.child("Cart")
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
                setCartDetails(cart);
            })
        return () => reference.off('value', onValueChange);
    }, [])

    const makePayment = () => {
        var cart = {}; 

        cartDetails.forEach(product => {
            cart[product.id] = product;
        });
        const order = {
            cart: cart,
            finalPrice: finalPrice,
            address: address
        };
        reference.child("Order").push(order);
        reference.child("Cart").remove();

        setAddress("201, Dev mall, near iskan cross roadssss");
        setIsChangeAddress(false);
        navigation.navigate("Explore");
        alert("Order complete")
    }

    const [cartDetails, setCartDetails] = useState([]);

    const [isChangeAddress, setIsChangeAddress] = useState(false);
    const [address, setAddress] = useState("201, Dev mall, near iskan cross roadssss");
    const [finalPrice, setFinalPrice] = useState(0);
    return (

        <SafeAreaView style={styles.main}>
            {
                cartDetails.length == 0
                    ?
                    <EmptyCart
                        navigation={navigation}
                    />
                    :
                    <View style={{ height: '100%' }}>
                        <Header
                            title="Restaurant"
                            subTitle="Vietnam"
                            navigation={navigation}
                        />
                        <CartDetails
                            cart={cartDetails}
                            discount={10}
                            setFinalPrice={setFinalPrice}
                            reference={reference.child("Cart")}
                        />
                        <View style={styles.paymentMain}>
                            <View style={styles.deliveryRow}>
                                <View style={styles.titleRow}>
                                    <Image
                                        style={styles.ic}
                                        source={require("../../assets/icon/suitcase.png")}
                                    />
                                    <Text style={styles.title}>Delivery to Work</Text>
                                </View>
                                <TouchableOpacity
                                    onPress={() => setIsChangeAddress(!isChangeAddress)}
                                    activeOpacity={0.7}
                                >
                                    <Text style={styles.change}>Change</Text>
                                </TouchableOpacity>
                            </View>
                            {
                                isChangeAddress ?
                                    <TextInput
                                        editable={isChangeAddress}
                                        numberOfLines={1}
                                        value={address}
                                        autoFocus
                                        onChangeText={text => setAddress(text)}
                                        style={styles.addressInput} />
                                    :
                                    <Text
                                        numberOfLines={1}
                                        style={styles.address}
                                    >
                                        {address}
                                    </Text>
                            }
                            <TouchableOpacity
                                onPress = {makePayment}
                                style={styles.paymentBtn}
                            >
                                <Text
                                    style={styles.payment}
                                >Make Payment</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

            }

        </SafeAreaView>
    )
}

export default Cart;