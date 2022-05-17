import React, {useEffect, useRef} from 'react';
import type {Node} from 'react';
import {
  Dimensions,
  Text,
  TouchableOpacityComponent,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackComponent,
  View
} from 'react-native';
import {styles} from "./styles";
import {SvgXml} from "react-native-svg";
import {CloseImage} from "../../../assets/images/close";
import {vh, vw} from "react-native-expo-viewport-units";
import {TouchableOpacity, Image, ScrollView} from "react-native";
import {Audio} from 'expo-av';
import {setIsIndex2, setKanaData2} from "../../../store/kanaData2";
import * as SecureStore from "expo-secure-store";
import {deleteItemAsync} from "expo-secure-store";


const SentenceTrain: () => Node = ({navigation}) => {
  const [results, setResults] = React.useState([]);
  const [kolRight, setKolRight] = React.useState(0);
  const [selectedVarian, setSelectedVarian] = React.useState([]);
  const [rightVariant, setRightVariant] = React.useState([]);
  const [currentSentence, setCurrentSentence] = React.useState([]);
  const [randomeSentence, setRandomeSentence] = React.useState([]);
  const [continueState, setContinueState] = React.useState(0);
  const [showResults, setShowResults] = React.useState(false);

  const Example_text_1 = [['Привет, меня зовут Сергей', ['こんにちは', '私', 'の', '名前', 'は', 'セルゲイ', 'です'], 0],
    ['Приятно познакомиться, я Хонда', ['はじめまして', '本田', 'です'], 0],
    ['Я из Франции', ['フランス', '出身', 'です'], 0],
    ['Я из России', ['ロシア', '出身', 'です'], 0],
    ['Мистер накамура учитель', ['中村', 'さん', 'は', '先生', 'です'], 0],
    ['Да, я студент', ['はい', '学生', 'です'], 0],
    ['Приятно познакомиться, меня зовут Танака.', ['はじめまして', '田中', 'と言い', 'ます'], 0],
    ['Мистер Танака японец', ['田中', 'さん', 'は', '日本人', 'です'], 0],
    ['Я русский', ['ロシア', '人', 'です'], 0],]


  useEffect(() => {
    (async function () {
      setVarious(Example_text_1);
    })();
  }, []);

  const setVarious = (phrasebook) => {
    setCurrentSentence([])

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    let data0 = phrasebook.filter((item) => {
      return item[2] === 0
    })
    let data1 = phrasebook.filter((item) => {
      return item[2] === 1
    })
    let data2 = phrasebook.filter((item) => {
      return item[2] === 2
    })
    let data3 = phrasebook.filter((item) => {
      return item[2] === 3
    })
    let min = []
    if (data0.length > 0) {
      min = data0[getRandomInt(data0.length)]
    } else if (data1.length > 0) {
      min = data1[getRandomInt(data1.length)]
    } else if (data2.length > 0) {
      min = data2[getRandomInt(data2.length)]
    } else if (data3.length > 0) {
      min = data3[getRandomInt(data3.length)]
    }
    let len = min[1].length;
    setSelectedVarian(min)
    let copy = min[1].slice(0)
    setRightVariant(copy)
    let res = []
    for (let i = 0; i < len; i++) {
      let r = getRandomInt(min[1].length)
      res.push([i, min[1][r], false, 0])
      min[1].splice(r, 1);
    }
    setRandomeSentence(res);
  }


  const wordsVariousHandler = (list) => {
    if (list[2] === false) {
      setCurrentSentence([...currentSentence, list])
      let data = randomeSentence;
      for (let i = 0; i < data.length; i++) {
        if (list[0] === data[i][0]) {
          data[i][2] = true;
          break
        }
      }
      setRandomeSentence(data);
    }
  }

  const wordsHandler = (list) => {
    let data = randomeSentence.slice(0);
    let data2 = currentSentence.slice(0);
    for (let i = 0; i < data.length; i++) {
      if (list[0] === data[i][0]) {
        data[i][2] = false;
        break
      }
    }
    for (let i = 0; i < data2.length; i++) {
      if (list[0] === data2[i][0]) {
        data2.splice(i, 1);
        break
      }
    }
    setRandomeSentence(data);
    setCurrentSentence(data2);
  }

  const buttonHandler = () => {
    //1 - красный 2 - зелёный
    if (continueState === 0) {
      let data = currentSentence.slice(0);
      let flag = true
      for (let i = 0; i < currentSentence.length; i++) {
        if (data[i][1] === rightVariant[i]) {
          data[i][3] = 2
        } else {
          flag = false
          data[i][3] = 1
        }
      }
      if (flag) {
        setKolRight(kolRight + 1);
      }
      setCurrentSentence(data)
      setResults([...results, [flag, data]])
      setContinueState(1)
    } else if (continueState === 1) {
      setVarious(Example_text_1);
      setContinueState(0)
      if (results.length >= 12) {
        setShowResults(true);
        setContinueState(2)
      }
    }else if (continueState === 2) {
      navigation.navigate('PhrasebookSelect', {"flag": true})
    }
  }


  const wordsVarious = (list) => {
    let content = [];
    for (let i = 0; i < list.length; i++) {
      content.push(
        <TouchableWithoutFeedback key={i} onPress={() => wordsVariousHandler(list[i])}>
          <View style={[styles.sentenceTextWrapper, list[i][2] ? {backgroundColor: "#C4C4C4"} : {}]}>
            <Text style={[styles.sentenceText, list[i][2] ? {color: "#C4C4C4"} : {color: "black"}]}>{list[i][1]}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    }
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap'}}>
        {content}
      </View>
    )
  }

  const words = (list) => {
    let content = [];
    for (let i = 0; i < list.length; i++) {
      content.push(
        <TouchableWithoutFeedback key={i} onPress={() => wordsHandler(list[i])}>
          <View key={i} style={styles.sentenceTextWrapper}>
            <Text
              style={[styles.sentenceText, list[i][3] === 1 ? {color: "red"} : list[i][3] === 2 ? {color: "green"} : {}]}>{list[i][1]}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    }
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap'}}>
        {content}
      </View>
    )
  }

  const resultWords = (res) => {
    console.log(res)
    console.log(res[0])
    let list = res[1]
    let content = [];
    for (let i = 0; i < list.length; i++) {
      content.push(
        <View key={i}>
          <Text
            style={[styles.sentenceText, list[i][3] === 1 ? {color: "red"} : list[i][3] === 2 ? {color: "green"} : {}]}>{list[i][1]}</Text>
        </View>
      );
    }
    return (
      <View
        style={[styles.showreswords, res[0] === false ? {backgroundColor: "#FFEBEB"} : {backgroundColor: "#D4F4D3"}]}>
        {content}
      </View>
    )
  }

  const resultSentence = (list) => {
    let content = [];
    for (let i = 0; i < list.length; i++) {
      content.push(
        <View key={i}>
          {resultWords(results[i])}
        </View>
      );
    }
    return (
      <View>
        {content}
      </View>
    )
  }

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Octopus</Text>
      </View>
      <View style={{flex: 1}}>
        {(showResults === false) ? (
            <View style={{flex: 1}}>
              <View style={styles.progressHeader}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('PhrasebookSelect', {"flag": true})}>
                  <View style={styles.closeWrapper}>
                    <SvgXml xml={CloseImage}/>
                  </View>
                </TouchableWithoutFeedback>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={[styles.progress1, {
                    flex: results.length,
                    backgroundColor: '#FFFFFF'
                  }, results.length > 11 ? {borderRadius: 16} : {}]}>
                    <View style={{backgroundColor: "#34ACE0", borderRadius: 16, flex: 1}}/>
                  </View>
                  <View style={[styles.progress2, {
                    flex: 12 - results.length,
                    backgroundColor: '#FFFFFF'
                  }, results.length > 0 ? {borderTopLeftRadius: 0, borderBottomLeftRadius: 0} : {}]}/>
                </View>
              </View>
              <View style={styles.textWrapperDiscription}>
                <Text style={styles.textDiscription}>Напишите на японском:</Text>
              </View>
              <View style={styles.TextCard}>
                <Text style={styles.textDiscription}>{selectedVarian[0]}</Text>
              </View>
              <View style={{flex: 0.25, justifyContent: "center"}}>
                {words(currentSentence)}
              </View>
              <View style={{flex: 0.4, justifyContent: "center"}}>
                {wordsVarious(randomeSentence)}
              </View>
            </View>
          ) :
          <View style={{flex: 1}}>
            <View style={styles.results}>
              <Text style={styles.headerResultText}>Ваш результат:</Text>
              <Text style={styles.headerResultText}>{kolRight} из 12!!</Text>
              <Text style={styles.headerResultText}>Поздравляем!</Text>
            </View>
            <View style={{flex: 1}}>
              <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
                {resultSentence(results)}
              </ScrollView>
            </View>

          </View>
        }
        {(currentSentence.length === rightVariant.length || continueState===2) ? (
            <TouchableOpacity style={styles.button} onPress={() => buttonHandler()}>
              {(continueState===0) ? (
                <Text style={[styles.textDiscription, {color: "white"}]}>Проверить</Text>
                ) :
                <Text style={[styles.textDiscription, {color: "white"}]}>Продолжить</Text>
              }
            </TouchableOpacity>
          ) :
          <View style={[styles.button, {backgroundColor: "#F0F0F0"}]}>
            <Text style={[styles.textDiscription, {color: "white"}]}>Проверить</Text>
          </View>
        }
      </View>
      <View style={styles.footer}/>
    </View>
  );
};

export default SentenceTrain;
