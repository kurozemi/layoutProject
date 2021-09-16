import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    main: { 
        position:'absolute',
        bottom: 0,
        width: '100%',
        flex: 1,
        padding: 24,
        backgroundColor:'white',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    },
    deliveryRow: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    titleRow: {
        flexDirection:'row',
        alignItems:'center',
    },
    ic: {
        width: 20,
        height: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 6,
    },
    change: {
        textTransform:'uppercase',
        fontWeight: 'bold',
        color: '#ababab',
    },
    address: {
        marginTop: 8,
        width:'80%',
        fontWeight: '600',
        color: '#ababab'
    },
    addressInput: {
        width:'80%',
        fontWeight: '600',
    },
    paymentBtn:{
        marginTop: 16,
        width: '100%',
        backgroundColor:'red',
        paddingVertical: 10,
        borderRadius: 6,
    },
    payment: {
        textAlign:'center',
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
})

export default styles;