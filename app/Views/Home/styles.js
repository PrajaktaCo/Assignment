import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#FDF4EA',
        flex: 1
    },
    containerStyle: {
        marginTop: '10%',
    },
    dividerStyle: {
        marginVertical: 10,
    },
    txtInput: {
        height: 50,
        fontSize: 20,
        fontWeight: '600',
        marginHorizontal: 10,
        marginTop: 10,
        paddingLeft: 20,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        backgroundColor: '#FFFFFF',
        color: '#A99680',
        paddingTop: 10
    },
    txtInputOverlay: {
        marginHorizontal: 10,
        marginTop: 10,
        paddingLeft: 20,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        backgroundColor: '#FFFFFF',
        paddingTop: 10,
        opacity: 1
    },
    addTxtInput: {
        fontSize: 20,
        fontWeight: '600',
        marginHorizontal: 10,
        marginTop: 1,
        padding: 20,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        backgroundColor: '#FFFFFF',
        color: '#A99680',
        paddingTop: 10
    },
    addInputOverlay: {
        marginHorizontal: 10,
        marginTop: 1,
        padding: 20,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        backgroundColor: '#FFFFFF',
        paddingTop: 10,
        opacity: 1
    },
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 10
    },
    arrowStyle: {
        marginRight: 7
    },
    everyoneButton: {
        borderRadius: 6,
        height: 30,
        width: 90,
        alignSelf: 'center',
        backgroundColor: '#F28300'
    },
    everyoneButtonTxt: {
        fontSize: 16
    },
    saveButtonTxt: {
        fontSize: 20
    },
    saveButton: {
        position: 'absolute',
        bottom: 40,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    }
})

export default styles;
