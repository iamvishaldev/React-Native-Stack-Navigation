import 'react-native-gesture-handler';
import React from 'react';
import {createDrawerNavigator, getIsDrawerOpenFromState} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Setting" component={SettingScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ()=>{
  return(
    <View style={{fontSize:20,flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text>Home Screen</Text>
    </View>
  )
}

const SettingScreen = ()=>{
  return(
    <View style={{fontSize:20,flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text>Setting Screen</Text>
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


