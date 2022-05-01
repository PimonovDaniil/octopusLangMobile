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
    margin: 10,
    borderRadius: 16,
  },
  kanaSwitsher: {
    height: 50,
    flexDirection: 'row',
  },
  checkedBox: {
    position: 'absolute',
    right: 10,
  },
  nigoryCheckbox: {
  },
  uncheckedBox: {

  },
  hiraganaText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 16,
  },
  katakanaText: {
    fontFamily: 'NunitoBold',
    fontSize: 18,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 16,
  },
  kanaHeaderText: {
    fontFamily: 'NunitoBold',
    fontSize: 18,
  },
  kanaLittleHeaderText: {
    fontFamily: 'NunitoBold',
    fontSize: 16,
  },
  kanaLittleSeparateText: {
    fontFamily: 'NunitoBold',
    fontSize: 14,
  },
  kanaLearnButtonText: {
    fontFamily: 'NunitoBold',
    color: 'white',
    fontSize: 22,
  },

  kanaLearnSymbolText: {
  fontFamily: 'NunitoBold',
    color: '#444A51',
    fontSize: 18,
},
  progress: {
    backgroundColor: '#C1CFE2',
    height: 15,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  kanaResult: {
    padding: 3,
    flex: 1,
    backgroundColor: "#F1FAFF",
    borderRadius: 16,
    marginLeft: 10,
    marginRight: 10,
  },
  learnButton: {
    flex: 0.12,
    margin: 10,
    backgroundColor: "#34ACE0",
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  symvol: {
    backgroundColor: '#D4F4D3',
    margin:3,
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,


  },
  symvol2: {
    //paddingTop: '25%',
    // height: 1*vw,
   // paddingBottom: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
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

    backgroundColor: 'black',
    height: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  groupName: {
    backgroundColor: "#2F80E9",
    borderRadius: 16,
    height: 22,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  }
  });
