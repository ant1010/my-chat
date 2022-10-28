import React, { useState, useEffect, Fragment } from 'react';
// @ts-ignore
import { View, FlatList, Image, Text, TextInput, TouchableWithoutFeedback, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet, Button } from "react-native";
import styles from './styles';
import { API, Auth, graphqlOperation, } from "aws-amplify";
import { createEvents, updateChatRoom } from "../../src/graphql/mutations";
//import { listUsers } from '../../src/graphql/queries';
import {listUsers} from '../queries';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome,
    Entypo,
    Fontisto,
    EvilIcons,
} from '@expo/vector-icons';

const EventInput = ({ postEvent }) => {
    const initialForm = {
        title: '',
        content: '',
        location: '',
        invites: [],
        date: new Date(Date.now())
    };
    //const {chatRoomID} = props;
    const [formValues, setFormValues] = useState(initialForm)
    const [nextSelectedInvite, setNextSelectedInvite] = useState('');
    const [filterFriendList, setFilterFriendList] = useState([]);
    const [users, setUsers] = useState([]);



    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setFormValues({ ...formValues, ['date']: currentDate })
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const userData = await API.graphql(graphqlOperation(listUsers));
                console.log(userData);
                setUsers(userData.data.listUsers.items);
            } catch (e) {
                console.log(e);
            }
        }
        fetchUsers();
    }, [])
    useEffect(() => {
        setFilterFriendList([]);
        if (nextSelectedInvite == "") { return; }

        let list = [];
        users.forEach((element) => {
            if (element.name.toLowerCase().includes(nextSelectedInvite.toLowerCase()))
                list.push(element);
        });
        setFilterFriendList(list);

        console.log(filterFriendList)

    }, [nextSelectedInvite])


    const updateFormValue = (event, name) => {
        //const {name} =event.target.dataset;
        setFormValues({ ...formValues, [name]: event });

    }

    //adds user to invite list
    const onClick = (name) => () => {

        setFormValues({ ...formValues, invites: [...formValues.invites, name] })
        setUsers(users.filter(item => item !== name))
        setNextSelectedInvite("");
    }

    const removeName = (name) => () => {

        setFormValues({ ...formValues, invites: formValues.invites.filter(item => item !== name) })
        setUsers(users => [...users, name])
    }
    const setEvent = () => {
        console.log(formValues);
        setFormValues(initialForm);
        postEvent(formValues);
    }
    const SearchListNameCard = ({ item }) => (
        <TouchableWithoutFeedback >
            <View style={styles.nameCardContainer}>
                <EvilIcons name="search" size={24} color="black" />
                <Image source={{ uri: item.imageUri }} style={styles.avatar} />
                <Text onPress={onClick(item)} style={styles.nameCardText} >{item.name}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
    const SelectedNameCard = ({ item }) => (
        <TouchableWithoutFeedback >
            <View style={styles.selectedUsers}>
                <View style={styles.lefContainer}>
                    <Image source={{ uri: item.imageUri }} style={styles.avatar} />
                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{item.name}</Text>
                    </View>
                    <TouchableOpacity style={{ flex: 1 }} onPress={removeName(item)}>
                        <FontAwesome name="remove" size={24} color="white" />
                    </TouchableOpacity>
                </View>

            </View>


        </TouchableWithoutFeedback>
    );
    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={100} style={{ width: '100%' }}>
            <View style={styles.container}>
                <View style={styles.mainContainer}>

                    <TextInput
                        data-name='title'
                        placeholder={"Title"}
                        style={styles.textInput}
                        value={formValues.title}
                        onChangeText={e => updateFormValue(e, 'title')}
                    />

                </View>
                <Text style={styles.textLabel}>When?</Text>
                <View style={styles.mainContainer}>
                    {/* <Text>selected: {date.toLocaleString()}</Text> */}

                    <DateTimePicker
                        testID="dateTimePicker"
                        value={formValues.date}
                        mode={'datetime'}
                        is24Hour={true}
                        onChange={onChange}
                    />
                </View>

                <View style={styles.mainContainer}>
                    <TextInput
                        data-name='location'
                        placeholder={"Where?"}
                        style={styles.textInput}
                        value={formValues.location}
                        onChangeText={e => updateFormValue(e, 'location')}
                    />

                </View>
                <View style={styles.mainContainer}>

                    <TextInput
                        data-name='content'
                        placeholder={"What?"}
                        style={styles.textInput}
                        multiline
                        value={formValues.content}
                        onChangeText={e => updateFormValue(e, 'content')}
                    />

                </View>
                <View style={styles.mainContainer}>

                    <TextInput
                        placeholder={"Who?"}
                        style={styles.textInput}
                        value={nextSelectedInvite}
                        onChangeText={setNextSelectedInvite}
                    />

                </View>

                <View style={styles.searchContainer}>

                    <FlatList
                        data={filterFriendList}
                        renderItem={({ item }) => <SearchListNameCard item={item} ></SearchListNameCard>}
                        keyExtractor={item => item.id}
                    />
                </View>
                <Button onPress={setEvent}
                    title="Post Event"
                    color="#841584"
                    accessibilityLabel="Post New Event"></Button>
                <Text style={styles.textLabel}>Invites:</Text>

                <FlatList
                    data={formValues.invites}
                    style={{ width: '100%' }}
                    renderItem={({ item }) => <SelectedNameCard item={item} ></SelectedNameCard>}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />

            </View>









        </KeyboardAvoidingView>
    )

}

export default EventInput;