import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

const styles = StyleSheet.create({
    scrollView: {
        paddingVertical: 8,
        height: hp * 0.52,
        backgroundColor: 'white',
        paddingHorizontal: 24,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
    },
    ic: {
        width: 18,
        height:18,
    },
    productRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        justifyContent:'space-between',
        paddingBottom: 20,
    },
    seperator: {
        borderBottomWidth: 2,
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
        fontSize: 12,
        textAlign: "center",
        width: 60,
        height: Platform.OS == "ios" ? 26: 36,
    },
    productPrice: {
      fontWeight: '600',
    },
    toPayPrice: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    bill: {
        marginTop: 12,
    },
    billDetails: {
        marginBottom: 20,
    },
    rowTitle: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 16,
    },
    boldTitle: {
        fontWeight:'600',
        fontSize: 20,
        marginBottom: 16,
    },
    priceRow: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom: 8,
    },
    priceTitle: {
        color: '#ababab',
        fontWeight: '600',
        fontSize: 15,
    },
    discountCodeRow: {
        flexDirection: 'row',
        marginTop: 18,
        height: 42,
        marginBottom: 30,
    },
    discountInp :{
        flex:6,
        borderStyle: 'dashed',
        borderWidth: 2,
        borderColor: '#dbdbdb',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '600',
        borderRadius: 8,
    },
    applyBtn: {
        flex:4,
        marginLeft: 12,
        backgroundColor:'#ababab',
        borderRadius: 8,
        justifyContent:'center',
        alignItems:'center',
    }, 
    apply: {
        textTransform: 'uppercase',
        fontWeight: '600',
        // fontSize: 14,
        color:'#fafafa'
    },

})

export default styles;