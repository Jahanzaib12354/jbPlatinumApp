// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   StatusBar,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';
// import styles from './styles'
// const BecomeSponsor = ({navigation}) => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [message, setMessage] = useState('');
//   const [file, setFile] = useState(null);

//   const handleUpload = () => {
//     // Yahan image/document picker lagayein (neeche note dekhein)
//     console.log('Upload pressed');
//   };

//   const handleSubmit = () => {
//     console.log({firstName, lastName, email, phone, message, file});
//   };

//   return (
//     <LinearGradient
//       colors={['#000000', '#0B0F14', '#3A0B4A']}
//       start={{x: 0.2, y: 0}}
//       end={{x: 1, y: 1}}
//       locations={[0, 0.6, 1]}
//       style={styles.container}>
//       <StatusBar
//         barStyle="light-content"
//         backgroundColor="transparent"
//         translucent
//       />

//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={10}>
//           <Icon name="arrow-back" size={24} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>BECOME A SPONSOR</Text>
//       </View>

//       <ScrollView
//         contentContainerStyle={styles.form}
//         showsVerticalScrollIndicator={false}
//         keyboardShouldPersistTaps="handled">
//         {/* First name */}
//         <View style={styles.inputBox}>
//           <TextInput
//             style={styles.input}
//             placeholder="First Name"
//             placeholderTextColor="#CFCFCF"
//             value={firstName}
//             onChangeText={setFirstName}
//           />
//         </View>

//         {/* Last name */}
//         <View style={styles.inputBox}>
//           <TextInput
//             style={styles.input}
//             placeholder="Last Name"
//             placeholderTextColor="#CFCFCF"
//             value={lastName}
//             onChangeText={setLastName}
//           />
//         </View>

//         {/* Email */}
//         <View style={styles.inputBox}>
//           <Icon name="mail" size={18} color="#fff" style={styles.leftIcon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             placeholderTextColor="#CFCFCF"
//             keyboardType="email-address"
//             autoCapitalize="none"
//             value={email}
//             onChangeText={setEmail}
//           />
//         </View>

//         {/* Phone */}
//         <View style={styles.inputBox}>
//           <TouchableOpacity style={styles.countryPicker} activeOpacity={0.7}>
//             <Text style={styles.flag}>🇺🇸</Text>
//             <Icon name="chevron-down" size={14} color="#fff" />
//           </TouchableOpacity>
//           <TextInput
//             style={styles.input}
//             placeholder="+1 000 000 000"
//             placeholderTextColor="#CFCFCF"
//             keyboardType="phone-pad"
//             value={phone}
//             onChangeText={setPhone}
//           />
//         </View>

//         {/* Message */}
//         <View style={[styles.inputBox, styles.messageBox]}>
//           <TextInput
//             style={[styles.input, styles.messageInput]}
//             placeholder="Message..."
//             placeholderTextColor="#CFCFCF"
//             multiline
//             textAlignVertical="top"
//             value={message}
//             onChangeText={setMessage}
//           />
//         </View>

//         {/* Upload */}
//         <TouchableOpacity
//           style={styles.uploadBox}
//           activeOpacity={0.7}
//           onPress={handleUpload}>
//           <Icon name="cloud-upload-outline" size={28} color="#4BC6DE" />
//           <Text style={styles.uploadText}>
//             {file ? file.name : 'Upload a file/image'}
//           </Text>
//         </TouchableOpacity>

//         {/* Submit */}
//         <TouchableOpacity
//           style={styles.button}
//           activeOpacity={0.85}
//           onPress={handleSubmit}>
//           <Icon name="arrow-forward" size={18} color="#000" />
//           <Text style={styles.buttonText}>SUBMIT</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </LinearGradient>
//   );
// };

// export default BecomeSponsor;

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   StatusBar,
//   Modal,
//   Image,
//   Alert,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {launchImageLibrary} from 'react-native-image-picker';
// import styles from './styles'
// const COUNTRIES = [
//   {id: 'us', name: 'United States', flag: '🇺🇸', code: '+1'},
//   {id: 'pk', name: 'Pakistan', flag: '🇵🇰', code: '+92'},
//   {id: 'gb', name: 'United Kingdom', flag: '🇬🇧', code: '+44'},
//   {id: 'ae', name: 'United Arab Emirates', flag: '🇦🇪', code: '+971'},
//   {id: 'sa', name: 'Saudi Arabia', flag: '🇸🇦', code: '+966'},
// ];

