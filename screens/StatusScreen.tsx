import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import { View } from '../components/Themed';
import StatusItem from '../components/StatusItem';
import {useEffect,useState} from "react";
import NewMessageButton from "../components/NewMessageButton";
import {onCreateMessage} from '../src/graphql/subscriptions';
import {updateChatRoom} from '../src/graphql/mutations';
import {
    API,
    graphqlOperation,
    Auth,

}from 'aws-amplify';
import {getUser} from './queries';


export default function StatusScreen() {
    const [status, setStatus] = useState([]);
    const [key, setKey] = useState(false);


    const fetchChatRooms = async () => {
        try{
            const userInfo = await Auth.currentAuthenticatedUser();
            
            const userData = await API.graphql(
                graphqlOperation(
                    getUser, {
                        id: userInfo.attributes.sub,
                    }
                )
            )
              
           setStatus(userData.data.getUser.contacts.items);
            
            console.log(userData.data.getUser.contacts.items);
        }catch(e){
            console.log(e);
        }
        
   }

    useEffect(() => {
         
        fetchChatRooms();
        
     }, [])
    
    //  useEffect(() =>{
    //     const subscription = API.graphql(
    //       graphqlOperation(onCreateMessage)).subscribe({next:(data) => {
    //         const newMessage = data.value.data.onCreateMessage;
    //         console.log(newMessage.id);
    //          console.log(data)
    //          updateChatRoomLastMessage(newMessage.id,newMessage.chatRoomID);
    //          fetchChatRooms();
    //       }})
    //       return () => subscription.unsubscribe();
    //     },[])
        
    //     const updateChatRoomLastMessage = async (messageId:string, chatRoomID:string) => {
    //         try{
    //           await  API.graphql(graphqlOperation(updateChatRoom,{input:{id:chatRoomID,lastMessageID:messageId}}))
    //         }catch(e){
    //           console.log(e);
    //         }
        
    //       }
    
  return (
    <View style={styles.container}>
    
      <FlatList
        style={{width: '100%'}}
        data={status}
        renderItem={({ item }) => <StatusItem key = {key}user={item.userTwo}/>}
        keyExtractor={(item) => item.id}
        extraData = {key}
      />
      <NewMessageButton />
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