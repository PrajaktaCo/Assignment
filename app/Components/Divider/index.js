import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Divider = ({ style }) => {
    return (
        <View style={[styles.dividerStyle, style]} />
    )
}

export default Divider;