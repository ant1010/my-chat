import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
   
    borderColor:"white",
    alignItems: 'center',
    justifyContent:'center',
    borderRadius:5,
    flexDirection: 'column',
    width:'100%',
    height:'100%'
  },
  mainContainer: {

    width:'90%',
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 25,
    margin:5,
    marginBottom:0
    
  },
  textInput: {
   padding:5
  },
  icon: {
    marginHorizontal: 5,
  },
  searchContainer:{
    width:'90%',
    backgroundColor:'white',
    borderRadius:2
  },
  nameCardContainer:{
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    color:'black',
    width:'100%',
    borderColor:'black',
    borderRadius:2,
    height:45,
    padding:3,
    backgroundColor:'white'

  },
  avatar: {
    
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 15,
    backgroundColor:'black'
  },
  selectedUsersContainer:{
      flex: 1,
      
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    
     
    },
  selectedUsers: {
    flex: 1,
    flexDirection: 'column',
    width: "80%",

    justifyContent: 'space-between',
    padding: 8,
    margin: 5,
    backgroundColor: 'black',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'white',
  },
  nameCardText:{
    color:'grey',
    paddingLeft:12,
    paddingRight:20,
    fontWeight: '700',
  },
  buttonContainer: {
    backgroundColor: Colors.light.tint,
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lefContainer: {
    
    flexDirection: 'row',
  },
  midContainer: {
    
    justifyContent: 'space-around',
    
  },
  username: {
   
    fontWeight: 'bold',
    fontSize: 16,
    color:'#F5F5F5',
    paddingRight:15,
  },
  textLabel: {
    color:"white",
  },
  status: {
    fontSize: 16,
    color: 'grey',
  },
})

export default styles;