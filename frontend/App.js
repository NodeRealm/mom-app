import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Family Hub</Text>
      <Button title="Tasks" onPress={() => navigation.navigate('Tasks')} />
      <Button title="Meals" onPress={() => navigation.navigate('Meals')} />
      <Button title="Hygiene" onPress={() => navigation.navigate('Hygiene')} />
      <Button title="Schedule" onPress={() => navigation.navigate('Schedule')} />
      <Button title="Period" onPress={() => navigation.navigate('Period')} />
    </View>
  );
}

function SimpleScreen({ route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{route.name} screen placeholder</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tasks" component={SimpleScreen} />
        <Stack.Screen name="Meals" component={SimpleScreen} />
        <Stack.Screen name="Hygiene" component={SimpleScreen} />
        <Stack.Screen name="Schedule" component={SimpleScreen} />
        <Stack.Screen name="Period" component={SimpleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
