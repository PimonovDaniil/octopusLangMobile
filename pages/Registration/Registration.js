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

const Registration: () => Node = ({navigation}) => {
  const [login, onChangeLogin] = React.useState("");
  const [username, onChangeUsername] = React.useState("");
  const [pass, onChangePass] = React.useState("");

  return (
    <ImageBackground source={backgroundImage} resizeMode="cover"
                     style={styles.imageBackground}>
      <View style={styles.header}>
        <Text style={styles.textOctopus}>OCTOPUS</Text>
      </View>

      <View style={styles.authorizationForm}>
        <View style={styles.authorizationFormHeader}>
          <Text style={styles.textAuth}>Регистрация</Text>
        </View>
        <TextInput
          placeholder="Ваш адрес электронной почты"
          style={styles.input}
          onChangeText={onChangeLogin}
          value={login}
        />
        <TextInput
          placeholder="Ваше имя"
          style={styles.input}
          onChangeText={onChangeUsername}
          value={username}
        />
        <TextInput
          placeholder="Придумайте пароль"
          style={styles.input}
          onChangeText={onChangePass}
          value={pass}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.submit}>
          <Text style={styles.submitText}>Создать аккаунт</Text>
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
          <Text style={styles.toRegistrationButtonText}
                onPress={()=>
                  navigation.navigate('Auth')
                }>У меня уже есть аккаунт</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};


export default Registration;
