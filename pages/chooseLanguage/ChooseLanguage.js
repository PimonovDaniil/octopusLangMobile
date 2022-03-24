import React, {useEffect} from 'react';
import type {Node} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import Bubbles from "../../components/Bubble/Bubbles";
import Loader from "react-native-modal-loader";
import {styles} from "./styles";
import {SvgXml} from "react-native-svg";
import {japanImage} from "../../assets/images/languages/japanese";
import {chineImage} from "../../assets/images/languages/chinese";
import {koreanImage} from "../../assets/images/languages/korean";
import {SelectedImage} from "../../assets/images/selected";

const ChooseLanguage: () => Node = ({navigation}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isJapan, setJapan] = React.useState(false);
  const [isChine, setChine] = React.useState(false);
  const [isKorean, setKorean] = React.useState(false);
  return (
    <View style={{backgroundColor: "#297fb8", flex: 1}} q>
      <Loader loading={isLoading} color="#297fb8"/>
      <Bubbles/>
      <View style={styles.header}>
        <Text style={styles.textOctopus}>OCTOPUS</Text>
      </View>
      <View style={styles.header2}>
        <Text style={styles.textHeader2}>Какие языки планируете изучать?</Text>
        <Text style={styles.mainText}>Выберите до трех языков, которые планируте изучать</Text>
      </View>
      <View style={styles.langScroll}>
        <ScrollView scrollEventThrottle={16} horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.langBox} onPress={()=> {
            if(isKorean+isJapan+isChine < 3 || isJapan){
              setJapan(!isJapan)
            }
          }}>
            {isJapan ? (
              <View style={styles.selectedIm}>
                <SvgXml xml={SelectedImage}/>
              </View>
            ) : <View/>}
            <SvgXml xml={japanImage} width="50%" height="50%"/>
            <Text style={styles.langText}>Японский</Text>
            <Text style={styles.mainText}>Изучают 231 человек</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.langBox} onPress={()=>{
            if(isKorean+isJapan+isChine < 3 || isChine){
              setChine(!isChine)
            }
          }}>
            {isChine ? (
              <View style={styles.selectedIm}>
                <SvgXml xml={SelectedImage}/>
              </View>
            ) : <View/>}
            <SvgXml xml={chineImage} width="50%" height="50%"/>
            <Text style={styles.langText}>Китайский</Text>
            <Text style={styles.mainText}>Изучают 2 человек</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.langBox} onPress={()=>{
            if(isKorean+isJapan+isChine < 3 || isKorean){
              setKorean(!isKorean)
            }
          }}>
            {isKorean ? (
              <View style={styles.selectedIm}>
                <SvgXml xml={SelectedImage}/>
              </View>
            ) : <View/>}
            <SvgXml xml={koreanImage} width="50%" height="50%"/>
            <Text style={styles.langText}>Корейский</Text>
            <Text style={styles.mainText}>Изучают 246 человек</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={{flex: 2}}>
        {(isChine || isJapan || isKorean) ? (
          <TouchableOpacity style={styles.submit}>
            <Text style={styles.submitText}>Продолжить</Text>
          </TouchableOpacity>
        ) : <View/>}
      </View>
    </View>
  );
};

export default ChooseLanguage;
