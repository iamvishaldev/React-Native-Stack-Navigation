import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home"
        component={HomeScreen}
        />
        <Stack.Screen
        name="Details"
        component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({navigation})=>{

  let data = {name: "vishal",email:"yvishal706@gmail.com",address:"Delhi"}

  return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text>Welcome To Home Screen</Text>
      <Button title="Go to the Details"  onPress={()=>navigation.push('Details',data)}/>
    </View>
  )
}

const DetailsScreen=({route})=>{ //route as props to get the value from Home
  console.warn(route.params);
  let data = route.params
  return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text>Welcome To Detail Screen</Text>
      <Text style={{fontSize:30}}>{data.name}</Text>
      <Text style={{fontSize:30}}>{data.email}</Text>
      <Text style={{fontSize:30}}>{data.address}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
