import React, {useEffect} from 'react';
import type {Node} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {logout, refreshToken, token} from "../../store/token";
import {useStore} from "effector-react";

const Main: () => Node = ({ navigation }) => {
  const myToken = useStore(token)
  const myRefreshToken = useStore(refreshToken)

  useEffect(() => {
    if(myToken===""){
      navigation.navigate('Auth');
    }
  });
  return (
    <View>
      <Text/>
      <Text>Main</Text>
      <Text>Token={myToken}</Text>
      <Text>Refresh token={myRefreshToken}</Text>
      <Text>Main</Text>
      <Button
        onPress={()=> {
          logout();
          navigation.navigate('Auth');
        }}
        title="logout"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default Main;
