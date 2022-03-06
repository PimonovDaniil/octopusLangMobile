import React from 'react';
import type {Node} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {logout, refreshToken, token} from "../../store/token";
import {useStore} from "effector-react";

const Main: () => Node = ({ navigation }) => {
  const myToken = useStore(token)
  const myRefreshToken = useStore(refreshToken)
  return (
    <View>
      <Text>Main</Text>
      <Button
        onPress={()=> {
          logout();
          navigation.navigate('Auth');
        }}
        title="logout"
      />
      <Text>Token={myToken}</Text>
      <Text>Refresh token={myRefreshToken}</Text>
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
