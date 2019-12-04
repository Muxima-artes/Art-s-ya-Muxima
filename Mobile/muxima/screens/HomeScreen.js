import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  InteractionManager,
  TextInput,
} from 'react-native';

import * as FirebaseAPI from '../modules/firebaseAPI';

export default class HomeScreen extends React.Component {

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
          marginTop: 13,
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
          <View
            style={{
              backgroundColor: "#5cdb7c",
              borderRadius: 50,
              width: 40,
              height: 40,
            }} />
          <TextInput
            placeholder="O que você procura ?"
            style={{
              marginLeft: 15,
              flexGrow: 2,
              alignSelf: "center",
              padding: 10,
              color: "black",
              elevation: 6,
              borderRadius: 3,
              borderWidth: 1,
              borderColor: "#5cdb7c",
              backgroundColor: "white",
            }} 
          />
        </View>
      </View>
    )
  };

  logout(navigation) {
    console.log('logout() called', navigation)
    FirebaseAPI.logoutUser()

    InteractionManager.runAfterInteractions(() => {
      navigation.navigate('Auth')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>  
          <View style={styles.titleView}>
            <Text style={styles.titleText}>Itens populares</Text>
            <Text style={styles.titleTextPartner}>Ver todos</Text>
          </View>
          <ScrollView style={styles.exploreView} horizontal={true}>
            <TouchableOpacity style={styles.exploreItem}>
              <View style={styles.exploreItemImage}>
                <Image style={{resizeMode: "repeat"}} source={require('../assets/images/vestido.jpg')}/>
              </View>
              <View style={styles.exploreItemName}>
                <Text>Vestidos</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.exploreItem}>
              <View style={styles.exploreItemImage}></View>
              <View style={styles.exploreItemName}>
                <Text>Vestidos</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.exploreItem}>
              <View style={styles.exploreItemImage}></View>
              <View style={styles.exploreItemName}>
                <Text>Vestidos</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
  
          <Text style={styles.titleText}>Categorias</Text>
          <View style={styles.categoriesView}>
            <TouchableOpacity style={styles.categoriesItem}>
              <Text style={styles.categoriesItemText}>Camisa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoriesItem}>
              <Text style={styles.categoriesItemText}>Camisa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoriesItem}>
              <Text style={styles.categoriesItemText}>Camisa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoriesItem}>
              <Text style={styles.categoriesItemText}>Camisa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoriesItem}>
              <Text style={styles.categoriesItemText}>Camisa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoriesItem}>
              <Text style={styles.categoriesItemText}>Camisa</Text>
            </TouchableOpacity>
          </View>
  
        </ScrollView>
  
        <View style={styles.tabBarInfoContainer}>
          <TouchableOpacity onPress={() => {this.logout(this.props.navigation)}}>
            <Text style={styles.tabBarInfoText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  contentContainer: {
    paddingTop: 10,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  searchInput: {
    alignSelf: "center",
    width: "95%",
    padding: 10,
    color: "black",
    elevation: 6,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "white",
  },
  titleView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 20,
    margin: 10,
  },
  titleTextPartner: {
    marginRight: 10,
    fontSize: 16,
    color: "green",
  },
  exploreView: {
    flexDirection: "row",
    width: "100%",
    height: 160,
  },
  exploreItem: {
    width: 160,
    height: 140,
    margin: 10,
    borderRadius: 3,
    elevation: 6,
  },
  exploreItemImage: {
    width: "100%",
    height: "65%",
    backgroundColor: "grey",
  },
  exploreItemName: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
// ----------------------------------

  categoriesView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
    paddingBottom: 2,
    paddingTop: 2,
  },
  categoriesItem: {
    justifyContent: "center",
    width: "45%",
    height: 50,
    margin: 5,
    elevation: 6,
    borderRadius: 3,
    backgroundColor: "white",
  },
  categoriesItemText: {
    fontSize: 20,
    textAlign: "center",
  },
});
