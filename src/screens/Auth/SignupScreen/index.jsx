

// import React, { useState, useMemo } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StatusBar,
//   KeyboardAvoidingView,
//   ScrollView,
//   Platform,
//   Modal,
//   FlatList,
  
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import styles from './styles';

// const COUNTRIES = [
//   { code: 'US', name: 'United States', dial: '+1', flag: '🇺🇸' },
//   { code: 'PK', name: 'Pakistan', dial: '+92', flag: '🇵🇰' },
//   { code: 'IN', name: 'India', dial: '+91', flag: '🇮🇳' },
//   { code: 'AF', name: 'Afghanistan', dial: '+93', flag: '🇦🇫' },
//   { code: 'BD', name: 'Bangladesh', dial: '+880', flag: '🇧🇩' },
//   { code: 'GB', name: 'United Kingdom', dial: '+44', flag: '🇬🇧' },
//   { code: 'CA', name: 'Canada', dial: '+1', flag: '🇨🇦' },
//   { code: 'AU', name: 'Australia', dial: '+61', flag: '🇦🇺' },
//   { code: 'AE', name: 'United Arab Emirates', dial: '+971', flag: '🇦🇪' },
//   { code: 'SA', name: 'Saudi Arabia', dial: '+966', flag: '🇸🇦' },
//   { code: 'QA', name: 'Qatar', dial: '+974', flag: '🇶🇦' },
//   { code: 'KW', name: 'Kuwait', dial: '+965', flag: '🇰🇼' },
//   { code: 'OM', name: 'Oman', dial: '+968', flag: '🇴🇲' },
//   { code: 'BH', name: 'Bahrain', dial: '+973', flag: '🇧🇭' },
//   { code: 'TR', name: 'Turkey', dial: '+90', flag: '🇹🇷' },
//   { code: 'IR', name: 'Iran', dial: '+98', flag: '🇮🇷' },
//   { code: 'EG', name: 'Egypt', dial: '+20', flag: '🇪🇬' },
//   { code: 'CN', name: 'China', dial: '+86', flag: '🇨🇳' },
//   { code: 'JP', name: 'Japan', dial: '+81', flag: '🇯🇵' },
//   { code: 'KR', name: 'South Korea', dial: '+82', flag: '🇰🇷' },
//   { code: 'MY', name: 'Malaysia', dial: '+60', flag: '🇲🇾' },
//   { code: 'SG', name: 'Singapore', dial: '+65', flag: '🇸🇬' },
//   { code: 'ID', name: 'Indonesia', dial: '+62', flag: '🇮🇩' },
//   { code: 'DE', name: 'Germany', dial: '+49', flag: '🇩🇪' },
//   { code: 'FR', name: 'France', dial: '+33', flag: '🇫🇷' },
//   { code: 'IT', name: 'Italy', dial: '+39', flag: '🇮🇹' },
//   { code: 'ES', name: 'Spain', dial: '+34', flag: '🇪🇸' },
//   { code: 'RU', name: 'Russia', dial: '+7', flag: '🇷🇺' },
//   { code: 'BR', name: 'Brazil', dial: '+55', flag: '🇧🇷' },
//   { code: 'ZA', name: 'South Africa', dial: '+27', flag: '🇿🇦' },
// ];

// const SignupScreen = ({ navigation }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const [country, setCountry] = useState(COUNTRIES[0]);
//   const [pickerVisible, setPickerVisible] = useState(false);
//   const [search, setSearch] = useState('');

//   const filteredCountries = useMemo(() => {
//     const q = search.trim().toLowerCase();
//     if (!q) return COUNTRIES;
//     return COUNTRIES.filter(
//       c => c.name.toLowerCase().includes(q) || c.dial.includes(q),
//     );
//   }, [search]);

//   const closePicker = () => {
//     setPickerVisible(false);
//     setSearch('');
//   };

//   const selectCountry = item => {
//     setCountry(item);
//     closePicker();
//   };

//   const handleSignup = () => {
//     // Yahan apni signup logic / API call lagao
//     console.log('Signup:', name, email, `${country.dial}${phone}`, password);
//   };

//   return (
//     <LinearGradient
//       colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
//       locations={[0, 0.25, 0.5, 0.7, 1]}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 1 }}
//       style={styles.container}
//     >
//       <StatusBar hidden />

//       <KeyboardAvoidingView
//         style={styles.flex}
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//       >
//         <ScrollView
//           contentContainerStyle={styles.scrollContent}
//           keyboardShouldPersistTaps="handled"
//           showsVerticalScrollIndicator={false}
//         >
//           <View>
//             <Text style={styles.title}>ENTER YOUR DETAILS</Text>

//             {/* Full Name */}
//             <View style={styles.inputContainer}>
//               <TextInput
//                 style={[styles.input, styles.inputNoIcon]}
//                 placeholder="Full Name"
//                 placeholderTextColor="#E5E5EA"
//                 value={name}
//                 onChangeText={setName}
//               />
//             </View>

//             {/* Email */}
//             <View style={styles.inputContainer}>
//               <MaterialIcons name="email" size={20} color="#FFFFFF" />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Email"
//                 placeholderTextColor="#E5E5EA"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//                 autoCorrect={false}
//               />
//             </View>

//             {/* Phone with country picker */}
//             <View style={styles.inputContainer}>
//               <TouchableOpacity
//                 style={styles.flagBox}
//                 activeOpacity={0.8}
//                 onPress={() => setPickerVisible(true)}
//               >
//                 <Text style={styles.flag}>{country.flag}</Text>
//                 <MaterialIcons
//                   name="keyboard-arrow-down"
//                   size={20}
//                   color="#FFFFFF"
//                 />
//               </TouchableOpacity>
//               <Text style={styles.dialCode}>{country.dial}</Text>
//               <TextInput
//                 style={[styles.input, styles.phoneInput]}
//                 placeholder="000 000 000"
//                 placeholderTextColor="#E5E5EA"
//                 value={phone}
//                 onChangeText={setPhone}
//                 keyboardType="phone-pad"
//               />
//             </View>

