import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  header: {
    height: 80,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 28,
    marginTop: 10,
    marginLeft: 20,
    fontFamily: 'NunitoBold',
  },
  footer:{
    flex:0.1,
    backgroundColor: 'white',
  },
  textWrapperDiscription: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  textDiscription: {
    fontFamily: 'NunitoBold',
    fontSize: 20,
  },
  progress1: {
    marginTop: 23,
    marginBottom: 23,
    backgroundColor: '#34ACE0',
    zIndex: 0,
  },
  results: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress2: {
    marginRight: 23,
    marginTop: 23,
    marginBottom: 23,
    borderRadius: 16,
  },
  progressHeader: {
    height: 66,
    flexDirection: 'row',
  },
  closeWrapper: {
    margin: 21,
  },
  TextCard: {
    flex: 0.35,
    backgroundColor: '#BBDDF5',
    borderRadius: 16,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: 'NunitoBold',
  },
  sentenceText: {
    fontFamily: 'NunitoBold',
    fontSize: 20,
  },
  sentenceTextWrapper: {
    backgroundColor: "#F0F0F0",
    padding: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    margin: 5,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.15,
    backgroundColor: "#34ACE0",
    margin: 20,
    borderRadius: 16,
  },
  showreswords: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'blue',
    marginTop: 10,
    marginRight:20,
    marginLeft: 20,
    padding: 20,
    borderRadius: 16,
  },
  headerResultText: {
    fontFamily: 'NunitoBold',
    color: '#444A51',
    fontSize: 24,
  }
});
