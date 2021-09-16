import React from 'react';
import { View, Text, SafeAreaView,Image,TouchableOpacity } from 'react-native'
import styles from './EmptyCart.style'

const EmptyCart = (props) => {
    return (
        <View style={styles.main}>
            <Image
                source={require("../../../assets/img/empty-cart.png")}
            />
            <TouchableOpacity
                onPress = {() => props.navigation.navigate("Explore")}
                activeOpacity= {0.4}
                style={styles.continueBtn}
            >
                <Text style={styles.continue}>Continue Shopping</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EmptyCart;