import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  imageBackground: {
    display: "flex",
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: "center",
    marginTop: "5%",
    marginBottom: "5%",
  },
  textOctopus: {
    fontStyle: "normal",
    fontWeight: '900',
    fontSize: 32,
    lineHeight: 44,
    color: "#F1FAFF",
  },
  authorizationForm: {
    backgroundColor: 'rgba(41, 128, 185, 0.8)',
    opacity: 900,
    borderColor: "white",
    borderWidth: 1,
    marginRight: 34,
    marginLeft: 34,
    borderRadius: 16
  },
  authorizationFormHeader: {
    alignItems: "center",
    marginTop: "5%",
    marginBottom: "5%"
  },
  textAuth: {
    fontStyle: "normal",
    fontWeight: 'bold',
    fontSize: 28,
    lineHeight: 44,
    color: "#F1FAFF",
  },
  input: {
    borderColor: "white",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 64,
    color: "white",
  },
  submit: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#EB5757",
    marginLeft: "25%",
    marginRight: "25%",
    height: 44,
    borderRadius: 100,
    marginTop: "3%",
    marginBottom: "3%"
  },
  submitText: {
    color: "white",
  },
  diviningLine: {
    borderBottomColor: '#57A2D2',
    borderBottomWidth: 1,
    marginBottom: "5%",
    marginLeft: "25%",
    marginRight: "25%",
  },
  authorizationButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-around',
    marginBottom: "5%"
  },
  authorizationButton: {
    width: "25%",
    height: 48,
    backgroundColor: "#2576AB",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: 'center'
  },
  footer: {
    alignItems: "center",
    justifyContent: 'center',
    flex: 2
  },
  toRegistrationButton: {
    backgroundColor: 'rgba(41, 128, 185, 0.8)',
    alignItems: "center",
    justifyContent: 'center',
    borderColor: "white",
    borderWidth: 1,
    marginLeft: "25%",
    marginRight: "25%",
    marginTop: "10%",
    padding: "3%",
    borderRadius: 100
  },
  toRegistrationButtonText: {
    color: "white"
  },
});
