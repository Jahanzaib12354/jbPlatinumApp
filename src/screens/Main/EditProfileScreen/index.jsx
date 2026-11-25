
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










// import React, {useState} from 'react';

// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StatusBar,
//   Alert,
//   Image,
//   ActivityIndicator,
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';

// import {
//   launchCamera,
//   launchImageLibrary,
// } from 'react-native-image-picker';

// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import axios from 'axios';

// import {useSelector} from 'react-redux';

// import styles from './styles';

// const BASE_URL = 'https://xhcqhdxq-8006.inc1.devtunnels.ms';

// const EditProfileScreen = ({navigation, route}) => {

//   const {profile, onSave} = route.params || {};

//   // Redux token
//   const token = useSelector(state => state.auth?.token);

//   const [name, setName] = useState(profile?.name || '');
//   const [email, setEmail] = useState(profile?.email || '');
//   const [phone, setPhone] = useState(profile?.phone || '');

//   const [loading, setLoading] = useState(false);

//   // Profile image
//   const [profileImage, setProfileImage] = useState(null);

//   // Camera open karna
//   const openCamera = () => {
//     launchCamera(
//       {
//         mediaType: 'photo',
//         cameraType: 'back',
//         quality: 0.8,
//       },
//       response => {
//         if (response.didCancel) {
//           return;
//         }

//         if (response.errorCode) {
//           Alert.alert(
//             'Camera Error',
//             response.errorMessage || 'Unable to open camera',
//           );
//           return;
//         }

//         if (response.assets?.length > 0) {
//           setProfileImage(response.assets[0]);
//         }
//       },
//     );
//   };

//   // Gallery open karna
//   const openGallery = () => {
//     launchImageLibrary(
//       {
//         mediaType: 'photo',
//         quality: 0.8,
//         selectionLimit: 1,
//       },
//       response => {
//         if (response.didCancel) {
//           return;
//         }

//         if (response.errorCode) {
//           Alert.alert(
//             'Gallery Error',
//             response.errorMessage || 'Unable to open gallery',
//           );
//           return;
//         }

//         if (response.assets?.length > 0) {
//           setProfileImage(response.assets[0]);
//         }
//       },
//     );
//   };

//   // Camera aur Gallery options
//   const selectImage = () => {
//     Alert.alert(
//       'Profile Picture',
//       'Choose an option',
//       [
//         {
//           text: 'Camera',
//           onPress: openCamera,
//         },
//         {
//           text: 'Gallery',
//           onPress: openGallery,
//         },
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//       ],
//     );
//   };

//   // Update Profile API
//   const handleSave = async () => {

//     if (!name.trim() || !email.trim() || !phone.trim()) {
//       Alert.alert('Error', 'Please fill all fields');
//       return;
//     }

//     if (!token) {
//       Alert.alert(
//         'Error',
//         'Authentication token not found. Please login again.',
//       );
//       return;
//     }

//     try {
//       setLoading(true);

//       // FormData create karna
//       const formData = new FormData();

//       formData.append('name', name.trim());
//       formData.append('email', email.trim());
//       formData.append('phone_number', phone.trim());

//       // Image select ki hai to API par upload karo
//       if (profileImage?.uri) {

//         const imageUri = profileImage.uri;

//         const imageName =
//           profileImage.fileName ||
//           imageUri.split('/').pop() ||
//           `profile_${Date.now()}.jpg`;

//         const imageType =
//           profileImage.type || 'image/jpeg';

//         formData.append('images', {
//           uri: imageUri,
//           type: imageType,
//           name: imageName,
//         });
//       }

//       console.log('Updating Profile...');

//       const res = await axios.patch(
//         `${BASE_URL}/updateProfile`,
//         formData,
//         {
//           headers: {
//             Accept: 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         },
//       );

//       console.log('UPDATE PROFILE RESPONSE:', res.data);

//       if (res.data.success === true) {

//         const updatedProfile = {
//           ...profile,
//           name: name.trim(),
//           email: email.trim(),
//           phone: phone.trim(),
//           image: profileImage?.uri || profile?.image,
//         };

//         // ProfileScreen ko updated data bhejna
//         if (onSave) {
//           onSave(updatedProfile);
//         }

