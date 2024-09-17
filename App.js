import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoryScreen from './screens/CategoryScreen';
import DetailScreen from './screens/DetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import SettingsScreen from './screens/SettingsScreen';
import { Image } from 'react-native';

// Khai báo các loại điều hướng
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Cấu hình các tab trong điều hướng dưới cùng
function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Categories" component={DrawerNavigator} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// Cấu hình các màn hình trong điều hướng ngăn kéo
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={CategoryScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

// Cấu hình điều hướng chính
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen
          name="Categories"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ route }) => ({
            title: `Category ${route.params?.categoryId || 'Details'}`,
            headerRight: () => (
              <Image
                source={{ uri: 'https://food.png' }}
                style={{ width: 24, height: 24, marginRight: 15 }}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
