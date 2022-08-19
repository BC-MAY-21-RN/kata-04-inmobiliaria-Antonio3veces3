import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Icon } from "@rneui/themed"; 

const PropertyCard = () => {
  const [color, setColor] = useState("#1B882F");
  const [like, setLike] = useState(true);
  const changeColor = ()=>{
    setLike(!like);
    (like)? setColor("#1B882F") : setColor("#AC2C0C")
  }
  const img = {
    uri: "https://assets.easybroker.com/property_images/1016795/15346981/EB-CW6795.jpg?version=1555173574",
  };
  return (
    <View style={styles.container}>
      <View style={styles.imgView}>
        <ImageBackground source={img} style={styles.img} imageStyle={{borderRadius: 10}}>
            <View style={styles.ratingView}>
                <Icon style={styles.numberRating} name= "star" color={"#E9C234"} type="material-community"/>
                <Text style={styles.numberRating}>4.7</Text>
            </View>
        </ImageBackground>
      </View>

      <View style={styles.dataView}>
            <Text style={styles.title}>The Willows</Text>

            <View style={styles.addressView}>
            <Icon  name="map-marker" type="material-community"/>
            <Text style={styles.address}>
            3517 W. Gray St. Utica</Text>
            </View>
            
            <View style={styles.viewDescription}>
            
            <Icon  name="bed-king-outline" type="material-community"/>
              <Text style={styles.description}>
              3</Text>
            
              <Icon  name="shower" type="material-community"/>
            <Text style={styles.description}>2</Text>
            
            <Icon  name="aspect-ratio" type="material-community"/>
            <Text style={styles.description}>230 ft^2</Text>

            </View>

            <View style={styles.priceView}>
            <Text style={styles.price}>$440/m</Text>
            <Icon  name="heart-circle" type="material-community" size={40} style={styles.like} color={color} onPress={changeColor}/>
            </View>
            
            
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 8,
    width: "92%",
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
    marginTop: 8,
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
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'center'
  },
  address: {
    fontSize: 13,
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
    marginTop: 14,
    fontWeight: 'bold',
  },
  priceView: {
    width: '100%',
    flexDirection: 'row'
  },
  like: {
    marginTop: 8,
    marginLeft: 75,
  }
});

export default PropertyCard;
