import React, {useEffect, useRef} from 'react';
import type {Node} from 'react';
import {Dimensions, Text, TouchableOpacityComponent, TouchableWithoutFeedback, View} from 'react-native';
import {styles} from "./styles";
import {SvgXml} from "react-native-svg";
import {CloseImage} from "../../../assets/images/close";
import {vh} from "react-native-expo-viewport-units";
import {TouchableOpacity, Image} from "react-native";
import {Audio} from 'expo-av';


const SentenceTrain: () => Node = ({navigation}) => {


  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Octopus</Text>
      </View>
      <View style={{flex: 1}}>

      </View>
      <View style={styles.footer}/>
    </View>
  );
};

export default SentenceTrain;
