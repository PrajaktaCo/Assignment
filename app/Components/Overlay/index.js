import React from 'react'
import { View } from 'react-native';
import styles from './styles';

const Overlay = ({ children, style }) => {
    return (
        <View style={[styles.containerStyle, style]}>
            {children}
        </View>
    )
}

export default Overlay;