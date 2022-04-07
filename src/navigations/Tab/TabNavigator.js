import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import ListStackScreen from '../stack/ListStackScreen';
import AccountStackScreen from '../stack/AccountStackScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="List"
          component={ListStackScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="list" size={26} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Account"
          component={AccountStackScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="person" size={26} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
