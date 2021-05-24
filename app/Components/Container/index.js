import React from 'react';
import { ScrollView } from 'react-native';

const Container = ({ children, style, ...props }) => {
    return (
        <ScrollView style={style} {...props}>
            {children}
        </ScrollView>
    )
}

export default Container;