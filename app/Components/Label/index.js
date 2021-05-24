import React from 'react';
import { Text } from 'react-native';
import styles from './style';

const Label = ({
    title,
}) => {
    return (
            <Text style={styles.textStyle}>{title}</Text>
    )
}

export default Label;