//         Alert.alert(
//           'Success',
//           res.data.message ||
//             res.data.messgae ||
//             'Profile updated successfully!',
//           [
//             {
//               text: 'OK',
//               onPress: () => navigation.goBack(),
//             },
//           ],
//         );

//       } else {
//         Alert.alert(
//           'Error',
//           res.data.message ||
//             res.data.messgae ||
//             'Profile update failed',
//         );
//       }

//     } catch (error) {

//       console.log(
//         'UPDATE PROFILE ERROR:',
//         error.response?.data || error.message,
//       );

//       Alert.alert(
//         'Update Failed',
//         error.response?.data?.message ||
//           error.response?.data?.messgae ||
//           'Something went wrong. Please try again.',
//       );

//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <LinearGradient
//       colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
//       locations={[0, 0.25, 0.5, 0.7, 1]}
//       start={{x: 0, y: 0}}
//       end={{x: 1, y: 1}}
//       style={styles.container}
//     >

//       <StatusBar barStyle="light-content" />

//       <KeyboardAwareScrollView
//         showsVerticalScrollIndicator={false}
//         keyboardShouldPersistTaps="handled"
//         enableOnAndroid={true}
//         extraScrollHeight={50}
//         extraHeight={100}
//       >

//         {/* Header */}
//         <View style={styles.header}>

//           <TouchableOpacity
//             onPress={() => navigation.goBack()}
//             disabled={loading}
//           >
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

//           <TouchableOpacity
//             style={styles.avatar}
//             onPress={selectImage}
//             activeOpacity={0.8}
//           >

//             {profileImage?.uri ? (
//               <Image
//                 source={{uri: profileImage.uri}}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   borderRadius: 60,
//                 }}
//                 resizeMode="cover"
//               />
//             ) : (
//               <Icon
//                 name="person"
//                 size={55}
//                 color="#FFFFFF"
//               />
//             )}

//             {/* Camera Icon */}
//             <View
//               style={{
//                 position: 'absolute',
//                 bottom: 0,
//                 right: 0,
//                 backgroundColor: '#6C3CE9',
//                 width: 32,
//                 height: 32,
//                 borderRadius: 16,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 borderWidth: 2,
//                 borderColor: '#FFFFFF',
//               }}
//             >
//               <Icon
//                 name="camera"
//                 size={17}
//                 color="#FFFFFF"
//               />
//             </View>

//           </TouchableOpacity>

//           <Text style={styles.avatarText}>
//             Update Your Information
//           </Text>

//         </View>

//         {/* Form */}
//         <View style={styles.form}>

//           {/* Name */}
//           <Text style={styles.label}>
//             Full Name
//           </Text>

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
//               editable={!loading}
//             />

//           </View>

//           {/* Email */}
//           <Text style={styles.label}>
//             Email Address
//           </Text>

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
//               editable={!loading}
//             />

//           </View>

//           {/* Phone */}
//           <Text style={styles.label}>
//             Phone Number
//           </Text>

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
//               editable={!loading}
//             />

//           </View>

//           {/* Save Button */}
//           <TouchableOpacity
//             style={styles.saveButton}
//             onPress={handleSave}
//             activeOpacity={0.8}
//             disabled={loading}
//           >

//             {loading ? (
//               <ActivityIndicator color="#FFFFFF" />
//             ) : (
//               <>
//                 <Text style={styles.saveText}>
//                   Save Changes
//                 </Text>

//                 <Icon
//                   name="checkmark-circle-outline"
//                   size={21}
//                   color="#FFFFFF"
//                 />
//               </>
//             )}

//           </TouchableOpacity>

//         </View>

//       </KeyboardAwareScrollView>

//     </LinearGradient>
//   );
// };

// export default EditProfileScreen;



// import React, {useState} from 'react';

// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StatusBar,
//   Alert,
//   Image,
//   ActivityIndicator,
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';

// import {
//   launchCamera,
//   launchImageLibrary,
// } from 'react-native-image-picker';

// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import axios from 'axios';

// import {useSelector} from 'react-redux';

// import styles from './styles';

// const BASE_URL = 'https://xhcqhdxq-8006.inc1.devtunnels.ms';

// // Convert image into a valid URI string
// const getImageUri = image => {
//   if (!image) {
//     return null;
//   }

