import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput} from 'react-native';
import "./screens/HomeScreen" 
import HomeScreen from './screens/HomeScreen';
import ListCatalog from './screens/ListCatalog';

export default function App() {
  const name="jhorel"
  return  (
    // <HomeScreen/>
    <ListCatalog/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_input:{
    width:300,
    backgroundColor: "grey",
  }
});
