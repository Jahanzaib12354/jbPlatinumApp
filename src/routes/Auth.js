import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/Auth/SplashScreen';
import HomeScreen from '../screens/Auth/HomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen'
import SignupScreen from '../screens/Auth/SignupScreen'
import OTPScreen from '../screens/Auth/OTPScreen'
import ForgetPasswordScreen from '../screens/Auth/ForgetPasswordScreen'
import NewPasswordScreen from '../screens/Auth/NewPasswordScreen'
const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
       <Stack.Screen name="SignupScreen" component={SignupScreen} />
       <Stack.Screen name="OTPScreen" component={OTPScreen}/>
       <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen}/>
       <Stack.Screen name="NewPasswordScreen" component = {NewPasswordScreen}/>
    </Stack.Navigator>
  );
};

export default Auth;