// const BecomeSponsor = ({navigation}) => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [message, setMessage] = useState('');
//   const [image, setImage] = useState(null);
//   const [country, setCountry] = useState(COUNTRIES[0]);
//   const [showCountries, setShowCountries] = useState(false);

//   const handleUpload = () => {
//     launchImageLibrary(
//       {mediaType: 'photo', selectionLimit: 1, quality: 0.8},
//       response => {
//         if (response.didCancel) {
//           return;
//         }
//         if (response.errorCode) {
//           Alert.alert('Error', response.errorMessage || 'Gallery open nahi hui');
//           return;
//         }
//         const asset = response.assets && response.assets[0];
//         if (asset) {
//           setImage(asset);
//         }
//       },
//     );
//   };

//   const handleSubmit = () => {
//     console.log({
//       firstName,
//       lastName,
//       email,
//       phone: `${country.code} ${phone}`,
//       message,
//       image,
//     });
//   };

//   return (
//     <LinearGradient
//       colors={['#000000', '#0B0F14', '#3A0B4A']}
//       start={{x: 0.2, y: 0}}
//       end={{x: 1, y: 1}}
//       locations={[0, 0.6, 1]}
//       style={styles.container}>
//       <StatusBar
//         barStyle="light-content"
//         backgroundColor="transparent"
//         translucent
//       />

//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={10}>
//           <Icon name="arrow-back" size={24} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>BECOME A SPONSOR</Text>
//       </View>

//       <ScrollView
//         contentContainerStyle={styles.form}
//         showsVerticalScrollIndicator={false}
//         keyboardShouldPersistTaps="handled">
//         {/* First name */}
//         <View style={styles.inputBox}>
//           <TextInput
//             style={styles.input}
//             placeholder="First Name"
//             placeholderTextColor="#CFCFCF"
//             value={firstName}
//             onChangeText={setFirstName}
//           />
//         </View>

//         {/* Last name */}
//         <View style={styles.inputBox}>
//           <TextInput
//             style={styles.input}
//             placeholder="Last Name"
//             placeholderTextColor="#CFCFCF"
//             value={lastName}
//             onChangeText={setLastName}
//           />
//         </View>

//         {/* Email */}
//         <View style={styles.inputBox}>
//           <Icon name="mail" size={18} color="#fff" style={styles.leftIcon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             placeholderTextColor="#CFCFCF"
//             keyboardType="email-address"
//             autoCapitalize="none"
//             value={email}
//             onChangeText={setEmail}
//           />
//         </View>

//         {/* Phone */}
//         <View style={styles.inputBox}>
//           <TouchableOpacity
//             style={styles.countryPicker}
//             activeOpacity={0.7}
//             onPress={() => setShowCountries(true)}>
//             <Text style={styles.flag}>{country.flag}</Text>
//             <Icon name="chevron-down" size={14} color="#fff" />
//           </TouchableOpacity>
//           <Text style={styles.dialCode}>{country.code}</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="000 000 000"
//             placeholderTextColor="#CFCFCF"
//             keyboardType="phone-pad"
//             value={phone}
//             onChangeText={setPhone}
//           />
//         </View>

//         {/* Message */}
//         <View style={[styles.inputBox, styles.messageBox]}>
//           <TextInput
//             style={[styles.input, styles.messageInput]}
//             placeholder="Message..."
//             placeholderTextColor="#CFCFCF"
//             multiline
//             textAlignVertical="top"
//             value={message}
//             onChangeText={setMessage}
//           />
//         </View>

//         {/* Upload */}
//         <TouchableOpacity
//           style={styles.uploadBox}
//           activeOpacity={0.7}
//           onPress={handleUpload}>
//           {image ? (
//             <>
//               <Image source={{uri: image.uri}} style={styles.preview} />
//               <TouchableOpacity
//                 style={styles.removeBtn}
//                 onPress={() => setImage(null)}
//                 hitSlop={10}>
//                 <Icon name="close-circle" size={22} color="#FF0A78" />
//               </TouchableOpacity>
//             </>
//           ) : (
//             <>
//               <Icon name="cloud-upload-outline" size={28} color="#4BC6DE" />
//               <Text style={styles.uploadText}>Upload a file/image</Text>
//             </>
//           )}
//         </TouchableOpacity>