//   // If image is an array
//   if (Array.isArray(image)) {
//     return getImageUri(image[0]);
//   }

//   // If image is already a string
//   if (typeof image === 'string') {
//     return image.trim() || null;
//   }

//   // If image is an object
//   if (typeof image === 'object') {
//     return (
//       getImageUri(image.uri) ||
//       getImageUri(image.url) ||
//       getImageUri(image.path) ||
//       getImageUri(image.location)
//     );
//   }

//   return null;
// };

// const EditProfileScreen = ({navigation, route}) => {
//   const {profile, onSave} = route.params || {};

//   // Redux token
//   const token = useSelector(state => state.auth?.token);

//   const [name, setName] = useState(profile?.name || '');
//   const [email, setEmail] = useState(profile?.email || '');
//   const [phone, setPhone] = useState(profile?.phone || '');

//   const [loading, setLoading] = useState(false);

//   // Selected profile image
//   const [profileImage, setProfileImage] = useState(null);

//   // Existing profile image
//   const existingImage = getImageUri(profile?.image);

//   // Camera open
//   const openCamera = () => {
//     launchCamera(
//       {
//         mediaType: 'photo',
//         cameraType: 'back',
//         quality: 0.8,
//       },
//       response => {
//         if (response.didCancel) {
//           return;
//         }

//         if (response.errorCode) {
//           Alert.alert(
//             'Camera Error',
//             response.errorMessage || 'Unable to open camera',
//           );
//           return;
//         }

//         if (response.assets?.length > 0) {
//           const selectedImage = response.assets[0];

//           if (selectedImage?.uri) {
//             setProfileImage(selectedImage);
//           }
//         }
//       },
//     );
//   };

//   // Gallery open
//   const openGallery = () => {
//     launchImageLibrary(
//       {
//         mediaType: 'photo',
//         quality: 0.8,
//         selectionLimit: 1,
//       },
//       response => {
//         if (response.didCancel) {
//           return;
//         }

//         if (response.errorCode) {
//           Alert.alert(
//             'Gallery Error',
//             response.errorMessage || 'Unable to open gallery',
//           );
//           return;
//         }

//         if (response.assets?.length > 0) {
//           const selectedImage = response.assets[0];

//           if (selectedImage?.uri) {
//             setProfileImage(selectedImage);
//           }
//         }
//       },
//     );
//   };

//   // Camera and Gallery options
//   const selectImage = () => {
//     Alert.alert(
//       'Profile Picture',
//       'Choose an option',
//       [
//         {
//           text: 'Camera',
//           onPress: openCamera,
//         },
//         {
//           text: 'Gallery',
//           onPress: openGallery,
//         },
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//       ],
//     );
//   };

//   // Update Profile API
//   const handleSave = async () => {
//     if (!name.trim() || !email.trim() || !phone.trim()) {
//       Alert.alert('Error', 'Please fill all fields');
//       return;
//     }

//     if (!token) {
//       Alert.alert(
//         'Error',
//         'Authentication token not found. Please login again.',
//       );
//       return;
//     }

//     try {
//       setLoading(true);

//       const formData = new FormData();

//       formData.append('name', name.trim());
//       formData.append('email', email.trim());
//       formData.append('phone_number', phone.trim());

//       // Upload image only when a new image is selected
//       if (profileImage?.uri) {
//         const imageName =
//           profileImage.fileName ||
//           `profile_${Date.now()}.jpg`;

//         formData.append('images', {
//           uri: profileImage.uri,
//           type: profileImage.type || 'image/jpeg',
//           name: imageName,
//         });
//       }

//       console.log('Updating Profile...');
//       console.log('Selected Image:', profileImage);

//       const res = await axios.patch(
//         `${BASE_URL}/updateProfile`,
//         formData,
//         {
//           headers: {
//             Accept: 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         },
//       );

//       console.log(
//         'FULL UPDATE PROFILE RESPONSE:',
//         JSON.stringify(res.data, null, 2),
//       );

//       if (res.data.success === true) {
//         // Get image URL from API response
//         const responseImage = getImageUri(
//           res.data.data?.image ||
//           res.data.data?.images ||
//           res.data.image ||
//           res.data.images,
//         );

