import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Animated
} from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';
import {
  API,
  graphqlOperation,
  Auth,

}from 'aws-amplify';
import {useEffect,useState} from 'react';
import {Swipeable,TouchableOpacity} from 'react-native-gesture-handler';

export type ChatListItemProps = {
  chatRoom: ChatRoom;
  
}

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  
  const [otherUser,setOtherUser] = useState(null);
  const[newMessage,setNewMessage] = useState(false);
  
  const navigation = useNavigation();
  
  const user = chatRoom.chatRoomUsers.items[1].user;

  useEffect (() =>{
    const getOtherUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      if(chatRoom.chatRoomUsers.items[0].user.id === userInfo.attributes.sub){
        setOtherUser(chatRoom.chatRoomUsers.items[1].user);
      }else{
        setOtherUser(chatRoom.chatRoomUsers.items[0].user);
      }
      
    }
  
    getOtherUser();
  },[])

  const onClick = () => {
    navigation.navigate("ChatRoom", {
      id: chatRoom.id,
      name: user.name,
    })
  }
  if(!otherUser){
    return null;
  }
  const renderRightActions = (
    progress: Animated.AnimatedInterpolation,
    dragX: Animated.AnimatedInterpolation,
  ) => {
    const opacity = dragX.interpolate({
      inputRange: [-150, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
  
    return (
      <View style={styles.swipedRow}>
        <View style={styles.swipedConfirmationContainer}>
          <Text style={styles.deleteConfirmationText}>Are you sure?</Text>
        </View>
        <Animated.View style={[styles.deleteButton, {opacity}]}>
          <TouchableOpacity>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  };

  return (
    
    
     <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.container}>
        <View style={styles.lefContainer}>
       
          <Image source={{ uri: otherUser.imageUri }} style={styles.avatar}/>

          <View style={styles.midContainer} >
            <Text style={styles.username}>{otherUser.name}</Text>
            <Text numberOfLines={2} style={styles.lastMessage}>{chatRoom.lastMessage ? `${chatRoom.lastMessage.user.name}: ${chatRoom.lastMessage.content}` : "none"}</Text>
          </View>

        </View>

        <Text style={styles.time}>
          {chatRoom.lastMessage && moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
        </Text>
      </View>
      </Swipeable>
    
  )
};

export default ChatListItem;