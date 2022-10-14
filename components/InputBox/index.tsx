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

const InputBox = (props) => {

  const {chatRoomID} = props;
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


  const onSendPress = async () => {
    console.warn(`Sending: ${message}`)
    // send the message to the backend
    try{
     const newMessageData =  await API.graphql(graphqlOperation(createMessage,{input:{content:message,userID:myUserId,chatRoomID}}))
     console.log(newMessageData);
     
    }catch(e){
      console.log(e);
    }

    setMessage('');
  }
  
  const onPress = () => {
    if (!message) {
      onMicrophonePress();
    } else {
      onSendPress();
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios"?"padding":"height"}
    keyboardVerticalOffset ={100}style={{width:'100%'}}>
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="grey" />
        <TextInput
          placeholder={"Type a message"}
          style={styles.textInput}
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
        {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icon} />}
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

export default InputBox;