//         const updatedProfile = {
//           ...profile,
//           name: name.trim(),
//           email: email.trim(),
//           phone: phone.trim(),

//           // Prefer backend image URL
//           image:
//             responseImage ||
//             getImageUri(profileImage?.uri) ||
//             existingImage,
//         };

//         // Send updated profile to previous screen
//         if (onSave) {
//           onSave(updatedProfile);
//         }

//         Alert.alert(
//           'Success',
//           res.data.message ||
//             res.data.messgae ||
//             'Profile updated successfully!',
//           [
//             {
//               text: 'OK',
//               onPress: () => navigation.goBack(),
//             },
//           ],
//         );
//       } else {
//         Alert.alert(
//           'Error',
//           res.data.message ||
//             res.data.messgae ||
//             'Profile update failed',
//         );
//       }
//     } catch (error) {
//       console.log(
//         'UPDATE PROFILE ERROR:',
//         error.response?.data || error.message,
//       );

//       Alert.alert(
//         'Update Failed',
//         error.response?.data?.message ||
//           error.response?.data?.messgae ||
//           'Something went wrong. Please try again.',
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Image to display
//   const displayImage =
//     getImageUri(profileImage?.uri) || existingImage;

//   console.log('PROFILE IMAGE:', profile?.image);
//   console.log('DISPLAY IMAGE:', displayImage);

//   return (
//     <LinearGradient
//       colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
//       locations={[0, 0.25, 0.5, 0.7, 1]}
//       start={{x: 0, y: 0}}
//       end={{x: 1, y: 1}}
//       style={styles.container}>

//       <StatusBar barStyle="light-content" />

//       <KeyboardAwareScrollView
//         showsVerticalScrollIndicator={false}
//         keyboardShouldPersistTaps="handled"
//         enableOnAndroid={true}
//         extraScrollHeight={50}
//         extraHeight={100}>

//         {/* Header */}
//         <View style={styles.header}>

//           <TouchableOpacity
//             onPress={() => navigation.goBack()}
//             disabled={loading}>

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

//           <TouchableOpacity
//             style={styles.avatar}
//             onPress={selectImage}
//             activeOpacity={0.8}
//             disabled={loading}>

//             {displayImage ? (
//               <Image
//                 source={{uri: displayImage}}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   borderRadius: 60,
//                 }}
//                 resizeMode="cover"
//                 onError={error =>
//                   console.log(
//                     'PROFILE IMAGE ERROR:',
//                     error.nativeEvent,
//                   )
//                 }
//               />
//             ) : (
//               <Icon
//                 name="person"
//                 size={55}
//                 color="#FFFFFF"
//               />
//             )}

//             {/* Camera Icon */}
//             <View
//               style={{
//                 position: 'absolute',
//                 bottom: 0,
//                 right: 0,
//                 backgroundColor: '#6C3CE9',
//                 width: 32,
//                 height: 32,
//                 borderRadius: 16,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 borderWidth: 2,
//                 borderColor: '#FFFFFF',
//               }}>

//               <Icon
//                 name="camera"
//                 size={17}
//                 color="#FFFFFF"
//               />

//             </View>

//           </TouchableOpacity>

//           <Text style={styles.avatarText}>
//             Update Your Information
//           </Text>

//         </View>

//         {/* Form */}
//         <View style={styles.form}>

//           {/* Name */}
//           <Text style={styles.label}>
//             Full Name
//           </Text>

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
//               editable={!loading}
//             />

//           </View>

//           {/* Email */}
//           <Text style={styles.label}>
//             Email Address
//           </Text>

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
//               editable={!loading}
//             />

//           </View>

//           {/* Phone */}
//           <Text style={styles.label}>
//             Phone Number
//           </Text>

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
//               editable={!loading}
//             />

//           </View>

//           {/* Save Button */}
//           <TouchableOpacity
//             style={styles.saveButton}
//             onPress={handleSave}
//             activeOpacity={0.8}
//             disabled={loading}>

//             {loading ? (
//               <ActivityIndicator color="#FFFFFF" />
//             ) : (
//               <>
//                 <Text style={styles.saveText}>
//                   Save Changes
//                 </Text>

