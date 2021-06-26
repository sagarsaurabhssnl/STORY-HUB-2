import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import write from './screens/write';
import read from './screens/read';

export default function App() {
  const main = createMaterialBottomTabNavigator();
  return (
    <NavigationContainer>
      <main.Navigator
        shifting={true}
        barStyle={{ backgroundColor: "#444" }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ }) => {
            if (route.name === 'Read') {
              return <Image source={require('./assets/read.png')} style={{ height: 30, width: 30 }} />;
            } else if (route.name === 'Write') {
              return <Image source={require('./assets/write.png')} style={{ height: 30, width: 30 }} />
            }
          },
        })}
      >
        <main.Screen name={"Read"} component={read} options={option.read} />
        <main.Screen name={"Write"} component={write} options={option.write} />
      </main.Navigator>
    </NavigationContainer>
  );
}

var option = {
  write: {
    tabBarColor: "#39B39C"
  },
  read: {
    tabBarColor: "#FD8469"
  }
};
