import React, { useEffect } from 'react';
import { View, Text, FlatList, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from './CartDetails.style'

//Cart Component
const ProductRow = ({ data, index, updateQuantity }) => {
    return (
        <View>
            <View style={styles.productRow}>
                <View style={styles.productTitle}>
                    <Text style={styles.productName}>{data.name}</Text>
                    <Text style={styles.productType}>{data.type}</Text>
                </View>
                <View style={styles.quantity}>
                    <TextInput
                        style={styles.quantityInput}
                        keyboardType="number-pad"
                        returnKeyType={'done'}
                        value={data.quantity}
                        onChangeText={qty => updateQuantity(qty, index)}
                        onEndEditing={(e) => {
                            if (e.nativeEvent.text == "")
                                updateQuantity("1", index)
                        }}
                        maxLength={2}
                    />
                </View>
                <View>
                    <Text style={styles.productPrice}>€{data.price}</Text>
                </View>
            </View>
            <View style={styles.seperator}></View>
        </View>
    )
}
const CartList = ({ data, setCartDetails }) => {
    const updateQuantity = (newQuantity, index) => {
        let tempCart = Array.from(data);
        tempCart[index].quantity = newQuantity;
        setCartDetails(tempCart);
    };
    return (
        <View>
            {
                data.map((item, index) => <ProductRow
                    data={item}
                    key={index}
                    index = {index}
                    updateQuantity={updateQuantity}
                />
                )
            }
        </View>
    )
}

//Bill Component
const BillDetails = (props) => {

    const cart = props.cart;
    const discountPercent = props.discount;

    const restaurantCharges = "3.00";
    const deliveryFee = "1.00";

    const totalPrice = cart.map(item => item.price * item.quantity)
        .reduce((total, price) =>
            total + parseFloat(price)
            , 0).toFixed(2);

    var discount = 0;
    if (discountPercent != undefined) {
        discount = totalPrice * (parseInt(discountPercent)) / 100;
    }
    const toPay = (totalPrice + parseFloat(restaurantCharges) + parseFloat(deliveryFee) - parseFloat(discount)).toFixed(2);

    useEffect(() => {
        props.setFinalPrice(toPay);
    }, [toPay])
    var newTitle = "";

    const renderPrice = (title, price, discount) => {
        if (title == "Discount") {
            newTitle = `Offer ${discount} OFF`
        };
        return (
            <View style={styles.priceRow}>
                <Text style={styles.priceTitle}>
                    {title != "Discount" ? title : newTitle}
                </Text>
                <Text style={styles.productPrice}>
                    {title == "Discount"
                        ? "- "
                        : ""}€{price}
                </Text>
            </View>
        )
    }
    return (
        <View style={styles.bill}>
            <View style={styles.billDetails}>
                <Text style={styles.boldTitle}>Bill Details</Text>
                {renderPrice("Item Total", totalPrice)}
                {renderPrice("Restaurant Charges", restaurantCharges)}
                {renderPrice("Delivery Fee", deliveryFee)}
                {discountPercent ? renderPrice("Discount", discount, `${discountPercent}%`) : null}
            </View>
            <View style={styles.seperator}></View>
            <View style={styles.rowTitle}>
                <Text style={styles.boldTitle}>To Pay</Text>
                <Text style={styles.toPayPrice}>€ {toPay}</Text>
            </View>
        </View>
    )
}

//Additional Information Component
const RequestDiscount = () => {
    return (
        <View>
            <View style={styles.seperator}></View>
            <View style={styles.rowTitle}>
                <Text style={styles.priceTitle}>Any request for the restaurant?</Text>
                <Image
                    style={styles.ic}
                    source={require("../../../assets/icon/note.png")}
                />
            </View>
            <View style={styles.discountCodeRow}>
                <TextInput
                    style={styles.discountInp}
                    placeholder="Enter discount code"
                />
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.applyBtn}
                >
                    <Text style={styles.apply}>Apply</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
//Main Component
const CartDetails = (props) => {

    return (

        <ScrollView
            keyboardDismissMode
            style={styles.scrollView}
        >

            <CartList
                data={props.cart}
                setCartDetails={props.setCartDetails}
            />
            <BillDetails
                discount={props.discount}
                setFinalPrice={props.setFinalPrice}
                cart={props.cart}
            />
            <RequestDiscount />
        </ScrollView>
    )
}

export default CartDetails;