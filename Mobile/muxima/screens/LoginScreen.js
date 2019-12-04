import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Platform,
  TextInput,
  TouchableOpacity,
 } from 'react-native';
import firebase from 'firebase'
import * as FirebaseAPI from '../modules/firebaseAPI';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  
  static navigationOptions = {
    header: null,
  };

  state = {
    email: "",
    password: ""
  };

  componentDidMount() {
    this.watchAuthState(this.props.navigation)
  }

  watchAuthState(navigation) {
    firebase.auth().onAuthStateChanged(function(user) {
      console.log('onAuthStatheChanged: ', user)
      
      if (user) {
        navigation.navigate('Main');
      }
    });
  }

  createUser() {
    FirebaseAPI.createUser(this.state.email, this.state.password)
  }

  signIn() {
    FirebaseAPI.signInUser(this.state.email, this.state.password)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Login</Text>
          <Text>Email</Text>
          <TextInput 
            style={styles.textInput}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
          />
          <Text>Senha</Text>
          <TextInput 
            style={styles.textInput}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
          />

          <TouchableOpacity
            style={styles.login}
            onPress={() => this.signIn()}
          >
            <View>
              <Text style={styles.loginText}>Logar</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.register}
            onPress={() => this.createUser()}
          >
            <View>
              <Text style={styles.registerText}>Registrar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    // alignItems: 'center',
    // marginHorizontal: 50,
    margin: 20,
    justifyContent: "center",
    // marginTop: 100,
    // paddingTop: '50%',
  },
  textInput: {
    marginBottom: 20,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    fontSize: 17,
    lineHeight: 24,
    width: '100%',
  },
  text: {
    fontSize: 36, //32
    fontWeight: "bold",
    color: "black",
    // lineHeight: 24,
    marginBottom: '10%',
  },
  login: {
    backgroundColor: "#5cdb7c",
    width: "100%",
    padding: 15,
    marginTop: '5%',
  },
  register: {
    borderWidth: 2,
    borderColor: "#5cdb7c",
    backgroundColor: "white",
    width: "100%",
    padding: 15,
    marginTop: '5%',
  },
  loginText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  registerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5cdb7c",
  },
});
