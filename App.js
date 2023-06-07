import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import NewList from './screens/NewList';
import NewProduct from './screens/NewProduct';
import ListCatalog from './screens/ListCatalog';




export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="NewList"
          component={NewList}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="NewProduct"
          component={NewProduct}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="ListCatalog"
          component={ListCatalog}
          options={{
            headerShown:false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}