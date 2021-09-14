import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    productRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        justifyContent:'space-between',
        // borderBottomWidth: 2,
        // paddingBottom: 20,
        // borderColor:'#dbdbdb'
    },
    seperator: {
        borderBottomWidth: 2,
        paddingTop: 20,
        marginHorizontal: 8,
        borderColor:'#dbdbdb',
    },
    cartList: {
        marginTop:16,
    }, 
    productTitle: {
        width:116,
    },
    productName: {
        fontWeight:'500',
        fontSize: 16,
    },
    productType: {
        color: "#ababab",
        fontWeight: '600',
        paddingTop: 4,
    },
    quantity: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 6,
    },
    quantityInput: {
        color:'red',
        textAlign: "center",
        width: 60,
        height: 26,
    },
    productPrice: {
      fontWeight: '600',
    },
    toPayPrice: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    billDetails: {
        marginTop: 12,
    },
    rowTitle: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical: 12,
    },
    boldTitle: {
        fontWeight:'600',
        fontSize: 20,
    },
    priceRow: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 8,
    },
    priceTitle: {
        color: '#ababab',
        fontWeight: '600',
        fontSize: 15,
    },


})

export default styles;