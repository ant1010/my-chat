import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import { View } from '../components/Themed';
import EventListItem from '../components/EventListItem';
import EventInput from '../components/EventInput';
import {API,graphqlOperation} from 'aws-amplify';
import {listEventss} from '../src/graphql/queries';
import {useEffect,useState} from 'react';
import { useRoute } from '@react-navigation/native';
export default function EventsScreen() {
    const route = useRoute();
    const [events,setEvents] = useState([]);
    // const onSendPress = async () => {
    //     console.warn(`Sending: ${message}`)
    //     // send the message to the backend
    //     try{
    //      const newMessageData =  await API.graphql(graphqlOperation(createMessage,{input:{content:message,userID:myUserId,chatRoomID}}))
    //      console.log(newMessageData);
         
    //     }catch(e){
    //       console.log(e);
    //     }
    
    //     setMessage('');
    //   }
      
  return (
    <View style={styles.container}>
     <h2>Event Creation</h2>
     <EventInput/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});