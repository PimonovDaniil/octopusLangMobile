import React from 'react';
import type {Node} from 'react';
import {
  ImageBackground,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {SvgXml} from 'react-native-svg';
import {styles} from "./styles";
import {GoogleImage} from "../../assets/images/google";
import {LinkedinImage} from "../../assets/images/linkedin";
import {FacebookImage} from "../../assets/images/facebook";

const backgroundImage = require("../../assets/images/background.png");

const Auth: () => Node = ({navigation}) => {
  const [login, onChangeLogin] = React.useState("");
  const [pass, onChangePass] = React.useState("");

  return (
    <ImageBackground source={backgroundImage} resizeMode="cover"
                     style={styles.imageBackground}>
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
        <TouchableOpacity style={styles.submit}>
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
        <TouchableOpacity style={styles.toRegistrationButton}>
          <Text style={styles.toRegistrationButtonText}>У меня нет аккаунта</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};


export default Auth;
