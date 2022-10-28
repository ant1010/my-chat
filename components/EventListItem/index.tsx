import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
 
} from "react-native";
import {useEffect,useState} from 'react';
import { Event } from "../../types";
import styles from "./styles";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';
import {API,graphqlOperation,Auth} from "aws-amplify";
import {createChatRoom, createChatRoomUser} from "../../src/graphql/mutations"
import { getUser } from '../../screens/queries';

export type EventListItemProps = {
  event: Event;
}

const EventListItem = (props: EventListItemProps) => {
  const { event } = props;
  
 
  
   console.log(event);
  
  const navigation = useNavigation();

  const onClick = async() => {
   // navigate to chat room with this user
    
  }

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
       
        <View style={styles.lefContainer}>
          <Text style={styles.username}>{event.eventTime}</Text>
           <Text style={styles.username}>{event.eventLocation}</Text>
        </View>
          <View style={styles.midContainer}>
            <Text style={styles.status}>{event.title}</Text>
            <Text style={styles.status}>{event.content}</Text>
            
          
          </View>
        </View>
      
    </TouchableWithoutFeedback>
  )
};

export default EventListItem;