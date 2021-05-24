import React from 'react';
import { TouchableOpacity } from 'react-native';
import COLORS from '../../Themes/Colors';
import styles from './styles';

const Card = ({
    children,
    onPress,
    isSelected
}) => {
    return (
        <TouchableOpacity
            style={[styles.cardStyle, isSelected, { backgroundColor: isSelected ? COLORS.PRIMARY_COLOR : '#FDECD9' }]}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    )
}

export default Card;