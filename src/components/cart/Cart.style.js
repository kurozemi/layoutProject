import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    main: {
        flex: 1,
        marginTop: Platform.OS == "ios" ? 0 : 18,
    },
})

export default styles;