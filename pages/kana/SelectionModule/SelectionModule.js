import React, {useEffect} from 'react';
import type {Node} from 'react';
import {Text, View} from 'react-native';
import {styles} from "./styles";
import {vw} from 'react-native-expo-viewport-units';
import {CloseImage} from "../../../assets/images/close";
import {SvgXml} from "react-native-svg";
import {TouchableWithoutFeedback} from "react-native";
import {useStore} from "effector-react";
import {isHannagory2, isHiragana2, isIndex2, isNigory2, kanaData2} from "../../../store/kanaData2";


const SelectionModule: () => Node = ({navigation}) => {
  const isHiragana = useStore(isHiragana2);
  const isNigory = useStore(isNigory2);
  const isHannagory = useStore(isHannagory2);
  const isIndex = useStore(isIndex2);
  const kanaData = useStore(kanaData2);

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Octopus</Text>
      </View>
      <View style={styles.progressHeader}>
        <TouchableWithoutFeedback onPress={()=>navigation.navigate('Options')}>
          <View style={styles.closeWrapper}>
            <SvgXml xml={CloseImage}/>
          </View>
        </TouchableWithoutFeedback>
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
      <View style={styles.continue}>
        <Text style={styles.continueText}>Продолжить</Text>
      </View>
      <View style={styles.footer}/>
    </View>
  );
};

export default SelectionModule;
