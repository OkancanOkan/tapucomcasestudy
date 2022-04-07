import {View, Image, Text, StyleSheet, FlatList} from 'react-native';
import React, {useState, useEffect,useContext} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, Badge} from 'react-native-elements';
import cartContext from '../../store/CartContext';

const ListScreen = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const {cart,setCart}=useContext(cartContext);
  
  useEffect(() => {1
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())

      .then(data => {
        setProducts(data);
      })
      .catch(err => console.log(err));
  }, []);

  const addCart = (item) => {
    var cartItem = cart.find((q) => q.id == item.id);
    if (cartItem == undefined) {
      item.quantity = 1;
      setCart([...cart, item]);
      setTotalPrice(totalPrice + item.price);
    } else {
      cartItem.quantity = cartItem.quantity + 1;
      setCart([...cart]);
      setTotalPrice(totalPrice + item.price);
    }
  };
  const emptyCart= () => {
      setCart([]);
      setTotalPrice(0);
  }

  const renderItem = ({item}) => {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.product_containerImage}>
            <Image
              source={{uri: item.image}}
              style={styles.product_image}>
                  
              </Image>
          </View>
          <View style={{width: 250, padding: 10}}>
            <Text style={styles.product_title}>{item.title}</Text>
            <Text style={styles.product_price}>{item.price} TL</Text>
          </View>
        </View>
        {/*  This View for ADD CART icon and button */}
        <View style={styles.cart_icon}>
          <Ionicons
            style={{left: 100}}
            name="location-outline"
            color="#E82223"
            size={25}
          />
          <Button
            title="Sepete Ekle"
            containerStyle={{width: 300, marginRight: 20}}
            type="clear"
            titleStyle={{color: '#E82223'}}
            onPress={() => addCart(item)}
          />
        </View>
      </View>
    );
  };
  let xTotalPrice = (totalPrice+21.45);
  return (
    <View style={styles.container}>
      <View style={styles.product_container}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.product_total}>
        <Text style={styles.product_total_text}>Ürünlerin Toplamı :</Text>
        <Ionicons name="cart" size={30} color="#2189D9" />
        <Badge
          status="error"
          value={cart.length}
          containerStyle={styles.badge_container}
        />
      </View>
      <View style={styles.product_total_detail}>
        <Text style={styles.product_total_detail_text} nativeID="1">
          Toplam :{totalPrice.toFixed(2)}TL
        </Text>
        <Text style={styles.product_total_detail_text}> 
        Vergiler ve Kargo : 21.45 TL</Text>

        <View style={styles.product_total_price}>
        <Text style={{fontSize:20, fontWeight:"bold", color:"#000"}}>
            Genel Toplam :{(totalPrice ? xTotalPrice: 0).toFixed(2)}TL</Text>
      </View>
      </View>
      
      
      <View style={styles.emptyCart}>
        <Ionicons
            style={{left:100}}
            name="trash-outline"
            color="#E82223"
            size={25}
        />
        <Button 
            title="Sepeti Boşalt"
            containerStyle={{
                width:300,
                marginHorizontal:10,
                marginVertical:10,
            }}
            type="clear"
            titleStyle={{color:"#E82223"}}
            onPress={() => emptyCart()}
            
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 9,
  },
  product_container: {
    flex: 6,
    marginTop: 10,
    marginHorizantal: 24,
  },
  product_container_image: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    shadowRadius: 6,
    elevation: 8,
    shadowOpacity: 0.7,
    backgroundColor: 'white',
    borderRadius: 16,
    marginVertical: 5,
  },
  product_title:{
    justifyContent: "space-between",
    fontWeight: "600",
    color: "black",
    fontFamily: "Nunito Sans",
    fontSize: 20,
  },
  product_total: {
    flex: 1,
    marginHorizontal: 24,
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 16,
  },
  product_total_detail:{
    flex: 1,
    marginHorizontal: 24,
  },
  product_total_text: {
    fontSize: 24,
    color: "black",
    fontFamily: "Nunito Sans",
  },
  product_total_detail_text:{
    lineHeight: 28,
    fontFamily: "SF Pro Display",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    letterSpacing: 0.4,
    color: "#000",
  },
  product_total_price: {
    marginTop: 6,
    
    
  },
  product_image: {
    width: 70,
    height: 74.4,
    borderRadius: 12,
    marginRight: 5,
  },
  product_containerImage: {
    width: 72,
    height: 75.4,
    borderRadius: 12,
    marginRight: 5,
  },
  product_price: {
    justifyContent: 'space-between',
    fontSize: 20,
  },
  
  cart_icon: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  badge_container:{
    position: "absolute", 
    top: 35,
    right: 117 
  },
  emptyCart:{
      flexDirection:"row",
      alignItems:"center"
  }
});
export default ListScreen;
