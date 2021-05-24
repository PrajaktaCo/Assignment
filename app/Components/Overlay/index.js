import React from 'react'
import { View } from 'react-native';
import styles from './styles';

const Overlay = ({ children }) => {
    return (
        <View style={styles.containerStyle}>
            {children}
        </View>
    )
}

export default Overlay;