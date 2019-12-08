import React from 'react';
import { StyleSheet, ScrollView, Text, Image, View, TouchableOpacity, TextInput } from 'react-native';

import firebase from 'firebase'
import '@firebase/firestore';

export default class AddProductScreen extends React.Component {  
    constructor(props) {
        super(props);
      }

    state = {

    };

  static navigationOptions = {
    header: (
      <View
        style={{
          height: 80,
          width: "100%",
          paddingTop: 20,
          elevation: 6,
          backgroundColor: "white",
        }}
      >
        <View style={{
          width: "90%",
          margin: 10,
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
          <Text style={{
              fontWeight: "bold",
              fontSize: 18,
          }}>Categorias</Text>
        </View>
      </View>
    )
  };

  render() {
    return(
      <ScrollView style={styles.container}>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 20,
    margin: 10,
  },

});