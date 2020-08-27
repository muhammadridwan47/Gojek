
import React from 'react';
import {
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Home,NewsDetail} from './src/containers/pages';


const tes1 = () => {
  return <Text>halaman tes 1</Text>
}
const tes2 = () => {
  return <Text>halaman tes 2</Text>
}
const tes3 = () => {
  return <Text>halaman tes 3</Text>
}
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen   options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen name="Profile" component={NewsDetail} />
        <Stack.Screen name="tes1" component={tes1} />
        <Stack.Screen name="tes2" component={tes2} />
        <Stack.Screen name="tes3" component={tes3} />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}

export default App;


