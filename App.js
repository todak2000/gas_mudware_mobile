import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import Form from './components/Form';
import Result from './components/Result';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>

        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home} 
          options={{ headerShown: false, headerStyle:{
            backgroundColor: '#AA00FF',
            color:"#fff"
          } }}
        />
        <Stack.Screen 
          name="Form" 
          component={Form} 
    
          options={{ headerShown: false, headerStyle:{
            backgroundColor: '#AA00FF', 
            color:"#fff"
          } }}
        />
        <Stack.Screen 
          name="Result" 
          component={Result} 
          options={{ headerShown: false, headerStyle:{
            backgroundColor: '#AA00FF',
            color:"#fff"
          } }}
        />
        
      </Stack.Navigator>
          
        </NavigationContainer>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
