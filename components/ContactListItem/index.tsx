import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
 
} from "react-native";
import {useEffect,useState} from 'react';
import { User } from "../../types";
import styles from "./styles";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';
import {API,graphqlOperation,Auth} from "aws-amplify";
import {createChatRoom, createChatRoomUser} from "../../src/graphql/mutations"
import { getUser } from '../../screens/queries';

export type ContactListItemProps = {
  user: User;
}

const ContactListItem = (props: ContactListItemProps) => {
  const { user } = props;
  const [foundChatRoomID,setFoundChatRoomID] = useState([]);
 
  useEffect (() =>{
    const findDuplicate = async () => {
      const userInfo = await API.graphql(graphqlOperation(getUser,{id:user.id}));
      const currUser = await Auth.currentAuthenticatedUser();
      const currUserInfo = await API.graphql(graphqlOperation(getUser,{id:currUser.attributes.sub}));
      const user1 = userInfo.data.getUser.chatRoomUser.items;
      const user2 = currUserInfo.data.getUser.chatRoomUser.items;
      console.log(user1[0].chatRoom.chatRoomUsers.items.length);
      console.log(user1);
      var result = user1.filter(function(o1){
        
        return user2.some(function(o2){
          
            return ((o1.chatRoomID === o2.chatRoomID) && (o1.chatRoom.chatRoomUsers.items.length === 2));          
        }); })
       if(result[0] != null){
         setFoundChatRoomID(result[0]);
        return result;
       }
    }
    
    findDuplicate();
  },[])
   
  
  const navigation = useNavigation();

  const onClick = async() => {
   // navigate to chat room with this user
     try{
       
       
        if(foundChatRoomID.chatRoomID != null){
          console.log(foundChatRoomID);
          navigation.navigate('ChatRoom', {
            id: foundChatRoomID.chatRoomID,
            name: foundChatRoomID.chatRoom.chatRoomUsers.items[1].user.name,
          })

          return;
        }
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