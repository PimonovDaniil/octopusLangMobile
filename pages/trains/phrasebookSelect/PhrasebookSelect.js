import React, {useEffect, useRef} from 'react';
import type {Node} from 'react';
import {Dimensions, Text, TouchableOpacityComponent, TouchableWithoutFeedback, View} from 'react-native';
import {styles} from "./styles";
import {SvgXml} from "react-native-svg";
import {CloseImage} from "../../../assets/images/close";
import {vh} from "react-native-expo-viewport-units";
import {TouchableOpacity, Image} from "react-native";
import {Audio} from 'expo-av';


const PhrasebookSelect: () => Node = ({navigation}) => {


  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Octopus</Text>
      </View>
      <View style={{flex: 1}}>
        <View style={styles.wrapTrainHeader}>
          <Text style={styles.trainHeader}>Темы</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('SentenceTrain', {"flag": true})}>
          <Image style={[styles.trainBlock, {height: vh(12), width: Dimensions.get('window').width - 20,}]}
                 source={require('../../../assets/images/phrasebookWelcome.png')}/>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}/>
    </View>
  );
};

export default PhrasebookSelect;
