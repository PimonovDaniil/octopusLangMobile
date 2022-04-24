import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  footer:{
    flex:0.2,
    backgroundColor: 'white',
  },
  kana: {
    flex: 1,
  },
  katakanaBox: {
    backgroundColor: 'white',
    borderRadius: 14,
    flex: 1,
    margin: 20,
  },
  headerText: {
    fontSize:28,
    marginTop: 10,
    marginLeft: 20,
  },
  hiraganaBox: {
    backgroundColor: 'white',
    borderRadius: 14,
    flex: 1,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  cardText: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCardText:{
    fontSize: 28,
  },
  cardButtons: {
    flex: 1,
  },
  cardButtonsTop: {
    flex: 1,
    flexDirection: "row",
  },
  cardButtonsTopButton: {
    flex: 1,
    backgroundColor: '#F1FAFF',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 16,
  },
  cardButtonsBottom: {
    flex: 1,
    backgroundColor: '#34ACE0',
    margin: 10,
    borderRadius: 16,
  },
  progressBar: {
    backgroundColor: '#C1CFE2',
    flex: 0.08,
    borderRadius: 10,
    margin: 20,
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
});
