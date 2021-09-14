import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, SafeAreaView, FlatList, TextInput,Keyboard } from 'react-native'
import styles from './CartDetails.style'


const ProductRow = ({ product, updateQuantity }) => {
    const data = product.item;
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
                        onChangeText={qty => updateQuantity(qty, product.index)}
                        // clearTextOnFocus
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
        <FlatList
            data={data}
            renderItem={
                item =>
                    <ProductRow
                        product={item}
                        updateQuantity={updateQuantity}
                    />
            }
        />
    )
}

const BillDetails = ({ cart }) => {

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
    const totalPrice = cart.map(item => item.price * item.quantity)
        .reduce((total, price) =>
            total + parseFloat(price)
            , 0).toFixed(2);

    const restaurantCharges = "3.00";
    const deliveryFee = "1.00";

    const discountPercent = "10";
    const discount = totalPrice * (parseInt(discountPercent)) / 100;

    const toPay = (totalPrice + parseFloat(restaurantCharges) + parseFloat(deliveryFee) - parseFloat(discount)).toFixed(2);
    return (
        <View style={styles.billDetails}>
            <Text style={styles.boldTitle}>Bill Details</Text>
            {renderPrice("Item Total", totalPrice)}
            {renderPrice("Restaurant Charges", restaurantCharges)}
            {renderPrice("Delivery Fee", deliveryFee)}
            {renderPrice("Discount", discount, `${discountPercent}%`)}
            <View style={styles.seperator}></View>
            <View style={styles.rowTitle}>
                <Text style={styles.boldTitle}>To Pay</Text>
                <Text style={styles.toPayPrice}>€ {toPay}</Text>
            </View>
        </View>
    )
}
const CartDetails = ({ cart, setCartDetails }) => {

    return (
        <TouchableOpacity
        style = {{flex:1}}
        activeOpacity = {1}
        onPress = {() => Keyboard.dismiss()}
        >
            <View>
                <CartList
                    data={cart}
                    setCartDetails={setCartDetails}
                />
                <BillDetails
                    cart={cart}
                />
            </View>
        </TouchableOpacity>
    )
}

export default CartDetails;