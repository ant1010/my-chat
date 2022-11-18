import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import {useEffect,useState} from 'react';
import { User } from "../../types";
import styles from "./styles";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';
import {API,graphqlOperation,Auth} from "aws-amplify";
import {createFriendPair,deleteFriendPair} from "../../src/graphql/mutations"
import { getUser } from '../../screens/queries';
import {
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome,
    Entypo,
    Fontisto,
    EvilIcons,
} from '@expo/vector-icons';

export type SearchListItemProps = {
  user: User;
}

const SearchListItem = (props: SearchListItemProps) => {
  const { user } = props;
  const [foundContact,setFoundContact] = useState(null);
  const [checkMark,setCheckMark] = useState(false);
  const [currUser,setCurrUser] = useState();
  useEffect (() =>{
    const searchContactList = async () => {
     try{
      const currUser = await Auth.currentAuthenticatedUser();
      const currentUser = await API.graphql(graphqlOperation(getUser,{id: currUser.attributes.sub}));
      setCurrUser(currUser);
      console.log(currentUser.data.getUser.contacts.items);
      const found = currentUser.data.getUser.contacts.items.filter(item => item.secondUserID == user.id)
      setFoundContact(found);
      if(found.length >= 1){return setCheckMark(true)}
     }catch(e){
        console.log(e);
     }
    }
    
    searchContactList();
  },[])
   
  
  const navigation = useNavigation();
  const addToContacts = async() =>{
      console.log("add",user.name)
      try{
     if(checkMark){
         //remove contact
         const deletedFriendPair = await API.graphql(graphqlOperation(deleteFriendPair,{input:{id: foundContact[0].id}}));
         console.log("remove contact from list",foundContact[0].id);
     }else{
         //add contact
        const newFriendPair = await API.graphql(graphqlOperation(createFriendPair,{input: {firstUserID: currUser.attributes.sub, secondUserID: user.id}}));
        console.log("added to contacts",newFriendPair);


     }
      setCheckMark(!checkMark);
    }catch(e){
        console.log(e);
    }
  }


  return (
    <TouchableWithoutFeedback >
      <View style={styles.container}>
        <View style={styles.lefContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar}/>
         
          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            {/*<Text numberOfLines={2} style={styles.status}>{user.status}</Text>*/}
          </View>
         </View>
         
              <View  style={{ justifyContent: 'space-around',width:"20%",alignItems: 'stretch' }}>
              <TouchableOpacity onPress = {addToContacts} >
              {checkMark?<MaterialCommunityIcons name="account-check-outline" size={24} color="grey" />:<MaterialIcons name="person-add-alt-1" size={24} color="grey" />}
                   </TouchableOpacity>
              </View>
           
        
      </View>
    </TouchableWithoutFeedback>
  )
};

export default SearchListItem;