/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Registration from "./pages/Registration/Registration";
import Main from "./pages/Main/Main";
import Auth from "./pages/Auth/Auth";
import ChooseLanguage from "./pages/chooseLanguage/ChooseLanguage";
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import Profile from "./pages/profile/Profile";
import Options from "./pages/kana/options/Options";
import SelectionModule from "./pages/kana/SelectionModule/SelectionModule";
import SoundTrain from "./pages/trains/soundTrain/SoundTrain";
import TrainMenu from "./pages/trains/trainMenu/TrainMenu";
import SentenceTrain from "./pages/trains/sentenceTrain/SentenceTrain";
import PhrasebookSelect from "./pages/trains/phrasebookSelect/PhrasebookSelect";

const Stack = createNativeStackNavigator();

const fonts = () => Font.loadAsync({
  'NunitoBold': require('./assets/fonts/Nunito/Nunito-Bold.ttf'),
});

const App: () => Node = () => {
  const [font, setFont] = useState(false);

  if (font) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="TrainMenu" component={TrainMenu}/>
          <Stack.Screen name="PhrasebookSelect" component={PhrasebookSelect}/>
          <Stack.Screen name="SentenceTrain" component={SentenceTrain}/>
          <Stack.Screen name="Main" component={Main}/>
          <Stack.Screen name="SoundTrain" component={SoundTrain}/>
          <Stack.Screen name="Options" component={Options}/>
          <Stack.Screen name="SelectionModule" component={SelectionModule}/>
          <Stack.Screen name="Profile" component={Profile}/>
          <Stack.Screen name="ChooseLanguage" component={ChooseLanguage}/>
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
  } else {
    return <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={(error) => console.warn(error)}
    />
  }
};


export default App;
