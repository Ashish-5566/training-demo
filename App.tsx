/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RouteNames from './SRC/Navigation/Routes';
import Login from './SRC/Views/Login/login';
import SignUp from './SRC/Views/Login/signup';
import Dashboard from './SRC/Views/Dashboard/dashboard';
import Onboarding from './SRC/Views/onboarding';

const Stack = createNativeStackNavigator();


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: 'white',
  };

  return (
    <NavigationContainer>
    {/* Rest of your app code */}
    <Stack.Navigator initialRouteName={RouteNames.onboarding}>
        <Stack.Screen name={RouteNames.onboarding} component={Onboarding} options={{title: 'Welcome'}}  />
        <Stack.Screen name={RouteNames.login} component={Login} options={{title: 'Welcome'}}  />
        <Stack.Screen name={RouteNames.signup} component={SignUp} />
        <Stack.Screen name={RouteNames.dashboard} component={Dashboard} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
