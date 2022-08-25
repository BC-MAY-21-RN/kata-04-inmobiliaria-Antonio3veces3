import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed"; 

const PropertyCard = ({item}) => {
  const [color, setColor] = useState("#1B882F");
  const [like, setLike] = useState(true);
  const changeColor = ()=>{
    setLike(!like);
    (like)? setColor("#1B882F") : setColor("#AC2C0C")
  }
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imgView}>
        <ImageBackground source={{uri: item.img}} style={styles.img} imageStyle={{borderRadius: 10}}>
            <View style={styles.ratingView}>
                <Icon style={styles.numberRating} name= "star" color={"#E9C234"} type="material-community"/>
                <Text style={styles.numberRating}>{item.rating}</Text>
            </View>
        </ImageBackground>
      </View>

      <View style={styles.dataView}>
            <Text style={styles.title}>{item.title}</Text>

            <View style={styles.addressView}>
            <Icon  name="map-marker" type="material-community"/>
            <Text style={styles.address}>
            {item.address}</Text>
            </View>
            
            <View style={styles.viewDescription}>
            
            <Icon  name="bed-king-outline" type="material-community"/>
              <Text style={styles.description}>
              {item.beds}</Text>
            
              <Icon  name="shower" type="material-community"/>
            <Text style={styles.description}>{item.bathroom}</Text>
            
            <Icon  name="aspect-ratio" type="material-community"/>
            <Text style={styles.description}>{item.area}</Text>

            </View>

            <View style={styles.priceView}>
            <Text style={styles.price}>${item.price}/m</Text>
            <TouchableOpacity style={styles.like} onPress={changeColor}>
              <Icon  name="heart-circle" type="material-community" size={45}  color={color}/>
            </TouchableOpacity>
            </View>
            
            
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 8,
    width: "100%",
    height: 180,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: '#E7F5F8',
    borderRadius: 10
  },
  imgView: {
    height: "80%",
    width: "35%",
},
img: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column-reverse'
  },    
  dataView: {
    marginLeft: 10,
    flexDirection: 'column',
    height: "80%",
    width: "62%",
  },
  ratingView: {
    width: 70,
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    backgroundColor: '#FBF7B1'
  },
  numberRating: {
    width: 25,
    marginRight: 2
  },
  viewDescription: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: 'bold'
  },
  addressView: {
    width: '90%',
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'center'
  },
  address: {
    fontSize: 12,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  description:{
    fontSize: 13,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
    
  },
  price: {
    fontSize: 18,
    marginTop: 9,
    fontWeight: 'bold',
  },
  priceView: {
    width: '100%',
    flexDirection: 'row'
  },
  like: {
    marginTop: 5,
    height: '90%',
    width: '25%',
    marginLeft: '40%',
  }
});

export default PropertyCard;
