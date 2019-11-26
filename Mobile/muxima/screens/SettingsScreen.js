import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
// import * as firebase from 'firebase';
// import firebase from 'firebase'
import * as firebase from 'firebase';
import 'firebase/firestore';
// import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCr-70l2kyhKvJfaM6TCn0GYG8qbHIhLNw",
  authDomain: "muxima-artes.firebaseapp.com",
  databaseURL: "https://muxima-artes.firebaseio.com",
  projectId: "muxima-artes",
  storageBucket: "muxima-artes.appspot.com"
};

firebase.initializeApp(firebaseConfig);

const dbh = firebase.firestore();

dbh.collection("characters").doc("mario").set({
  employment: "plumber",
  outfitColor: "red",
  specialAttack: "fireball"
})

export default function SettingsScreen() {
  return(
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Login</Text>
        <View>
          <Text style={styles.inputsText}>Email</Text>
          <TextInput style={styles.inputs}></TextInput>
          <Text style={styles.inputsText}>Password</Text>
          <TextInput style={styles.inputs}></TextInput>
        </View>
        <TouchableOpacity style={styles.login}><Text style={styles.loginText}>Entrar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.register}><Text style={styles.registerText}>Registrar</Text></TouchableOpacity>
      </View>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  headerMode: 'none'
};


const styles = StyleSheet.create({
  container: {

  },
  form: {
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "space-around",
    // height: 250, // 300
    height: 420, // 450
    margin: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
  },
  inputsText: {
    fontSize: 14,
  },
  inputs: {
    marginBottom: 10,
    borderColor: "#5cdb7c",
    padding: 5,
    borderBottomWidth: 2,
    backgroundColor: "white",
  },
  login: {
    borderRadius: 5,
    elevation: 6,
    padding: 5,
    backgroundColor: "#5cdb7c",
  },
  loginText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 26,
    color: "white",
  },
  register: {
    borderRadius: 5,
    elevation: 6,
    borderColor: "#5cdb7c",
    borderWidth: 2,
    padding: 5,
    backgroundColor: "white",
  },
  registerText: {
    textAlign: "center",
    color: "#5cdb7c",
    textAlignVertical: "center",
    fontSize: 26,
  },
});