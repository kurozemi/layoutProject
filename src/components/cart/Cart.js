import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image, Touchable, TouchableOpacity } from 'react-native'
import styles from './Cart.style'

import database from '@react-native-firebase/database';

//screen components
import CartDetails from './cartDetails/CartDetails';
import Header from './header/Header';
import Address from './address/Address';
import EmptyCart from './emptyCart/EmptyCart';

const reference = database().ref("/Cart");

const Cart = ({ navigation }) => {

    var cart = [];
    useEffect(() => {
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
                setCartDetails(cart);
            })
        return () => reference.off('value', onValueChange);
    }, [])



    const [cartDetails, setCartDetails] = useState([]);

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
                            reference={reference}
                        />
                        <Address />
                    </View>

            }

        </SafeAreaView>
    )
}

export default Cart;