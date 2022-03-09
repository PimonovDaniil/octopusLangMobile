import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity, Keyboard,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {styles} from "./styles";
import {GoogleImage} from "../../assets/images/google";
import {LinkedinImage} from "../../assets/images/linkedin";
import {FacebookImage} from "../../assets/images/facebook";
import Bubbles from "../../components/Bubble/Bubbles";
import Loader from "react-native-modal-loader";
import  {getToken} from "../../endpoints/auth";
import {axios} from "../../endpoints/axios";


const Auth: () => Node = ({navigation}) => {
  const [login, onChangeLogin] = React.useState("");
  const [pass, onChangePass] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const submitHandler = () => {
    const authData = {
      username: login,
      password: pass
    };
    getToken(authData).then(response => {
      setIsLoading(false);
      if (response.status === 200) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data["Token"]}`;
        axios.defaults['Refresh'] = response.data["Refresh"];
        axios.defaults['Token'] = response.data["Token"];
        onChangeLogin("");
        onChangePass("");
        navigation.navigate('Main')
      }
    }).catch((error) => {
      setIsLoading(false);
      if (error.message === "Request failed with status code 400") {
        alert("Неверный логин или пароль");
      }
    });
    setIsLoading(true);
  }


  return (
    <View style={{backgroundColor: "#297fb8", flex: 1}}>
      <Loader loading={isLoading} color="#297fb8"/>
      <Bubbles/>
      <View style={styles.header}>
        {!isKeyboardVisible && (
          <Text style={styles.textOctopus}>OCTOPUS</Text>
        )}
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
        <TouchableOpacity style={styles.submit} onPress={() => submitHandler()}>
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

      <View style={styles.footer} vi>
        {!isKeyboardVisible && (
          <TouchableOpacity style={styles.toRegistrationButton} onPress={() =>
            navigation.navigate('Registration')
          }>
            <Text style={styles.toRegistrationButtonText}>У меня нет аккаунта</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};


export default Auth;