//             {/* Password */}
//             <View style={styles.inputContainer}>
//               <MaterialIcons name="lock" size={20} color="#FFFFFF" />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 placeholderTextColor="#E5E5EA"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry={!showPassword}
//                 autoCapitalize="none"
//                 autoCorrect={false}
//               />
//               <TouchableOpacity
//                 onPress={() => setShowPassword(!showPassword)}
//                 hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
//               >
//                 <MaterialIcons
//                   name={showPassword ? 'visibility' : 'visibility-off'}
//                   size={20}
//                   color="#FFFFFF"
//                 />
//               </TouchableOpacity>
//             </View>
//           </View>

//           {/* Bottom button */}
//           <TouchableOpacity
//             style={styles.button}
//             activeOpacity={0.85}
//             onPress={() => navigation.navigate('OTPScreen')}
//           >
//             <Ionicons name="arrow-forward" size={16} color="#020204" />
//             <Text style={styles.buttonText}>SIGN UP</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </KeyboardAvoidingView>

//       {/* Country picker modal */}
//       <Modal
//         visible={pickerVisible}
//         transparent
//         animationType="slide"
//         onRequestClose={closePicker}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalSheet}>
//             <View style={styles.modalHeader}>
//               <Text style={styles.modalTitle}>Select Country</Text>
//               <TouchableOpacity onPress={closePicker}>
//                 <MaterialIcons name="close" size={24} color="#FFFFFF" />
//               </TouchableOpacity>
//             </View>

//             <View style={styles.searchBox}>
//               <MaterialIcons name="search" size={20} color="#C9C9D1" />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder="Search country or code"
//                 placeholderTextColor="#9A9AA5"
//                 value={search}
//                 onChangeText={setSearch}
//               />
//             </View>

//             <FlatList
//               data={filteredCountries}
//               keyExtractor={item => item.code}
//               keyboardShouldPersistTaps="handled"
//               showsVerticalScrollIndicator={false}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   style={styles.countryRow}
//                   activeOpacity={0.7}
//                   onPress={() => selectCountry(item)}
//                 >
//                   <Text style={styles.countryFlag}>{item.flag}</Text>
//                   <Text style={styles.countryName}>{item.name}</Text>
//                   <Text style={styles.countryDial}>{item.dial}</Text>
//                   {item.code === country.code && (
//                     <MaterialIcons name="check" size={18} color="#4BC6DE" />
//                   )}
//                 </TouchableOpacity>
//               )}
//               ListEmptyComponent={
//                 <Text style={styles.emptyText}>No country found</Text>
//               }
//             />
//           </View>
//         </View>
//       </Modal>
//     </LinearGradient>
//   );
// };



// export default SignupScreen;



                              // new



// import React, { useState, useMemo } from 'react';

// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StatusBar,
//   KeyboardAvoidingView,
//   ScrollView,
//   Platform,
//   Modal,
//   FlatList,
//   Alert,
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// // Redux imports
// import { useDispatch } from 'react-redux';
// // import { setOtpFlow } from '../../../redux/auth/authSlice';
// import {setOtpFlow} from '../../../redux/auth/authSlice'
// import styles from './styles';

// const COUNTRIES = [
//   { code: 'US', name: 'United States', dial: '+1', flag: '🇺🇸' },
//   { code: 'PK', name: 'Pakistan', dial: '+92', flag: '🇵🇰' },
//   { code: 'IN', name: 'India', dial: '+91', flag: '🇮🇳' },
//   { code: 'AF', name: 'Afghanistan', dial: '+93', flag: '🇦🇫' },
//   { code: 'BD', name: 'Bangladesh', dial: '+880', flag: '🇧🇩' },
//   { code: 'GB', name: 'United Kingdom', dial: '+44', flag: '🇬🇧' },
//   { code: 'CA', name: 'Canada', dial: '+1', flag: '🇨🇦' },
//   { code: 'AU', name: 'Australia', dial: '+61', flag: '🇦🇺' },
//   { code: 'AE', name: 'United Arab Emirates', dial: '+971', flag: '🇦🇪' },
//   { code: 'SA', name: 'Saudi Arabia', dial: '+966', flag: '🇸🇦' },
//   { code: 'QA', name: 'Qatar', dial: '+974', flag: '🇶🇦' },
//   { code: 'KW', name: 'Kuwait', dial: '+965', flag: '🇰🇼' },
//   { code: 'OM', name: 'Oman', dial: '+968', flag: '🇴🇲' },
//   { code: 'BH', name: 'Bahrain', dial: '+973', flag: '🇧🇭' },
//   { code: 'TR', name: 'Turkey', dial: '+90', flag: '🇹🇷' },
//   { code: 'IR', name: 'Iran', dial: '+98', flag: '🇮🇷' },
//   { code: 'EG', name: 'Egypt', dial: '+20', flag: '🇪🇬' },
//   { code: 'CN', name: 'China', dial: '+86', flag: '🇨🇳' },
//   { code: 'JP', name: 'Japan', dial: '+81', flag: '🇯🇵' },
//   { code: 'KR', name: 'South Korea', dial: '+82', flag: '🇰🇷' },
//   { code: 'MY', name: 'Malaysia', dial: '+60', flag: '🇲🇾' },
//   { code: 'SG', name: 'Singapore', dial: '+65', flag: '🇸🇬' },
//   { code: 'ID', name: 'Indonesia', dial: '+62', flag: '🇮🇩' },
//   { code: 'DE', name: 'Germany', dial: '+49', flag: '🇩🇪' },
//   { code: 'FR', name: 'France', dial: '+33', flag: '🇫🇷' },
//   { code: 'IT', name: 'Italy', dial: '+39', flag: '🇮🇹' },
//   { code: 'ES', name: 'Spain', dial: '+34', flag: '🇪🇸' },
//   { code: 'RU', name: 'Russia', dial: '+7', flag: '🇷🇺' },
//   { code: 'BR', name: 'Brazil', dial: '+55', flag: '🇧🇷' },
//   { code: 'ZA', name: 'South Africa', dial: '+27', flag: '🇿🇦' },
// ];

