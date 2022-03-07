/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from "./pages/Registration/Registration";
import Main from "./pages/Main/Main";
import Auth from "./pages/Auth/Auth";

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen
          name="Auth"
          component={Auth}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
