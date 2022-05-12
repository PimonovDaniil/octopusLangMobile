import React, {useEffect} from 'react';
import type {Node} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {styles} from "./styles";
import {SvgXml} from "react-native-svg";
import {CloseImage} from "../../../assets/images/close";
import {vh} from "react-native-expo-viewport-units";


const SoundTrain: () => Node = ({navigation, route}) => {
  const { text } = route.params
  useEffect(() => {
    (function () {

    })();
  }, []);

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Octopus</Text>
      </View>
      <View style={styles.headerFunctions}>
        <TouchableWithoutFeedback>
          <View style={styles.closeWrapper}>
            <SvgXml xml={CloseImage}/>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.progress}/>
      </View>
      <View style={{flex: 1}}>
        <View style={{flex: 0.2}}>
          <Text style={styles.TextHeader}>Произнесите на японском</Text>
        </View>
        <View style={styles.TextCard}>
          <Text>{text}</Text>
        </View>
        <View style={styles.soundButtom}>
          <View style={[styles.buttom, {width: vh(20)}]}>

          </View>
        </View>
        <View style={{flex: 0.2}}>
          <View style={styles.DownButtom}>
            <Text>Пропустить</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}/>
    </View>
  );
};

export default SoundTrain;
