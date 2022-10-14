import React from 'react';
import {FlatList, Text, ImageBackground ,View,TouchableOpacity,Alert} from 'react-native';

import { useRoute } from '@react-navigation/native';

import chatRoomData from '../data/Chats';
import ChatMessage from "../components/ChatMesage";
import {useEffect,useState} from 'react';
import {API,Auth,graphqlOperation} from 'aws-amplify';
import InputBox from "../components/InputBox";
import {messagesByChatRoom} from '../src/graphql/queries';
import {updateChatRoom} from '../src/graphql/mutations';
import {onCreateMessage} from '../src/graphql/subscriptions';
const ChatRoomScreen = () => {
  const [messages,setMessages] = useState([]);
  const [newMessage,setNewMessage] = useState(null);
  const [myId, setMyId] = useState(null);
  const route = useRoute();

  // console.log(route.params)
  
    const fetchMessages = async () => {
      const messageData = await API.graphql(graphqlOperation(messagesByChatRoom,{chatRoomID:route.params.id,sortDirection:"DESC"}))
      console.log(route);
      console.log(messageData.data.messagesByChatRoom.items);
      //updateChatRoomLastMessage(messageData.data.messagesByChatRoom.items[0].id);
      setMessages(messageData.data.messagesByChatRoom.items);
      
      
      
    }

    useEffect(() =>{
     if(newMessage != null){
    
      Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
          {
            text: "Ask me later",
            onPress: () => console.log("Ask me later pressed")
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]);
      
    }
    },[newMessage])


    const updateChatRoomLastMessage = async (messageId:string) => {
      try{
        await  API.graphql(graphqlOperation(updateChatRoom,{input:{id:route.params.id,lastMessageID:messageId}}))
      }catch(e){
        console.log(e);
      }
  
    }
    useEffect(() => {

      fetchMessages()
   
  },[])

    useEffect(() => {
    const getMyId = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      setMyId(userInfo.attributes.sub);
    }
    getMyId();
  }, [])  
  
    useEffect(() =>{
      const subscription = API.graphql(
        graphqlOperation(onCreateMessage)).subscribe({next:(data) => {
          const newMessage = data.value.data.onCreateMessage;
        
          
          if(newMessage.chatRoomID !== route.params.id){
           
            return;
          }
           setNewMessage(newMessage);
           console.log("message recieved");
          // setMessages([newMessage, ...messages]);
         
           
         
          updateChatRoomLastMessage(newMessage.id);
         
          fetchMessages();
          
        }})
      
      return () => subscription.unsubscribe();
    },[])
   const onLongPress = () => {
     console.log("long press");
   }
    return (
    
    <View style={{width: '100%', height: '100%'}} >
    
      <FlatList
        data={messages}
        renderItem={({ item }) => 
        <TouchableOpacity 
        
        onLongPress={() => {onLongPress}}
        delayLongPress={3000}
        ><ChatMessage myId = {myId} message={item} /></TouchableOpacity>}
        inverted
      />
   
      <InputBox chatRoomID = {route.params.id} />
    </View>
     
  );
}

export default ChatRoomScreen;