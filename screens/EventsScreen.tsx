import * as React from 'react';
import {RefreshControl, SafeAreaView,Text, ScrollView,FlatList, StyleSheet} from 'react-native';
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

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

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
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);
  
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
    
; }, [refreshing])

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView
      contentContainerStyle={styles.scrollview}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <FlatList
        style={{width: '100%'}}
        data={eventRooms}
        renderItem={({ item }) => <EventListItem  event={item} />}
        keyExtractor={(item) => item.eventTime}
      
      />
      <NewEventButton/>
      </ScrollView>
    </SafeAreaView >

  );
}

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container:{
    flex:1,
  }
});