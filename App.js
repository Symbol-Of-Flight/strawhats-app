import 'react-native-url-polyfill/auto'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState,useCallback, useRef } from 'react';
import TabStack from './src/TabStack';
import {
  useFonts,
  Kanit_100Thin,
  Kanit_100Thin_Italic,
  Kanit_200ExtraLight,
  Kanit_200ExtraLight_Italic,
  Kanit_300Light,
  Kanit_300Light_Italic,
  Kanit_400Regular,
  Kanit_400Regular_Italic,
  Kanit_500Medium,
  Kanit_500Medium_Italic,
  Kanit_600SemiBold,
  Kanit_600SemiBold_Italic,
  Kanit_700Bold,
  Kanit_700Bold_Italic,
  Kanit_800ExtraBold,
  Kanit_800ExtraBold_Italic,
  Kanit_900Black,
  Kanit_900Black_Italic,
} from '@expo-google-fonts/kanit';
import LoginScreen from './src/screens/LoginScreen';


const Stack = createNativeStackNavigator();



export default function App() {
  const [user, setUser] = useState();

  let [fontsLoaded] = useFonts({
    Kanit_100Thin,
    Kanit_100Thin_Italic,
    Kanit_200ExtraLight,
    Kanit_200ExtraLight_Italic,
    Kanit_300Light,
    Kanit_300Light_Italic,
    Kanit_400Regular,
    Kanit_400Regular_Italic,
    Kanit_500Medium,
    Kanit_500Medium_Italic,
    Kanit_600SemiBold,
    Kanit_600SemiBold_Italic,
    Kanit_700Bold,
    Kanit_700Bold_Italic,
    Kanit_800ExtraBold,
    Kanit_800ExtraBold_Italic,
    Kanit_900Black,
    Kanit_900Black_Italic,
  });

  if(fontsLoaded){
    return (
      
        <NavigationContainer >
          {user ? 
            <Stack.Navigator initialRouteName="Login" screenOptions={({ route }) => ({headerShown:false,})}>
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
          :
            <TabStack/>
          }
        </NavigationContainer>
      
    )
  };
}