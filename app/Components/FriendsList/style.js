import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
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
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 10,
    },
    innerLabelContainer: { 
        flexDirection: 'row' 
    },
    arrowStyle: {
        left: 25
    },
    checkButton: { 
        position: 'absolute', 
        right: 8 
    }
})

export default styles;