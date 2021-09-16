import { Platform } from 'react-native';
import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

const styles = StyleSheet.create({
    scrollView: {
        paddingBottom: 8,
        height: Platform.OS == "ios" ? hp * 0.53 : hp * 0.55,
        backgroundColor: 'white',
        paddingHorizontal: 24,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
    },
    ic: {
        width: 18,
        height: 18,
    },
    productRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'space-between',
        paddingBottom: 20,
    },
    seperator: {
        borderBottomWidth: 2,
        marginHorizontal: 8,
        borderColor: '#dbdbdb',
    },
    cartList: {
        marginTop: 16,
    },
    productTitle: {
        width: wp * 0.3,
    },
    productName: {
        fontWeight: '500',
        fontSize: 16,
    },
    productType: {
        color: "#ababab",
        fontWeight: '600',
        paddingTop: 4,
    },
    quantity: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderWidth: 1,
        borderColor: 'red',
        // width: 60,
        borderRadius: 6,
        paddingVertical: 6,
    },
    updateBtn: {
        // backgroundColor:'blue',
        paddingHorizontal: 14,
    },
    quantityInput: {
        fontSize: 16,
        color: 'red',
        textAlign: "center",
    },
    billPrice: {
        textAlign:'right',
        fontWeight: '600',
    },
    productPrice: {
        width: wp * 0.2,
        textAlign:'right',
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    boldTitle: {
        fontWeight: '600',
        fontSize: 20,
        marginBottom: 16,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    discountInp: {
        flex: 6,
        borderStyle: 'dashed',
        borderWidth: 2,
        borderColor: '#dbdbdb',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '600',
        borderRadius: 8,
    },
    applyBtn: {
        flex: 4,
        marginLeft: 12,
        backgroundColor: '#ababab',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    apply: {
        textTransform: 'uppercase',
        fontWeight: '600',
        // fontSize: 14,
        color: '#fafafa'
    },

})

export default styles;