//                 <Icon
//                   name="checkmark-circle-outline"
//                   size={21}
//                   color="#FFFFFF"
//                 />
//               </>
//             )}

//           </TouchableOpacity>

//         </View>

//       </KeyboardAwareScrollView>

//     </LinearGradient>
//   );
// };

// export default EditProfileScreen;


// import React, {useState} from 'react';

// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StatusBar,
//   Alert,
//   Image,
//   ActivityIndicator,
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';

// import {
//   launchCamera,
//   launchImageLibrary,
// } from 'react-native-image-picker';

// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import axios from 'axios';

// import {useSelector, useDispatch} from 'react-redux';

// import {setProfileData} from '../../../redux/auth/authSlice';

// import styles from './styles';

// const BASE_URL = 'https://xhcqhdxq-8006.inc1.devtunnels.ms';

// // Convert image into a valid URI
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

// const EditProfileScreen = ({navigation, route}) => {
//   const {profile, onSave} = route.params || {};

//   const token = useSelector(state => state.auth?.token);
//   const dispatch = useDispatch();

//   const [name, setName] = useState(profile?.name || '');
//   const [email, setEmail] = useState(profile?.email || '');
//   const [phone, setPhone] = useState(profile?.phone || '');

//   const [loading, setLoading] = useState(false);

//   // New selected image
//   const [profileImage, setProfileImage] = useState(null);

//   // Existing API image
//   const existingImage = getImageUri(profile?.image);

//   // Open Camera
//   const openCamera = () => {
//     launchCamera(
//       {
//         mediaType: 'photo',
//         cameraType: 'back',
//         quality: 0.8,
//       },
//       response => {
//         if (response.didCancel) {
//           return;
//         }

//         if (response.errorCode) {
//           Alert.alert(
//             'Camera Error',
//             response.errorMessage || 'Unable to open camera',
//           );
//           return;
//         }

//         if (response.assets?.length > 0) {
//           const selectedImage = response.assets[0];

//           if (selectedImage?.uri) {
//             setProfileImage(selectedImage);
//           }
//         }
//       },
//     );
//   };

//   // Open Gallery
//   const openGallery = () => {
//     launchImageLibrary(
//       {
//         mediaType: 'photo',
//         quality: 0.8,
//         selectionLimit: 1,
//       },
//       response => {
//         if (response.didCancel) {
//           return;
//         }

//         if (response.errorCode) {
//           Alert.alert(
//             'Gallery Error',
//             response.errorMessage || 'Unable to open gallery',
//           );
//           return;
//         }

//         if (response.assets?.length > 0) {
//           const selectedImage = response.assets[0];

//           if (selectedImage?.uri) {
//             setProfileImage(selectedImage);
//           }
//         }
//       },
//     );
//   };

//   // Choose image
//   const selectImage = () => {
//     Alert.alert(
//       'Profile Picture',
//       'Choose an option',
//       [
//         {
//           text: 'Camera',
//           onPress: openCamera,
//         },
//         {
//           text: 'Gallery',
//           onPress: openGallery,
//         },
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//       ],
//     );
//   };

//   // Fetch latest profile from backend
//   const fetchUpdatedProfile = async () => {
//     const res = await axios.get(`${BASE_URL}/getProfile`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         Accept: 'application/json',
//       },
//     });

//     console.log(
//       'LATEST PROFILE RESPONSE:',
//       JSON.stringify(res.data, null, 2),
//     );

//     const profileData =
//       res.data.profile ||
//       res.data.data?.profile ||
//       res.data.data ||
//       {};

//     return {
//       ...profile,
//       name: profileData.name || name.trim(),
//       email: profileData.email || email.trim(),
//       phone:
//         profileData.phone_number ||
//         profileData.phone ||
//         phone.trim(),
//       image: getImageUri(
//         profileData.images || profileData.image,
//       ),
//     };
//   };

//   // Update Profile API
//   const handleSave = async () => {
//     if (!name.trim() || !email.trim() || !phone.trim()) {
//       Alert.alert('Error', 'Please fill all fields');
//       return;
//     }

//     if (!token) {
//       Alert.alert(
//         'Error',
//         'Authentication token not found. Please login again.',
//       );
//       return;
//     }

//     try {
//       setLoading(true);

//       const formData = new FormData();

