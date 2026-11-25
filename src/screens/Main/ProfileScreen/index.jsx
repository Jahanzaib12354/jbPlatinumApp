
// import React, {useState} from 'react';

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   StatusBar,
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {useSelector} from 'react-redux';
// import styles from './styles'
// const ProfileScreen = ({navigation}) => {
//   const user = useSelector(
//     state =>
//       state.auth?.user ||
//       state.auth?.userData ||
//       state.user?.user ||
//       {},
//   );

//   const [profile, setProfile] = useState({
//     name:
//       user.name ||
//       user.full_name ||
//       user.first_name ||
//       '',
//     email: user.email || '',
//     phone:
//       user.phone ||
//       user.phone_number ||
//       '',
//   });

//   const menuItems = [
//     {
//       title: 'Personal Information',
//       icon: 'person-outline',
//     },
//     {
//       title: 'My Events',
//       icon: 'calendar-outline',
//     },
//     {
//       title: 'Favorite Events',
//       icon: 'heart-outline',
//     },
//     {
//       title: 'Notifications',
//       icon: 'notifications-outline',
//     },
//     {
//       title: 'Privacy & Security',
//       icon: 'lock-closed-outline',
//     },
//     {
//       title: 'Help & Support',
//       icon: 'help-circle-outline',
//     },
//   ];

//   return (
   
//         <LinearGradient
//       colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
//       locations={[0, 0.25, 0.5, 0.7, 1]}
//       start={{x: 0, y: 0}}
//       end={{x: 1, y: 1}}
//       style={styles.container}>


//       <StatusBar barStyle="light-content" />

//       <ScrollView showsVerticalScrollIndicator={false}>

//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>My Profile</Text>

        
//         </View>

//         {/* Profile Information */}
//         <View style={styles.profileContainer}>

//           <View style={styles.avatar}>
//             <Icon
//               name="person"
//               size={55}
//               color="#FFFFFF"
//             />
//           </View>

//           <Text style={styles.name}>
//             {profile.name || 'Your Name'}
//           </Text>

//           <Text style={styles.email}>
//             {profile.email || 'Your Email'}
//           </Text>

//           <View style={styles.memberBadge}>
//             <Text style={styles.memberText}>Member</Text>
//           </View>

//           <TouchableOpacity
//             style={styles.editButton}
//             onPress={() =>
//               navigation.navigate('EditProfileScreen', {
//                 profile: profile,
//                 onSave: updatedProfile => {
//                   setProfile(updatedProfile);
//                 },
//               })
//             }>

//             <Icon
//               name="create-outline"
//               size={19}
//               color="#FFFFFF"
//             />

