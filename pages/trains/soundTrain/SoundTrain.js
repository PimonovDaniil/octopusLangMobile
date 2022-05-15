import React, {useEffect, useRef} from 'react';
import type {Node} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {styles} from "./styles";
import {SvgXml} from "react-native-svg";
import {CloseImage} from "../../../assets/images/close";
import {vh} from "react-native-expo-viewport-units";
import {TouchableOpacity} from "react-native";
import {Audio} from 'expo-av';


const SoundTrain: () => Node = ({navigation, route}) => {
  const {text} = route.params;
  const [recording, setRecording] = React.useState();
  const AudioRecorder = useRef(new Audio.Recording());
  const AudioPlayer = useRef(new Audio.Sound());
  const [sound, setSound] = React.useState();

  React.useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  const soundHandle = () => {
    alert("kek");
  }

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log('Starting recording..');
      const {recording} = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    try {
      await AudioPlayer.current.unloadAsync();
      // Load the Recorded URI
      await AudioPlayer.current.loadAsync({uri: uri}, {}, true);

      // Get Player Status
      const playerStatus = await AudioPlayer.current.getStatusAsync();
      // Play if song is loaded successfully
      if (playerStatus.isLoaded) {
        if (playerStatus.isPlaying === false) {
          AudioPlayer.current.playAsync();
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Octopus</Text>
      </View>
      <View style={styles.headerFunctions}>
        <TouchableWithoutFeedback>
          <View style={styles.closeWrapper}>
            <SvgXml xml={CloseImage}/>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.progress}/>
      </View>
      <View style={{flex: 1}}>
        <View style={{flex: 0.2}}>
          <Text style={styles.TextHeader}>Произнесите на японском</Text>
        </View>
        <View style={styles.TextCard}>
          <Text>{text}</Text>
          <Text>{recording ? 'Stop Recording' : 'Start Recording'}</Text>
        </View>
        <TouchableOpacity style={styles.soundButtom} onPress={recording ? stopRecording : startRecording}>
          <View style={[styles.buttom, {width: vh(20)}]}>

          </View>
        </TouchableOpacity>
        <View style={{flex: 0.2}}>
          <View style={styles.DownButtom}>
            <Text>Пропустить</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}/>
    </View>
  );
};

export default SoundTrain;