//       formData.append('name', name.trim());
//       formData.append('email', email.trim());
//       formData.append('phone_number', phone.trim());

//       // Upload only if user selected a new image
//       if (profileImage?.uri) {
//         formData.append('images', {
//           uri: profileImage.uri,
//           type: profileImage.type || 'image/jpeg',
//           name:
//             profileImage.fileName ||
//             `profile_${Date.now()}.jpg`,
//         });
//       }

//       console.log('UPDATING PROFILE...');
//       console.log('NEW SELECTED IMAGE:', profileImage);

//       const res = await axios.patch(
//         `${BASE_URL}/updateProfile`,
//         formData,
//         {
//           headers: {
//             Accept: 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         },
//       );

//       console.log(
//         'UPDATE PROFILE RESPONSE:',
//         JSON.stringify(res.data, null, 2),
//       );

//       if (res.data.success === true) {
//         let updatedProfile;

//         try {
//           // Get the actual saved image URL from backend
//           updatedProfile = await fetchUpdatedProfile();
//         } catch (fetchError) {
//           console.log(
//             'REFRESH PROFILE ERROR:',
//             fetchError.response?.data || fetchError.message,
//           );

//           // Fallback if GET request fails
//           updatedProfile = {
//             ...profile,
//             name: name.trim(),
//             email: email.trim(),
//             phone: phone.trim(),
//             image:
//               getImageUri(
//                 res.data.profile?.images ||
//                 res.data.profile?.image ||
//                 res.data.data?.images ||
//                 res.data.data?.image ||
//                 res.data.images ||
//                 res.data.image,
//               ) ||
//               getImageUri(profileImage?.uri) ||
//               existingImage,
//           };
//         }

//         // Save latest data in Redux
//         dispatch(setProfileData(updatedProfile));

//         // Update previous screen
//         if (onSave) {
//           onSave(updatedProfile);
//         }

//         Alert.alert(
//           'Success',
//           res.data.message ||
//             res.data.messgae ||
//             'Profile updated successfully!',
//           [
//             {
//               text: 'OK',
//               onPress: () => navigation.goBack(),
//             },
//           ],
//         );
//       } else {
//         Alert.alert(
//           'Error',
//           res.data.message ||
//             res.data.messgae ||
//             'Profile update failed',
//         );
//       }
//     } catch (error) {
//       console.log(
//         'UPDATE PROFILE ERROR:',
//         error.response?.data || error.message,
//       );

//       Alert.alert(
//         'Update Failed',
//         error.response?.data?.message ||
//           error.response?.data?.messgae ||
//           'Something went wrong. Please try again.',
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Show new image preview, otherwise existing API image
//   const displayImage =
//     getImageUri(profileImage?.uri) || existingImage;

//   return (
//     <LinearGradient
//       colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
//       locations={[0, 0.25, 0.5, 0.7, 1]}
//       start={{x: 0, y: 0}}
//       end={{x: 1, y: 1}}
//       style={styles.container}>

//       <StatusBar barStyle="light-content" />

//       <KeyboardAwareScrollView
//         showsVerticalScrollIndicator={false}
//         keyboardShouldPersistTaps="handled"
//         enableOnAndroid={true}
//         extraScrollHeight={50}
//         extraHeight={100}>

//         {/* Header */}
//         <View style={styles.header}>

//           <TouchableOpacity
//             onPress={() => navigation.goBack()}
//             disabled={loading}>

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

//           <TouchableOpacity
//             style={styles.avatar}
//             onPress={selectImage}
//             activeOpacity={0.8}
//             disabled={loading}>

//             {displayImage ? (
//               <Image
//                 source={{uri: displayImage}}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   borderRadius: 60,
//                 }}
//                 resizeMode="cover"
//                 onError={error =>
//                   console.log(
//                     'EDIT PROFILE IMAGE ERROR:',
//                     error.nativeEvent,
//                   )
//                 }
//               />
//             ) : (
//               <Icon
//                 name="person"
//                 size={55}
//                 color="#FFFFFF"
//               />
//             )}

//             {/* Camera Icon */}
//             <View
//               style={{
//                 position: 'absolute',
//                 bottom: 0,
//                 right: 0,
//                 backgroundColor: '#6C3CE9',
//                 width: 32,
//                 height: 32,
//                 borderRadius: 16,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 borderWidth: 2,
//                 borderColor: '#FFFFFF',
//               }}>

