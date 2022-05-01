import React, {useEffect} from 'react';
import type {Node} from 'react';
import {Button, Text, View, ScrollView} from 'react-native';
import {styles} from "./styles";
import {TouchableWithoutFeedback} from "react-native";
import {TouchableOpacity} from "react-native";
import SwipeRender from "react-native-swipe-render";
import {vw, vh, vmin, vmax} from 'react-native-expo-viewport-units';
import {DoneImage} from "../../../assets/images/done";
import {SvgXml} from "react-native-svg";


const Options: () => Node = ({navigation}) => {
  const [isHiragana, setIsHiragana] = React.useState(true);
  const [isNigory, setIsNigory] = React.useState(true);
  const [isHannagory, setIsHannagory] = React.useState(true);
  const [isIndex, setIsIndex] = React.useState(0);
  const hiragana = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ',
    'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む',
    'め', 'も', 'や', 'ゆ', 'よ', ' ', ' ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', ' ', 'を', ' ', 'ん',]
  const katakana =
    ['ア', ' イ', 'ウ', 'エ', 'オ',
      'カ', 'キ', 'ク', 'ケ', 'コ',
      'サ', 'シ', 'ス', 'セ', 'ソ',
      'タ', 'チ', 'ツ', 'テ', 'ト',
      'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
      'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
      'マ', 'ミ', 'ム', 'メ', 'モ',
      'ヤ', 'ユ', 'ヨ', ' ', ' ',
      'ラ', 'リ', 'ル', 'レ', 'ロ',
      'ワ', ' ', 'ヲ', ' ', 'ン']

  const hiraganaNigori = ['が', 'ぎ', 'ぐ', 'げ', 'ご', 'ざ', 'じ', 'ず', 'ぜ', 'ぞ', 'だ', 'ぢ', 'づ', 'で', 'ど', 'ば', 'び', 'ぶ', 'べ', 'ぼ']
  const katakanaNigori =
    ['ガ', 'ギ', 'グ', 'ゲ', 'ゴ',
      'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ',
      'ダ', 'ヂ', 'ヅ', 'デ', 'ド',
      'バ', 'ビ', 'ブ', 'ベ', 'ボ']
  const hiraganaHannogiri = ['ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ']
  const katakanaHannogiri = ['パ', 'ピ', 'プ', 'ペ', 'ポ']


  const listRenderer = (list) => {
    const lineRenderer = (list, num) => {
      let content = [];
      for (let i = num; i < num + 5; i++) {
        if (i >= list.length) break;

        content.push(<View key={i}
                           style={[styles.symvol, list[i] === ' ' ? {backgroundColor: '#e5e5e5'} : {backgroundColor: '#D4F4D3'}]}><View
          style={[styles.symvol2, {height: vw(15)}]}><Text
          style={styles.kanaLearnSymbolText}>{list[i]}</Text></View></View>);
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
            setIsHiragana(true)
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
            setIsHiragana(false)
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
          <SwipeRender index={0} loadMinimal={true} loadMinimalSize={2} onIndexChanged={(index) => setIsIndex(index)}>
            <View>
              <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
                {listRenderer(isHiragana ? hiragana : katakana)}
              </ScrollView>
            </View>
            <View>
              <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
                <View key={99} style={{flex: 1}}>
                  <TouchableWithoutFeedback onPress={() => setIsNigory(!isNigory)}>
                    <View
                      style={[styles.groupName, isNigory ? {backgroundColor: "#2F80E9"} : {backgroundColor: "#CBE6F8"}]}>
                      <Text>Нигори</Text>
                      <View style={styles.checkedBox}>
                        <SvgXml xml={DoneImage}/>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                  <View>
                    {listRenderer(isHiragana ? hiraganaNigori : katakanaNigori)}
                  </View>
                  <TouchableWithoutFeedback onPress={() => setIsHannagory(!isHannagory)}>
                    <View style={[styles.groupName, isHannagory ? {backgroundColor: "#2F80E9"} : {backgroundColor: "#CBE6F8"}]}>
                      <Text style={styles.kanaLittleSeparateText}>Ханнигори</Text>
                      <View style={styles.checkedBox}>
                        <SvgXml xml={DoneImage}/>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                  <View>
                    {listRenderer(isHiragana ? hiraganaHannogiri : katakanaHannogiri)}
                  </View>
                </View>
              </ScrollView>
            </View>
          </SwipeRender>
        </View>
        <TouchableOpacity style={styles.learnButton}>
          <Text style={styles.kanaLearnButtonText}>Учить</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}/>
    </View>
  )
    ;
};

export default Options;
