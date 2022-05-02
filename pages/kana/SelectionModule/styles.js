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
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 26,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  optionsText: {
    fontFamily: 'NunitoBold',
    fontSize: 32,
  },
  rightOptionsText: {
    fontFamily: 'NunitoBold',
    fontSize: 64,
  },
  kanaWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  kanaRight: {
    backgroundColor: "#BBDDF5",
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continue: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:0.1,
    backgroundColor: '#34ACE0',
    margin: 20,
    borderRadius: 16,
  },
  continueText: {
    fontFamily: 'NunitoBold',
    fontSize: 20,
    color: 'white',
  },
});
