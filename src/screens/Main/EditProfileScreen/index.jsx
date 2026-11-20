
// import React, {useState} from 'react';

// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,

//   StatusBar,
//   Alert,
//   ScrollView,
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';

// import styles from './styles'
// const EditProfileScreen = ({navigation, route}) => {
//   const {profile, onSave} = route.params;

//   const [name, setName] = useState(profile.name || '');
//   const [email, setEmail] = useState(profile.email || '');
//   const [phone, setPhone] = useState(profile.phone || '');

//   const handleSave = () => {  
//     if (
//       !name.trim() ||
//       !email.trim() ||
//       !phone.trim()
//     ) {
//       Alert.alert('Error', 'Please fill all fields');
//       return;
//     }

//     const updatedProfile = {
//       name: name.trim(),
//       email: email.trim(),
//       phone: phone.trim(),
//     };

//     onSave(updatedProfile);

//     Alert.alert(
//       'Success',
//       'Profile updated successfully!',
//       [
//         {
//           text: 'OK',
//           onPress: () => navigation.goBack(),
//         },
//       ],
//     );
//   };

//   return (
  
//  <LinearGradient
//       colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
//       locations={[0, 0.25, 0.5, 0.7, 1]}
//       start={{x: 0, y: 0}}
//       end={{x: 1, y: 1}}
//       style={styles.container}>
//       <StatusBar barStyle="light-content" />

//       <ScrollView showsVerticalScrollIndicator={false}>

//         {/* Header */}
//         <View style={styles.header}>
//           <TouchableOpacity
//             onPress={() => navigation.goBack()}>

//             <Icon
//               name="arrow-back"
//               size={25}
//               color="#FFFFFF"
//             />
//           </TouchableOpacity>

//           <Text style={styles.headerTitle}>
//             Edit Profile
//           </Text>

//           <View style={{width: 25}} />
//         </View>

//         {/* Avatar */}
//         <View style={styles.avatarContainer}>
//           <View style={styles.avatar}>
//             <Icon
//               name="person"
//               size={55}
//               color="#FFFFFF"
//             />
//           </View>

//           <Text style={styles.avatarText}>
//             Update Your Information
//           </Text>
//         </View>

//         {/* Form */}
//         <View style={styles.form}>

//           <Text style={styles.label}>Full Name</Text>

//           <View style={styles.inputContainer}>
//             <Icon
//               name="person-outline"
//               size={20}
//               color="#AAB2D5"
//             />

//             <TextInput
//               style={styles.input}
//               placeholder="Enter your name"
//               placeholderTextColor="#9299B8"
//               value={name}
//               onChangeText={setName}
//             />
//           </View>

//           <Text style={styles.label}>Email Address</Text>

//           <View style={styles.inputContainer}>
//             <Icon
//               name="mail-outline"
//               size={20}
//               color="#AAB2D5"
//             />

//             <TextInput
//               style={styles.input}
//               placeholder="Enter your email"
//               placeholderTextColor="#9299B8"
//               value={email}
//               onChangeText={setEmail}
//               keyboardType="email-address"
//               autoCapitalize="none"
//             />
//           </View>

//           <Text style={styles.label}>Phone Number</Text>

//           <View style={styles.inputContainer}>
//             <Icon
//               name="call-outline"
//               size={20}
//               color="#AAB2D5"
//             />

//             <TextInput
//               style={styles.input}
//               placeholder="Enter your phone number"
//               placeholderTextColor="#9299B8"
//               value={phone}
//               onChangeText={setPhone}
//               keyboardType="phone-pad"
//             />
//           </View>

//           {/* Save Button */}
//           <TouchableOpacity
//             style={styles.saveButton}
//             onPress={handleSave}
//             activeOpacity={0.8}>

//             <Text style={styles.saveText}>
//               Save Changes
//             </Text>

//             <Icon
//               name="checkmark-circle-outline"
//               size={21}
//               color="#FFFFFF"
//             />
//           </TouchableOpacity>

//         </View>
//       </ScrollView>
//     </LinearGradient>
//   );
// };

// export default EditProfileScreen;



import React, {useState} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';

import {useSelector} from 'react-redux';

import styles from './styles';

