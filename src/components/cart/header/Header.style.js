import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: 'row',
        padding: 24,
        paddingBottom: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
    },
    backBtn: {
        position: 'absolute',
        left: 24,
        top:24,
        backgroundColor: '#cfcfcf',
        padding: 14,
        borderRadius: 8,
    },
    arrowIc: {
        width: 12,
        height: 12,
    },
    mainTitle: {
        fontWeight: '500',
        fontSize: 20,
    },
    subTitle: {
        color: '#ababab',
        fontWeight: 'bold',
        fontSize: 14,
    },
})

export default styles;