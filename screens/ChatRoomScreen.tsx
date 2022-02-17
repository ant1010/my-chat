import React from 'react';
import {FlatList, Text, ImageBackground ,View} from 'react-native';

import { useRoute } from '@react-navigation/native';

import chatRoomData from '../data/Chats';
import ChatMessage from "../components/ChatMesage";
import {useEffect,useState} from 'react';
import {API,Auth,graphqlOperation} from 'aws-amplify';
import InputBox from "../components/InputBox";
import {messagesByChatRoom} from '../src/graphql/queries';
import {onCreateMessage} from '../src/graphql/subscriptions';
const ChatRoomScreen = () => {
  const [messages,setMessages] = useState([]);
  const [myId, setMyId] = useState(null);
  const route = useRoute();

  // console.log(route.params)
  
    const fetchMessages = async () => {
      const messageData = await API.graphql(graphqlOperation(messagesByChatRoom,{chatRoomID:route.params.id,sortDirection:"DESC"}))
      console.log(messageData.data.messagesByChatRoom.items);
      setMessages(messageData.data.messagesByChatRoom.items);
      console.log(messages);
    }
    useEffect(() => {
                    // note mutable flag
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
          console.log(data.value.data);
          if(newMessage.chatRoomID !== route.params.id){
            return;
          }

           console.log(data)
          // setMessages([newMessage, ...messages]);
          fetchMessages();
        }})
      
      return () => subscription.unsubscribe();
    },[])
  return (
    <View style={{width: '100%', height: '100%'}} >
    
      <FlatList
        data={messages}
        renderItem={({ item }) => <ChatMessage myId = {myId} message={item} />}
        inverted
      />

      <InputBox chatRoomID = {route.params.id} />
    </View>
  );
}

export default ChatRoomScreen;