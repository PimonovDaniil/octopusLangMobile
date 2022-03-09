import React, {useEffect} from 'react';
import type {Node} from 'react';
import {Button, Text, View} from 'react-native';
import  {checkToken} from "../../endpoints/auth";
import Loader from "react-native-modal-loader";
import {axios} from "../../endpoints/axios";

const Main: () => Node = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    if(!axios.defaults['Token']){
      navigation.navigate('Auth');
    }
  });

  const checkTokenHandler = () => {
    checkToken().then(response => {
      setIsLoading(false);
      if (response.status === 200) {
        alert("ok");
      }
    }).catch((error) => {
      setIsLoading(false);
      if (error.message === "Request failed with status code 400") { //TODO
        alert("Неверный логин или пароль");
      }
    });
    setIsLoading(true);
  }

  return (
    <View>
      <Loader loading={isLoading} color="#297fb8"/>
      <Text/>
      <Text>Main</Text>
      <Text>Token ={axios.defaults['Token']}</Text>
      <Text>Refresh ={axios.defaults['Refresh']}</Text>
      <Text>Main</Text>
      <Button
        onPress={()=> {
          axios.defaults['Token'] = "";
          axios.defaults['Refresh'] = "";
          navigation.navigate('Auth');
        }}
        title="logout"
      />
      <Button
        onPress={()=> checkTokenHandler()}
        title="Check token"
      />
    </View>
  );
};

export default Main;
