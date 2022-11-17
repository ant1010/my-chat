import React from 'react';
import {TouchableOpacity, View} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import {Octicons} from '@expo/vector-icons';

const Search = () => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Search');
  }

  return (
    <View >
      <TouchableOpacity onPress={onPress}>
      <Octicons name = "search" size = {22} color = {'white'}/>
      </TouchableOpacity>
    </View>
  )
}

export default Search;


