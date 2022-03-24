import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  header: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  },
  textOctopus: {
    fontStyle: "normal",
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 44,
    color: "#F1FAFF",
  },
  header2: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    padding: "10%",
  },
  textHeader2: {
    fontStyle: "normal",
    fontSize: 24,
    lineHeight: 24,
    color: "#F1FAFF",
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'NunitoBold',
  },
  mainText: {
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 19,
    color: "#F1FAFF",
    textAlign: 'center',
    fontFamily: 'NunitoBold',
  },
  langText: {
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 27,
    color: "#F1FAFF",
    textAlign: 'center',
    fontFamily: 'NunitoBold',
  },
  langBox: {
    position: 'relative',
    margin: 10,
    backgroundColor: 'rgba(41, 128, 185, 0.5)',
    height: 224,
    width: 210,
    borderRadius: 16,
    borderColor: "#F1FAFF",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedIm:{
    position: 'absolute',
    zIndex: 1,
    right: 10,
    top: 10
  },
  langScroll: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
  submit: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#EB5757",
    marginLeft: "30%",
    marginRight: "30%",
    height: 44,
    borderRadius: 100,
    marginTop: "3%",
    marginBottom: "3%"
  },
  submitText: {
    color: "white",
  },
});
