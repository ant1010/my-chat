import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex:1,
    width: "100%",
    height:"80%",
    justifyContent: 'space-between',
    
  },

  lefContainer: {
    height:"100%",
    flex:1,
    flexDirection: 'column',
    padding:5,
    margin:8,
    justifyContent: 'space-around',
    fontWeight:"bold",
    borderColor:"white",
    borderRadius:5,
    backgroundColor:'rgba(52, 52, 52, 0.8)'
    
  },
  midContainer: {
    flexDirection: 'column',
    flex:3,
    padding:5,
    borderWidth:2,
    borderColor:"white",
    borderRadius:5,
    margin:8,
    width:'90%',
    height:"100%"
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    
    color: 'white',
  },
  status: {
    color:"white",
    fontSize: 20,
    fontFamily: 'Bodoni 72',
  },
});

export default styles;