import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  headerText: {
    fontSize: 28,
    marginTop: 10,
    marginLeft: 20,
    fontFamily: 'NunitoBold',
  },
  header: {
    height: 80,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  progressHeader: {
    height: 66,
    flexDirection: 'row',
  },
  closeWrapper: {
    margin: 21,
  },
  footer:{
    flex:0.1,
    backgroundColor: 'white',
  },
  progress: {
    marginRight: 23,
    marginTop: 23,
    marginBottom: 23,
    borderRadius: 16,
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  progress1: {
    marginTop: 23,
    marginBottom: 23,
    backgroundColor: '#34ACE0',
    zIndex: 0,
  },
  progress2: {
    marginRight: 23,
    marginTop: 23,
    marginBottom: 23,
    borderRadius: 16,
  },
  textWrapperDiscription: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDiscription: {
    fontFamily: 'NunitoBold',
    fontSize: 20,
  },
  options: {
    borderWidth: 2,
    borderColor: '#C1CFE2',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 4,
    borderRadius: 16,

  },
  optionsText: {
    fontFamily: 'NunitoBold',
    fontSize: 32,
    color: "#97A4B7",
  },
  rightOptionsText: {
    color: "#97A4B7",
    fontFamily: 'NunitoBold',
    fontSize: 64,
  },
  kanaWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  kanaRight: {
    flex:1,
    margin: 10,
    marginTop: 20,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#C1CFE2",
    alignItems: 'center',
    justifyContent: 'center',
  },
  continue: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:0.1,
    backgroundColor: '#34ACE0',
    marginTop: 4,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 16,
  },
  continueText: {
    fontFamily: 'NunitoBold',
    fontSize: 20,
    color: 'white',
  },
  symvol: {
    backgroundColor: '#D4F4D3',
    margin:4,
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,

  },
  symvol2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  kanaLearnSymbolText: {
    fontFamily: 'NunitoBold',
    color: '#444A51',
    fontSize: 24,
  },
  results: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerResultText: {
    fontFamily: 'NunitoBold',
    color: '#444A51',
    fontSize: 24,
  }
});
