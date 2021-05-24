import { StyleSheet } from 'react-native';
import COLORS from '../../Themes/Colors';

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: COLORS.PRIMARY_COLOR,
        height: 20,
        width: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checked: {
        backgroundColor: COLORS.PRIMARY_COLOR
    },
    unChecked: {
        backgroundColor: COLORS.DISABLE,
        opacity: 0.3
    }
})

export default styles;