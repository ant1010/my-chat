import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import { View } from '../components/Themed';
import EventListItem from '../components/EventListItem';
import {API,graphqlOperation} from 'aws-amplify';
import {listEvents} from '../src/graphql/queries';
import {useEffect,useState} from 'react';
import NewEventButton from "../components/NewEventButton";
import InputBox from "../components/InputBox";
export default function EventsScreen() {
    const [events,setEvents] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            try{
                const userData = await API.graphql(graphqlOperation(listEvents));
                console.log(userData);
                setEvents(userData.data.listEvents.items);
            }catch(e){
                console.log(e);
            }
        }
       fetchUsers();
    }, [])
  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={events}
        renderItem={({ item }) => <EventListItem event={item} />}
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