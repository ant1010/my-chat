import React ,{useState,useEffect} from 'react'
import {FlatList, StyleSheet,View,TextInput,Text} from 'react-native';
import {listUsers} from './queries';
import {API,graphqlOperation,Auth} from 'aws-amplify';
import SearchListItem from '../components/SearchListItem';
export default function SearchScreen() {
    const [query,setQuery] = useState("");
    const [userList,setUserList] = useState([]);
    const setQueryStt = (e) => {
       setQuery(e);
    }
    useEffect(() => {
        if(!query){return setUserList([])}
        fetchUserList();
    },[query])
    const fetchUserList = async () =>{
        try{
            const list = await API.graphql(
                graphqlOperation(
                  listUsers, {
                    filter: {name: {beginsWith: query}}
                  
                }));
                console.log(list.data.listUsers.items);
                setUserList(list.data.listUsers.items);
        }catch(e){
            console.log(e);
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.textBox}>

                <TextInput
                    data-name='content'
                    placeholder={"Search..."}
                    placeholderTextColor="#757373" 
                    style={styles.textInput}
                    multiline
                    value={query}
                    onChangeText={e => setQueryStt(e)}
                />
               
            </View>
            <View  > 
            <FlatList
                    data={userList}
                    style={{ width: '100%' }}
                    renderItem={({ item }) => <SearchListItem user = {item} />}
                    keyExtractor={item => item.id}
                    numColumns={2}
                /></View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      
      color:"white",
    },
    textBox: {
        
       
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 25,
        borderWidth:3,
        borderColor:'white',
        marginRight: 10,
        color:"white",
    },
    textInput: {
        color:"white",
        fontSize:30,
        fontWeight:"bold",
        
    }

  });