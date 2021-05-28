import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        marginHorizontal: 10
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageStyle: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    textContainer: {
        flex: 1,
        paddingLeft: 5
    },
    textStyle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#F28300'
    },
    dividerStyle: {
        marginTop: 5
    }
})

export default styles;