import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
 
  textInput: {
    marginRight:20
  },
  icon: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    backgroundColor: Colors.light.tint,
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default styles;