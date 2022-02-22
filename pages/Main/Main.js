import React from 'react';
import type {Node} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Main: () => Node = ({ navigation }) => {
  return (
    <View>
      <Text>Main</Text>
      <Button
        onPress={()=>
          navigation.navigate('Auth')
        }
        title="Registration"
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
