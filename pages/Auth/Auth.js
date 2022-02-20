import React from 'react';
import type {Node} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Auth: () => Node = ({ navigation }) => {
  return (
    <View>
      <Text>Auth</Text>
      <Button
        onPress={()=>
          navigation.navigate('Main')
        }
        title="Main"
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

export default Auth;
