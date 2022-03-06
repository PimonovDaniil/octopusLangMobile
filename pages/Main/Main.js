import React from 'react';
import type {Node} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {logout} from "../../store/token";

const Main: () => Node = ({ navigation }) => {
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
