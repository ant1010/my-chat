import * as React from 'react';
import {FlatList, StyleSheet,Text} from 'react-native';
import { View } from '../components/Themed';
import EventListItem from '../components/EventListItem';
import EventInput from '../components/EventInput';
import {API,graphqlOperation,Auth} from 'aws-amplify';
import {createEventUser,createEvent,createEventRoom} from '../src/graphql/mutations';
import {useEffect,useState} from 'react';
import { useRoute,useNavigation } from '@react-navigation/native';
import {getUser} from './queries';
export default function EventsScreen() {
    const route = useRoute();
    const navigation = useNavigation();

    const [event,setEvent] = useState(null);
    const [message,setMessage] = useState("works");
    useEffect(() => {
       
        if(event != null){  
           console.log(event);
           fetchChatRooms();
           navigation.navigate('Events');
          }
     
    },[event]);
  const fetchChatRooms = async () => {
    try {
      setMessage("gets to point A");
      //pull data-->loop thru eventRooms comparing new event invites--> 
      //if no group exists then create new group along with n eventUsers, else create event with 
      //said group.
      const userInfo = await Auth.currentAuthenticatedUser();

      const userData = await API.graphql(
        graphqlOperation(
          getUser, {
          id: userInfo.attributes.sub,
        }
        )
      )

      const rooms = userData.data.getUser.eventUser.items;
      //finds eventRoom with identicle invtites/room users
      let duplicateRoom = false;
      rooms.map((room) => {
        let users = [];
        room.eventRoom.eventUsers.items.map((item) => users.push(item.user))
        if (JSON.stringify(users) == JSON.stringify(event.invites)) { duplicateRoom = room.eventRoomID; }
      })
      if (duplicateRoom) {
        const newEvent = await API.graphql(
          graphqlOperation(
            createEvent, {
            input: {
              content: event.content, eventLocation: event.location, eventRoomID: duplicateRoom, eventTime: event.date, title: event.title, userID: userInfo.attributes.sub
            }
          }));
      } else {
        
        // const newEventRoom = await API.graphql(
        //   graphqlOperation(
        //     createEventRoom, {
        //     input: {
             
        //     }
        //   }));
        const newEventRoom = "52d5a32e-98aa-4780-b693-55d9462c2ab4";
        const newEvent = await API.graphql(
          graphqlOperation(
            createEvent, {
            input: {
              content: event.content, eventLocation: event.location, eventRoomID: newEventRoom, eventTime: event.date, title: event.title, userID: userInfo.attributes.sub
            }
          }));
          console.log("else no duplicate room")
        event.invites.map((user) => {
          const newEventUser = API.graphql(graphqlOperation(createEventUser, { input: { eventRoomID: newEventRoom, userID: user.id } }));

        })

      }
      // setEventRooms(listevents);

      console.log(userData.data);

      }catch(e){
        setMessage("does not work")
          console.log("didnt work",e);

      }
      
 }
 

  return (
    <View style={styles.container}>
    
     <EventInput postEvent = {setEvent}/>
     <Text style={styles.container}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    color:'white',
    
  },
});