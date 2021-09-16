import React, { useEffect } from 'react';
import { View, Text, FlatList, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from './CartDetails.style'

//Cart Component
const ProductRow = ({ data, updateQuantity, deleteItem }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => deleteItem(data.id)}
                style={styles.deleteItem}>
                <Image
                    style={styles.deleteIc}
                    source={require("../../../assets/icon/cancel.png")}
                />
            </TouchableOpacity>
            <View style={styles.productRow}>
                <View style={styles.productTitle}>
                    <Text
                        numberOfLines={1}
                        style={styles.productName}>{data.name}</Text>
                    <Text style={styles.productType}>{data.restaurant}</Text>
                </View>
                <View style={styles.quantity}>
                    <TouchableOpacity
                        style={styles.updateBtn}
                        onPress={() => updateQuantity('-', data.id, data.quantity)}
                    >
                        <Text style={{ color: 'red' }}>-</Text>
                    </TouchableOpacity>
                    <Text
                        style={styles.quantityInput}
                    >{data.quantity}</Text>
                    <TouchableOpacity
                        style={styles.updateBtn}
                        onPress={() => updateQuantity('+', data.id, data.quantity)}
                    >
                        <Text style={{ color: 'red' }}>+</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.productPrice}>€{data.price}</Text>
                </View>
            </View>
            <View style={styles.seperator}></View>
        </View>
    )
}
const CartList = ({ data, reference }) => {
    const deleteItem = (id) => {
        reference.child(id).remove();
    }
    const updateQuantity = (type, id, quantity) => {
        let newQuantity = quantity;

        const MAX_ITEM_ALLOWED = 9;
        const MIN_ITEM_ALLOWED = 1;

        if (type == "-" && quantity > MIN_ITEM_ALLOWED) {
            newQuantity = quantity - 1;
        }
        else if (type == "+" && quantity < MAX_ITEM_ALLOWED) {
            newQuantity = quantity + 1;
        }

        reference.child(id).update({
            quantity: newQuantity,
        })
        // let tempCart = Array.from(data);
        // tempCart[index].quantity = parseInt(newQuantity);
        // setCartDetails(tempCart);
    };
    return (
        <View>
            {
                data.map(item => <ProductRow
                    data={item}
                    key={item.id}
                    deleteItem={deleteItem}
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
                <Text style={styles.billPrice}>
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
        <View>
            <ScrollView
                keyboardDismissMode
                style={styles.scrollView}
            >
                <CartList
                    data={props.cart}
                    reference={props.reference}
                />
                <BillDetails
                    discount={props.discount}
                    setFinalPrice={props.setFinalPrice}
                    cart={props.cart}
                />
                <RequestDiscount />
            </ScrollView>
        </View>
    )
}

export default CartDetails;