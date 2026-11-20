//  import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import FirstHomeScreen from '../screens/Main/FirstHomeScreen'
// import EventsScreen from '../screens/Main/EventsScreen'
// import EventDetailsScreen from '../screens/Main/EventDetailsScreen'
// import UploadPicturesScreen from '../screens/Main/UploadPicturesScreen'
// import NotificationScreen from '../screens/Main/NotificationScreen'
// import SponsorsScreen from '../screens/Main/SponsorsScreen'
// import BecomeSponsor from '../screens/Main/BecomeSponsor'
// import InviteUsScreen from '../screens/Main/InviteUsScreen'
// import ProfileScreen from '../screens/Main/ProfileScreen'
// const Stack = createNativeStackNavigator();

// const HomeStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="FirstHomeScreen" component={FirstHomeScreen} />
//       <Stack.Screen name="EventsScreen" component={EventsScreen} />
//       <Stack.Screen name="EventDetailsScreen" component={EventDetailsScreen} />
//       <Stack.Screen name="UploadPicturesScreen" component={UploadPicturesScreen} />
//       <Stack.Screen name="NotificationScreen" component={NotificationScreen}/>
//       <Stack.Screen name="SponsorsScreen" component={SponsorsScreen}/>
//       <Stack.Screen name="BecomeSponsor" component={BecomeSponsor}/>
//        <Stack.Screen name="InviteUsScreen" component={InviteUsScreen}/>
//         <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
      
//     </Stack.Navigator>
//   );
// };

// export default HomeStack;


import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FirstHomeScreen from '../screens/Main/FirstHomeScreen';
import EventsScreen from '../screens/Main/EventsScreen';
import EventDetailsScreen from '../screens/Main/EventDetailsScreen';
import UploadPicturesScreen from '../screens/Main/UploadPicturesScreen';
import NotificationScreen from '../screens/Main/NotificationScreen';
import SponsorsScreen from '../screens/Main/SponsorsScreen';
import BecomeSponsor from '../screens/Main/BecomeSponsor';
import InviteUsScreen from '../screens/Main/InviteUsScreen';
import ProfileScreen from '../screens/Main/ProfileScreen';
import EditProfileScreen from '../screens/Main/EditProfileScreen'
import ChangePasswordScreen from '../screens/Main/ChangePasswordScreen'

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="FirstHomeScreen"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="FirstHomeScreen"
        component={FirstHomeScreen}
      />

      <Stack.Screen
        name="EventsScreen"
        component={EventsScreen}
      />

      <Stack.Screen
        name="EventDetailsScreen"
        component={EventDetailsScreen}
      />

      <Stack.Screen
        name="UploadPicturesScreen"
        component={UploadPicturesScreen}
      />

      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />

      <Stack.Screen
        name="SponsorsScreen"
        component={SponsorsScreen}
      />

      <Stack.Screen
        name="BecomeSponsor"
        component={BecomeSponsor}
      />

      <Stack.Screen
        name="InviteUsScreen"
        component={InviteUsScreen}
      />

      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
      />
       <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
      />
      
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
