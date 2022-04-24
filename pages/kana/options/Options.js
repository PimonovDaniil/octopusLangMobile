import React, {useEffect} from 'react';
import type {Node} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from "./styles";

const Options: () => Node = ({ navigation }) => {

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Octopus</Text>
      </View>
      <View>
        <Text style={styles.namePageText}>Тренажёр азбуки</Text>
      </View>
      <View style={styles.kana}>
        <View style={styles.katakanaBox}>
            <View style={styles.progressBar}/>
            <View style={styles.cardText}>
              <Text style={styles.headerCardText}>Хирагана</Text>
            </View>
            <View style={styles.cardButtons}>
                <View style={styles.cardButtonsTop}>
                  <View style={styles.cardButtonsTopButton}>

                  </View>
                  <View style={styles.cardButtonsTopButton}>

                  </View>
                </View>
                <View style={styles.cardButtonsBottom}>

                </View>
            </View>
        </View>
      </View>
      <View style={styles.kana}>
        <View style={styles.hiraganaBox}>

        </View>
      </View>
      <View style={styles.footer}/>
    </View>
  );
};

export default Options;
