import React, {useEffect} from 'react';
import type {Node} from 'react';
import {Text, View} from 'react-native';
import {styles} from "./styles";
import {vw} from 'react-native-expo-viewport-units';
import {CloseImage} from "../../../assets/images/close";
import {SvgXml} from "react-native-svg";
import {axios} from "../../../endpoints/axios";


const SelectionModule: () => Node = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Octopus</Text>
      </View>
      <View style={styles.progressHeader}>
        <View style={styles.closeWrapper}>
          <SvgXml xml={CloseImage}/>
        </View>
        <View style={styles.progress}/>
      </View>
      <View style={styles.textWrapperDiscription}>
        <Text style={styles.textDiscription}>Выберите верный вариант:</Text>
      </View>
      <View style={{flex: 1}}>
        <View style={styles.kanaWrapper}>
          <View style={[styles.kanaRight, {height: vw(50), width: vw(50)}]}>
            <Text style={styles.rightOptionsText}>か</Text>
          </View>
        </View>
        <View style={{flex: 1, margin: 10}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.options}>
              <Text style={styles.optionsText}>КА</Text>
            </View>
            <View style={styles.options}>
              <Text style={styles.optionsText}>КУ</Text>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.options}>
              <Text style={styles.optionsText}>ГЭ</Text>
            </View>
            <View style={styles.options}>
              <Text style={styles.optionsText}>А</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SelectionModule;