// const SignupScreen = ({ navigation }) => {

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const [country, setCountry] = useState(COUNTRIES[0]);
//   const [pickerVisible, setPickerVisible] = useState(false);
//   const [search, setSearch] = useState('');

//   // Redux dispatch
//   const dispatch = useDispatch();

//   const filteredCountries = useMemo(() => {
//     const q = search.trim().toLowerCase();

//     if (!q) return COUNTRIES;

//     return COUNTRIES.filter(
//       c =>
//         c.name.toLowerCase().includes(q) ||
//         c.dial.includes(q),
//     );

//   }, [search]);

//   const closePicker = () => {
//     setPickerVisible(false);
//     setSearch('');
//   };

//   const selectCountry = item => {
//     setCountry(item);
//     closePicker();
//   };

//   // Signup Function
//   const handleSignup = () => {

//     // Validation
//     if (!name.trim() || !email.trim() || !phone.trim() || !password.trim()) {
//       Alert.alert('Error', 'Please fill all fields');
//       return;
//     }

//     // Save signup flow in Redux
//     dispatch(setOtpFlow('signup'));

//     // Signup data
//     console.log('Signup:', {
//       name,
//       email,
//       phone: `${country.dial}${phone}`,
//       password,
//     });

//     // Open OTP Screen
//     navigation.navigate('OTPScreen', {
//       email: email,
//     });

//   };

//   return (
//     <LinearGradient
//       colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
//       locations={[0, 0.25, 0.5, 0.7, 1]}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 1 }}
//       style={styles.container}
//     >

//       <StatusBar hidden />

//       <KeyboardAvoidingView
//         style={styles.flex}
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//       >

//         <ScrollView
//           contentContainerStyle={styles.scrollContent}
//           keyboardShouldPersistTaps="handled"
//           showsVerticalScrollIndicator={false}
//         >

//           <View>

//             <Text style={styles.title}>ENTER YOUR DETAILS</Text>

//             {/* Full Name */}
//             <View style={styles.inputContainer}>

//               <TextInput
//                 style={[styles.input, styles.inputNoIcon]}
//                 placeholder="Full Name"
//                 placeholderTextColor="#E5E5EA"
//                 value={name}
//                 onChangeText={setName}
//               />

//             </View>

//             {/* Email */}
//             <View style={styles.inputContainer}>

//               <MaterialIcons
//                 name="email"
//                 size={20}
//                 color="#FFFFFF"
//               />

//               <TextInput
//                 style={styles.input}
//                 placeholder="Email"
//                 placeholderTextColor="#E5E5EA"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//                 autoCorrect={false}
//               />

//             </View>

//             {/* Phone with country picker */}
//             <View style={styles.inputContainer}>

//               <TouchableOpacity
//                 style={styles.flagBox}
//                 activeOpacity={0.8}
//                 onPress={() => setPickerVisible(true)}
//               >

//                 <Text style={styles.flag}>
//                   {country.flag}
//                 </Text>

//                 <MaterialIcons
//                   name="keyboard-arrow-down"
//                   size={20}
//                   color="#FFFFFF"
//                 />

//               </TouchableOpacity>

//               <Text style={styles.dialCode}>
//                 {country.dial}
//               </Text>

//               <TextInput
//                 style={[styles.input, styles.phoneInput]}
//                 placeholder="000 000 000"
//                 placeholderTextColor="#E5E5EA"
//                 value={phone}
//                 onChangeText={setPhone}
//                 keyboardType="phone-pad"
//               />

//             </View>

//             {/* Password */}
//             <View style={styles.inputContainer}>

//               <MaterialIcons
//                 name="lock"
//                 size={20}
//                 color="#FFFFFF"
//               />

//               <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 placeholderTextColor="#E5E5EA"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry={!showPassword}
//                 autoCapitalize="none"
//                 autoCorrect={false}
//               />

//               <TouchableOpacity
//                 onPress={() => setShowPassword(!showPassword)}
//                 hitSlop={{
//                   top: 10,
//                   bottom: 10,
//                   left: 10,
//                   right: 10,
//                 }}
//               >

//                 <MaterialIcons
//                   name={showPassword ? 'visibility' : 'visibility-off'}
//                   size={20}
//                   color="#FFFFFF"
//                 />

//               </TouchableOpacity>

//             </View>

//           </View>

//           {/* Bottom button */}
//           <TouchableOpacity
//             style={styles.button}
//             activeOpacity={0.85}
//             onPress={handleSignup}
//           >

//             <Ionicons
//               name="arrow-forward"
//               size={16}
//               color="#020204"
//             />

//             <Text style={styles.buttonText}>
//               SIGN UP
//             </Text>

//           </TouchableOpacity>

//         </ScrollView>

//       </KeyboardAvoidingView>

//       {/* Country picker modal */}
//       <Modal
//         visible={pickerVisible}
//         transparent
//         animationType="slide"
//         onRequestClose={closePicker}
//       >

//         <View style={styles.modalOverlay}>

//           <View style={styles.modalSheet}>

//             <View style={styles.modalHeader}>

//               <Text style={styles.modalTitle}>
//                 Select Country
//               </Text>

//               <TouchableOpacity onPress={closePicker}>

//                 <MaterialIcons
//                   name="close"
//                   size={24}
//                   color="#FFFFFF"
//                 />

//               </TouchableOpacity>

//             </View>

//             <View style={styles.searchBox}>

//               <MaterialIcons
//                 name="search"
//                 size={20}
//                 color="#C9C9D1"
//               />

//               <TextInput
//                 style={styles.searchInput}
//                 placeholder="Search country or code"
//                 placeholderTextColor="#9A9AA5"
//                 value={search}
//                 onChangeText={setSearch}
//               />

//             </View>

//             <FlatList
//               data={filteredCountries}
//               keyExtractor={item => item.code}
//               keyboardShouldPersistTaps="handled"
//               showsVerticalScrollIndicator={false}