//             <Text style={styles.editButtonText}>
//               Edit Profile
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {/* Account Information */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>
//             Account Information
//           </Text>

//           <View style={styles.infoCard}>
//             <View style={styles.infoRow}>
//               <Icon
//                 name="mail-outline"
//                 size={21}
//                 color="#AAB2D5"
//               />

//               <View style={styles.infoTextContainer}>
//                 <Text style={styles.infoLabel}>Email Address</Text>
//                 <Text style={styles.infoValue}>
//                   {profile.email || 'Not available'}
//                 </Text>
//               </View>
//             </View>

//             <View style={styles.infoDivider} />

//             <View style={styles.infoRow}>
//               <Icon
//                 name="call-outline"
//                 size={21}
//                 color="#AAB2D5"
//               />

//               <View style={styles.infoTextContainer}>
//                 <Text style={styles.infoLabel}>Phone Number</Text>
//                 <Text style={styles.infoValue}>
//                   {profile.phone || 'Not available'}
//                 </Text>
//               </View>
//             </View>
//           </View>
//         </View>

//         {/* My Account */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>My Account</Text>

//           <View style={styles.menuCard}>
//             {menuItems.map((item, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={styles.menuItem}>

//                 <View style={styles.menuLeft}>
//                   <Icon
//                     name={item.icon}
//                     size={21}
//                     color="#AAB2D5"
//                   />

//                   <Text style={styles.menuText}>
//                     {item.title}
//                   </Text>
//                 </View>

//                 <Icon
//                   name="chevron-forward"
//                   size={20}
//                   color="#AAB2D5"
//                 />
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>

//       </ScrollView>
//     </LinearGradient>
//   );
// };

// export default ProfileScreen;



// import React, {useState, useEffect} from 'react';

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   StatusBar,
//   ActivityIndicator,
//   Alert,
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';
// import axios from 'axios';

// import {useSelector} from 'react-redux';

// import styles from './styles';

// const BASE_URL = 'https://xhcqhdxq-8006.inc1.devtunnels.ms';

// const ProfileScreen = ({navigation}) => {

//   // Redux se user aur token lena
//   const {user, token} = useSelector(state => state.auth);

//   const [profile, setProfile] = useState({
//     name: '',
//     email: '',
//     phone: '',
//   });

//   const [loading, setLoading] = useState(true);

//   // Get Profile API
//   const getProfile = async () => {
//     try {
//       setLoading(true);

//       const res = await axios.get(`${BASE_URL}/getProfile`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: 'application/json',
//         },
//       });

//       console.log('GET PROFILE RESPONSE:', res.data);

//       if (res.data.success === true) {
//         const profileData = res.data.profile;

//         setProfile({
//           name: profileData.name || '',
//           email: profileData.email || '',
//           phone: profileData.phone_number || '',
//         });
//       } else {
//         Alert.alert('Error', 'Unable to load profile information');
//       }

//     } catch (error) {
//       console.log(
//         'GET PROFILE ERROR:',
//         error.response?.data || error.message,
//       );

//       Alert.alert(
//         'Error',
//         error.response?.data?.message ||
//           'Unable to fetch profile. Please try again.',
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       getProfile();
//     } else {
//       setLoading(false);
//       Alert.alert('Error', 'Please login again.');
//     }
//   }, [token]);

//   const menuItems = [
//     {
//       title: 'Personal Information',
//       icon: 'person-outline',
//     },
//     {
//       title: 'My Events',
//       icon: 'calendar-outline',
//     },
//     {
//       title: 'Favorite Events',
//       icon: 'heart-outline',
//     },
//     {
//       title: 'Notifications',
//       icon: 'notifications-outline',
//     },
//     {
//       title: 'Privacy & Security',
//       icon: 'lock-closed-outline',
//       screen: 'ChangePasswordScreen',
//     },
//     {
//       title: 'Help & Support',
//       icon: 'help-circle-outline',
//     },
//    {
//         title: 'Delete Profile',
//            icon: 'trash-outline',
//            screen: 'DeleteProfileScreen',
// }
// {
//   title: 'Logout'

// }
//   ];

//   return (
//     <LinearGradient
//       colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
//       locations={[0, 0.25, 0.5, 0.7, 1]}
//       start={{x: 0, y: 0}}
//       end={{x: 1, y: 1}}
//       style={styles.container}
//     >

//       <StatusBar barStyle="light-content" />

//       <ScrollView showsVerticalScrollIndicator={false}>

//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>My Profile</Text>
//         </View>

//         {loading ? (
//           <ActivityIndicator
//             size="large"
//             color="#FFFFFF"
//             style={{marginTop: 50}}
//           />
//         ) : (
//           <>

//             {/* Profile Information */}
//             <View style={styles.profileContainer}>

//               <View style={styles.avatar}>
//                 <Icon
//                   name="person"
//                   size={55}
//                   color="#FFFFFF"
//                 />
//               </View>

//               <Text style={styles.name}>
//                 {profile.name || 'Your Name'}
//               </Text>

//               <Text style={styles.email}>
//                 {profile.email || 'Your Email'}
//               </Text>

//               <View style={styles.memberBadge}>
//                 <Text style={styles.memberText}>Member</Text>
//               </View>

//               {/* Edit Profile Button */}
//               <TouchableOpacity
//                 style={styles.editButton}
//                 onPress={() =>
//                   navigation.navigate('EditProfileScreen', {
//                     profile: profile,
//                     onSave: updatedProfile => {
//                       setProfile(updatedProfile);
//                     },
//                   })
//                 }
//               >
//                 <Icon
//                   name="create-outline"
//                   size={19}
//                   color="#FFFFFF"
//                 />

//                 <Text style={styles.editButtonText}>
//                   Edit Profile
//                 </Text>
//               </TouchableOpacity>

//             </View>

//             {/* Account Information */}
//             <View style={styles.section}>

//               <Text style={styles.sectionTitle}>
//                 Account Information
//               </Text>

//               <View style={styles.infoCard}>

//                 {/* Email */}
//                 <View style={styles.infoRow}>
//                   <Icon
//                     name="mail-outline"
//                     size={21}
//                     color="#AAB2D5"
//                   />

//                   <View style={styles.infoTextContainer}>
//                     <Text style={styles.infoLabel}>
//                       Email Address
//                     </Text>

//                     <Text style={styles.infoValue}>
//                       {profile.email || 'Not available'}
//                     </Text>
//                   </View>
//                 </View>

//                 <View style={styles.infoDivider} />

//                 {/* Phone */}
//                 <View style={styles.infoRow}>
//                   <Icon
//                     name="call-outline"
//                     size={21}
//                     color="#AAB2D5"
//                   />

//                   <View style={styles.infoTextContainer}>
//                     <Text style={styles.infoLabel}>
//                       Phone Number
//                     </Text>

//                     <Text style={styles.infoValue}>
//                       {profile.phone || 'Not available'}
//                     </Text>
//                   </View>
//                 </View>

//               </View>
//             </View>

//             {/* My Account */}
//             <View style={styles.section}>

//               <Text style={styles.sectionTitle}>
//                 My Account
//               </Text>

//               <View style={styles.menuCard}>

//                 {menuItems.map((item, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     style={styles.menuItem}
//                     onPress={() => {
//                       if (item.screen) {
//                         navigation.navigate(item.screen);
//                       }
//                     }}
//                   >

//                     <View style={styles.menuLeft}>
//                       <Icon
//                         name={item.icon}
//                         size={21}
//                         color="#AAB2D5"
//                       />

//                       <Text style={styles.menuText}>
//                         {item.title}
//                       </Text>
//                     </View>

//                     <Icon
//                       name="chevron-forward"
//                       size={20}
//                       color="#AAB2D5"
//                     />

//                   </TouchableOpacity>
//                 ))}

//               </View>
//             </View>

//           </>
//         )}

//       </ScrollView>
//     </LinearGradient>
//   );
// };

// export default ProfileScreen;







// import React, {useState, useCallback} from 'react';

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   StatusBar,
//   ActivityIndicator,
//   Alert,
//   Image,
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';
// import axios from 'axios';

// import {useSelector, useDispatch} from 'react-redux';
// import {useFocusEffect} from '@react-navigation/native';

// import styles from './styles';

// import {
//   logout,
//   setProfileData,
// } from '../../../redux/auth/authSlice';

// const BASE_URL = 'https://xhcqhdxq-8006.inc1.devtunnels.ms';

// // Convert backend image into a usable URI
// const getImageUri = image => {
//   if (!image) {
//     return null;
//   }

//   if (Array.isArray(image)) {
//     return getImageUri(image[0]);
//   }

//   if (typeof image === 'string') {
//     const value = image.trim();

//     if (!value) {
//       return null;
//     }

//     if (
//       value.startsWith('http://') ||
//       value.startsWith('https://') ||
//       value.startsWith('file://') ||
//       value.startsWith('content://') ||
//       value.startsWith('data:')
//     ) {
//       return value;
//     }

//     return `${BASE_URL}/${value.replace(/^\/+/, '')}`;
//   }

//   if (typeof image === 'object') {
//     return (
//       getImageUri(image.url) ||
//       getImageUri(image.uri) ||
//       getImageUri(image.path) ||
//       getImageUri(image.location)
//     );
//   }

//   return null;
// };

// const ProfileScreen = ({navigation}) => {
//   const {user, token} = useSelector(state => state.auth);
//   const dispatch = useDispatch();

//   const [profile, setProfile] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     image: null,
//   });

//   const [loading, setLoading] = useState(true);

//   // Get Profile API
//   const getProfile = async () => {
//     if (!token) {
//       setLoading(false);
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await axios.get(`${BASE_URL}/getProfile`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: 'application/json',
//         },
//       });

//       console.log(
//         'GET PROFILE RESPONSE:',
//         JSON.stringify(res.data, null, 2),
//       );

//       if (res.data.success === true) {
//         const profileData =
//           res.data.profile ||
//           res.data.data?.profile ||
//           res.data.data ||
//           {};

//         const imageUri = getImageUri(
//           profileData.images || profileData.image,
//         );

//         const updatedProfile = {
//           name: profileData.name || '',
//           email: profileData.email || '',
//           phone:
//             profileData.phone_number ||
//             profileData.phone ||
//             '',
//           image: imageUri,
//         };

//         setProfile(updatedProfile);

//         // Save profile in Redux
//         dispatch(setProfileData(updatedProfile));
//       } else {
//         Alert.alert(
//           'Error',
//           res.data.message || 'Unable to load profile information',
//         );
//       }
//     } catch (error) {
//       console.log(
//         'GET PROFILE ERROR:',
//         error.response?.data || error.message,
//       );

//       Alert.alert(
//         'Error',
//         error.response?.data?.message ||
//           'Unable to fetch profile. Please try again.',
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch profile whenever this screen becomes active
//   useFocusEffect(
//     useCallback(() => {
//       getProfile();
//     }, [token]),
//   );

//   // Logout API
//   const handleLogout = () => {
//     Alert.alert(
//       'Logout',
//       'Are you sure you want to logout?',
//       [
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//         {
//           text: 'Logout',
//           style: 'destructive',
//           onPress: async () => {
//             try {
//               await axios.post(
//                 `${BASE_URL}/signOut`,
//                 {},
//                 {
//                   headers: {
//                     Authorization: `Bearer ${token}`,
//                     Accept: 'application/json',
//                   },
//                 },
//               );

//               console.log('Logout successful');
//             } catch (error) {
//               console.log(
//                 'Logout API Error:',
//                 error.response?.data || error.message,
//               );
//             } finally {
//               dispatch(logout());
//             }
//           },
//         },
//       ],
//     );
//   };

//   // Profile Menu Items
//   const menuItems = [
//     {
//       title: 'Personal Information',
//       icon: 'person-outline',
//     },
//     {
//       title: 'My Events',
//       icon: 'calendar-outline',
//     },
//     {
//       title: 'Favorite Events',
//       icon: 'heart-outline',
//     },
//     {
//       title: 'Notifications',
//       icon: 'notifications-outline',
//     },
//     {
//       title: 'Privacy & Security',
//       icon: 'lock-closed-outline',
//       screen: 'ChangePasswordScreen',
//     },
//     {
//       title: 'Help & Support',
//       icon: 'help-circle-outline',
//     },
//     {
//       title: 'Delete Profile',
//       icon: 'trash-outline',
//       screen: 'DeleteProfileScreen',
//     },
//     {
//       title: 'Logout',
//       icon: 'log-out-outline',
//       action: 'logout',
//     },
//   ];

//   return (
//     <LinearGradient
//       colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
//       locations={[0, 0.25, 0.5, 0.7, 1]}
//       start={{x: 0, y: 0}}
//       end={{x: 1, y: 1}}
//       style={styles.container}>

//       <StatusBar barStyle="light-content" />

//       <ScrollView showsVerticalScrollIndicator={false}>

//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>My Profile</Text>
//         </View>

//         {loading ? (
//           <ActivityIndicator
//             size="large"
//             color="#FFFFFF"
//             style={{marginTop: 50}}
//           />
//         ) : (
//           <>

//             {/* Profile Information */}
//             <View style={styles.profileContainer}>

//               <View style={styles.avatar}>
//                 {profile.image ? (
//                   <Image
//                     source={{uri: profile.image}}
//                     style={{
//                       width: '100%',
//                       height: '100%',
//                       borderRadius: 60,
//                     }}
//                     resizeMode="cover"
//                     onError={error =>
//                       console.log(
//                         'PROFILE SCREEN IMAGE ERROR:',
//                         error.nativeEvent,
//                       )
//                     }
//                   />
//                 ) : (
//                   <Icon
//                     name="person"
//                     size={55}
//                     color="#FFFFFF"
//                   />
//                 )}
//               </View>

//               <Text style={styles.name}>
//                 {profile.name || 'Your Name'}
//               </Text>

//               <Text style={styles.email}>
//                 {profile.email || 'Your Email'}
//               </Text>

//               <View style={styles.memberBadge}>
//                 <Text style={styles.memberText}>Member</Text>
//               </View>

//               {/* Edit Profile Button */}
//               <TouchableOpacity
//                 style={styles.editButton}
//                 onPress={() =>
//                   navigation.navigate('EditProfileScreen', {
//                     profile: profile,
//                     onSave: updatedProfile => {
//                       setProfile(updatedProfile);
//                       dispatch(setProfileData(updatedProfile));
//                     },
//                   })
//                 }>

//                 <Icon
//                   name="create-outline"
//                   size={19}
//                   color="#FFFFFF"
//                 />

//                 <Text style={styles.editButtonText}>
//                   Edit Profile
//                 </Text>
//               </TouchableOpacity>

//             </View>

//             {/* Account Information */}
//             <View style={styles.section}>

//               <Text style={styles.sectionTitle}>
//                 Account Information
//               </Text>

//               <View style={styles.infoCard}>

//                 {/* Email */}
//                 <View style={styles.infoRow}>
//                   <Icon
//                     name="mail-outline"
//                     size={21}
//                     color="#AAB2D5"
//                   />

//                   <View style={styles.infoTextContainer}>
//                     <Text style={styles.infoLabel}>
//                       Email Address
//                     </Text>

//                     <Text style={styles.infoValue}>
//                       {profile.email || 'Not available'}
//                     </Text>
//                   </View>
//                 </View>

//                 <View style={styles.infoDivider} />

//                 {/* Phone */}
//                 <View style={styles.infoRow}>
//                   <Icon
//                     name="call-outline"
//                     size={21}
//                     color="#AAB2D5"
//                   />

//                   <View style={styles.infoTextContainer}>
//                     <Text style={styles.infoLabel}>
//                       Phone Number
//                     </Text>

//                     <Text style={styles.infoValue}>
//                       {profile.phone || 'Not available'}
//                     </Text>
//                   </View>
//                 </View>

//               </View>
//             </View>

//             {/* My Account */}
//             <View style={styles.section}>

//               <Text style={styles.sectionTitle}>
//                 My Account
//               </Text>

//               <View style={styles.menuCard}>

//                 {menuItems.map((item, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     style={styles.menuItem}
//                     onPress={() => {
//                       if (item.action === 'logout') {
//                         handleLogout();
//                       } else if (item.screen) {
//                         navigation.navigate(item.screen);
//                       }
//                     }}>

//                     <View style={styles.menuLeft}>
//                       <Icon
//                         name={item.icon}
//                         size={21}
//                         color="#AAB2D5"
//                       />

//                       <Text style={styles.menuText}>
//                         {item.title}
//                       </Text>
//                     </View>

//                     <Icon
//                       name="chevron-forward"
//                       size={20}
//                       color="#AAB2D5"
//                     />

//                   </TouchableOpacity>
//                 ))}

//               </View>
//             </View>

//           </>
//         )}

//       </ScrollView>
//     </LinearGradient>
//   );
// };

// export default ProfileScreen;



import React, {useState, useCallback} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Alert,
  Image,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

import {useSelector, useDispatch} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

import styles from './styles';

import {
  logout,
  setProfileData,
} from '../../../redux/auth/authSlice';

const BASE_URL = 'https://xhcqhdxq-8006.inc1.devtunnels.ms';

// Convert backend image into a usable URI
const getImageUri = image => {
  if (!image) {
    return null;
  }

  if (Array.isArray(image)) {
    return getImageUri(image[0]);
  }

  if (typeof image === 'string') {
    const value = image.trim();

    if (!value) {
      return null;
    }

    // If backend returns localhost URL, replace it with tunnel URL
    if (
      value.startsWith('http://localhost:8006') ||
      value.startsWith('https://localhost:8006')
    ) {
      return value.replace(
        /^https?:\/\/localhost:8006/,
        BASE_URL,
      );
    }

    if (
      value.startsWith('http://') ||
      value.startsWith('https://') ||
      value.startsWith('file://') ||
      value.startsWith('content://') ||
      value.startsWith('data:')
    ) {
      return value;
    }

    return `${BASE_URL}/${value.replace(/^\/+/, '')}`;
  }

  if (typeof image === 'object') {
    return (
      getImageUri(image.url) ||
      getImageUri(image.uri) ||
      getImageUri(image.path) ||
      getImageUri(image.location)
    );
  }

  return null;
};

const ProfileScreen = ({navigation}) => {
  const token = useSelector(state => state.auth?.token);
  const dispatch = useDispatch();

  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    image: null,
  });

  const [loading, setLoading] = useState(true);

  // Get latest profile from backend
  const getProfile = async () => {
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      const res = await axios.get(`${BASE_URL}/getProfile`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });

      console.log(
        'GET PROFILE RESPONSE:',
        JSON.stringify(res.data, null, 2),
      );

      if (res.data.success === true) {
        const profileData =
          res.data.profile ||
          res.data.data?.profile ||
          res.data.data ||
          {};

        // Check images first, then image
        const imageUri =
          getImageUri(profileData.images) ||
          getImageUri(profileData.image);

        const updatedProfile = {
          name: profileData.name || '',
          email: profileData.email || '',
          phone:
            profileData.phone_number ||
            profileData.phone ||
            '',
          image: imageUri,
        };

        setProfile(updatedProfile);
        dispatch(setProfileData(updatedProfile));
      } else {
        Alert.alert(
          'Error',
          res.data.message || 'Unable to load profile information',
        );
      }
    } catch (error) {
      console.log(
        'GET PROFILE ERROR:',
        error.response?.data || error.message,
      );

      Alert.alert(
        'Error',
        error.response?.data?.message ||
          'Unable to fetch profile. Please try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  // Refresh profile whenever this screen becomes active
  useFocusEffect(
    useCallback(() => {
      getProfile();
    }, [token]),
  );

  // Logout API
  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            try {
              await axios.post(
                `${BASE_URL}/signOut`,
                {},
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                  },
                },
              );

              console.log('Logout successful');
            } catch (error) {
              console.log(
                'Logout API Error:',
                error.response?.data || error.message,
              );
            } finally {
              dispatch(logout());
            }
          },
        },
      ],
    );
  };

  // Profile menu items
  const menuItems = [
    {
      title: 'Personal Information',
      icon: 'person-outline',
    },
    {
      title: 'My Events',
      icon: 'calendar-outline',
    },
    {
      title: 'Favorite Events',
      icon: 'heart-outline',
    },
    {
      title: 'Notifications',
      icon: 'notifications-outline',
    },
    {
      title: 'Privacy & Security',
      icon: 'lock-closed-outline',
      screen: 'ChangePasswordScreen',
    },
    {
      title: 'Help & Support',
      icon: 'help-circle-outline',
      screen: 'WebViewScreen'

    },
    {
      title: 'Delete Profile',
      icon: 'trash-outline',
      screen: 'DeleteProfileScreen',
    },
    {
      title: 'Logout',
      icon: 'log-out-outline',
      action: 'logout',
    },
  ];

  return (
    <LinearGradient
      colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
      locations={[0, 0.25, 0.5, 0.7, 1]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}>

      <StatusBar barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>
        </View>

        {loading ? (
          <ActivityIndicator
            size="large"
            color="#FFFFFF"
            style={{marginTop: 50}}
          />
        ) : (
          <>

            {/* Profile Information */}
            <View style={styles.profileContainer}>

              <View style={styles.avatar}>
                {profile.image ? (
                  <Image
                    source={{uri: profile.image}}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 60,
                    }}
                    resizeMode="cover"
                    onError={error =>
                      console.log(
                        'PROFILE SCREEN IMAGE ERROR:',
                        error.nativeEvent,
                      )
                    }
                  />
                ) : (
                  <Icon
                    name="person"
                    size={55}
                    color="#FFFFFF"
                  />
                )}
              </View>

              <Text style={styles.name}>
                {profile.name || 'Your Name'}
              </Text>

              <Text style={styles.email}>
                {profile.email || 'Your Email'}
              </Text>

              <View style={styles.memberBadge}>
                <Text style={styles.memberText}>Member</Text>
              </View>

              {/* Edit Profile Button */}
              <TouchableOpacity
                style={styles.editButton}
                onPress={() =>
                  navigation.navigate('EditProfileScreen', {
                    profile: profile,
                    onSave: updatedProfile => {
                      setProfile(updatedProfile);
                      dispatch(setProfileData(updatedProfile));
                    },
                  })
                }>

                <Icon
                  name="create-outline"
                  size={19}
                  color="#FFFFFF"
                />

                <Text style={styles.editButtonText}>
                  Edit Profile
                </Text>
              </TouchableOpacity>

            </View>

            {/* Account Information */}
            <View style={styles.section}>

              <Text style={styles.sectionTitle}>
                Account Information
              </Text>

              <View style={styles.infoCard}>

                {/* Email */}
                <View style={styles.infoRow}>
                  <Icon
                    name="mail-outline"
                    size={21}
                    color="#AAB2D5"
                  />

                  <View style={styles.infoTextContainer}>
                    <Text style={styles.infoLabel}>
                      Email Address
                    </Text>

                    <Text style={styles.infoValue}>
                      {profile.email || 'Not available'}
                    </Text>
                  </View>
                </View>

                <View style={styles.infoDivider} />

                {/* Phone */}
                <View style={styles.infoRow}>
                  <Icon
                    name="call-outline"
                    size={21}
                    color="#AAB2D5"
                  />

                  <View style={styles.infoTextContainer}>
                    <Text style={styles.infoLabel}>
                      Phone Number
                    </Text>

                    <Text style={styles.infoValue}>
                      {profile.phone || 'Not available'}
                    </Text>
                  </View>
                </View>

              </View>
            </View>

            {/* My Account */}
            <View style={styles.section}>

              <Text style={styles.sectionTitle}>
                My Account
              </Text>

              <View style={styles.menuCard}>

                {menuItems.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.menuItem}
                    onPress={() => {
                      if (item.action === 'logout') {
                        handleLogout();
                      } else if (item.screen) {
                        navigation.navigate(item.screen);
                      }
                    }}>

                    <View style={styles.menuLeft}>
                      <Icon
                        name={item.icon}
                        size={21}
                        color="#AAB2D5"
                      />

                      <Text style={styles.menuText}>
                        {item.title}
                      </Text>
                    </View>

                    <Icon
                      name="chevron-forward"
                      size={20}
                      color="#AAB2D5"
                    />

                  </TouchableOpacity>
                ))}

              </View>
            </View>

          </>
        )}

      </ScrollView>
    </LinearGradient>
  );
};

export default ProfileScreen;
