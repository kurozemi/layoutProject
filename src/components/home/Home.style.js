import React from "react";
import { Platform, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: Platform.OS == "ios" ? '0%' : '3%',
        marginBottom: 20,
    },
    headerContainer: {

        height: 50,
        flexDirection: 'row',
        marginTop: 24,
        marginHorizontal: 24
    },
    ic: {
        width:24,
        height:24,
    },
    cartIc: {
        width: 32,
        height:32,
    },
    popularCartBtn: {
        position:'absolute',
        right: 0,
        top: '40%'
    },
    nearbyCartBtn: {
        position:'absolute',
        right: 0,
    },
    locationIcContainer: { 
        width: 50, 
        height: 50, 
        backgroundColor: 'white' ,
        borderRadius: 12,
        justifyContent:'center',
        alignItems: 'center',
    },
    searchBar: {
        flex: 1,
        height: 50, 
        marginLeft: 10,
        flexDirection: 'row',
        borderRadius: 12,
        paddingHorizontal: 16,
        backgroundColor: 'white',
    },
    searchInput: {
        width:'90%',
        fontSize: 16,
    },
    searchIc: {
        justifyContent:'center',
        alignItems:'center',
    }, 
    categoriesRow: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        
    },
    filterContainer: {
        flexDirection: 'row',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    subTitle: {
        color: 'grey',
        fontWeight: '500',
        paddingLeft: 5,
    },
    flatListTop: {
        alignItems:'center',
        justifyContent:'center',
        paddingBottom: 12,
    },
    topItem: {
        marginRight: 18,
        alignItems:'center'
    },
    foodTitle: {
        fontSize: 16,
        fontWeight: '600',
    },
    topCategoriesImg:{
        height: 80,
        width: 100,
        borderRadius: 8,
        marginBottom: 6,
    },
    seperator: {
        marginTop: 8,
        height: 1,
        width: '100%',
        backgroundColor:'#cfcfcf',
    },
    smallSeperator: {
        height: 1.5,
        width: '40%',
        // marginVertical: 8,
        backgroundColor:'#dbdbdb',
    },
    popularItemList: {
        paddingBottom: 12,
    },
    popularItemCard: {
        flexDirection:'row',
        backgroundColor:'white',
        // width: 240,
        borderRadius: 8,
        marginRight: 24,
        padding: 12,
    },
    popularPrice: {
        flexDirection: 'row',
        alignItems:'center',
    },
    popularItemImg: {
        height: 110,
        width: 100,
        borderRadius: 8,
    },
    popularItemData: {
        paddingHorizontal:12,
        flex:1,
        justifyContent: 'space-between'
    },
    popularItemTitle: {
        fontWeight:'600',
        fontSize: 20,
    },
    popularItemRestaurant: {
        fontWeight:'bold',
        color:'#cfcfcf',
    },
    price: {
        fontWeight:'bold',
        color:'#b3b3b3',
        fontSize: 17,
    },
    discount: {
        fontWeight:'bold',
        color:'black',
        paddingLeft: 8,
        fontSize: 20,
    },
    nearbyCard: {
        marginRight: 24,
        borderRadius: 8,
        padding:10,
        backgroundColor:'white'
    },
    nearbyImg: {
        height: 100,
        width: 210,
        borderRadius: 8,
        marginBottom: 6,
    },
    nearbyDealsTitle: {
        fontWeight: '600',
        fontSize: 20,
    },
    nearbyDealsSubTitle: {
        fontWeight: '600',
        color:'#cfcfcf',
        fontSize: 16,
        marginBottom: 10,
    },
    discountContainer: {
        position: 'absolute',
        backgroundColor:'red',
        right: 5,
        top:5,
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 3,
    },
    discountPercent: {
        color:'white',
    },
    fab: {
        position:'absolute',
        bottom:50,
        width:150,
        height: 150,
        zIndex: 100,
        right: 0,
    },
})

export default styles;