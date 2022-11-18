import * as React from 'react';
import {RefreshControl, SafeAreaView,Text, ScrollView, FlatList, StyleSheet} from 'react-native';
import { View } from '../components/Themed';
import ContactListItem from '../components/ContactListItem';
import {API,graphqlOperation,Auth} from 'aws-amplify';
import {listUsers} from '../src/graphql/queries';
import {getUser} from './queries';
import {useEffect,useState} from 'react';
import {onDeleteFriendPair} from '../src/graphql/subscriptions';
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function ContactsScreen() {
    const [users,setUsers] = useState([]);
    const [owner,setOwner] = useState();
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);
  
    useEffect(() => {
       let isMounted = true; 
        const fetchUsers = async () => {
            try{
              const userInfo = await Auth.currentAuthenticatedUser();
              
              const userData = await API.graphql(
                  graphqlOperation(
                      getUser, {
                          id: userInfo.attributes.sub,
                      }
                  )
              )
              setOwner(userInfo.attributes.sub);
             
            if(isMounted){  setUsers(userData.data.getUser.contacts.items);}
            }catch(e){
                console.log(e);
            }
        }
       fetchUsers();
       return () => { isMounted = false }; 
    }, [refreshing])
    useEffect(() =>{
      const subscription = API.graphql(
        graphqlOperation(onDeleteFriendPair,{owner:"tony111"})).subscribe({next:(data) => {
          //const friendPair = data.value.data.onCreateMessage;
        console.log(data);
          
         
           
          
        }})
      
      return () => subscription.unsubscribe();
    },[])
  return (
    //<View style={styles.container}>
    <SafeAreaView style={styles.container2}>
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
   <Text>Pull down to see RefreshControl indicator</Text>
      <FlatList
        style={{width: '100%'}}
        data={users}
        renderItem={({ item }) => <ContactListItem user={item.userTwo} />}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    
    </ScrollView>
    </SafeAreaView >
   // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
  },
  
});