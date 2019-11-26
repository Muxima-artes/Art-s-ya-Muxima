import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  TextInput
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { genericTypeAnnotation } from '@babel/types';
import { getCurrentFrame } from 'expo/build/AR';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        
        {/* <TextInput style={styles.searchInput} placeholder="What are you looking for?"></TextInput> */}

        <View style={styles.titleView}>
          <Text style={styles.titleText}>Popular itens</Text>
          <Text style={styles.titleTextPartner}>See All</Text>
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
            <Text>Anuncio ?</Text>
      </View>
    </View>
  );
}

// HomeScreen.navigationOptions = {
//   header: null,
// };
HomeScreen.navigationOptions = {
  header: ( /* Your custom header */
    <View
      style={{
        height: 90,
        width: "100%",
        paddingTop: 20,
        elevation: 6,
        backgroundColor: "white",
      }}
    >
      <View style={{
        width: "90%",
        margin: 10,
        marginTop: 18,
        flexDirection: "row",
        // backgroundColor: "grey",
        justifyContent: "space-between",
      }}>
        <View
          style={{
            backgroundColor: "#5cdb7c",
            borderRadius: 50,
            width: 40,
            height: 40,
          }} />
        {/* <Text style={{color: "black", fontSize: 22, fontWeight: "bold", textAlignVertical: "center"}}>Muxima</Text> */}
        <TextInput 
          style={{
            // display: "none",
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
          placeholder="What are you looking for?"
        />
        {/* <View style={{
          display: "none",
          flexDirection: "row"
        }}>
          <View
            style={{
              backgroundColor: "#5cdb7c",
              borderRadius: 50,
              width: 40,
              height: 40,
            }}
          />
          <View
            style={{
              marginLeft: 10,
              backgroundColor: "#5cdb7c",
              borderRadius: 50,
              width: 40,
              height: 40,
            }}
          />
        </View> */}

      </View>
    </View>
  )
  // title: 'Muxima',
  // headerStyle: {
  //   borderColor: "grey",
  // },
  // headerTintColor: '#fff',
  // headerTitleStyle: {
  //   color: "black",
  //   fontWeight: 'bold',
  // },
};

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
    // backgroundColor: "gray",
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
    textAlign: "center",
    textAlignVertical: "center",
    width: "100%",
    backgroundColor: "white",
  },
// ----------------------------------

  categoriesView: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    // height: 250,
    paddingBottom: 2,
    paddingTop: 2,
    // backgroundColor: "gray",
  },
  categoriesItem: {
    // width: "46%",
    // var {height, width} = Dimensions.get('window');
    width: Dimensions.get('window').width / 2 - 10,
    height: 50,
    margin: 5,
    elevation: 6,
    borderRadius: 3,
    // borderColor: "#5cdb7c",
    // borderWidth: 1,
    backgroundColor: "white",
  },
  categoriesItemText: {
    fontSize: 20,
    textAlign: "center",
  },
});
