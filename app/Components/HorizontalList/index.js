import React from 'react';
import { Text, ScrollView } from 'react-native';
import { Card, Icon } from '../../Components';
import COLORS from '../../Themes/Colors';
import styles from './style';

const HorizontalList = ({
    listData,
    onChange,
    value
}) => {
    const onSelectCard = (id) => onChange(`${id}`)
    
    const getItemColor = (isSelected) => isSelected ? '#FFFFFF' : COLORS.TEXT_COLOR;

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {
                listData.map((item, index) => {
                    const isSelected = index == value;
                    const { day, label, icon: { type, name } } = item;
                    return (
                        <Card
                            key={index}
                            onPress={() => onSelectCard(index)}
                            isSelected={isSelected}
                        >
                            <Icon
                                type={type}
                                name={name}
                                color={getItemColor(isSelected)}
                                size={21}
                            />
                            {
                                item?.day &&
                                <Text
                                    style={[styles.label, { color: getItemColor(isSelected) }]}
                                >
                                    {day}
                                </Text>
                            }
                            <Text
                                style={[styles.label, { color: getItemColor(isSelected) }]}
                            >
                                {label}
                            </Text>
                        </Card>
                    )
                })
            }
        </ScrollView>
    )
}

export default HorizontalList;