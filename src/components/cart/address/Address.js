import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import styles from './Address.style'

const Address = () => {
    return (
        <View style={styles.main}>
            <View style={styles.deliveryRow}>
                <View style ={styles.titleRow}>
                    <Image
                        style = {styles.ic}
                        source={require("../../../assets/icon/suitcase.png")}
                    />
                    <Text style={styles.title}>Delivery to Work</Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.7}
                >
                    <Text style = {styles.change}>Change</Text>
                </TouchableOpacity>
            </View>
            <Text 
            numberOfLines = {1}
            style = {styles.address}>201, Dev mall, near iskan cross roadsssss</Text>
            <TouchableOpacity
                style = {styles.paymentBtn}
            >
                <Text
                style = {styles.payment}
                >Make Payment</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Address;