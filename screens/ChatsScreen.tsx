import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import { View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';
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


export default function ChatsScreen() {
    const [chatRooms,setChatRooms] = useState([]);
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
        
            setChatRooms(userData.data.getUser.chatRoomUser.items);
            
            console.log(userData.data.getUser);
        }catch(e){
            console.log(e);
        }
        
   }

    useEffect(() => {
         
        fetchChatRooms();
        
     }, [])
     useEffect(() => {
         
      console.log(chatRooms)
      
   }, [chatRooms])
     useEffect(() =>{
        const subscription = API.graphql(
          graphqlOperation(onCreateMessage)).subscribe({next:(data) => {
            const newMessage = data.value.data.onCreateMessage;
            console.log(newMessage.id);
             console.log(data)
             updateChatRoomLastMessage(newMessage.id,newMessage.chatRoomID);
             fetchChatRooms();
          }})
          return () => subscription.unsubscribe();
        },[])
        
        const updateChatRoomLastMessage = async (messageId:string, chatRoomID:string) => {
            try{
              await  API.graphql(graphqlOperation(updateChatRoom,{input:{id:chatRoomID,lastMessageID:messageId}}))
            }catch(e){
              console.log(e);
            }
        
          }
    
  return (
    <View style={styles.container}>
    
      <FlatList
        style={{width: '100%'}}
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem key = {key}chatRoom={item.chatRoom}/>}
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