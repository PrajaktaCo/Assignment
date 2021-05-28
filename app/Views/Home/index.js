import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput } from 'react-native';
import {
    Container,
    Button,
    Divider,
    HorizontalList,
    Label,
    Overlay,
    FriendsList
} from '../../Components';
import { useForm, Controller } from "react-hook-form";
import emojiRegex from 'emoji-regex/RGI_Emoji.js';
import { WhereOptions, FamilyInfo } from '../../Constants/srcData';
import styles from './styles';
import { getTimeSlots } from '../../Utils';

const emoRegex = emojiRegex();

const whereValidator = (value) => {
    const emojiRegex = value.match(emoRegex);
    return value.split(' ').length <= 6 || emojiRegex?.length <= 6;
};

const addInfoValidator = (value) => value.split(' ').length <= 50;

const Home = () => {
    const { control, formState: { errors }, reset, watch } = useForm({ mode: "onChange" });
    const [isModalOpen, setModalOpen] = useState(false);
    const [timeSlots, setTimeSlots] = useState([]);
    const inputRef = useRef(null)
    const where = watch('where');
    const when = watch('when');
    const where_will_you_be = watch('where_will_you_be');
    const friends_list = watch('friends_list');
    const isFieldsDisabled = where && when;
    const isAllFieldsDisabled = where && when && where_will_you_be && friends_list.length;

    useEffect(() => {
        setTimeSlots(getTimeSlots())
    }, [])
    return (
        <View style={styles.mainContainer}>
            <Container
                style={[styles.containerStyle, { marginBottom: !isModalOpen ? 30 : 0 }]}
                scrollEnabled={true}
            >
                <Label title={'Where'} />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value, name } }) => (
                        <HorizontalList
                            listData={WhereOptions}
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            name={name} />
                    )}
                    name="where"
                    rules={{ required: true }}
                    defaultValue={null}
                />
                <Divider style={styles.dividerStyle} />
                <Label title={'When'} />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value, name } }) => (
                        <HorizontalList
                            listData={timeSlots}
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            name={name}
                        />
                    )}
                    name="when"
                    rules={{ required: true }}
                    defaultValue={null}
                />
                <Divider style={styles.dividerStyle} />
                <Label title={'What are you up to?'} />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View>
                            <TextInput
                                ref={inputRef}
                                style={styles.txtInput}
                                placeholder={"Where will you be?"}
                                placeholderTextColor={'#A99680'}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                multiline={true}
                            />
                            {
                                isFieldsDisabled ?
                                    null : <Overlay style={styles.txtInputOverlay} />
                            }
                        </View>

                    )}
                    name="where_will_you_be"
                    rules={{ required: true, validate: whereValidator }}
                    defaultValue=""
                />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View>
                            <TextInput
                                ref={inputRef}
                                style={styles.addTxtInput}
                                placeholder={"Add more info about your plans or ask for suggestions! (optional)"}
                                placeholderTextColor={'#A99680'}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                multiline={true}
                            />
                            {
                                isFieldsDisabled ?
                                    null : <Overlay style={styles.addInputOverlay} />
                            }
                        </View>

                    )}
                    name="add_more_info"
                    defaultValue=""
                    rules={{ validate: addInfoValidator }}
                />
                <Divider style={styles.dividerStyle} />
                <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <View>
                            <FriendsList
                                familyInfo={FamilyInfo}
                                isModalOpen={isModalOpen}
                                setModalOpen={setModalOpen}
                                selectedList={value}
                                onChange={onChange}
                            />
                            {
                                isFieldsDisabled ?
                                    null : <Overlay />
                            }
                        </View>
                    )}
                    name="friends_list"
                    rules={{ required: true }}
                    defaultValue={[]}
                />
            </Container>
            <Button
                title={'Save'}
                titleStyle={styles.saveButtonTxt}
                style={styles.saveButton}
                disabled={!isAllFieldsDisabled}
                onPress={() => {
                    inputRef.current.blur();
                    reset({
                        where: null,
                        when: null,
                        friends_list: []
                    }, {
                        keepErrors: true,
                        keepDirty: true,
                        keepIsSubmitted: false,
                        keepTouched: false,
                        keepIsValid: false,
                        keepSubmitCount: false,
                    });
                }}
            />

        </View>
    )
}

export default Home;