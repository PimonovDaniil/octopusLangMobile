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
});
