import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useEffect }from 'react';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {getUser} from './src/graphql/queries';
import {createUser} from './src/graphql/mutations';


// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify, { Auth ,API,graphqlOperation} from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure({
  ...awsconfig,
  Analytics: { 
    disabled: true
  }
});
const randomImages = [
  'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
  'https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png',
  'https://www.clipartmax.com/png/middle/100-1005846_waiter-free-icon-avatar-profile-circle-png.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9z7LTJsUq3rmFG9YrxvzZCKe09bkJLT2LO7mhVadfMJnHbPcvfIr8Oj24GNnmjnSRboc&usqp=CAU',
  'https://www.clipartmax.com/png/middle/144-1442871_avatar-female-person-user-woman-young-icon-avatar-sport.png'

  
]
 function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const getRandomImage = () =>{
      return randomImages[Math.floor(Math.random() * randomImages.length)];
  }
useEffect(() => {
  const fetchUser = async () => {
   const userInfo = await Auth.currentAuthenticatedUser({bypassCache:true});
  console.log(userInfo);
   if(userInfo){
    const userData = await API.graphql(graphqlOperation(getUser,{id:userInfo.attributes.sub}))
  //  const userData = await API.graphql({
  //     query: getUser,
  //     variables: {id: userInfo.attributes.sub},
  //     authMode: 'AMAZON_COGNITO_USER_POOLS'
  //   })
    console.log(userData);
    if(userData.data.getUser){
      console.log("USer already exxxiiissts");
      return;
    }
    const newUser = {
      id:userInfo.attributes.sub,
      name: userInfo.username,
      imageUri: getRandomImage(),
      status:"hey, iam on whatsapp"
    }
    console.log("new User")
    await API.graphql(graphqlOperation(createUser,{input:newUser}));
   }
  }
  fetchUser();
},[])


  
  


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={"dark"} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
export default withAuthenticator(App)