import React from 'react';
import { StyleSheet, ScrollView, Text, Image, View, TouchableOpacity, TextInput } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import firebase from 'firebase'
import '@firebase/firestore';

export default class AddProductScreen extends React.Component {  
    constructor(props) {
        super(props);
      }

    state = {
        name: null,
        image: null,
        imageUrl: null,
        blob: null,
        desc: null,
        amount: null,
        price: null,
    };

    componentDidMount() {
        this.getPermissionAsync();
      }
    
      getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Desculpa, preciso que me permita acessar suas fotos!');
          }
        }
      }
    
    uploadImage = async (uri) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        this.setState({blob:blob});
    }

      _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
          this.uploadImage(result.uri); 
        }
      };

    addProduct = () => {
        const dbh = firebase.firestore();
        dbh.collection("posts").add({
            name: this.state.name,
            // image: this.state.imageUrl,
            // date: Date(),
            price: this.state.price,
            desc: this.state.desc,
            // status: 1,
            // amount: this.state.amount,
            // amountBought: 0,
        });
        var ref = firebase.storage().ref().child("my-image");
        ref.put(this.state.blob);
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
          }}>Crie um novo produto</Text>
        </View>
      </View>
    )
  };

  render() {
    let { image } = this.state;
    return(
      <ScrollView style={styles.container}>

        <Text style={styles.titleText}>Nome</Text>
        <TextInput 
            style={styles.textInput}
            onChangeText={(text) => this.setState({name: text})}
            value={this.state.name}
        />
        <TouchableOpacity 
            style={styles.imageInput}
            onPress={() => this._pickImage()}
        >
        {image &&
          <Image source={{ uri: image }} style={{width: "100%", height: "100%"}}/>}
        </TouchableOpacity>
        <Text style={styles.titleText}>Descrição</Text>
        <TextInput 
            style={styles.textInput}
            onChangeText={(text) => this.setState({desc: text})}
            value={this.state.desc}
        />
        <Text style={styles.titleText}>Quantidade</Text>
        <TextInput 
            style={styles.textInput}
            onChangeText={(text) => this.setState({amount: text})}
            value={this.state.amount}
        />
        <Text style={styles.titleText}>Preço</Text>
        <View style={{flexDirection: "row"}}>
        <Text style={{fontSize: 22}}>R$ </Text>
        <TextInput 
            style={styles.textInput}
            onChangeText={(text) => this.setState({price: text})}
            value={this.state.price}
        />
        </View>
        <TouchableOpacity
            style={styles.button}
            onPress={() => this.addProduct()}
          >
            <View>
              <Text style={styles.buttonText}>Publicar</Text>
            </View>
        </TouchableOpacity>
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
  imageInput: {
    width: "100%",
    height: 200,
    elevation: 6,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#5cdb7c",
    width: "100%",
    padding: 15,
    marginTop: '5%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },

});