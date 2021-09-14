import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    main: {
        flex: 1,
        marginHorizontal: 24,
    },
    headerRow: {
        flexDirection: 'row',
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backBtn: {
        position: 'absolute',
        left: 0,
        backgroundColor: '#cfcfcf',
        padding: 18,
        borderRadius: 8,
    },
    arrowIc: {
        width: 14,
        height: 14,
    },
    mainTitle: {
        fontWeight: '500',
        fontSize: 20,
    },
    subTitle: {
        color: '#ababab',
        fontWeight: 'bold',
        fontSize: 16,
    },
})

export default styles;