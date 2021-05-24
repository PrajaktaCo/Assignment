import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import COLORS from '../../Themes/Colors';

const Button = ({
    style,
    onPress,
    title,
    titleStyle,
    disabled
}) => {
    return (
        <TouchableOpacity
            style={[styles.buttonStyle, style, { backgroundColor: disabled ? COLORS.DISABLE : COLORS.PRIMARY_COLOR }]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={[styles.buttonTitle, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;