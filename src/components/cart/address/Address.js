import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native'
import styles from './Address.style'

const Address = ({address,setAddress}) => {

  

    return (
        <View style={styles.main}>
            <View style={styles.deliveryRow}>
                <View style={styles.titleRow}>
                    <Image
                        style={styles.ic}
                        source={require("../../../assets/icon/suitcase.png")}
                    />
                    <Text style={styles.title}>Delivery to Work</Text>
                </View>
                <TouchableOpacity
                    onPress = {()=> setIsChangeAddress(!isChangeAddress)}
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
                    value = {address}
                    autoFocus
                    onChangeText = {text => setAddress(text)}
                    style={styles.addressInput}/>
                :
                <Text
                numberOfLines={1}
                style={styles.address}
                >
                    {address}
                </Text>
            }
            <TouchableOpacity
                style={styles.paymentBtn}
            >
                <Text
                    style={styles.payment}
                >Make Payment</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Address;