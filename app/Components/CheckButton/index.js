import React from 'react'
import { TouchableOpacity } from 'react-native';
import COLORS from '../../Themes/Colors';
import { Icon } from '../../Components';
import styles from './styles';

const CheckButton = ({
    style,
    onPress,
    isChecked
}) => {
    return (
        <TouchableOpacity
            style={[styles.containerStyle, style, { backgroundColor: isChecked ? COLORS.PRIMARY_COLOR : COLORS.DISABLE }]}
            onPress={onPress}
        >
            <Icon type={'material'} name={'check'} color={'#FFFFFF'} size={16} />
        </TouchableOpacity>
    )
}

export default CheckButton;