import React from 'react';
import { StyleSheet, ScrollView, Text, Image, View, TouchableOpacity, TextInput } from 'react-native';

import { RadioButton } from 'react-native-paper';

import firebase from 'firebase'
import '@firebase/firestore';

export default class AddProductScreen extends React.Component {  
    constructor(props) {
        super(props);
      }

    state = {
      checked: 'first',
      location: null,
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
          }}>Pagamento</Text>
        </View>
      </View>
    )
  };

  render() {
    const { checked } = this.state;

    function NUM() {
      return (
        <TextInput 
          style={styles.textInput}
          onChangeText={(text) => this.setState({location: text})}
          value={this.state.location}
        />
      );
    }

    function TRF() {
      return (
        <TextInput 
          style={styles.textInput}
          onChangeText={(text) => this.setState({location: text})}
          value={this.state.location}
        />
      );
    }

    function MB() {
      return (
        <TextInput 
          style={styles.textInput}
          onChangeText={(text) => this.setState({location: text})}
          value={this.state.location}
        />
      );
    }

    function Location() {
      return (
        <TextInput 
          style={styles.textInput}
          onChangeText={(text) => this.setState({location: text})}
          value={this.state.location}
        />
      );
    }

    return(
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.titleText}>Metodo de pagamento</Text>
          <View style={{flexDirection: "row"}}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => { this.setState({ checked: 'first' }); }}
            />
            <Text>TRF</Text>
          </View>
          <View style={{flexDirection: "row"}}>
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => { this.setState({ checked: 'second' }); }}
            />
            <Text>MB</Text>
          </View>
        </View>
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
  textInput: {
    marginBottom: 20,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    fontSize: 17,
    lineHeight: 24,
    width: '100%',
  },

});