//               <Icon
//                 name="camera"
//                 size={17}
//                 color="#FFFFFF"
//               />

//             </View>

//           </TouchableOpacity>

//           <Text style={styles.avatarText}>
//             Update Your Information
//           </Text>

//         </View>

//         {/* Form */}
//         <View style={styles.form}>

//           {/* Name */}
//           <Text style={styles.label}>
//             Full Name
//           </Text>

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
//               editable={!loading}
//             />

//           </View>

//           {/* Email */}
//           <Text style={styles.label}>
//             Email Address
//           </Text>

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
//               editable={!loading}
//             />

//           </View>

//           {/* Phone */}
//           <Text style={styles.label}>
//             Phone Number
//           </Text>

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
//               editable={!loading}
//             />

//           </View>

//           {/* Save Button */}
//           <TouchableOpacity
//             style={styles.saveButton}
//             onPress={handleSave}
//             activeOpacity={0.8}
//             disabled={loading}>

//             {loading ? (
//               <ActivityIndicator color="#FFFFFF" />
//             ) : (
//               <>
//                 <Text style={styles.saveText}>
//                   Save Changes
//                 </Text>

//                 <Icon
//                   name="checkmark-circle-outline"
//                   size={21}
//                   color="#FFFFFF"
//                 />
//               </>
//             )}

//           </TouchableOpacity>

//         </View>

//       </KeyboardAwareScrollView>

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
  Image,
  ActivityIndicator,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';

import {useSelector, useDispatch} from 'react-redux';

import {setProfileData} from '../../../redux/auth/authSlice';

import styles from './styles';

const BASE_URL = 'https://xhcqhdxq-8006.inc1.devtunnels.ms';

// Convert backend image into a valid URI
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

    // Replace localhost URL with tunnel URL
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

