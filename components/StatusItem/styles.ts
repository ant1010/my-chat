import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex:1,
    width: "100%",
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor:'black',
    borderRadius:4,
    borderWidth:2,
    borderColor:'white',
    
    
  },
  lefContainer: {
    flexDirection: 'row',
  },
  midContainer: {
    justifyContent: 'space-around',
    
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 15,
    backgroundColor:'black'
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    color:'#F5F5F5',
  },
  status: {
    fontSize: 16,
    color: 'grey',
  },
});

export default styles;