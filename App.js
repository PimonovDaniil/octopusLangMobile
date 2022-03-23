/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from "./pages/Registration/Registration";
import Main from "./pages/Main/Main";
import Auth from "./pages/Auth/Auth";
import ChooseLanguage from "./pages/chooseLanguage/ChooseLanguage";
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

const Stack = createNativeStackNavigator();

const fonts = () => Font.loadAsync({
  'NunitoBold': require('./assets/fonts/Nunito/Nunito-Bold.ttf'),
});

const App: () => Node = () => {
  const [font, setFont] = useState(false);

  if(font) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="ChooseLanguage" component={ChooseLanguage}/>
          <Stack.Screen name="Main" component={Main}/>
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
  }else{
    return <AppLoading  startAsync={fonts} onFinish={()=>setFont(true)} onError={(error)=> console.warn(error)}
    />
  }
};


export default App;