//               renderItem={({ item }) => (

//                 <TouchableOpacity
//                   style={styles.countryRow}
//                   activeOpacity={0.7}
//                   onPress={() => selectCountry(item)}
//                 >

//                   <Text style={styles.countryFlag}>
//                     {item.flag}
//                   </Text>

//                   <Text style={styles.countryName}>
//                     {item.name}
//                   </Text>

//                   <Text style={styles.countryDial}>
//                     {item.dial}
//                   </Text>

//                   {item.code === country.code && (

//                     <MaterialIcons
//                       name="check"
//                       size={18}
//                       color="#4BC6DE"
//                     />

//                   )}

//                 </TouchableOpacity>

//               )}

//               ListEmptyComponent={

//                 <Text style={styles.emptyText}>
//                   No country found
//                 </Text>

//               }

//             />

//           </View>

//         </View>

//       </Modal>

//     </LinearGradient>
//   );
// };

// export default SignupScreen;




// import React, { useState, useMemo } from 'react';

// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StatusBar,
//   KeyboardAvoidingView,
//   ScrollView,
//   Platform,
//   Modal,
//   FlatList,
//   Alert,
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import { useDispatch } from 'react-redux';
// import { setOtpFlow } from '../../../redux/auth/authSlice';

// import styles from './styles';

// const COUNTRIES = [
//   { code: 'US', name: 'United States', dial: '+1', flag: '🇺🇸' },
//   { code: 'PK', name: 'Pakistan', dial: '+92', flag: '🇵🇰' },
//   { code: 'IN', name: 'India', dial: '+91', flag: '🇮🇳' },
//   { code: 'AF', name: 'Afghanistan', dial: '+93', flag: '🇦🇫' },
//   { code: 'BD', name: 'Bangladesh', dial: '+880', flag: '🇧🇩' },
//   { code: 'GB', name: 'United Kingdom', dial: '+44', flag: '🇬🇧' },
//   { code: 'CA', name: 'Canada', dial: '+1', flag: '🇨🇦' },
//   { code: 'AU', name: 'Australia', dial: '+61', flag: '🇦🇺' },
//   { code: 'AE', name: 'United Arab Emirates', dial: '+971', flag: '🇦🇪' },
//   { code: 'SA', name: 'Saudi Arabia', dial: '+966', flag: '🇸🇦' },
//   { code: 'QA', name: 'Qatar', dial: '+974', flag: '🇶🇦' },
//   { code: 'KW', name: 'Kuwait', dial: '+965', flag: '🇰🇼' },
//   { code: 'OM', name: 'Oman', dial: '+968', flag: '🇴🇲' },
//   { code: 'BH', name: 'Bahrain', dial: '+973', flag: '🇧🇭' },
//   { code: 'TR', name: 'Turkey', dial: '+90', flag: '🇹🇷' },
//   { code: 'IR', name: 'Iran', dial: '+98', flag: '🇮🇷' },
//   { code: 'EG', name: 'Egypt', dial: '+20', flag: '🇪🇬' },
//   { code: 'CN', name: 'China', dial: '+86', flag: '🇨🇳' },
//   { code: 'JP', name: 'Japan', dial: '+81', flag: '🇯🇵' },
//   { code: 'KR', name: 'South Korea', dial: '+82', flag: '🇰🇷' },
//   { code: 'MY', name: 'Malaysia', dial: '+60', flag: '🇲🇾' },
//   { code: 'SG', name: 'Singapore', dial: '+65', flag: '🇸🇬' },
//   { code: 'ID', name: 'Indonesia', dial: '+62', flag: '🇮🇩' },
//   { code: 'DE', name: 'Germany', dial: '+49', flag: '🇩🇪' },
//   { code: 'FR', name: 'France', dial: '+33', flag: '🇫🇷' },
//   { code: 'IT', name: 'Italy', dial: '+39', flag: '🇮🇹' },
//   { code: 'ES', name: 'Spain', dial: '+34', flag: '🇪🇸' },
//   { code: 'RU', name: 'Russia', dial: '+7', flag: '🇷🇺' },
//   { code: 'BR', name: 'Brazil', dial: '+55', flag: '🇧🇷' },
//   { code: 'ZA', name: 'South Africa', dial: '+27', flag: '🇿🇦' },
// ];

// const SignupScreen = ({ navigation }) => {

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const [country, setCountry] = useState(COUNTRIES[0]);
//   const [pickerVisible, setPickerVisible] = useState(false);
//   const [search, setSearch] = useState('');

//   const dispatch = useDispatch();

//   const filteredCountries = useMemo(() => {

//     const q = search.trim().toLowerCase();

//     if (!q) return COUNTRIES;

//     return COUNTRIES.filter(
//       c =>
//         c.name.toLowerCase().includes(q) ||
//         c.dial.includes(q),
//     );

//   }, [search]);

//   const closePicker = () => {
//     setPickerVisible(false);
//     setSearch('');
//   };

//   const selectCountry = item => {
//     setCountry(item);
//     closePicker();
//   };

//   // Signup Function
//   const handleSignup = () => {

