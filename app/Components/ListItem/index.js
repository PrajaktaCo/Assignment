import React from 'react';
import { View, Text, Image } from 'react-native';
import { CheckButton, Divider } from '../../Components'
import styles from './style';

const ListItem = ({
    item,
    onPress,
    selectedList
}) => {
    const { key, photo, familyName } = item;
    const isCheckedItem = selectedList.includes(key);
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image source={photo} style={styles.imageStyle} />
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>{familyName}</Text>
                </View>
                <CheckButton onPress={() => onPress(key)} isChecked={isCheckedItem} />
            </View>
            <Divider style={styles.dividerStyle} />
        </View>
    )
}

export default ListItem;