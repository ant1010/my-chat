import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex:1,
    width: "100%",
    justifyContent: 'space-between',
    padding: 10,
    borderWidth:5,
    borderColor:"red",
  },

  midContainer: {
    flex:1,
    flexDirection: 'column',
    borderWidth:2,
    borderColor:"white",
    borderRadius:5,
    
  },
  lefContainer: {
    flexDirection: 'column',
    flex:3,
    padding:4,
    justifyContent: 'space-around',
    
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
    color:"white",
    fontSize: 20,
    fontFamily: 'Bodoni 72',
  },
  status: {
    fontSize: 16,
    color: 'grey',
  },
});

export default styles;