//     if (
//       !name.trim() ||
//       !email.trim() ||
//       !phone.trim() ||
//       !password.trim()
//     ) {
//       Alert.alert('Error', 'Please fill all fields');
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailRegex.test(email.trim())) {
//       Alert.alert('Error', 'Please enter a valid email');
//       return;
//     }

//     // IMPORTANT: Set Signup Flow in Redux
//     dispatch(setOtpFlow('signup'));

//     // Open OTP Screen
//     navigation.navigate('OTPScreen', {
//       email: email.trim(),
//       name: name.trim(),
//       phone: `${country.dial}${phone}`,
//     });

//   };

//   return (

//     <LinearGradient
//       colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
//       locations={[0, 0.25, 0.5, 0.7, 1]}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 1 }}
//       style={styles.container}
//     >

//       <StatusBar hidden />

//       <KeyboardAvoidingView
//         style={styles.flex}
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//       >

//         <ScrollView
//           contentContainerStyle={styles.scrollContent}
//           keyboardShouldPersistTaps="handled"
//           showsVerticalScrollIndicator={false}
//         >

//           <View>

//             <Text style={styles.title}>
//               ENTER YOUR DETAILS
//             </Text>

//             {/* Full Name */}

//             <View style={styles.inputContainer}>

//               <TextInput
//                 style={[styles.input, styles.inputNoIcon]}
//                 placeholder="Full Name"
//                 placeholderTextColor="#E5E5EA"
//                 value={name}
//                 onChangeText={setName}
//               />

//             </View>

//             {/* Email */}

//             <View style={styles.inputContainer}>

//               <MaterialIcons
//                 name="email"
//                 size={20}
//                 color="#FFFFFF"
//               />

//               <TextInput
//                 style={styles.input}
//                 placeholder="Email"
//                 placeholderTextColor="#E5E5EA"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//                 autoCorrect={false}
//               />

//             </View>

//             {/* Phone */}

//             <View style={styles.inputContainer}>

//               <TouchableOpacity
//                 style={styles.flagBox}
//                 activeOpacity={0.8}
//                 onPress={() => setPickerVisible(true)}
//               >

//                 <Text style={styles.flag}>
//                   {country.flag}
//                 </Text>

//                 <MaterialIcons
//                   name="keyboard-arrow-down"
//                   size={20}
//                   color="#FFFFFF"
//                 />

//               </TouchableOpacity>

//               <Text style={styles.dialCode}>
//                 {country.dial}
//               </Text>

//               <TextInput
//                 style={[styles.input, styles.phoneInput]}
//                 placeholder="000 000 000"
//                 placeholderTextColor="#E5E5EA"
//                 value={phone}
//                 onChangeText={setPhone}
//                 keyboardType="phone-pad"
//               />

//             </View>

//             {/* Password */}

//             <View style={styles.inputContainer}>

//               <MaterialIcons
//                 name="lock"
//                 size={20}
//                 color="#FFFFFF"
//               />

//               <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 placeholderTextColor="#E5E5EA"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry={!showPassword}
//                 autoCapitalize="none"
//                 autoCorrect={false}
//               />

//               <TouchableOpacity
//                 onPress={() => setShowPassword(!showPassword)}
//               >

//                 <MaterialIcons
//                   name={showPassword ? 'visibility' : 'visibility-off'}
//                   size={20}
//                   color="#FFFFFF"
//                 />

//               </TouchableOpacity>

//             </View>

//           </View>

//           {/* Signup Button */}

//           <TouchableOpacity
//             style={styles.button}
//             activeOpacity={0.85}
//             onPress={handleSignup}
//           >

//             <Ionicons
//               name="arrow-forward"
//               size={16}
//               color="#020204"
//             />

//             <Text style={styles.buttonText}>
//               SIGN UP
//             </Text>

//           </TouchableOpacity>

//         </ScrollView>

//       </KeyboardAvoidingView>

//       {/* Country Picker Modal */}

//       <Modal
//         visible={pickerVisible}
//         transparent
//         animationType="slide"
//         onRequestClose={closePicker}
//       >

//         <View style={styles.modalOverlay}>

//           <View style={styles.modalSheet}>

//             <View style={styles.modalHeader}>

//               <Text style={styles.modalTitle}>
//                 Select Country
//               </Text>

//               <TouchableOpacity onPress={closePicker}>
//                 <MaterialIcons
//                   name="close"
//                   size={24}
//                   color="#FFFFFF"
//                 />
//               </TouchableOpacity>

//             </View>

//             <View style={styles.searchBox}>

//               <MaterialIcons
//                 name="search"
//                 size={20}
//                 color="#C9C9D1"
//               />

//               <TextInput
//                 style={styles.searchInput}
//                 placeholder="Search country or code"
//                 placeholderTextColor="#9A9AA5"
//                 value={search}
//                 onChangeText={setSearch}
//               />

//             </View>

//             <FlatList
//               data={filteredCountries}
//               keyExtractor={item => item.code}
//               keyboardShouldPersistTaps="handled"
//               showsVerticalScrollIndicator={false}
//               renderItem={({ item }) => (

//                 <TouchableOpacity
//                   style={styles.countryRow}
//                   activeOpacity={0.7}
//                   onPress={() => selectCountry(item)}
//                 >

//                   <Text style={styles.countryFlag}>
//                     {item.flag}
//                   </Text>

//                   <Text style={styles.countryName}>
//                     {item.name}
//                   </Text>

//                   <Text style={styles.countryDial}>
//                     {item.dial}
//                   </Text>

//                   {item.code === country.code && (
//                     <MaterialIcons
//                       name="check"
//                       size={18}
//                       color="#4BC6DE"
//                     />
//                   )}

//                 </TouchableOpacity>

//               )}
//               ListEmptyComponent={
//                 <Text style={styles.emptyText}>
//                   No country found
//                 </Text>
//               }
//             />

//           </View>

//         </View>

//       </Modal>

//     </LinearGradient>

//   );

// };

// export default SignupScreen;


// import React, { useState, useMemo } from 'react';

// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StatusBar,
//   KeyboardAvoidingView,
//   ScrollView,
//   Platform,
//   Modal,
//   FlatList,
//   Alert,
//   ActivityIndicator,
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import { useDispatch } from 'react-redux';
// import { setOtpFlow } from '../../../redux/auth/authSlice';
// import { signupApi } from '../../../api/auth';

// import styles from './styles';

// const COUNTRIES = [
//   { code: 'US', name: 'United States', dial: '+1', flag: '🇺🇸' },
//   { code: 'PK', name: 'Pakistan', dial: '+92', flag: '🇵🇰' },
//   { code: 'IN', name: 'India', dial: '+91', flag: '🇮🇳' },
//   { code: 'AF', name: 'Afghanistan', dial: '+93', flag: '🇦🇫' },
//   { code: 'BD', name: 'Bangladesh', dial: '+880', flag: '🇧🇩' },
//   { code: 'GB', name: 'United Kingdom', dial: '+44', flag: '🇬🇧' },
//   { code: 'CA', name: 'Canada', dial: '+1', flag: '🇨🇦' },
//   { code: 'AU', name: 'Australia', dial: '+61', flag: '🇦🇺' },
//   { code: 'AE', name: 'United Arab Emirates', dial: '+971', flag: '🇦🇪' },
//   { code: 'SA', name: 'Saudi Arabia', dial: '+966', flag: '🇸🇦' },
//   { code: 'QA', name: 'Qatar', dial: '+974', flag: '🇶🇦' },
//   { code: 'KW', name: 'Kuwait', dial: '+965', flag: '🇰🇼' },
//   { code: 'OM', name: 'Oman', dial: '+968', flag: '🇴🇲' },
//   { code: 'BH', name: 'Bahrain', dial: '+973', flag: '🇧🇭' },
//   { code: 'TR', name: 'Turkey', dial: '+90', flag: '🇹🇷' },
//   { code: 'IR', name: 'Iran', dial: '+98', flag: '🇮🇷' },
//   { code: 'EG', name: 'Egypt', dial: '+20', flag: '🇪🇬' },
//   { code: 'CN', name: 'China', dial: '+86', flag: '🇨🇳' },
//   { code: 'JP', name: 'Japan', dial: '+81', flag: '🇯🇵' },
//   { code: 'KR', name: 'South Korea', dial: '+82', flag: '🇰🇷' },
//   { code: 'MY', name: 'Malaysia', dial: '+60', flag: '🇲🇾' },
//   { code: 'SG', name: 'Singapore', dial: '+65', flag: '🇸🇬' },
//   { code: 'ID', name: 'Indonesia', dial: '+62', flag: '🇮🇩' },
//   { code: 'DE', name: 'Germany', dial: '+49', flag: '🇩🇪' },
//   { code: 'FR', name: 'France', dial: '+33', flag: '🇫🇷' },
//   { code: 'IT', name: 'Italy', dial: '+39', flag: '🇮🇹' },
//   { code: 'ES', name: 'Spain', dial: '+34', flag: '🇪🇸' },
//   { code: 'RU', name: 'Russia', dial: '+7', flag: '🇷🇺' },
//   { code: 'BR', name: 'Brazil', dial: '+55', flag: '🇧🇷' },
//   { code: 'ZA', name: 'South Africa', dial: '+27', flag: '🇿🇦' },
// ];

// const SignupScreen = ({ navigation }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const [country, setCountry] = useState(COUNTRIES[0]);
//   const [pickerVisible, setPickerVisible] = useState(false);
//   const [search, setSearch] = useState('');
//   const [loading, setLoading] = useState(false);

//   const dispatch = useDispatch();

//   const filteredCountries = useMemo(() => {
//     const q = search.trim().toLowerCase();

//     if (!q) return COUNTRIES;

//     return COUNTRIES.filter(
//       c => c.name.toLowerCase().includes(q) || c.dial.includes(q),
//     );
//   }, [search]);

//   const closePicker = () => {
//     setPickerVisible(false);
//     setSearch('');
//   };

//   const selectCountry = item => {
//     setCountry(item);
//     closePicker();
//   };

//   // Signup Function
//   const handleSignup = async () => {
//     if (!name.trim() || !email.trim() || !phone.trim() || !password.trim()) {
//       Alert.alert('Error', 'Please fill all fields');
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email.trim())) {
//       Alert.alert('Error', 'Please enter a valid email');
//       return;
//     }

//     try {
//       setLoading(true);

//       const fullPhone = `${country.dial}${phone.trim()}`;

//       const payload = {
//         name: name.trim(),
//         email: email.trim(),
//         phone_number: fullPhone,
//         password,
//       };

//       const res = await signupApi(payload);
//       console.log('Signup response:', res);

//       // Signup flow Redux mein set karo
//       dispatch(setOtpFlow('signup'));

//       // OTP screen kholo
//       navigation.navigate('OTPScreen', {
//         email: email.trim(),
//         name: name.trim(),
//         phone: fullPhone,
//       });
//     } catch (err) {
//       Alert.alert('Signup Failed', err.message || 'Something went wrong');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <LinearGradient
//       colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
//       locations={[0, 0.25, 0.5, 0.7, 1]}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 1 }}
//       style={styles.container}
//     >
//       <StatusBar hidden />

//       <KeyboardAvoidingView
//         style={styles.flex}
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//       >
//         <ScrollView
//           contentContainerStyle={styles.scrollContent}
//           keyboardShouldPersistTaps="handled"
//           showsVerticalScrollIndicator={false}
//         >
//           <View>
//             <Text style={styles.title}>ENTER YOUR DETAILS</Text>

//             {/* Full Name */}
//             <View style={styles.inputContainer}>
//               <TextInput
//                 style={[styles.input, styles.inputNoIcon]}
//                 placeholder="Full Name"
//                 placeholderTextColor="#E5E5EA"
//                 value={name}
//                 onChangeText={setName}
//               />
//             </View>

//             {/* Email */}
//             <View style={styles.inputContainer}>
//               <MaterialIcons name="email" size={20} color="#FFFFFF" />

//               <TextInput
//                 style={styles.input}
//                 placeholder="Email"
//                 placeholderTextColor="#E5E5EA"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//                 autoCorrect={false}
//               />
//             </View>

//             {/* Phone */}
//             <View style={styles.inputContainer}>
//               <TouchableOpacity
//                 style={styles.flagBox}
//                 activeOpacity={0.8}
//                 onPress={() => setPickerVisible(true)}
//               >
//                 <Text style={styles.flag}>{country.flag}</Text>

//                 <MaterialIcons
//                   name="keyboard-arrow-down"
//                   size={20}
//                   color="#FFFFFF"
//                 />
//               </TouchableOpacity>

//               <Text style={styles.dialCode}>{country.dial}</Text>

//               <TextInput
//                 style={[styles.input, styles.phoneInput]}
//                 placeholder="000 000 000"
//                 placeholderTextColor="#E5E5EA"
//                 value={phone}
//                 onChangeText={setPhone}
//                 keyboardType="phone-pad"
//               />
//             </View>

//             {/* Password */}
//             <View style={styles.inputContainer}>
//               <MaterialIcons name="lock" size={20} color="#FFFFFF" />

//               <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 placeholderTextColor="#E5E5EA"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry={!showPassword}
//                 autoCapitalize="none"
//                 autoCorrect={false}
//               />

//               <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//                 <MaterialIcons
//                   name={showPassword ? 'visibility' : 'visibility-off'}
//                   size={20}
//                   color="#FFFFFF"
//                 />
//               </TouchableOpacity>
//             </View>
//           </View>

//           {/* Signup Button */}
//           <TouchableOpacity
//             style={[styles.button, loading && { opacity: 0.7 }]}
//             activeOpacity={0.85}
//             onPress={handleSignup}
//             disabled={loading}
//           >
//             {loading ? (
//               <ActivityIndicator color="#020204" />
//             ) : (
//               <>
//                 <Ionicons name="arrow-forward" size={16} color="#020204" />
//                 <Text style={styles.buttonText}>SIGN UP</Text>
//               </>
//             )}
//           </TouchableOpacity>
//         </ScrollView>
//       </KeyboardAvoidingView>

//       {/* Country Picker Modal */}
//       <Modal
//         visible={pickerVisible}
//         transparent
//         animationType="slide"
//         onRequestClose={closePicker}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalSheet}>
//             <View style={styles.modalHeader}>
//               <Text style={styles.modalTitle}>Select Country</Text>

//               <TouchableOpacity onPress={closePicker}>
//                 <MaterialIcons name="close" size={24} color="#FFFFFF" />
//               </TouchableOpacity>
//             </View>

//             <View style={styles.searchBox}>
//               <MaterialIcons name="search" size={20} color="#C9C9D1" />

//               <TextInput
//                 style={styles.searchInput}
//                 placeholder="Search country or code"
//                 placeholderTextColor="#9A9AA5"
//                 value={search}
//                 onChangeText={setSearch}
//               />
//             </View>

//             <FlatList
//               data={filteredCountries}
//               keyExtractor={item => item.code}
//               keyboardShouldPersistTaps="handled"
//               showsVerticalScrollIndicator={false}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   style={styles.countryRow}
//                   activeOpacity={0.7}
//                   onPress={() => selectCountry(item)}
//                 >
//                   <Text style={styles.countryFlag}>{item.flag}</Text>

//                   <Text style={styles.countryName}>{item.name}</Text>

//                   <Text style={styles.countryDial}>{item.dial}</Text>

//                   {item.code === country.code && (
//                     <MaterialIcons name="check" size={18} color="#4BC6DE" />
//                   )}
//                 </TouchableOpacity>
//               )}
//               ListEmptyComponent={
//                 <Text style={styles.emptyText}>No country found</Text>
//               }
//             />
//           </View>
//         </View>
//       </Modal>
//     </LinearGradient>
//   );
// };

// export default SignupScreen;




import React, { useState, useMemo } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Modal,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { signupApi } from '../../../api/auth';

import styles from './styles';

const COUNTRIES = [
  { code: 'US', name: 'United States', dial: '+1', flag: '🇺🇸' },
  { code: 'PK', name: 'Pakistan', dial: '+92', flag: '🇵🇰' },
  { code: 'IN', name: 'India', dial: '+91', flag: '🇮🇳' },
  { code: 'AF', name: 'Afghanistan', dial: '+93', flag: '🇦🇫' },
  { code: 'BD', name: 'Bangladesh', dial: '+880', flag: '🇧🇩' },
  { code: 'GB', name: 'United Kingdom', dial: '+44', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', dial: '+1', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', dial: '+61', flag: '🇦🇺' },
  { code: 'AE', name: 'United Arab Emirates', dial: '+971', flag: '🇦🇪' },
  { code: 'SA', name: 'Saudi Arabia', dial: '+966', flag: '🇸🇦' },
  { code: 'QA', name: 'Qatar', dial: '+974', flag: '🇶🇦' },
  { code: 'KW', name: 'Kuwait', dial: '+965', flag: '🇰🇼' },
  { code: 'OM', name: 'Oman', dial: '+968', flag: '🇴🇲' },
  { code: 'BH', name: 'Bahrain', dial: '+973', flag: '🇧🇭' },
  { code: 'TR', name: 'Turkey', dial: '+90', flag: '🇹🇷' },
  { code: 'IR', name: 'Iran', dial: '+98', flag: '🇮🇷' },
  { code: 'EG', name: 'Egypt', dial: '+20', flag: '🇪🇬' },
  { code: 'CN', name: 'China', dial: '+86', flag: '🇨🇳' },
  { code: 'JP', name: 'Japan', dial: '+81', flag: '🇯🇵' },
  { code: 'KR', name: 'South Korea', dial: '+82', flag: '🇰🇷' },
  { code: 'MY', name: 'Malaysia', dial: '+60', flag: '🇲🇾' },
  { code: 'SG', name: 'Singapore', dial: '+65', flag: '🇸🇬' },
  { code: 'ID', name: 'Indonesia', dial: '+62', flag: '🇮🇩' },
  { code: 'DE', name: 'Germany', dial: '+49', flag: '🇩🇪' },
  { code: 'FR', name: 'France', dial: '+33', flag: '🇫🇷' },
  { code: 'IT', name: 'Italy', dial: '+39', flag: '🇮🇹' },
  { code: 'ES', name: 'Spain', dial: '+34', flag: '🇪🇸' },
  { code: 'RU', name: 'Russia', dial: '+7', flag: '🇷🇺' },
  { code: 'BR', name: 'Brazil', dial: '+55', flag: '🇧🇷' },
  { code: 'ZA', name: 'South Africa', dial: '+27', flag: '🇿🇦' },
];

const SignupScreen = ({ navigation }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const [country, setCountry] = useState(COUNTRIES[0]);

  const [pickerVisible, setPickerVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const filteredCountries = useMemo(() => {

    const q = search.trim().toLowerCase();

    if (!q) return COUNTRIES;

    return COUNTRIES.filter(
      c =>
        c.name.toLowerCase().includes(q) ||
        c.dial.includes(q)
    );

  }, [search]);

  const closePicker = () => {
    setPickerVisible(false);
    setSearch('');
  };

  const selectCountry = item => {
    setCountry(item);
    closePicker();
  };

  // Signup API
  
const handleSignup = async () => {
  if (
    !name.trim() ||
    !email.trim() ||
    !phone.trim() ||
    !password.trim()
  ) {
    Alert.alert('Error', 'Please fill all fields');
    return;
  }

  // Full phone number
  const fullPhone = `${country.dial}${phone.replace(/\s/g, '')}`;

  try {
    setLoading(true);

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone_number: fullPhone,
      password: password,
    };

    console.log('Signup Payload:', payload);

    const res = await signupApi(payload);

    console.log('Signup Response:', res);

    // Check API response
    if (res?.success === true) {
      const token = res?.token;

      if (!token) {
        Alert.alert(
          'Error',
          'Signup successful, but token was not received from backend.'
        );
        return;
      }

      // Navigate to OTP Screen
      navigation.navigate('OTPScreen', {
        isSignup: true,
        email: email.trim(),
        name: name.trim(),
        phone: fullPhone,
        token: token,
      });

    } else {
      Alert.alert(
        'Signup Failed',
        res?.message || res?.error || 'Unable to register'
      );
    }

  } catch (error) {
    console.log('Signup Error:', error);

    Alert.alert(
      'Signup Failed',
      error.message || 'Something went wrong'
    );

  } finally {
    setLoading(false);
  }
};

 

  return (

    <LinearGradient
      colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
      locations={[0, 0.25, 0.5, 0.7, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >

      <StatusBar hidden />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >

          <View>

            <Text style={styles.title}>
              ENTER YOUR DETAILS
            </Text>

            {/* Full Name */}

            <View style={styles.inputContainer}>

              <TextInput
                style={[styles.input, styles.inputNoIcon]}
                placeholder="Full Name"
                placeholderTextColor="#E5E5EA"
                value={name}
                onChangeText={setName}
              />

            </View>

            {/* Email */}

            <View style={styles.inputContainer}>

              <MaterialIcons
                name="email"
                size={20}
                color="#FFFFFF"
              />

              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#E5E5EA"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />

            </View>

            {/* Phone */}

            <View style={styles.inputContainer}>

              <TouchableOpacity
                style={styles.flagBox}
                activeOpacity={0.8}
                onPress={() => setPickerVisible(true)}
              >

                <Text style={styles.flag}>
                  {country.flag}
                </Text>

                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={20}
                  color="#FFFFFF"
                />

              </TouchableOpacity>

              <Text style={styles.dialCode}>
                {country.dial}
              </Text>

              <TextInput
                style={[styles.input, styles.phoneInput]}
                placeholder="000 000 000"
                placeholderTextColor="#E5E5EA"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />

            </View>

            {/* Password */}

            <View style={styles.inputContainer}>

              <MaterialIcons
                name="lock"
                size={20}
                color="#FFFFFF"
              />

              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#E5E5EA"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
              />

              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
              >

                <MaterialIcons
                  name={showPassword ? 'visibility' : 'visibility-off'}
                  size={20}
                  color="#FFFFFF"
                />

              </TouchableOpacity>

            </View>

          </View>

          {/* Signup Button */}

          <TouchableOpacity
            style={[styles.button, loading && { opacity: 0.7 }]}
            activeOpacity={0.85}
            onPress={handleSignup}
            disabled={loading}
          >

            {loading ? (

              <ActivityIndicator color="#020204" />

            ) : (

              <>
                <Ionicons
                  name="arrow-forward"
                  size={16}
                  color="#020204"
                />

                <Text style={styles.buttonText}>
                  SIGN UP
                </Text>
              </>

            )}

          </TouchableOpacity>

        </ScrollView>

      </KeyboardAvoidingView>

      {/* Country Picker Modal */}

      <Modal
        visible={pickerVisible}
        transparent
        animationType="slide"
        onRequestClose={closePicker}
      >

        <View style={styles.modalOverlay}>

          <View style={styles.modalSheet}>

            <View style={styles.modalHeader}>

              <Text style={styles.modalTitle}>
                Select Country
              </Text>

              <TouchableOpacity onPress={closePicker}>
                <MaterialIcons
                  name="close"
                  size={24}
                  color="#FFFFFF"
                />
              </TouchableOpacity>

            </View>

            <View style={styles.searchBox}>

              <MaterialIcons
                name="search"
                size={20}
                color="#C9C9D1"
              />

              <TextInput
                style={styles.searchInput}
                placeholder="Search country or code"
                placeholderTextColor="#9A9AA5"
                value={search}
                onChangeText={setSearch}
              />

            </View>

            <FlatList
              data={filteredCountries}
              keyExtractor={item => item.code}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (

                <TouchableOpacity
                  style={styles.countryRow}
                  activeOpacity={0.7}
                  onPress={() => selectCountry(item)}
                >

                  <Text style={styles.countryFlag}>
                    {item.flag}
                  </Text>

                  <Text style={styles.countryName}>
                    {item.name}
                  </Text>

                  <Text style={styles.countryDial}>
                    {item.dial}
                  </Text>

                  {item.code === country.code && (
                    <MaterialIcons
                      name="check"
                      size={18}
                      color="#4BC6DE"
                    />
                  )}

                </TouchableOpacity>

              )}

              ListEmptyComponent={
                <Text style={styles.emptyText}>
                  No country found
                </Text>
              }

            />

          </View>

        </View>

      </Modal>

    </LinearGradient>

  );

};

export default SignupScreen;
