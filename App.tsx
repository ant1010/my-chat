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
  'https://images.app.goo.gl/9XW5Vqe6a2UTBmLg7',
  'https://images.app.goo.gl/fZMvdufbNTueAst59',
  'https://images.app.goo.gl/uQovGEKqND2iNmfb8',
  'https://images.app.goo.gl/gme97Fx4L1WVPDm57',
  'https://images.app.goo.gl/HjRduEZGRqmgEFxp6'
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
      id: userInfo.attributes.sub,
      name:userInfo.username,
      imageUri: getRandomImage(),
      status:"hey, iam a boss on whatsapp"
    }
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
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
export default withAuthenticator(App)