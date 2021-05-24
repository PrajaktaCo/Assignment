import React, { useEffect } from 'react';
import { View } from 'react-native';
import {
    ListItem,
    Button,
    CheckButton,
    Icon,
    Label
} from '../../Components'
import styles from './style';
import COLORS from '../../Themes/Colors';

const FriendsList = ({
    familyInfo,
    onChange,
    isModalOpen,
    setModalOpen,
    selectedList
}) => {
    useEffect(() => {
        const allKeys = familyInfo.map((item) => item.key);
        onChange(allKeys);
    }, [])

    const toggleAll = () => {
        const allKeys = familyInfo.map((item) => item.key);
        if (selectedList.length) {
            onChange([]);
        }
        else {
            onChange(allKeys);
        }
    }

    const handleSelection = (id) => {
        if (selectedList.includes(id)) {
            let filteredList = selectedList.filter((item) => item !== id)
            onChange(filteredList);
        }
        else {
            onChange([...selectedList, id]);
        }
    }

    return (
        <View>
            <View style={styles.labelContainer}>
                <View style={styles.innerLabelContainer}>
                    {
                        !isModalOpen && <Icon
                            type={'material'}
                            name={'keyboard-arrow-right'}
                            color={COLORS.TEXT_COLOR}
                            size={28}
                            onPress={() => setModalOpen(!isModalOpen)}
                        />
                    }

                    <Label title={'Which friends can join'} />
                </View>
                {
                    isModalOpen && <CheckButton
                        style={styles.checkButton}
                        isChecked={selectedList.length === familyInfo.length}
                        onPress={toggleAll}
                    />
                }
            </View>
            {
                !isModalOpen ?
                    <Button
                        title={'Everyone'}
                        titleStyle={styles.everyoneButtonTxt}
                        style={styles.everyoneButton}
                    /> :
                    familyInfo.map((item) => {
                        return (
                            <ListItem
                                item={item}
                                key={item.key}
                                onPress={handleSelection}
                                selectedList={selectedList}
                            />
                        )
                    })
            }

        </View>
    )
}

export default FriendsList;