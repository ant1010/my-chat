import React, {useState,useEffect} from 'react';
import {View, Text, TextInput, KeyboardAvoidingView,TouchableOpacity,Platform} from "react-native";

import styles from './styles';
import{API,Auth,graphqlOperation,} from "aws-amplify";
import {createMessage,updateChatRoom} from "../../src/graphql/mutations";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  Entypo,
  Fontisto,
} from '@expo/vector-icons';

const EventInput = () => {

  //const {chatRoomID} = props;
  const [message, setMessage] = useState('');
  const [myUserId, setMyUserId] = useState('');

    useEffect(() => {
      const fetchUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();

        setMyUserId(userInfo.attributes.sub);
      }
      fetchUser();
    },[])
  const onMicrophonePress = () => {
    console.warn('Microphone')
  }
  const onPress = () => {
   console.log(message)
  }

  
  

  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios"?"padding":"height"}
    keyboardVerticalOffset ={100}style={{width:'100%'}}>
    <View style={styles.container}>
      <View style={styles.mainContainer}>
     
        <TextInput
          placeholder={"Type a message"}
          style={styles.textInput}
          multiline
          value={message}
          onChangeText={setMessage}
        />
       
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {!message
            ? <MaterialCommunityIcons name="microphone" size={28} color="white" />
            : <MaterialIcons name="send" size={28} color="white" />}
        </View>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  )
}

export default EventInput;