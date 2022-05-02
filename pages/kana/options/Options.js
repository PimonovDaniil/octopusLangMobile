import React, {useEffect} from 'react';
import type {Node} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {styles} from "./styles";
import {TouchableWithoutFeedback} from "react-native";
import {TouchableOpacity} from "react-native";
import SwipeRender from "react-native-swipe-render";
import {vw} from 'react-native-expo-viewport-units';
import {DoneImage} from "../../../assets/images/done";
import {SvgXml} from "react-native-svg";
import * as SecureStore from 'expo-secure-store';
import {useStore} from "effector-react";
import {
  isHannagory2,
  isHiragana2, isIndex2,
  isNigory2,
  kanaData2, setIsHannagory2,
  setIsHiragana2, setIsIndex2,
  setIsNigory2,
  setKanaData2
} from "../../../store/kanaData2";



const Options: () => Node = ({navigation}) => {
  const isHiragana = useStore(isHiragana2);
  const isNigory = useStore(isNigory2);
  const isHannagory = useStore(isHannagory2);
  const isIndex = useStore(isIndex2);
  const kanaData = useStore(kanaData2);

  async function save(key, value) {
    await SecureStore.setItemAsync(key, JSON.stringify(value));
  }

  async function getValueFor(key) {
    let result = JSON.parse(await SecureStore.getItemAsync(key));
    if (result) {
      alert("🔐 Here's your value 🔐 \n" + result);
    } else {
      alert('No values stored under that key.');
    }
  }

  const learnHandler = () => {
    navigation.navigate('SelectionModule');
  }


  useEffect( () => {
    (async function() {
      let hiragana = JSON.parse(await SecureStore.getItemAsync("hiragana"));
      let katakana = JSON.parse(await SecureStore.getItemAsync("katakana"));
      let hiraganaNigori = JSON.parse(await SecureStore.getItemAsync("hiraganaNigori"));
      let katakanaNigori = JSON.parse(await SecureStore.getItemAsync("katakanaNigori"));
      let hiraganaHannogiri = JSON.parse(await SecureStore.getItemAsync("hiraganaHannogiri"));
      let katakanaHannogiri = JSON.parse(await SecureStore.getItemAsync("katakanaHannogiri"));
      if (hiragana && katakana && hiraganaNigori && katakanaNigori &&
        hiraganaHannogiri && katakanaHannogiri) {
        setKanaData2({
          hiragana: hiragana,
          katakana: katakana,
          hiraganaNigori: hiraganaNigori,
          katakanaNigori: katakanaNigori,
          hiraganaHannogiri: hiraganaHannogiri,
          katakanaHannogiri: katakanaHannogiri,
        });
      } else {
        await SecureStore.setItemAsync("hiragana", JSON.stringify(kanaData.hiragana));
        await SecureStore.setItemAsync("katakana", JSON.stringify(kanaData.katakana));
        await SecureStore.setItemAsync("hiraganaNigori", JSON.stringify(kanaData.hiraganaNigori));
        await SecureStore.setItemAsync("katakanaNigori", JSON.stringify(kanaData.katakanaNigori));
        await SecureStore.setItemAsync("hiraganaHannogiri", JSON.stringify(kanaData.hiraganaHannogiri));
        await SecureStore.setItemAsync("katakanaHannogiri", JSON.stringify(kanaData.katakanaHannogiri));
      }
    })();
  }, []);

  const listRenderer = (list) => {
    const lineRenderer = (list, num) => {
      let content = [];
      for (let i = num; i < num + 5; i++) {
        if (i >= list.length) break;

        content.push(<View key={i}
                           style={[styles.symvol, list[i][0] === ' ' ? {backgroundColor: '#e5e5e5'} : (list[i][2] < 3 ? {backgroundColor: '#FFBDBD'} : {backgroundColor: '#D4F4D3'})]}><View
          style={[styles.symvol2, {height: vw(15)}]}><Text
          style={styles.kanaLearnSymbolText}>{[list[i][0], ' ', list[i][2]]}</Text></View></View>);
      }
      return (
        <View style={{flexDirection: 'row'}}>
          {content}
        </View>
      )
    }
    let content = [];
    for (let i = 0; i < list.length; i += 5) {
      content.push(<View key={i} style={styles.line}>{lineRenderer(list, i)}</View>);
    }
    return (
      <View key={98}>
        <View>
          {content}
        </View>
      </View>
    )
  }

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Octopus</Text>
      </View>


      <View style={styles.kanaBox}>
        <View style={styles.kanaSwitsher}>
          <TouchableWithoutFeedback onPress={() =>
            setIsHiragana2(true)
          }>
            <View
              style={[styles.hiraganaText, isHiragana ? {} : {borderBottomRightRadius: 16, backgroundColor: "#F0F0F0"}]}
              onPress={() => {
                alert("lol")
              }}>
              <Text style={styles.kanaHeaderText}>Хирагана</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() =>
            setIsHiragana2(false)
          }>
            <View
              style={[styles.katakanaText, isHiragana ? {borderBottomLeftRadius: 16, backgroundColor: "#F0F0F0"} : {}]}>
              <Text style={styles.kanaHeaderText}>Катакана</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.progress}/>
        <View style={styles.kanaResult}>
          <View style={styles.switchHeader}>
            <Text style={styles.kanaLittleHeaderText}>{isIndex ? "Дополнительные" : "Основные"}</Text>
            <View style={styles.switchIndicate}>
              <View style={[styles.firstButton, isIndex ? {} : {backgroundColor: '#34ACE0'}]}/>
              <View style={[styles.secondButton, isIndex ? {backgroundColor: '#34ACE0'} : {}]}/>
            </View>
          </View>
          <SwipeRender index={0} loadMinimal={true} loadMinimalSize={2} onIndexChanged={(index) => setIsIndex2(index)}>
            <View>
              <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
                {listRenderer(isHiragana ? kanaData.hiragana : kanaData.katakana)}
              </ScrollView>
            </View>
            <View>
              <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
                <View key={99} style={{flex: 1}}>
                  <TouchableWithoutFeedback onPress={() => setIsNigory2(!isNigory)}>
                    <View
                      style={[styles.groupName, isNigory ? {backgroundColor: "#2F80E9"} : {backgroundColor: "#CBE6F8"}]}>
                      <Text>Нигори</Text>
                      <View style={styles.checkedBox}>
                        <SvgXml xml={DoneImage}/>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                  <View>
                    {listRenderer(isHiragana ? kanaData.hiraganaNigori : kanaData.katakanaNigori)}
                  </View>
                  <TouchableWithoutFeedback onPress={() => setIsHannagory2(!isHannagory)}>
                    <View
                      style={[styles.groupName, isHannagory ? {backgroundColor: "#2F80E9"} : {backgroundColor: "#CBE6F8"}]}>
                      <Text style={styles.kanaLittleSeparateText}>Ханнигори</Text>
                      <View style={styles.checkedBox}>
                        <SvgXml xml={DoneImage}/>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                  <View>
                    {listRenderer(isHiragana ? kanaData.hiraganaHannogiri : kanaData.katakanaHannogiri)}
                  </View>
                </View>
              </ScrollView>
            </View>
          </SwipeRender>
        </View>
        <TouchableOpacity style={styles.learnButton} onPress={() => learnHandler()}>
          <Text style={styles.kanaLearnButtonText}>Учить</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}/>
    </View>
  );
};

export default Options;
