import React, {useEffect} from 'react';
import type {Node} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from "./styles";
import {vw} from 'react-native-expo-viewport-units';
import {CloseImage} from "../../../assets/images/close";
import {SvgXml} from "react-native-svg";
import {TouchableWithoutFeedback} from "react-native";
import {useStore} from "effector-react";
import {isHannagory2, isHiragana2, isIndex2, isNigory2, kanaData2, setKanaData2} from "../../../store/kanaData2";
import * as SecureStore from "expo-secure-store";


const SelectionModule: () => Node = ({navigation}) => {
  const isHiragana = useStore(isHiragana2);
  const isNigory = useStore(isNigory2);
  const isHannagory = useStore(isHannagory2);
  const isIndex = useStore(isIndex2);
  const kanaData = useStore(kanaData2);

  const [results, setResults] = React.useState([]);
  const [progress, setProgress] = React.useState(0);
  const [mainKana, setMainKana] = React.useState("");
  const [variant1, setVariant1] = React.useState("");
  const [variant2, setVariant2] = React.useState("");
  const [variant3, setVariant3] = React.useState("");
  const [variant4, setVariant4] = React.useState("");
  const [buttonPress, setButtonPress] = React.useState([false, false, false, false]);
  const [buttonRight, setButtonRight] = React.useState([false, false, false, false]);
  const [buttonWrong, setButtonWrong] = React.useState([false, false, false, false]);
  const [continueState, setContinueState] = React.useState(0);

  async function save() {
    await SecureStore.setItemAsync("hiragana", JSON.stringify(kanaData.hiragana));
    await SecureStore.setItemAsync("katakana", JSON.stringify(kanaData.katakana));
    await SecureStore.setItemAsync("hiraganaNigori", JSON.stringify(kanaData.hiraganaNigori));
    await SecureStore.setItemAsync("katakanaNigori", JSON.stringify(kanaData.katakanaNigori));
    await SecureStore.setItemAsync("hiraganaHannogiri", JSON.stringify(kanaData.hiraganaHannogiri));
    await SecureStore.setItemAsync("katakanaHannogiri", JSON.stringify(kanaData.katakanaHannogiri));
  }

  const continueHandler = () => {
    if (continueState === 0) {
      let data = [...kanaData.hiragana, ...kanaData.katakana, ...kanaData.hiraganaNigori,
        ...kanaData.katakanaNigori, ...kanaData.hiraganaHannogiri, ...kanaData.katakanaHannogiri]
      data = data.filter((item) => {
        return item[0] === mainKana
      })[0]
      let memory = results;
      if (buttonPress[0]) {
        if (variant1 === data[1]) {
          memory.push([mainKana, true])
          setResults(memory)
        } else {
          memory.push([mainKana, false])
          setResults(memory)
        }
      } else if (buttonPress[1]) {
        if (variant2 === data[1]) {
          memory.push([mainKana, true])
          setResults(memory)
        } else {
          memory.push([mainKana, false])
          setResults(memory)
        }
      } else if (buttonPress[2]) {
        if (variant3 === data[1]) {
          memory.push([mainKana, true])
          setResults(memory)
        } else {
          memory.push([mainKana, false])
          setResults(memory)
        }
      } else if (buttonPress[3]) {
        if (variant4 === data[1]) {
          memory.push([mainKana, true])
          setResults(memory)
        } else {
          memory.push([mainKana, false])
          setResults(memory)
        }
      }
      let memKanaData = kanaData;
      for(let i = 0; i < memKanaData.hiragana.length; i++){
        if(memKanaData.hiragana[i][0] === mainKana){
          if(results[results.length-1][1]){
            if(memKanaData.hiragana[i][2]<3){
              memKanaData.hiragana[i][2]+=1;
            }
          }else{
            if(memKanaData.hiragana[i][2]>0){
              memKanaData.hiragana[i][2]-=1;
            }
          }
        }
      }
      for(let i = 0; i < memKanaData.katakana.length; i++){
        if(memKanaData.katakana[i][0] === mainKana){
          if(results[results.length-1][1]){
            if(memKanaData.katakana[i][2]<3){
              memKanaData.katakana[i][2]+=1;
            }
          }else{
            if(memKanaData.katakana[i][2]>0){
              memKanaData.katakana[i][2]-=1;
            }
          }
        }
      }
      for(let i = 0; i < memKanaData.hiraganaNigori.length; i++){
        if(memKanaData.hiraganaNigori[i][0] === mainKana){
          if(results[results.length-1][1]){
            if(memKanaData.hiraganaNigori[i][2]<3){
              memKanaData.hiraganaNigori[i][2]+=1;
            }
          }else{
            if(memKanaData.hiraganaNigori[i][2]>0){
              memKanaData.hiraganaNigori[i][2]-=1;
            }
          }
        }
      }
      for(let i = 0; i < memKanaData.katakanaNigori.length; i++){
        if(memKanaData.katakanaNigori[i][0] === mainKana){
          if(results[results.length-1][1]){
            if(memKanaData.katakanaNigori[i][2]<3){
              memKanaData.katakanaNigori[i][2]+=1;
            }
          }else{
            if(memKanaData.katakanaNigori[i][2]>0){
              memKanaData.katakanaNigori[i][2]-=1;
            }
          }
        }
      }
      for(let i = 0; i < memKanaData.hiraganaHannogiri.length; i++){
        if(memKanaData.hiraganaHannogiri[i][0] === mainKana){
          if(results[results.length-1][1]){
            if(memKanaData.hiraganaHannogiri[i][2]<3){
              memKanaData.hiraganaHannogiri[i][2]+=1;
            }
          }else{
            if(memKanaData.hiraganaHannogiri[i][2]>0){
              memKanaData.hiraganaHannogiri[i][2]-=1;
            }
          }
        }
      }
      for(let i = 0; i < memKanaData.katakanaHannogiri.length; i++){
        if(memKanaData.katakanaHannogiri[i][0] === mainKana){
          if(results[results.length-1][1]){
            if(memKanaData.katakanaHannogiri[i][2]<3){
              memKanaData.katakanaHannogiri[i][2]+=1;
            }
          }else{
            if(memKanaData.katakanaHannogiri[i][2]>0){
              memKanaData.katakanaHannogiri[i][2]-=1;
            }
          }
        }
      }
      save();
      setKanaData2(memKanaData)
      if (variant1 === data[1]) {
        setButtonRight([true, false, false, false]);
      } else if (variant2 === data[1]) {
        setButtonRight([false, true, false, false]);
      } else if (variant3 === data[1]) {
        setButtonRight([false, false, true, false]);
      } else if (variant4 === data[1]) {
        setButtonRight([false, false, false, true]);
      }
      if (results[results.length - 1][1] === false) {
        setButtonWrong(buttonPress);
      }
      console.log(results);
      setButtonPress([false, false, false, false]);
      setContinueState(1);
    } else if (continueState === 1) {
      setButtonPress([false, false, false, false]);
      setButtonRight([false, false, false, false]);
      setButtonWrong([false, false, false, false]);
      setContinueState(0);
      setVariants();
    }
  }

  const setVariants = () => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    let data = []
    if (isHiragana && isIndex === 0) {
      data = kanaData.hiragana;
    } else if (isHiragana && isIndex !== 0) {
      if (isNigory && isHannagory) {
        data = [...kanaData.hiraganaNigori, ...kanaData.hiraganaHannogiri]
      } else {
        if (isNigory) {
          data = kanaData.hiraganaNigori;
        }
        if (isHannagory) {
          data = kanaData.hiraganaHannogiri;
        }
      }
    } else if (!isHiragana && isIndex === 0) {
      data = kanaData.katakana;
    } else if (!isHiragana && isIndex !== 0) {
      if (isNigory) {
        data.concat(kanaData.katakanaNigori);
      }
      if (isHannagory) {
        data.concat(kanaData.katakanaHannogiri);
      }
    }
    data = data.filter((item) => {
      return item[0] !== ' '
    })

    let data0 = data.filter((item) => {
      return item[2] === 0
    })
    let data1 = data.filter((item) => {
      return item[2] === 1
    })
    let data2 = data.filter((item) => {
      return item[2] === 2
    })
    let data3 = data.filter((item) => {
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

    setVariant1(data[getRandomInt(data.length)][1]);
    setVariant2(data[getRandomInt(data.length)][1]);
    setVariant3(data[getRandomInt(data.length)][1]);
    setVariant4(data[getRandomInt(data.length)][1]);
    setMainKana(min[0]);
    let r = getRandomInt(4);
    if (r === 0) {
      setVariant1(min[1])
    } else if (r === 1) {
      setVariant2(min[1])
    } else if (r === 2) {
      setVariant3(min[1])
    } else if (r === 3) {
      setVariant4(min[1])
    }
  }

  useEffect(() => {
    (function () {
      setVariants();
    })();
  }, []);

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Octopus</Text>
      </View>
      <View style={styles.progressHeader}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Options')}>
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
        <Text style={styles.textDiscription}>Выберите верный вариант:</Text>
      </View>
      <View style={{flex: 1}}>
        <View style={styles.kanaWrapper}>
          <View style={[styles.kanaRight, {height: vw(50), width: vw(50)}]}>
            <Text style={styles.rightOptionsText}>{mainKana}</Text>
          </View>
        </View>
        <View style={{flex: 1, margin: 10}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableWithoutFeedback onPress={() => {
              if (continueState === 0) {
                setButtonPress([true, false, false, false])
              }
            }}>
              <View style={[styles.options, buttonPress[0] ? {
                borderColor: "#34ACE0",
                borderWidth: 4
              } : buttonWrong[0] ? {borderColor: "#FFBDBD", borderWidth: 4} : buttonRight[0] ? {
                borderColor: "#D4F4D3",
                borderWidth: 4
              } : {}]}>
                <Text style={styles.optionsText}>{variant1}</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {
              if (continueState === 0) {
                setButtonPress([false, true, false, false])
              }
            }}>
              <View style={[styles.options, buttonPress[1] ? {
                borderColor: "#34ACE0",
                borderWidth: 4
              } : buttonWrong[1] ? {borderColor: "#FFBDBD", borderWidth: 4} : buttonRight[1] ? {
                borderColor: "#D4F4D3",
                borderWidth: 4
              } : {}]}>
                <Text style={styles.optionsText}>{variant2}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableWithoutFeedback onPress={() => {
              if (continueState === 0) {
                setButtonPress([false, false, true, false])
              }
            }}>
              <View style={[styles.options, buttonPress[2] ? {
                borderColor: "#34ACE0",
                borderWidth: 4
              } : buttonWrong[2] ? {borderColor: "#FFBDBD", borderWidth: 4} : buttonRight[2] ? {
                borderColor: "#D4F4D3",
                borderWidth: 4
              } : {}]}>
                <Text style={styles.optionsText}>{variant3}</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {
              if (continueState === 0) {
                setButtonPress([false, false, false, true])
              }
            }}>
              <View style={[styles.options, buttonPress[3] ? {
                borderColor: "#34ACE0",
                borderWidth: 4
              } : buttonWrong[3] ? {borderColor: "#FFBDBD", borderWidth: 4} : buttonRight[3] ? {
                borderColor: "#D4F4D3",
                borderWidth: 4
              } : {}]}>
                <Text style={styles.optionsText}>{variant4}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>

      {(buttonPress[0] === false && buttonPress[1] === false && buttonPress[2] === false && buttonPress[3] === false &&
        buttonRight[0] === false && buttonRight[1] === false && buttonRight[2] === false && buttonRight[3] === false &&
        buttonWrong[0] === false && buttonWrong[1] === false && buttonWrong[2] === false && buttonWrong[3] === false) ? (
          <View style={[styles.continue, {backgroundColor: "#F0F0F0"}]}>
            <Text style={styles.continueText}>Продолжить</Text>
          </View>
        ) :
        <TouchableOpacity style={styles.continue} onPress={() => continueHandler()}>
          <Text style={styles.continueText}>Продолжить</Text>
        </TouchableOpacity>
      }
      <View style={styles.footer}/>
    </View>
  );
};

export default SelectionModule;
