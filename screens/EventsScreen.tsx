import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import { View } from '../components/Themed';
import EventListItem from '../components/EventListItem';
import {listEvents} from '../src/graphql/queries';
import {useEffect,useState} from 'react';
import NewEventButton from "../components/NewEventButton";
import InputBox from "../components/InputBox";
import {getUser} from './queries';
import {
  API,
  graphqlOperation,
  Auth,

}from 'aws-amplify';
export default function EventsScreen() {
    // const [events,setEvents] = useState([]);
    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try{
    //             const userData = await API.graphql(graphqlOperation(listEvents));
    //             console.log(userData);
    //             setEvents(userData.data.listEvents.items);
    //         }catch(e){
    //             console.log(e);
    //         }
    //     }
    //    fetchUsers();
    // }, [])
    const [eventRooms,setEventRooms] = useState([]);
    const [key, setKey] = useState(false);


    const fetchChatRooms = async () => {
        try{
            const userInfo = await Auth.currentAuthenticatedUser();
            console.log(userInfo);
            const userData = await API.graphql(
                graphqlOperation(
                    getUser, {
                        id: userInfo.attributes.sub,
                    }
                )
            )
            const rooms = userData.data.getUser.eventUser.items;
            let listevents = [];
            rooms.map((event) => {listevents = listevents.concat(event.eventRoom.events.items)})
            
            setEventRooms(listevents);
            
            console.log(listevents);
        }catch(e){
            console.log(e);
        }
        
   }
   useEffect(() => {
         
    fetchChatRooms();
    
; }, [])

  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={eventRooms}
        renderItem={({ item }) => <EventListItem  event={item} />}
        keyExtractor={(item) => item.id}
      
      />
      <NewEventButton/>
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