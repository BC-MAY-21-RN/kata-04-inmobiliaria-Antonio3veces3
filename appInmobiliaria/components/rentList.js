import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  ScrollView,
} from "react-native";
import PropertyCard from "./card";
import { Icon } from "@rneui/themed";
import * as data from "../db/data.json";

const AvailableList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const color = item.id === selectedId ? "#F8F8F8" : "white";
    return(
        <PropertyCard item={item} textColor={{ color }} />
    ) 
  };

  return (
    <ScrollView style={styles.scrollView}>
      <FlatList
        data={data.available}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        style={styles.flatList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
    paddingHorizontal: 12,
    backgroundColor: "#F5F5F5",
  },
  flatList:{
    height: '90%',
    paddingVertical: 22,
  }
});

export default AvailableList;
