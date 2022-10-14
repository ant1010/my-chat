import React from 'react'
import  {Alert,View, ViewBase,Button} from 'react-native'
import {Octicons} from '@expo/vector-icons';
// @ts-ignore
import Auth from '@aws-amplify/auth'
export default function SignOut() {
    function onSignOut(){
        console.log("sign out");

        return
    }
    const signOutAlert = async() => {
        console.log("hello")
       await Alert.alert(
          'Sign Out',
          'Are you sure you want to sign out from the app?',
          [
            {text: 'Cancel', onPress: () => console.log('Canceled'), style: 'cancel'},
            {text: 'OK', onPress: () => signOut()},
          ],
          { cancelable: false }
        )
      }
   const signOut = async () => {
    await Auth.signOut()
    .then(() => {
      console.log('Sign out complete')
     
    })
    .catch(err => console.log('Error while signing out!', err))
  }
    return (
        <View  >
            
            <Octicons onPress ={ signOutAlert} name = "sign-out" size = {22} color = {'white'}/>
        </View>
    )
}
