/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Contacts: undefined;
  ChatRoom: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Chats: undefined;
  Contacts: undefined;
  Status: undefined;
  Calls: undefined;
  Camera:undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
export type MainTabParamList = {
  Contacts: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
  Camera:undefined;
};

export type ChatsParamList = {
  ChatsScreen: undefined;
};

export type ContactsParamList = {
  ContactsScreen: undefined;
};
export type User = {
  id:String;
  name:String;
  imageUri: String;
}
export type Message = {
  id:String;
  content:String;
  createdAt:string;

}
export type ChatRoom = {
  id: String;
  users: [User];
  lastMessage: Message;
  
}