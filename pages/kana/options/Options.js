import React, {useEffect} from 'react';
import type {Node} from 'react';
import {Button, Text, View, ScrollView} from 'react-native';
import {styles} from "./styles";
import {TouchableWithoutFeedback} from "react-native";
import {TouchableOpacity} from "react-native";
import SwipeRender from "react-native-swipe-render";

const Options: () => Node = ({navigation}) => {
  const [isHiragana, setIsHiragana] = React.useState(true);
  const [isIndex, setIsIndex] = React.useState(0);
  const hiragana = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ',
    'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む',
    'め', 'も', 'や', 'ゆ', 'よ', ' ', ' ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん', ' ', ' ']
  const hiraganaNigori = ['が', 'ぎ', 'ぐ', 'げ', 'ご', 'ざ', 'じ', 'ず', 'ぜ', 'ぞ', 'だ', 'ぢ', 'づ', 'で', 'ど', 'ば', 'び', 'ぶ', 'べ', 'ぼ']
  const hiraganaHannogiri = ['ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ']

  const listRenderer = (list) => {
    const lineRenderer = (list, num) => {
      let content = [];
      for (let i = num; i < num + 5; i++) {
        if (i >= list.length) break;
        content.push(<View key={i} style={styles.symvol}><View
          style={styles.symvol2}><Text>{list[i]}</Text></View></View>);
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
        <View style={styles.lineKana}>
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
              <Text>Хирагана</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() =>
            setIsHiragana(false)
          }>
            <View
              style={[styles.katakanaText, isHiragana ? {borderBottomLeftRadius: 16, backgroundColor: "#F0F0F0"} : {}]}>
              <Text>Катакана</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.progress}/>
        <View style={styles.kanaResult}>
          <View style={styles.switchHeader}>
            <Text>{isIndex ? "Дополнительные" : "Основные"}</Text>
            <View style={styles.switchIndicate}>
              <View style={[styles.firstButton, isIndex ? {} : {backgroundColor: '#34ACE0'}]}/>
              <View style={[styles.secondButton, isIndex ? {backgroundColor: '#34ACE0'} : {}]}/>
            </View>
          </View>

          {/*{listRenderer(hiragana)}*/}
          <SwipeRender index={0} loadMinimal={true} loadMinimalSize={2} onIndexChanged={(index) => setIsIndex(index)}>
            <View style={{marginTop: 10}}>
              <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
                {listRenderer(hiragana)}
              </ScrollView>
            </View>
            <View>
              <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
                <View key={99} style={{flex: 1}}>
                  <View style={styles.groupName}>
                    <View style={styles.lineSeparate}/>
                    <View>
                      <Text>Нигори</Text>
                    </View>
                    <View style={styles.lineSeparate}/>
                  </View>
                  <View>
                    {listRenderer(hiraganaNigori)}
                  </View>
                  <View style={styles.groupName}>
                    <View style={styles.lineSeparate}/>
                    <View>
                      <Text>Ханнигори</Text>
                    </View>
                    <View style={styles.lineSeparate}/>
                  </View>
                  <View>
                    {listRenderer(hiraganaHannogiri)}
                  </View>
                </View>
              </ScrollView>
            </View>
          </SwipeRender>
        </View>
        <TouchableOpacity style={styles.learnButton}>
          <Text style={styles.learnText}>Учить</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}/>
    </View>
  )
    ;
};

export default Options;
