import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image, FlatList, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native'
import styles from './Cart.style'

//screen components
import CartDetails from './cartDetails/CartDetails';
import Header from './header/Header';
import Address from './address/Address';
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
const Cart = ({ navigation }) => {

    const [cartDetails, setCartDetails] = useState(cartData);

    const [finalPrice, setFinalPrice] = useState(0);

    useEffect(() => {
        console.log('final Price: ', finalPrice);
    }, [finalPrice])
    return (

        <SafeAreaView style = {styles.main}>
            <View
            >
                <Header
                    title="McDonald's"
                    subTitle="Bodakdev"
                    navigation={navigation}
                />
                <CartDetails
                    cart={cartDetails}
                    discount = {10}
                    setFinalPrice = {setFinalPrice}
                    setCartDetails={setCartDetails}
                />
            </View>
            <Address />
        </SafeAreaView>
    )
}

export default Cart;