//         {/* Submit */}
//            <TouchableOpacity
//           style={styles.button}
//           activeOpacity={0.85}
//               // onPress={() => navigation.navigate('InviteUsScreen')}>
//               >
//           <Icon name="arrow-forward" size={18} color="#000" />
//           <Text style={styles.buttonText}>SUBMIT</Text>
//         </TouchableOpacity>

//       </ScrollView>

//       {/* Country list modal */}
//       <Modal
//         visible={showCountries}
//         transparent
//         animationType="fade"
//         onRequestClose={() => setShowCountries(false)}>
//         <TouchableOpacity
//           style={styles.modalOverlay}
//           activeOpacity={1}
//           onPress={() => setShowCountries(false)}>
//           <View style={styles.modalCard}>
//             <Text style={styles.modalTitle}>Select Country</Text>
//             {COUNTRIES.map(item => (
//               <TouchableOpacity
//                 key={item.id}
//                 style={styles.countryRow}
//                 activeOpacity={0.7}
//                 onPress={() => {
//                   setCountry(item);
//                   setShowCountries(false);
//                 }}>
//                 <Text style={styles.countryFlag}>{item.flag}</Text>
//                 <Text style={styles.countryName}>{item.name}</Text>
//                 <Text style={styles.countryCode}>{item.code}</Text>
//                 {country.id === item.id && (
//                   <Icon name="checkmark" size={18} color="#4BC6DE" />
//                 )}
//               </TouchableOpacity>
//             ))}
//           </View>
//         </TouchableOpacity>
//       </Modal>
//     </LinearGradient>
//   );
// };

// export default BecomeSponsor;


import React, {useState} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Modal,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import {useSelector} from 'react-redux';

import styles from './styles';

const BASE_URL = 'https://xhcqhdxq-8006.inc1.devtunnels.ms';

const COUNTRIES = [
  {id: 'us', name: 'United States', flag: '🇺🇸', code: '+1'},
  {id: 'pk', name: 'Pakistan', flag: '🇵🇰', code: '+92'},
  {id: 'gb', name: 'United Kingdom', flag: '🇬🇧', code: '+44'},
  {id: 'ae', name: 'United Arab Emirates', flag: '🇦🇪', code: '+971'},
  {id: 'sa', name: 'Saudi Arabia', flag: '🇸🇦', code: '+966'},
];

