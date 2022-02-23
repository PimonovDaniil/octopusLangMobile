import React, {useEffect, useRef} from 'react';
import type {Node} from 'react';
import {
  ImageBackground,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing, Dimensions
} from 'react-native';

import {SvgXml} from 'react-native-svg';
import {styles} from "./styles";
import {GoogleImage} from "../../assets/images/google";
import {LinkedinImage} from "../../assets/images/linkedin";
import {FacebookImage} from "../../assets/images/facebook";
import {BubbleImage} from "../../assets/images/bubble";
import {TouchableWithoutFeedback} from "react-native-web";

const backgroundImage = require("../../assets/images/background.png");

const Auth: () => Node = ({navigation}) => {
  const [login, onChangeLogin] = React.useState("");
  const [pass, onChangePass] = React.useState("");
  let checkMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const submitHandler = () => {
    if (checkMail.test(login) === false) {
      alert("Email is Not Correct");
    }
    else {
      alert("Email is Correct");
    }
  }

  const valueXY = useRef(new Animated.ValueXY({x:200,y:Dimensions.get ('window').height+100})).current

  const startAnimate = (x, amply) => {
      let m = [];
      const n = 20;
      const speed = 500;
      for(let i = n; i > -5 ; i-- ){
        m.push(Animated.timing(valueXY, { toValue:
            {x: amply*Math.sin((Dimensions.get ('window').width/n*i)/50)+x, y: Dimensions.get ('window').height/n*i +100},
          useNativeDriver: true, duration: n === i ? 0 : speed, easing: Easing.linear }));
      }

      Animated.sequence(m).start();
  }

  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    startAnimate(200, 50);
  });
  return (
    <ImageBackground source={backgroundImage} resizeMode="cover"
                     style={styles.imageBackground}>
      <Animated.View style={{ transform: [{ translateY: valueXY.y},{ translateX: valueXY.x}], position: "absolute"}}  >
          <SvgXml xml={BubbleImage}  />
      </Animated.View>

      <View style={styles.header}>
        <Text style={styles.textOctopus}>OCTOPUS</Text>
      </View>

      <View style={styles.authorizationForm}>
        <View style={styles.authorizationFormHeader}>
          <Text style={styles.textAuth}>Авторизация</Text>
        </View>
        <TextInput
          placeholder="Ваш адрес электронной почты"
          style={styles.input}
          onChangeText={onChangeLogin}
          value={login}
        />
        <TextInput
          placeholder="Ваш пароль"
          style={styles.input}
          onChangeText={onChangePass}
          value={pass}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.submit} onPress={()=>submitHandler()}>
          <Text style={styles.submitText}>Войти</Text>
        </TouchableOpacity>
        <View style={styles.diviningLine}/>
        <View style={styles.authorizationButtons}>
          <TouchableOpacity style={styles.authorizationButton}>
            <SvgXml xml={GoogleImage} width="50%" height="50%"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.authorizationButton}>
            <SvgXml xml={LinkedinImage} width="50%" height="50%"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.authorizationButton}>
            <SvgXml xml={FacebookImage} width="50%" height="50%"/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.toRegistrationButton} onPress={()=>
          navigation.navigate('Registration')
        }>
          <Text style={styles.toRegistrationButtonText}>У меня нет аккаунта</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};


export default Auth;