const EditProfileScreen = ({navigation, route}) => {
  const {profile, onSave} = route.params || {};

  const token = useSelector(state => state.auth?.token);
  const dispatch = useDispatch();

  const [name, setName] = useState(profile?.name || '');
  const [email] = useState(profile?.email || '');
  const [phone, setPhone] = useState(profile?.phone || '');

  const [loading, setLoading] = useState(false);

  // New selected image
  const [profileImage, setProfileImage] = useState(null);

  // Existing image from backend
  const existingImage =
    getImageUri(profile?.image);

  // Open Camera
  const openCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'back',
        quality: 0.8,
      },
      response => {
        if (response.didCancel) {
          return;
        }

        if (response.errorCode) {
          Alert.alert(
            'Camera Error',
            response.errorMessage || 'Unable to open camera',
          );
          return;
        }

        if (response.assets?.length > 0) {
          const selectedImage = response.assets[0];

          if (selectedImage?.uri) {
            setProfileImage(selectedImage);
          }
        }
      },
    );
  };

  // Open Gallery
  const openGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.8,
        selectionLimit: 1,
      },
      response => {
        if (response.didCancel) {
          return;
        }

        if (response.errorCode) {
          Alert.alert(
            'Gallery Error',
            response.errorMessage || 'Unable to open gallery',
          );
          return;
        }

        if (response.assets?.length > 0) {
          const selectedImage = response.assets[0];

          if (selectedImage?.uri) {
            setProfileImage(selectedImage);
          }
        }
      },
    );
  };

  // Choose image
  const selectImage = () => {
    Alert.alert(
      'Profile Picture',
      'Choose an option',
      [
        {
          text: 'Camera',
          onPress: openCamera,
        },
        {
          text: 'Gallery',
          onPress: openGallery,
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
    );
  };

  // Fetch latest profile from backend
  const fetchUpdatedProfile = async () => {
    const res = await axios.get(`${BASE_URL}/getProfile`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });

    console.log(
      'LATEST PROFILE RESPONSE:',
      JSON.stringify(res.data, null, 2),
    );

    const profileData =
      res.data.profile ||
      res.data.data?.profile ||
      res.data.data ||
      {};

    const latestImage =
      getImageUri(profileData.images) ||
      getImageUri(profileData.image);

    return {
      ...profile,
      name: profileData.name || name.trim(),
      email: profileData.email || email,
      phone:
        profileData.phone_number ||
        profileData.phone ||
        phone.trim(),
      image: latestImage || existingImage,
    };
  };

  // Update Profile API
  const handleSave = async () => {
    if (!name.trim() || !phone.trim()) {
      Alert.alert(
        'Error',
        'Please enter your name and phone number',
      );
      return;
    }

    if (!token) {
      Alert.alert(
        'Error',
        'Authentication token not found. Please login again.',
      );
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      // Only send name and phone number
      formData.append('name', name.trim());
      formData.append('phone_number', phone.trim());

      // Send image only if a new image is selected
      if (profileImage?.uri) {
        formData.append('images', {
          uri: profileImage.uri,
          type: profileImage.type || 'image/jpeg',
          name:
            profileImage.fileName ||
            `profile_${Date.now()}.jpg`,
        });
      }

      console.log('UPDATING PROFILE...');
      console.log('NEW SELECTED IMAGE:', profileImage);

      const res = await axios.patch(
        `${BASE_URL}/updateProfile`,
        formData,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log(
        'UPDATE PROFILE RESPONSE:',
        JSON.stringify(res.data, null, 2),
      );

      if (res.data.success === true) {
        let updatedProfile;

        try {
          // Get actual saved profile and image URL
          updatedProfile = await fetchUpdatedProfile();
        } catch (fetchError) {
          console.log(
            'REFRESH PROFILE ERROR:',
            fetchError.response?.data || fetchError.message,
          );

          // Fallback if GET request fails
          const responseProfile =
            res.data.profile ||
            res.data.data?.profile ||
            res.data.data ||
            {};

          const responseImage =
            getImageUri(responseProfile.images) ||
            getImageUri(responseProfile.image) ||
            getImageUri(res.data.images) ||
            getImageUri(res.data.image);

          updatedProfile = {
            ...profile,
            name: responseProfile.name || name.trim(),
            email: email,
            phone:
              responseProfile.phone_number ||
              responseProfile.phone ||
              phone.trim(),
            image:
              responseImage ||
              getImageUri(profileImage?.uri) ||
              existingImage,
          };
        }

        // Save updated profile in Redux
        dispatch(setProfileData(updatedProfile));

        // Update ProfileScreen immediately
        if (onSave) {
          onSave(updatedProfile);
        }

        Alert.alert(
          'Success',
          res.data.message ||
            res.data.messgae ||
            'Profile updated successfully!',
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
          res.data.message ||
            res.data.messgae ||
            'Profile update failed',
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

  // Show new selected image, otherwise existing API image
  const displayImage =
    getImageUri(profileImage?.uri) || existingImage;

  return (
    <LinearGradient
      colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
      locations={[0, 0.25, 0.5, 0.7, 1]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}>

      <StatusBar barStyle="light-content" />

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
        extraScrollHeight={50}
        extraHeight={100}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            disabled={loading}>

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
          <TouchableOpacity
            style={styles.avatar}
            onPress={selectImage}
            activeOpacity={0.8}
            disabled={loading}>

            {displayImage ? (
              <Image
                source={{uri: displayImage}}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 60,
                }}
                resizeMode="cover"
                onError={error =>
                  console.log(
                    'EDIT PROFILE IMAGE ERROR:',
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

            {/* Camera Icon */}
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                backgroundColor: '#6C3CE9',
                width: 32,
                height: 32,
                borderRadius: 16,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
                borderColor: '#FFFFFF',
              }}>

              <Icon
                name="camera"
                size={17}
                color="#FFFFFF"
              />
            </View>
          </TouchableOpacity>

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

          {/* Email - Read Only */}
          <Text style={styles.label}>
            Email Address
          </Text>

          <View
            style={[
              styles.inputContainer,
              {opacity: 0.6},
            ]}>

            <Icon
              name="mail-outline"
              size={20}
              color="#AAB2D5"
            />

            <TextInput
              style={styles.input}
              placeholder="Email address"
              placeholderTextColor="#9299B8"
              value={email}
              editable={false}
              selectTextOnFocus={false}
              autoCapitalize="none"
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
            disabled={loading}>

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
