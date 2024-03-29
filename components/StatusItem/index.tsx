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
  const [like,setLike] = useState([]);
 
 
  
  

  const onClick = async() => {
   // navigate to chat room with this user
     try{
       console.log("status click");
       console.log(user);
        
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
            <Text style={styles.status}>{user.status}</Text>
            {/* <Text  style={styles.status}>{user.updatedAt}</Text> */}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
};

export default ContactListItem;