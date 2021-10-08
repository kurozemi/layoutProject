import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const DuHoc = () => {
    return (
        <ScrollView
            bounces={false}
            style={styles.scrollView}>

            <Image
                style={{ width: '100%', height: windowHeight }}
                source={require("../../assets/icon/trang1.gif")}
            />

            <Image
                style={{ width: '100%', height: 844 }}
                source={require("../../assets/icon/trang2.gif")}
            />

            <Image
                style={{ width: '100%', height: 844 }}
                source={require("../../assets/icon/trang3.gif")}
            />

            <Image
                style={{ width: '100%', height: 844 }}
                source={require("../../assets/icon/trang4.gif")}
            />


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    // scrollView: {
    //     flex: 1,
    // },
})

export default DuHoc;