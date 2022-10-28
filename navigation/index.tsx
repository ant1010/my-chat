/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome,Fontisto,MaterialIcons,Feather } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName,View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

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
import { RootStackParamList, MainTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import SignOut from './HeaderIcons/SignOut'
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
          <Octicons name = "search" size = {22} color = {'white'}/>
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
const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarShowIcon:false,
        tabBarActiveTintColor:Colors["dark"].text,
        
        tabBarStyle:{
          backgroundColor: Colors["dark"].tint,
        },
        
        tabBarIndicatorStyle:{
          backgroundColor:Colors["dark"].tabIconSelected,
          height:4,
        },
        tabBarLabelStyle:{
          fontWeight:'bold',
        }
      }}>
      <MainTab.Screen
        name="Connections"
        component={ContactsScreen}
        options={{
          
          //tabBarIcon:({color})=><Fontisto name="camera" color={color} />,
         // tabBarLabel:()=>null,
          
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={EventCreation} options={{tabBarLabelStyle:{fontWeight:"bold",fontSize:12}}}
        
      />
      <MainTab.Screen
        name="Events"
        component={EventsScreen} options={{tabBarLabelStyle:{fontWeight:'bold',fontSize:12}}}
        
      />
      <MainTab.Screen
        name="Status"
        component={ChatsScreen}options={{tabBarLabelStyle:{fontWeight:'bold',fontSize:12}}}
        
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
