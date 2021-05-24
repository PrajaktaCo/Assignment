import { StyleSheet } from 'react-native';
import COLORS from '../../Themes/Colors';

const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 30,
        height: 45,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        // backgroundColor: COLORS.PRIMARY_COLOR,
    },
    buttonTitle: {
        fontWeight: '600',
        color:'#FFFFFF'
    }
})

export default styles;
