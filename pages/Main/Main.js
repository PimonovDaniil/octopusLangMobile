import React, {useEffect} from 'react';
import type {Node} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {logout, refreshToken, token} from "../../store/token";
import {useStore} from "effector-react";
import authEndpoints, {checkToken} from "../../endpoints/auth";
import Loader from "react-native-modal-loader";

const Main: () => Node = ({ navigation }) => {
  const myToken = useStore(token)
  const myRefreshToken = useStore(refreshToken)
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    if(myToken===""){
      navigation.navigate('Auth');
    }
  });

  const checkTokenHandler = () => {
    checkToken(myToken).then(response => {
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
      <Text>Token={myToken}</Text>
      <Text>Refresh token={myRefreshToken}</Text>
      <Text>Main</Text>
      <Button
        onPress={()=> {
          logout();
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

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default Main;
