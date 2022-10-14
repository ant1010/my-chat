import React from 'react';
import {TouchableOpacity, View} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

const NewEventButton = () => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('EventCreation');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <MaterialIcons
          name="add"
          size={32}
          color="black"
        />
      </TouchableOpacity>
    </View>
  )
}

export default NewEventButton;