import React, {useEffect} from 'react';
import type {Node} from 'react';
import {Button, Text, View, ScrollView} from 'react-native';
import {styles} from "./styles";
import {TouchableWithoutFeedback} from "react-native";
import {TouchableOpacity} from "react-native";
import SwipeRender from "react-native-swipe-render";
import {vw} from 'react-native-expo-viewport-units';
import {DoneImage} from "../../../assets/images/done";
import {SvgXml} from "react-native-svg";


const Options: () => Node = ({navigation}) => {
  const [isHiragana, setIsHiragana] = React.useState(true);
  const [isNigory, setIsNigory] = React.useState(true);
  const [isHannagory, setIsHannagory] = React.useState(true);
  const [isIndex, setIsIndex] = React.useState(0);
  let kanaData = {
    hiragana: [['あ','а', 0], ['い', 'и', 0], ['う', 'у', 0], ['え', 'э', 0], ['お', 'о', 0], ['か', 'ка', 0], ['き', 'ки', 0],
      ['く', 'ку', 0],['け', 'кэ', 0], ['こ', 'ко', 0], ['さ', 'са', 0], ['し', 'си', 0], ['す', 'су', 0], ['せ', 'сэ', 0], ['そ', 'со', 0],
      ['た', 'та', 0], ['ち', 'ти', 0], ['つ', 'цу', 0], ['て', 'тэ', 0], ['と', 'то', 0], ['な', 'на', 0], ['に', 'ни', 0], ['ぬ', 'ну', 0],
      ['ね', 'нэ', 0], ['の', 'но', 0], ['は', 'ха', 0], ['ひ', 'хи', 0], ['ふ', 'фу', 0], ['へ', 'хэ', 0], ['ほ', 'хо', 0], ['ま', 'ма', 0],
      ['み', 'ми', 0], ['む', 'му', 0], ['め', 'мэ', 0], ['も', 'мо', 0], ['や', 'я', 0], ['ゆ', 'ю', 0], ['よ', 'ё', 0], [' ', ' ', 0],
      [' ', ' ', 0], ['ら', 'ра', 0], ['り', 'ри', 0], ['る', 'ру', 0], ['れ', 'рэ', 0], ['ろ', 'ро', 0], ['わ', 'ва', 0], [' ', ' ', 0],
      ['を', 'во', 0], [' ', ' ', 0], ['ん', 'н', 0]],
    katakana: [['ア','а', 0], [' イ', 'и', 0], ['ウ', 'у', 0], ['エ', 'э', 0], ['オ', 'о', 0], ['カ', 'ка', 0], ['キ', 'ки', 0],
      ['ク', 'ку', 0], ['ケ', 'кэ', 0], ['コ', 'ко', 0], ['サ', 'са', 0], ['シ', 'си', 0], ['ス', 'су', 0], ['セ', 'сэ', 0], ['ソ', 'со', 0],
      ['タ', 'та', 0], ['チ', 'ти', 0], ['ツ', 'цу', 0], ['テ', 'тэ', 0], ['ト', 'то', 0], ['ナ', 'на', 0], ['ニ', 'ни', 0], ['ヌ', 'ну', 0],
      ['ネ', 'нэ', 0], ['ノ', 'но', 0], ['ハ', 'ха', 0], ['ヒ', 'хи', 0], ['フ', 'фу', 0], ['ヘ', 'хэ', 0], ['ホ', 'хо', 0], ['マ', 'ма', 0],
      ['ミ', 'ми', 0], ['ム', 'му', 0], ['メ', 'мэ', 0], ['モ', 'мо', 0], ['ヤ', 'я', 0], ['ユ', 'ю', 0], ['ヨ', 'ё', 0], [' ', ' ', 0],
      [' ', ' ', 0], ['ラ', 'ра', 0], ['リ', 'ри', 0], ['ル', 'ру', 0], ['レ', 'рэ', 0], ['ロ', 'ро', 0], ['ワ', 'ва', 0], [' ', ' ', 0],
      ['ヲ', 'во', 0], [' ', ' ', 0], ['ン', 'н', 0]],
    hiraganaNigori: [['が','га', 0], ['ぎ','ги', 0], ['ぐ','гу', 0], ['げ','гэ', 0], ['ご','го', 0], ['ざ','дза', 0], ['じ','дзи', 0],
      ['ず','дзу', 0], ['ぜ','дзэ', 0], ['ぞ','дзо', 0], ['だ','да', 0], ['ぢ','дзи', 0], ['づ','дзу', 0], ['で','дэ', 0], ['ど','до', 0],
      ['ば','ба', 0], ['び','би', 0], ['ぶ','бу', 0], ['べ','бэ', 0], ['ぼ','бо', 0]],
    katakanaNigori: [['ガ','га', 0], ['ギ','ги', 0], ['グ','гу', 0], ['ゲ','гэ', 0], ['ゴ','го', 0], ['ザ','дза', 0], ['ジ','дзи', 0],
      ['ズ','дзу', 0], ['ゼ','дзэ', 0], ['ゾ','дзо', 0], ['ダ','да', 0], ['ヂ','дзи', 0], ['ヅ','дзу', 0], ['デ','дэ', 0], ['ド','до', 0],
      ['バ','ба', 0], ['ビ','би', 0], ['ブ','бу', 0], ['ベ','бэ', 0], ['ボ','бо', 0]],
    hiraganaHannogiri: [['ぱ','па', 0], ['ぴ','пи', 0], ['ぷ','пу', 0], ['ぺ','пэ', 0], ['ぽ','по', 0]],
    katakanaHannogiri: [['パ','па', 0], ['ピ','пи', 0], ['プ','пу', 0], ['ペ','пэ', 0], ['ポ','по', 0]],
  };

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
                {listRenderer(isHiragana ? kanaData.hiragana  : kanaData.katakana)}
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
                    {listRenderer(isHiragana ? kanaData.hiraganaNigori  : kanaData.katakanaNigori)}
                  </View>
                  <TouchableWithoutFeedback onPress={() => setIsHannagory(!isHannagory)}>
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
        <TouchableOpacity style={styles.learnButton}>
          <Text style={styles.kanaLearnButtonText}>Учить</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}/>
    </View>
  );
};

export default Options;
