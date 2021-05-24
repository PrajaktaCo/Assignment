import React, { useState, useEffect } from 'react';
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
    const emojiRegex = value.match(emoRegex)
    return value.split(' ').length <= 6 || emojiRegex.length <= 6;
};

const addInfoValidator = (value) => value.split(' ').length <= 50;

const Home = () => {
    const { control, formState, errors, reset, watch } = useForm({ mode: "onChange" });
    const [isModalOpen, setModalOpen] = useState(false);
    const [timeSlots, setTimeSlots] = useState([]);
    const where = watch('where');
    const when = watch('when');
    const isFieldsDisabled = where && when;

    useEffect(() => {
        setTimeSlots(getTimeSlots())
    }, [])
    return (
        <View style={styles.mainContainer}>
            <Container
                style={[styles.containerStyle, { marginBottom: !isModalOpen ? 30 : 0 }]}
                scrollEnabled={isFieldsDisabled}
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
                        <TextInput
                            style={styles.txtInput}
                            placeholder={isFieldsDisabled && "Where will you be?"}
                            placeholderTextColor={'#A99680'}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="where_will_you_be"
                    rules={{ required: true, validate: whereValidator }}
                    defaultValue=""
                />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.addTxtInput}
                            placeholder={isFieldsDisabled && "Add more info about your plans or ask for suggestions! (optional)"}
                            placeholderTextColor={'#A99680'}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="add_more_info"
                    defaultValue=""
                    rules={{ required: true, validate: addInfoValidator }}
                />
                <Divider style={styles.dividerStyle} />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value, name } }) => (
                        <FriendsList
                            familyInfo={FamilyInfo}
                            isModalOpen={isModalOpen}
                            setModalOpen={setModalOpen}
                            selectedList={value}
                            onChange={onChange}
                        />
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
                disabled={!formState.isValid}
                onPress={() => {
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
            {
                isFieldsDisabled ?
                    null : <Overlay />
            }

        </View>
    )
}

export default Home;