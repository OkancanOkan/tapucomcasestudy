import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../../screens/Account/AccountScreen";
import AccountDetailScreen from "../../screens/Account/AccountDetailScreen";

const AccountStack = createNativeStackNavigator();

const AccountStackScreen = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AccountStack.Screen name="account" component={AccountScreen} />
      <AccountStack.Screen
        name="AccountDetail"
        component={AccountDetailScreen}
      />
    </AccountStack.Navigator> 
  );
};

export default AccountStackScreen;
