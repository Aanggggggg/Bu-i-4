import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function DetailScreen({ navigation }) {
  const route = useRoute();
  const { categoryId } = route.params || {};

  React.useEffect(() => {
    navigation.setOptions({
      title: `Category ${categoryId}`,
    });
  }, [categoryId]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Category ID: {categoryId}</Text>
      {/* Fetch and display items based on categoryId here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
