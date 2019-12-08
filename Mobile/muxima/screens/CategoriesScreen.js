import React from 'react';
import { StyleSheet, FlatList, ScrollView, Text, View, TouchableOpacity } from 'react-native';

import * as firebase from 'firebase'

export default class CategoriesScreen extends React.Component {  
    constructor(props) {
      super(props);
      this.ref = firebase.firestore().collection('categories');
      this.unsubscribe = null;
      this.state = {
        categories: [],
        loading: true,
      };
    }

    componentDidMount() {
      this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    }
  
    componentWillUnmount() {
      this.unsubscribe();
    }
  
    onCollectionUpdate = (querySnapshot) => {
      const categories = [];
      querySnapshot.forEach((doc) => {
        const { name } = doc.data();
        categories.push({
          key: doc.id, 
          doc, 
          name,
        });
      });
      this.setState({
        categories,
        loading: false,
     });
     console.log(categories);
    }
  


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

  function Category({ title }) {
    return (
      <TouchableOpacity 
        style={styles.category}
        // onPress={}
      >
        <Text style={styles.categoryText}>{title}</Text>
      </TouchableOpacity>
    );
  }
    return(
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.categories}>
            <FlatList
              data={this.state.categories}
              renderItem={({ item }) => <Category title={item.name}/>}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
  },
  categories: {
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  category: {
    width: "100%",
    height: 60,
    elevation: 6,
    marginBottom: 5,
    backgroundColor: "white",
  },
  categoryText: {
    margin: 10,
    fontSize: 22,
  },
  // titleText: {
  //   fontSize: 20,
  //   margin: 10,
  // },

});