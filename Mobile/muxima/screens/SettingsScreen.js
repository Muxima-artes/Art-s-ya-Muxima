import React from 'react';
import { StyleSheet, InteractionManager, ScrollView, Text, Image, View, TouchableOpacity, TextInput } from 'react-native';

import * as FirebaseAPI from '../modules/firebaseAPI';

export default class SettingsScreen extends React.Component {

  logout(navigation) {
    // FirebaseAPI.logoutUser()
    InteractionManager.runAfterInteractions(() => {
      navigation.navigate('Auth');
    })
  }

  static navigationOptions = ({ navigation, logout }) => ({
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
        }}>Configurações</Text>
        <TouchableOpacity onPress={() => {
          FirebaseAPI.logoutUser()
          InteractionManager.runAfterInteractions(() => {
            navigation.navigate('Auth');
          })
        }}>
          <Text style={{
            fontWeight: "bold",
            fontSize: 18,
          }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  });

  render() {
    const { logout } = this;
    const { navigation } = this.props.navigation;
    return(
      <ScrollView style={styles.container}>
        <View style={styles.user}>
          <View style={styles.userPhoto}/>
          <View style={styles.userProfile}>
            <Text style={{fontWeight:"bold"}}>Marcelo Rodrigues Campos</Text>
            <Text>avaliaçoes positivas: 80%</Text>
            <Text>email@teste.com.br</Text>
            <Text>11964665563</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.register}
            onPress={() => this.props.navigation.navigate('AddProduct')}
          >
            <View>
              <Text style={styles.registerText}>Anunciar</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.titleText}>Seus produtos</Text>
        <View style={styles.posts}>

          <View style={styles.post} >
            <Text style={styles.postName}>Carro</Text>
            <View style={styles.postImageView}>
              <Image style={styles.postImage} source={require('../assets/images/vestido.jpg')}/>
            </View>
            <View style={styles.postDesc}>
              <Text style={styles.rate}>**** rate</Text>
              <Text style={styles.date}>created date</Text>
            </View>
          </View>

          <View style={styles.post} >
            <Text style={styles.postName}>Carro</Text>
            <View style={styles.postImageView}>
              <Image style={styles.postImage} source={require('../assets/images/vestido.jpg')}/>
            </View>
            <View style={styles.postDesc}>
              <Text style={styles.rate}>**** rate</Text>
              <Text style={styles.date}>created date</Text>
            </View>
          </View>

          <View style={styles.post} >
            <Text style={styles.postName}>Carro</Text>
            <View style={styles.postImageView}>
              <Image style={styles.postImage} source={require('../assets/images/vestido.jpg')}/>
            </View>
            <View style={styles.postDesc}>
              <Text style={styles.rate}>**** rate</Text>
              <Text style={styles.date}>created date</Text>
            </View>
          </View>


        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 15,
    margin: 20,
    backgroundColor: '#fff',
  },
  user: {
    flexDirection: "row",
    margin: 10,
  },
  userPhoto: {
    flex: 1,
    backgroundColor: "#5cdb7c",
    borderRadius: 50,
  },
  userProfile: {
    margin: 20,
    flex: 2,
  },
  register: {
    borderWidth: 2,
    borderColor: "#5cdb7c",
    backgroundColor: "white",
    width: "100%",
    padding: 15,
    marginTop: '5%',
  },
  registerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5cdb7c",
  },









  titleText: {
    fontSize: 20,
    margin: 10,
  },

  posts: {
    flexDirection: "row",
    flexWrap: "wrap",
    // alignContent: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 5,
  },
  post: {
    backgroundColor: "white",
    elevation: 6,
    borderRadius: 3,
    width: "45%",
    height: 175,
    marginBottom: 15,
  },
  postName: {
    marginLeft: 10,
    padding: 5,
    fontSize: 14,
  },
  postImageView: {
    borderColor: "gray",
    // borderBottomWidth: 2,
    // borderTopWidth: 2,
    height: 10,
  },
  postImage: {
    resizeMode: "stretch",
    maxWidth: "100%",
    maxHeight: 80,
  },
  postDesc: {
    padding: 5,
    marginLeft: 10,
    marginTop: 80,
  }
});