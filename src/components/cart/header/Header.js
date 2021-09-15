import React from 'react';
import {View, Text, TouchableOpacity,Image} from 'react-native'
import styles from './Header.style'

const Header = ({ title, subTitle,navigation }) => {
    const goBack = () => {
        navigation.navigate("Explore");
    }
    return (
        <View style={styles.headerRow}>
            <TouchableOpacity 
            onPress = {goBack}
            activeOpacity = {0.7}
            style={styles.backBtn}>
                <Image
                    style={styles.arrowIc}
                    source={require("../../../assets/icon/left-arrow.png")}
                />
            </TouchableOpacity>
            <View>
                <Text style={styles.mainTitle}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    )
}

export default Header;