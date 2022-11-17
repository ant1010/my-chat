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
  Connections: undefined;
  ChatRoom: undefined;
  Calls:undefined;
  Events:undefined;
  EventCreation:undefined;
  Status:undefined;
  Search:undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Chats: undefined;
  Connections: undefined;
  Status: undefined;
  Events:undefined;
  EventCreation:undefined;
  Search:undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
export type MainTabParamList = {
  Connections: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
  
};

export type ChatsParamList = {
  ChatsScreen: String;
};

export type ContactsParamList = {
  ContactsScreen: undefined;
};
export type User = {
  id:String;
  name:String;
  imageUri: String;
  status:String;
}
export type Message = {
  id:String;
  content:String;
  createdAt:string;
  user: User;

}
export type ChatRoom = {
  id: String;
  users: User[];
  lastMessage: Message;
  chatRoomUsers:any;
  
}
export type Event = {
  id: String;
  content:String;
  eventTime:String;
  user:User;
  location:String;
  invites:User[];
}