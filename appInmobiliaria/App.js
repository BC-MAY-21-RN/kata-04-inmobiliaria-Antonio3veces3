import { StyleSheet, Text, View } from 'react-native';
import PropertyCard from './components/card';
import AvailableList from './components/rentList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Rents</Text>
      <View style={styles.listView}>
      <AvailableList/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 40,
    fontSize: 25,
    fontWeight: 'bold'
  },
  listView: {
    alignItems: 'center',
    height: '90%',
    paddingVertical: 10,
  }
});
