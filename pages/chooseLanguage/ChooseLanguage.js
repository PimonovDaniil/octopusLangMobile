import React, {useEffect} from 'react';
import type {Node} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import Bubbles from "../../components/Bubble/Bubbles";
import Loader from "react-native-modal-loader";
import {styles} from "./styles";


const ChooseLanguage: () => Node = ({navigation}) => {
  const [isLoading, setIsLoading] = React.useState(false);


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
          <TouchableOpacity style={styles.langBox}>

          </TouchableOpacity>
          <TouchableOpacity style={styles.langBox}>

          </TouchableOpacity>
          <TouchableOpacity style={styles.langBox}>

          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={{flex: 2}}>
        <TouchableOpacity style={styles.submit}>
          <Text style={styles.submitText}>Продолжить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChooseLanguage;
