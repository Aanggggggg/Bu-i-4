import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const categories = [
  { id: '1', name: 'Pasta', image: require('../miy.jpg') },
  { id: '2', name: 'Pizza', image: require('../pizza.jpg') },
  // Thêm các danh mục khác tại đây
];

export default function CategoryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Detail', { categoryId: item.id })}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  text: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
});