const BecomeSponsor = ({navigation}) => {
  const token = useSelector(state => state.auth.token);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);

  const [country, setCountry] = useState(COUNTRIES[0]);
  const [showCountries, setShowCountries] = useState(false);
  const [loading, setLoading] = useState(false);

  // Image Upload
  const handleUpload = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1,
        quality: 0.8,
      },
      response => {
        if (response.didCancel) {
          return;
        }

        if (response.errorCode) {
          Alert.alert(
            'Error',
            response.errorMessage || 'Gallery open nahi hui.',
          );
          return;
        }

        const asset = response.assets && response.assets[0];

        if (asset) {
          setImage(asset);
        }
      },
    );
  };

  // Submit Sponsor Request API
  const handleSubmit = async () => {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !message.trim()
    ) {
      Alert.alert('Required Fields', 'Please fill all fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    // Check login token
    if (!token || typeof token !== 'string' || !token.trim()) {
      Alert.alert(
        'Login Required',
        'Your login token was not found. Please login again.',
      );
      return;
    }

    // API payload
    const payload = {
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      email: email.trim(),
      phone_number: `${country.code} ${phone.trim()}`,
      message: message.trim(),
    };

    // Avoid duplicate Bearer prefix
    const authToken = token.trim().startsWith('Bearer ')
      ? token.trim()
      : `Bearer ${token.trim()}`;

    try {
      setLoading(true);

      console.log('Sponsor Request Payload:', payload);
      console.log('Sponsor Token Available:', !!token);

      const response = await axios.post(
        `${BASE_URL}/sponserrequest`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: authToken,
          },
          timeout: 30000,
        },
      );

      console.log('Sponsor API Response:', response.data);

      if (response.data.success) {
        Alert.alert(
          'Success',
          response.data.message || 'Sponsor request sent successfully!',
          [
            {
              text: 'OK',
              onPress: () => {
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhone('');
                setMessage('');
                setImage(null);
                setCountry(COUNTRIES[0]);
              },
            },
          ],
        );
      } else {
        Alert.alert(
          'Failed',
          response.data.message || 'Sponsor request could not be sent.',
        );
      }
    } catch (error) {
      console.log('Sponsor Error Message:', error.message);
      console.log('Sponsor Error Status:', error.response?.status);
      console.log('Sponsor Error Response:', error.response?.data);

      Alert.alert(
        'Sponsor Request Error',
        error.response?.data?.message ||
          error.message ||
          'Something went wrong. Please try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={['#000000', '#0B0F14', '#3A0B4A']}
      start={{x: 0.2, y: 0}}
      end={{x: 1, y: 1}}
      locations={[0, 0.6, 1]}
      style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={10}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>BECOME A SPONSOR</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.form}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">

        {/* First Name */}
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#CFCFCF"
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>

        {/* Last Name */}
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#CFCFCF"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>

        {/* Email */}
        <View style={styles.inputBox}>
          <Icon
            name="mail"
            size={18}
            color="#fff"
            style={styles.leftIcon}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#CFCFCF"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Phone */}
        <View style={styles.inputBox}>
          <TouchableOpacity
            style={styles.countryPicker}
            activeOpacity={0.7}
            onPress={() => setShowCountries(true)}>

            <Text style={styles.flag}>{country.flag}</Text>

            <Icon name="chevron-down" size={14} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.dialCode}>{country.code}</Text>

          <TextInput
            style={styles.input}
            placeholder="000 000 000"
            placeholderTextColor="#CFCFCF"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* Message */}
        <View style={[styles.inputBox, styles.messageBox]}>
          <TextInput
            style={[styles.input, styles.messageInput]}
            placeholder="Message..."
            placeholderTextColor="#CFCFCF"
            multiline
            textAlignVertical="top"
            value={message}
            onChangeText={setMessage}
          />
        </View>

        {/* Upload */}
        <TouchableOpacity
          style={styles.uploadBox}
          activeOpacity={0.7}
          onPress={handleUpload}>

          {image ? (
            <>
              <Image
                source={{uri: image.uri}}
                style={styles.preview}
              />

              <TouchableOpacity
                style={styles.removeBtn}
                onPress={() => setImage(null)}
                hitSlop={10}>
                <Icon
                  name="close-circle"
                  size={22}
                  color="#FF0A78"
                />
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Icon
                name="cloud-upload-outline"
                size={28}
                color="#4BC6DE"
              />

              <Text style={styles.uploadText}>
                Upload a file/image
              </Text>
            </>
          )}
        </TouchableOpacity>

        {/* Submit */}
        <TouchableOpacity
          style={[
            styles.button,
            loading && {opacity: 0.6},
          ]}
          activeOpacity={0.85}
          onPress={handleSubmit}
          disabled={loading}>

          {loading ? (
            <ActivityIndicator size="small" color="#000" />
          ) : (
            <>
              <Icon name="arrow-forward" size={18} color="#000" />
              <Text style={styles.buttonText}>SUBMIT</Text>
            </>
          )}
        </TouchableOpacity>
      </ScrollView>

      {/* Country List Modal */}
      <Modal
        visible={showCountries}
        transparent
        animationType="fade"
        onRequestClose={() => setShowCountries(false)}>

        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowCountries(false)}>

          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Select Country</Text>

            {COUNTRIES.map(item => (
              <TouchableOpacity
                key={item.id}
                style={styles.countryRow}
                activeOpacity={0.7}
                onPress={() => {
                  setCountry(item);
                  setShowCountries(false);
                }}>

                <Text style={styles.countryFlag}>
                  {item.flag}
                </Text>

                <Text style={styles.countryName}>
                  {item.name}
                </Text>

                <Text style={styles.countryCode}>
                  {item.code}
                </Text>

                {country.id === item.id && (
                  <Icon
                    name="checkmark"
                    size={18}
                    color="#4BC6DE"
                  />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </LinearGradient>
  );
};

export default BecomeSponsor;
