import {View, Text} from 'react-native';
import React from 'react';
import ListScreen from '../../screens/List/ListScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const ListStack = createNativeStackNavigator();

const ListStackScreen = () => {
  return (
    <ListStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ListStack.Screen name="ListScreen" component={ListScreen} />
    </ListStack.Navigator>
  );
};

export default ListStackScreen;
