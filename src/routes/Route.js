// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import AlexScreen from '../screens/Main/AlexScreen';
// import OfferRideScreen from '../screens/Main/OfferRideScreen';
// import FindRiderScreen from '../screens/Main/FindRiderScreen';
// import FindJoinScreen from '../screens/Main/FindJoinScreen';
// import FindLocation from '../screens/Main/FindLocation';

// import NewChatScreen from '../screens/Main/NewChatScreen';
// import ChatDetailScreen from '../screens/Main/ChatDetailScreen';
// import IncomingCallScreen from '../screens/Main/IncomingCallScreen';
// import GroupChatScreen from '../screens/Main/GroupChatScreen';

// import RiderArriveScreen from '../screens/Main/RiderArriveScreen';
// import RiderLocation from '../screens/Main/RiderLocation';
// import RiderPayment from '../screens/Main/RiderPayment';
// import ReviewScreen from '../screens/Main/ReviewScreen';

// import MyRidesScreen from '../screens/Main/MyRidesScreen';
// import SettingScreen from '../screens/Main/SettingScreen';
// import HelpScreen from '../screens/Main/HelpScreen';

// import Security from '../screens/Main/Security';
// import FAQs from '../screens/Main/FAQs';
// import TermsUse from '../screens/Main/TermsUse';
// import PrivacyPolicy from '../screens/Main/PrivacyPolicy';

// import ProfileScreen from '../screens/Main/ProfileScreen';
// import EditProfile from '../screens/Main/EditProfile';

// import {
//   House,
//   Search,
//   MessageSquare,
//   UserRound,
// } from 'lucide-react-native';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// // Home Stack
// const HomeStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen
//         name="AlexScreen"
//         component={AlexScreen}
//       />

//       <Stack.Screen
//         name="OfferRideScreen"
//         component={OfferRideScreen}
//       />

//       <Stack.Screen
//         name="FindRiderScreen"
//         component={FindRiderScreen}
//       />

//       <Stack.Screen
//         name="FindJoinScreen"
//         component={FindJoinScreen}
//       />

//       <Stack.Screen
//         name="FindLocation"
//         component={FindLocation}
//       />

//       <Stack.Screen
//         name="RiderArriveScreen"
//         component={RiderArriveScreen}
//       />

//       <Stack.Screen
//         name="RiderLocation"
//         component={RiderLocation}
//       />

//       <Stack.Screen
//         name="RiderPayment"
//         component={RiderPayment}
//       />

//       <Stack.Screen
//         name="ReviewScreen"
//         component={ReviewScreen}
//       />

//       <Stack.Screen
//         name="MyRidesScreen"
//         component={MyRidesScreen}
//       />

//       <Stack.Screen
//         name="SettingScreen"
//         component={SettingScreen}
//       />

//       <Stack.Screen
//         name="HelpScreen"
//         component={HelpScreen}
//       />

//       <Stack.Screen
//         name="Security"
//         component={Security}
//       />

//       <Stack.Screen
//         name="FAQs"
//         component={FAQs}
//       />

//       <Stack.Screen
//         name="TermsUse"
//         component={TermsUse}
//       />

//       <Stack.Screen
//         name="PrivacyPolicy"
//         component={PrivacyPolicy}
//       />
//     </Stack.Navigator>
//   );
// };

// // Search Stack
// const SearchStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen
//         name="FindRiderScreen"
//         component={FindRiderScreen}
//       />

//       <Stack.Screen
//         name="FindJoinScreen"
//         component={FindJoinScreen}
//       />
//      <Stack.Screen
//         name="FindLocation"
//         component={FindLocation}
//       />

//       <Stack.Screen
//         name="RiderArriveScreen"
//         component={RiderArriveScreen}
//       />

//       <Stack.Screen
//         name="RiderLocation"
//         component={RiderLocation}
//       />

//       <Stack.Screen
//         name="RiderPayment"
//         component={RiderPayment}
//       />

//       <Stack.Screen
//         name="ReviewScreen"
//         component={ReviewScreen}
//       />


//     </Stack.Navigator>
//   );
// };

// // Chat Stack
// const ChatStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen
//         name="NewChatScreen"
//         component={NewChatScreen}
//       />

//       <Stack.Screen
//         name="ChatDetailScreen"
//         component={ChatDetailScreen}
//       />

//       <Stack.Screen
//         name="IncomingCallScreen"
//         component={IncomingCallScreen}
//       />

//       <Stack.Screen
//         name="GroupChatScreen"
//         component={GroupChatScreen}
//       />
//     </Stack.Navigator>
//   );
// };

// // Profile Stack
// const ProfileStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen
//         name="ProfileScreen"
//         component={ProfileScreen}
//       />

//       <Stack.Screen
//         name="EditProfile"
//         component={EditProfile}
//       />
//     </Stack.Navigator>
//   );
// };

// // Bottom Tabs
// const Main = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: '#2563EB',
//         tabBarInactiveTintColor: 'gray',
//         tabBarStyle: {
//           height: 70,
//           paddingBottom: 10,
//           paddingTop: 5,
//           position: 'absolute',
//           bottom: 15,
//           left: 15,
//           right: 15,
//           borderRadius: 15,
//         },
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeStack}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <House color={color} size={size} />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Search"
//         component={SearchStack}
//         options={{
//           tabBarLabel: 'Search',
//           tabBarIcon: ({ color, size }) => (
//             <Search color={color} size={size} />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Text"
//         component={ChatStack}
//         options={{
//           tabBarLabel: 'Text',
//           tabBarIcon: ({ color, size }) => (
//             <MessageSquare color={color} size={size} />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Profile"
//         component={ProfileStack}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ color, size }) => (
//             <UserRound color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default Main;


//  import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AuthStack from './Auth';
// import MainStack from './Main';
// import { NavigationContainer } from '@react-navigation/native';
// import { useSelector } from 'react-redux';

// const Stack = createNativeStackNavigator();

// const Route = () => {
//   const token = useSelector(state => state.auth.token )
//   return (
//     <NavigationContainer>
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       {token ? (
//         <Stack.Screen name="Main" component={MainStack} />
//       ) : (
//         <Stack.Screen name="Auth" component={AuthStack} />
//       )}
//     </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Route;



import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import AuthStack from './Auth';
import MainStack from './Main';

const Stack = createNativeStackNavigator();

const Route = () => {
  const token = useSelector(state => state.auth.token);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        {token ? (
          <Stack.Screen
            name="Main"
            component={MainStack}
          />
        ) : (
          <Stack.Screen
            name="Auth"
            component={AuthStack}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
