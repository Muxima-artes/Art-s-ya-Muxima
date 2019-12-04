import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Links',
  // };
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
          }}>Links</Text>
        </View>
      </View>
    )
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.productImage}>
  
        </View>
        <View style={styles.product}>
          <Text style={styles.productTitle}>Vestido Sereia Floral</Text>
          <Text style={styles.productReviews}>***** reviews</Text>
          <Text style={styles.productPrice}>R$21</Text>
          <View style={{flexDirection: "row",width: "100%", justifyContent: "space-between"}}>
            <Text style={{fontSize: 20, color: "green"}}>12x sem juros</Text>
            <Text style={{fontSize: 20, color: "green"}}>Frete gratis</Text>
          </View>
          <TouchableOpacity style={styles.productColors}>
            <Text style={styles.productColorsText}>Cor:Preto</Text>
            <Text style={styles.productColorsText}>Product Img</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productAmount}>
            <Text style={styles.productAmountText}>Quantidade</Text>
            <TextInput style={styles.productAmountInput}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buy}>
            <Text style={styles.buyText}>Comprar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addToCart}>
            <Text style={styles.addToCartText}>Add to cart</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity style={styles.addToFav}></TouchableOpacity>
            <TouchableOpacity style={styles.share}></TouchableOpacity>
          </View>
          <Text style={styles.titleText}>Explore</Text>
          <ScrollView style={styles.exploreView} horizontal={true}>
            <TouchableOpacity style={styles.exploreItem}></TouchableOpacity>
            <TouchableOpacity style={styles.exploreItem}></TouchableOpacity>
            <TouchableOpacity style={styles.exploreItem}></TouchableOpacity>
          </ScrollView>
          <Text style={styles.titleText}>Desc</Text>
          <Text style={styles.productDesc}>teste tacusacuancasd asj dajdada sd asda
            cas ca jcsanj casnacas cansc sajcj asc jaksncansc ascjanck akscasckascsa
            csacnajscnajs cacsa jcascja scjacsancj ansjajcascasj can cnsacjacsjacasjca
          </Text>
          <View style={styles.user}>
            <Text style={{fontWeight:"bold"}}>Marcelo Rodrigues Campos</Text>
            <Text>avaliaçoes positivas: 80%</Text>
            <Text>email@teste.com.br</Text>
            <Text>11964665563</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  productImage: {
    width: "100%",
    height: 200,
    backgroundColor: "gray",
  },
  product: {
    margin: 10,
  },
  productTitle: {
    fontWeight: "600",
    fontSize: 26,
  },
  productReviews: {
    fontSize: 15,
  },
  productPrice: {
    fontWeight: "100",
    fontSize: 36,
  },
  productDesc: {
    margin: 10,
    fontSize: 14,
  },
  productColors: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
    height: 40,
    backgroundColor: "white",
    elevation: 6,
    marginTop: 5,
    borderRadius: 5,
  },
  productColorsText: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    color: "grey"
  },
  productAmount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
    height: 40,
    backgroundColor: "white",
    elevation: 6,
    marginTop: 5,
    borderRadius: 5,
  },
  productAmountText: {
    marginLeft: 20,
    marginRight: 20,
    color: "grey",
    fontSize: 22,
  },
  productAmountInput: {
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 2,
    borderColor: "gray",
    borderWidth: 2,
  },
  buy:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "100%",
    height: 40,
    backgroundColor: "#5cdb7c",
    // #228ce3
    elevation: 6,
    marginTop: 5,
    borderRadius: 5,
  },
  buyText: {
    color: "white",
    fontSize: 22,
  },
  addToCart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "100%",
    height: 40,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#5cdb7c",
    elevation: 6,
    marginTop: 5,
    borderRadius: 5,
  },
  addToCartText: {
    color: "#5cdb7c",
    fontSize: 22,
  },
  titleText: {
    fontSize: 20,
    margin: 10,
  },
  exploreView: {
    flexDirection: "row",
    width: "100%",
    height: 160,
  },
  exploreItem: {
    backgroundColor: "white",
    width: 160,
    height: 140,
    margin: 10,
    borderRadius: 3,
    elevation: 6,
  },
  user: {
    margin: 10,
  }
});