const BASE_URL = 'https://xhcqhdxq-8006.inc1.devtunnels.ms';

const EditProfileScreen = ({navigation, route}) => {

  const {profile, onSave} = route.params || {};

  // Redux se token lena
  const token = useSelector(state => state.auth?.token);

  const [name, setName] = useState(profile?.name || '');
  const [email, setEmail] = useState(profile?.email || '');
  const [phone, setPhone] = useState(profile?.phone || '');

  const [loading, setLoading] = useState(false);

  // Update Profile API
  const handleSave = async () => {

    if (!name.trim() || !email.trim() || !phone.trim()) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    if (!token) {
      Alert.alert('Error', 'Authentication token not found. Please login again.');
      return;
    }

    try {
      setLoading(true);

      const config = {
        method: 'PATCH',
        url: `${BASE_URL}/updateProfile`,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: {
          name: name.trim(),
          email: email.trim(),
          phone_number: phone.trim(),
        },
      };

      const res = await axios.request(config);

      console.log('UPDATE PROFILE RESPONSE:', res.data);

      if (res.data.success === true) {

        const updatedProfile = {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
        };

        // ProfileScreen ko updated data bhejna
        if (onSave) {
          onSave(updatedProfile);
        }

        Alert.alert(
          'Success',
          res.data.message || res.data.messgae || 'Profile updated successfully!',
          [
            {
              text: 'OK',
              onPress: () => navigation.goBack(),
            },
          ],
        );

      } else {
        Alert.alert(
          'Error',
          res.data.message || res.data.messgae || 'Profile update failed',
        );
      }

    } catch (error) {

      console.log(
        'UPDATE PROFILE ERROR:',
        error.response?.data || error.message,
      );

      Alert.alert(
        'Update Failed',
        error.response?.data?.message ||
          error.response?.data?.messgae ||
          'Something went wrong. Please try again.',
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
      locations={[0, 0.25, 0.5, 0.7, 1]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}
    >

      <StatusBar barStyle="light-content" />

      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
<KeyboardAwareScrollView
  showsVerticalScrollIndicator={false}
  keyboardShouldPersistTaps="handled"
  enableOnAndroid={true}
  extraScrollHeight={50}
  extraHeight={100}
>
        {/* Header */}
        <View style={styles.header}>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            disabled={loading}
          >
            <Icon
              name="arrow-back"
              size={25}
              color="#FFFFFF"
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Edit Profile
          </Text>

          <View style={{width: 25}} />

        </View>

        {/* Avatar */}
        <View style={styles.avatarContainer}>

          <View style={styles.avatar}>
            <Icon
              name="person"
              size={55}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.avatarText}>
            Update Your Information
          </Text>

        </View>

        {/* Form */}
        <View style={styles.form}>

          {/* Name */}
          <Text style={styles.label}>
            Full Name
          </Text>

          <View style={styles.inputContainer}>

            <Icon
              name="person-outline"
              size={20}
              color="#AAB2D5"
            />

            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              placeholderTextColor="#9299B8"
              value={name}
              onChangeText={setName}
              editable={!loading}
            />

          </View>

          {/* Email */}
          <Text style={styles.label}>
            Email Address
          </Text>

          <View style={styles.inputContainer}>

            <Icon
              name="mail-outline"
              size={20}
              color="#AAB2D5"
            />

            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#9299B8"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              editable={!loading}
            />

          </View>

          {/* Phone */}
          <Text style={styles.label}>
            Phone Number
          </Text>

          <View style={styles.inputContainer}>

            <Icon
              name="call-outline"
              size={20}
              color="#AAB2D5"
            />

            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              placeholderTextColor="#9299B8"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              editable={!loading}
            />

          </View>

          {/* Save Button */}
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSave}
            activeOpacity={0.8}
            disabled={loading}
          >

            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <>
                <Text style={styles.saveText}>
                  Save Changes
                </Text>

                <Icon
                  name="checkmark-circle-outline"
                  size={21}
                  color="#FFFFFF"
                />
              </>
            )}

          </TouchableOpacity>

        </View>

    </KeyboardAwareScrollView>

    </LinearGradient>
  );
};

export default EditProfileScreen;
