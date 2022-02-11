import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import { User } from "../../types";
import styles from "./styles";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';
import {API,graphqlOperation,Auth} from "aws-amplify";
import {createChatRoom, createChatRoomUser} from "../../src/graphql/mutations"

export type ContactListItemProps = {
  user: User;
}

const ContactListItem = (props: ContactListItemProps) => {
  const { user } = props;

  const navigation = useNavigation();

  const onClick = async() => {
   // navigate to chat room with this user
     try{
        const newChatRoomData = await API.graphql(graphqlOperation(createChatRoom,{input:{}}))
        if(!newChatRoomData.data){
            console.log("Failed to create a chat room");
            return;
        }
        const newChatRoom = newChatRoomData.data.createChatRoom;
        
       const room = await API.graphql(graphqlOperation(createChatRoomUser,{input:{userID: user.id,chatRoomID:newChatRoom.id}}));
        
        const userInfo = await Auth.currentAuthenticatedUser();
        await API.graphql(graphqlOperation(createChatRoomUser,{input:{userID: userInfo.attributes.sub,chatRoomID:newChatRoom.id}}));
        
        navigation.navigate('ChatRoom', {
            id: newChatRoom.id,
            name: "Harcoded name",
          })
     }catch(e){
         console.log(e);
     }
  }

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.lefContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar}/>

          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            {/*<Text numberOfLines={2} style={styles.status}>{user.status}</Text>*/}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
};

export default ContactListItem;