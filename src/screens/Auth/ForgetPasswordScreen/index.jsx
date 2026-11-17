// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StatusBar,
//   KeyboardAvoidingView,
//   ScrollView,
//   Platform,
//   StyleSheet,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import styles from './styles'

// const ForgetPasswordScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');

//   const handleSendOtp = () => {
//     if (!email.trim()) return;
//     // Yahan OTP bhejne ki API call lagao
//     navigation.navigate('OTPScreen', { email: email.trim() });
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
//           {/* Top part */}
//           <View>
//             <Text style={styles.title}>ENTER YOUR EMAIL</Text>
//             <Text style={styles.subtitle}>
//               We will send an OTP code to your email
//             </Text>

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
//           </View>

//           {/* Bottom button */}
//           <TouchableOpacity
//             style={styles.button}
//             activeOpacity={0.85}
//             onPress={() => navigation.navigate('OTPScreen')}
//           >
//             <Ionicons name="arrow-forward" size={16} color="#020204" />
//             <Text style={styles.buttonText}>SEND OTP</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </LinearGradient>
//   );
// };



// export default ForgetPasswordScreen;


                                      // new


// import React, { useState } from 'react';

// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StatusBar,
//   KeyboardAvoidingView,
//   ScrollView,
//   Platform,
//   Alert,
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// // Redux imports
// import { useDispatch } from 'react-redux';
// import { setOtpFlow } from '../../../redux/auth/authSlice';

// import styles from './styles';

// const ForgetPasswordScreen = ({ navigation }) => {

//   const [email, setEmail] = useState('');

//   // Redux dispatch
//   const dispatch = useDispatch();

//   // Send OTP Function
//   const handleSendOtp = () => {

//     // Email validation
//     if (!email.trim()) {
//       Alert.alert('Error', 'Please enter your email');
//       return;
//     }

//     // Basic email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailRegex.test(email.trim())) {
//       Alert.alert('Error', 'Please enter a valid email');
//       return;
//     }

//     // Save Forgot Password flow in Redux
//     dispatch(setOtpFlow('forgotPassword'));

//     // Navigate to OTP Screen
//     navigation.navigate('OTPScreen', {
//       email: email.trim(),
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

//           {/* Top part */}
//           <View>

//             <Text style={styles.title}>
//               ENTER YOUR EMAIL
//             </Text>

//             <Text style={styles.subtitle}>
//               We will send an OTP code to your email
//             </Text>

//             {/* Email Input */}
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

//           </View>

//           {/* Bottom button */}
//           <TouchableOpacity
//             style={styles.button}
//             activeOpacity={0.85}
//             onPress={handleSendOtp}
//           >

//             <Ionicons
//               name="arrow-forward"
//               size={16}
//               color="#020204"
//             />

//             <Text style={styles.buttonText}>
//               SEND OTP
//             </Text>

//           </TouchableOpacity>

//         </ScrollView>

//       </KeyboardAvoidingView>

//     </LinearGradient>
//   );
// };

// export default ForgetPasswordScreen;



// import React, { useState } from 'react';

// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StatusBar,
//   KeyboardAvoidingView,
//   ScrollView,
//   Platform,
//   Alert,
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import { useDispatch } from 'react-redux';
// import { setOtpFlow } from '../../../redux/auth/authSlice';

// import styles from './styles';

// const ForgetPasswordScreen = ({ navigation }) => {

//   const [email, setEmail] = useState('');

//   const dispatch = useDispatch();

//   // Send OTP Function
//   const handleSendOtp = () => {

//     if (!email.trim()) {
//       Alert.alert('Error', 'Please enter your email');
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailRegex.test(email.trim())) {
//       Alert.alert('Error', 'Please enter a valid email');
//       return;
//     }

//     // IMPORTANT: Set Forgot Password Flow
//     dispatch(setOtpFlow('forgotPassword'));

//     // Open OTP Screen
//     navigation.navigate('OTPScreen', {
//       email: email.trim(),
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
//               ENTER YOUR EMAIL
//             </Text>

//             <Text style={styles.subtitle}>
//               We will send an OTP code to your email
//             </Text>

//             {/* Email Input */}

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

//           </View>

//           {/* Send OTP Button */}

//           <TouchableOpacity
//             style={styles.button}
//             activeOpacity={0.85}
//             onPress={handleSendOtp}
//           >

//             <Ionicons
//               name="arrow-forward"
//               size={16}
//               color="#020204"
//             />

//             <Text style={styles.buttonText}>
//               SEND OTP
//             </Text>

//           </TouchableOpacity>

//         </ScrollView>

//       </KeyboardAvoidingView>

//     </LinearGradient>

//   );

// };

// export default ForgetPasswordScreen;







// import React, { useState } from 'react';

// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StatusBar,
//   KeyboardAvoidingView,
//   ScrollView,
//   Platform,
//   Alert,
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import styles from './styles';

// const ForgetPasswordScreen = ({ navigation }) => {

//   const [email, setEmail] = useState('');

//   // Send OTP Function
//   const handleSendOtp = () => {

//     if (!email.trim()) {
//       Alert.alert('Error', 'Please enter your email');
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailRegex.test(email.trim())) {
//       Alert.alert('Error', 'Please enter a valid email');
//       return;
//     }

//     // Forgot Password Flow
//     navigation.navigate('OTPScreen', {
//       isSignup: false,
//       email: email.trim(),
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
//               ENTER YOUR EMAIL
//             </Text>

//             <Text style={styles.subtitle}>
//               We will send an OTP code to your email
//             </Text>

//             {/* Email Input */}

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

//           </View>

//           {/* Send OTP Button */}

//           <TouchableOpacity
//             style={styles.button}
//             activeOpacity={0.85}
//             onPress={handleSendOtp}
//           >

//             <Ionicons
//               name="arrow-forward"
//               size={16}
//               color="#020204"
//             />

//             <Text style={styles.buttonText}>
//               SEND OTP
//             </Text>

//           </TouchableOpacity>

//         </ScrollView>

//       </KeyboardAvoidingView>

//     </LinearGradient>

//   );

// };

// export default ForgetPasswordScreen;



import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
  ActivityIndicator,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const BASE_URL = 'https://xhcqhdxq-8006.inc1.devtunnels.ms';

const ForgetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  // Send OTP Function
  const handleSendOtp = async () => {
    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      Alert.alert('Error', 'Please enter a valid email');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${BASE_URL}/forgetpassword`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            email: email.trim(),
          }),
        },
      );

      const res = await response.json();

      console.log('Forget Password Response:', res);

      if (response.ok && res.success === true) {
        if (!res.token) {
          Alert.alert(
            'Error',
            'OTP sent but backend did not return a token.',
          );
          return;
        }

        navigation.navigate('OTPScreen', {
          isSignup: false,
          isForgotPassword: true,
          email: email.trim(),
          token: res.token,
        });
      } else {
        Alert.alert(
          'Failed',
          res.message || 'Unable to send OTP',
        );
      }
    } catch (error) {
      console.log('Forget Password Error:', error);

      Alert.alert(
        'Error',
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
              ENTER YOUR EMAIL
            </Text>

            <Text style={styles.subtitle}>
              We will send an OTP code to your email
            </Text>

            {/* Email Input */}
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
          </View>

          {/* Send OTP Button */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.85}
            onPress={handleSendOtp}
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
                  SEND OTP
                </Text>
              </>
            )}
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default ForgetPasswordScreen;
