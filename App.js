import { StatusBar } from 'expo-status-bar';
import { Auth, Dashboard, ForgotPassword, OtpVerification, Reset } from './screens';
import { RNSVGSvgViewAndroid } from 'react-native-svg';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {

  const Stack = createNativeStackNavigator();

  // Keep the splash screen visible while we fetch resources
  SplashScreen.preventAutoHideAsync();
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontLoaded] = useFonts({
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  })

  useEffect(() => {
    async function prepare() {
      try {
        // API calls 

      } catch (e) {
        console.warn(e);
      } finally {
        if (fontLoaded) {
          setAppIsReady(true)
        }
      }
    }

    prepare();
  }, [fontLoaded]);

  if (!appIsReady) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Auth'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ResetPassword" component={Reset} />
          <Stack.Screen name="OtpVerification" component={OtpVerification} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
