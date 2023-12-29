import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import OnboardingScreen from './src/screens/OnboardingScreen';
import RoleSelectionScreen from './src/screens/RoleSelectionScreen';
import {ActivityIndicator, View} from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import SignupScreen from './src/screens/SignUpScreen';

const Stack = createStackNavigator();

const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  useEffect(() => {
    let isMounted = true; // Flag to track whether component is mounted

    const checkAppFirstLaunch = async () => {
      const appData = await AsyncStorage.getItem('isAppFirstLaunched');
      if (appData === null) {
        isMounted && setIsAppFirstLaunched(true);
        await AsyncStorage.setItem('isAppFirstLaunched', 'false');
      } else {
        isMounted && setIsAppFirstLaunched(false);
      }
    };

    checkAppFirstLaunch();

    return () => {
      isMounted = false; // Cleanup function to set isMounted false when component unmounts
    };
  }, []);

  if (isAppFirstLaunched === null) {
    // Displaying a simple ActivityIndicator while loading
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen
          name="RoleSelectionScreen"
          component={RoleSelectionScreen}
        />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
