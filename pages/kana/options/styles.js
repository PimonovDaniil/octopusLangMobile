import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  footer:{
    flex:0.1,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize:28,
    marginTop: 10,
    marginLeft: 20,
    fontFamily: 'NunitoBold',
  },
  header: {
    height: 80,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  namePageText: {
    fontStyle: "normal",
    fontSize: 32,
    lineHeight: 35,
    textAlign: 'center',
    fontFamily: 'NunitoBold',
    marginTop: 20,
  },
  kanaBox: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 20,
    borderRadius: 16,
  },
  kanaSwitsher: {
    height: 50,
    flexDirection: 'row',
  },
  hiraganaText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 16,
  },
  katakanaText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 16,
  },
  progress: {
    backgroundColor: '#C1CFE2',
    height: 15,
    margin: 20,
    borderRadius: 10,
  },
  kanaResult: {
    padding: 3,
    flex: 1,
    backgroundColor: "#F1FAFF",
    borderRadius: 16,
    marginLeft: 20,
    marginRight: 20,
  },
  learnButton: {
    flex: 0.15,
    margin: 20,
    backgroundColor: "#34ACE0",
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  learnText: {
    color: 'white',
  },
  lineKana: {

  },
  line: {

  },
  symvol: {
    backgroundColor: '#FFBDBD',
    margin:3,
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  symvol2: {
    paddingTop: '35%',
    paddingBottom: '35%',
  },
  switchHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  switchIndicate: {
    flexDirection: "row",
  },
  firstButton: {
    backgroundColor: '#C1CFE2',
    height: 10,
    width: 10,
    borderRadius: 50,
  },
  secondButton: {
    backgroundColor: '#C1CFE2',
    height: 10,
    width: 10,
    borderRadius: 50,
    marginLeft: 5,
  },
  lineSeparate: {
    flex: 1,
    backgroundColor: 'black',
    height: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  groupName: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  }
  });
