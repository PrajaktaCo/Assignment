import { StyleSheet } from 'react-native';
import COLORS from '../../Themes/Colors';

const styles = StyleSheet.create({
    cardStyle: {
        borderRadius: 20,
        height: 90,
        width: 162,
        justifyContent: 'center',
        margin: 10,
        paddingLeft: 20
    },
    cardLabel: {
        fontWeight: '600',
        fontSize: 20,
        color: COLORS.TEXT_COLOR
    }
})

export default styles;
