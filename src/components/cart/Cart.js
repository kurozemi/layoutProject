import React, { useState,useEffect } from 'react';
import { View, Text, SafeAreaView, Image, FlatList, TextInput } from 'react-native'
import styles from './Cart.style'

//screen components
import CartDetails from './cartDetails/CartDetails';
// € 
const cartData = [
    {
        "name": "Creamy nachos",
        "type": "Regular",
        "quantity": "1",
        "price": "15.20",
    },
    {
        "name": "Maharaja mac",
        "type": "Regular",
        "quantity": "1",
        "price": "11.10",
    },

]
const Header = ({ title, subTitle }) => {
    return (
        <View style={styles.headerRow}>
            <View style={styles.backBtn}>
                <Image
                    style={styles.arrowIc}
                    source={require("../../assets/icon/left-arrow.png")}
                />
            </View>
            <View>
                <Text style={styles.mainTitle}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    )
}


const Cart = () => {

    const [cartDetails, setCartDetails] = useState(cartData);

    // useEffect(() => {
    //     console.log('cart Details: ', cartDetails);
    // }, [cartDetails])
    return (
        <SafeAreaView style={styles.main}>
            <Header
                title="McDonald's"
                subTitle="Bodakdev"
            />
            <CartDetails
            cart = {cartDetails}
            setCartDetails = {setCartDetails}
            />
        </SafeAreaView>
    )
}

export default Cart;