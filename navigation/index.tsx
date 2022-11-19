/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome,FontAwesome5,Ionicons,Fontisto,MaterialIcons,Feather } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName,View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { BottomNavigation, Text } from 'react-native-paper';
import {Octicons,MaterialCommunityIcons} from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ChatsScreen from '../screens/ChatsScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen'
import ContactsScreen from '../screens/ContactsScreen';
import EventsScreen from '../screens/EventsScreen';
import EventCreation from '../screens/EventCreation';
import StatusScreen from '../screens/StatusScreen';
import SearchScreen from '../screens/SearchScreen';
import { RootStackParamList, MainTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import SignOut from './HeaderIcons/SignOut';
import Search from './HeaderIcons/Search';
import ChatRooms from '../data/ChatRooms';
import { listChatRoomUsers } from '../src/graphql/queries';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DarkTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShadowVisible:false,
      headerStyle: {
        backgroundColor: 'black',
        
      },
      headerTintColor: Colors.dark.text,
      
      headerTitleStyle: {
        fontWeight: 'bold',
        
      }

    }}
    >
      <Stack.Screen name="Root" component={MainTabNavigator} options={{
        title:"MyChat",
        headerRight: () => (
          <View style = {{flexDirection: 'row', width: 60,justifyContent: 'space-between', marginRight:10}}>
          <Search/>
          <MaterialCommunityIcons name = 'dots-vertical' size = {22} color = {'white'}/>
          <SignOut/>
          </View>
        )
        
        }} />
      
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} options={({route}) =>  ({
        title:route.params.name,
        headerRight: () =>(
          <View style = {{flexDirection:'row', width: 100,justifyContent: 'space-between', marginRight:10}}>
            <MaterialIcons name="call" size={22} color={'white'}/>
            <Feather name ="video" size={22} color={'white'}/>
            <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'}/>
          </View>
        )

      })}
        
      
         />
      
      <Stack.Screen name="Connections" component={ContactsScreen} options={{ title: 'Connections' }} />
      <Stack.Screen name="Events" component={EventsScreen} options={{ title: 'Events' }} />
      <Stack.Screen name="EventCreation" component={EventCreation} options={{ title: 'Start a New Event' }} />
      <Stack.Screen name="Status" component={StatusScreen} options={{ title: 'Status' }} />
      <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Search' }} />
      
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />

      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const MainTab = createMaterialBottomTabNavigator<MainTabParamList>();

function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
        initialRouteName="Chats"
       
      >
      <MainTab.Screen
        name="Connections"
        component={ContactsScreen}
        options={{
          
          tabBarIcon:({color})=><FontAwesome5 name="user-friends" size={21} color="white" />,
         // tabBarLabel:()=>null,
          
        }}
      />
      <MainTab.Screen
        name="Chats"
        
        component={ChatsScreen} options={{ tabBarIcon:({color})=><Ionicons name="ios-chatbubbles-sharp" size={24} color="white" />,}}
        
      />
      <MainTab.Screen
        name="Events"
        component={EventsScreen} options={{ tabBarIcon:({color})=><MaterialIcons name="event" size={24} color="white" />,}}
        
      />
      <MainTab.Screen
        name="Status"
        component={StatusScreen}options={{ tabBarIcon:({color})=><MaterialCommunityIcons name="comment-quote" size={24} color="white" />,}}
        
      />
    </MainTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
