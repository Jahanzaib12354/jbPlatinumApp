
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
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import styles from './styles';

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = () => {

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;

//     if (!emailRegex.test(email.trim())) {
//       Alert.alert(
//         'Invalid Email',
//         'Please enter a valid email (example@gmail.com)'
//       );
//       return;
//     }

//     // Password validation
//     if (!/^\d{8}$/.test(password)) {
//       Alert.alert(
//         'Invalid Password',
//         'Password must be exactly 8 digits'
//       );
//       return;
//     }

//     // Login logic
//     console.log('Login:', email, password);

//     navigation.navigate('Main');

//   };

//   return (
//     <LinearGradient
//       colors={['#102326', '#020204', '#30052F']}
//       locations={[0, 0.55, 1]}
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
//           {/* Title */}
//           <Text style={styles.title}>LOGIN TO YOUR ACCOUNT</Text>

//           <View style={styles.inputContainer}>

//             <MaterialIcons
//               name="email"
//               size={20}
//               color="#FFFFFF"
//             />

//             <TextInput
//               style={styles.input}
//               placeholder="Email"
//               placeholderTextColor="#C9C9D1"
//               value={email}
//               onChangeText={setEmail}
//               keyboardType="email-address"
//               autoCapitalize="none"
//             />

//           </View>

//           {/* Password */}
//           <View style={styles.inputContainer}>

//             <MaterialIcons
//               name="lock"
//               size={20}
//               color="#FFFFFF"
//             />

//             <TextInput
//               style={styles.input}
//               placeholder="Password"
//               placeholderTextColor="#C9C9D1"
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry={!showPassword}
//               autoCapitalize="none"
//               keyboardType="numeric"
//               maxLength={8}
//             />

//             <TouchableOpacity
//               onPress={() => setShowPassword(!showPassword)}
//             >
//               <MaterialIcons
//                 name={showPassword ? 'visibility' : 'visibility-off'}
//                 size={20}
//                 color="#FFFFFF"
//               />
//             </TouchableOpacity>

//           </View>

//           {/* Forgot Password */}
//           <TouchableOpacity
//             style={styles.forgotContainer}
//             onPress={() => navigation.navigate('ForgetPasswordScreen')}
//           >
//             <Text style={styles.forgotText}>
//               Forgot password?
//             </Text>
//           </TouchableOpacity>

//           {/* Login Button */}
//           <TouchableOpacity
//             style={styles.loginButton}
//             activeOpacity={0.85}
//             onPress={handleLogin}
//           >
//             <Ionicons
//               name="arrow-forward"
//               size={16}
//               color="#020204"
//             />

//             <Text style={styles.loginButtonText}>
//               LOGIN
//             </Text>
//           </TouchableOpacity>

//           {/* Signup Button */}
//           <View style={styles.signupRow}>
//             <Text style={styles.signupHint}>
//               Don't have an account?
//             </Text>
//           </View>

//           <TouchableOpacity
//             style={styles.signupButton}
//             activeOpacity={0.85}
//             onPress={() => navigation.navigate('SignupScreen')}
//           >
//             <Text style={styles.signupButtonText}>
//               SIGN UP
//             </Text>
//           </TouchableOpacity>

//         </ScrollView>
//       </KeyboardAvoidingView>
//     </LinearGradient>
//   );
// };

// export default LoginScreen;



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
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/auth/authSlice';

import styles from './styles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  // Login API
  const handleLogin = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Empty fields validation
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    // Email validation
    if (!emailRegex.test(email.trim())) {
      Alert.alert(
        'Invalid Email',
        'Please enter a valid email address',
      );
      return;
    }

    // Password validation
    if (!/^\d{8}$/.test(password)) {
      Alert.alert(
        'Invalid Password',
        'Password must be exactly 8 digits',
      );
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        'https://xhcqhdxq-8006.inc1.devtunnels.ms/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            email: email.trim(),
            password: password,
          }),
        },
      );

      const res = await response.json();

      console.log('Login Response:', res);

      // Successful login
      if (response.ok && res.success === true && res.token) {

        // Save user and token in Redux
        dispatch(
          setUser({
            user: res.data,
            token: res.token,
          }),
        );

        Alert.alert(
          'Success',
          res.message || 'Login successful',
        );

        // Route.js automatically opens MainStack
        // No navigation.navigate('Main') required.

      } else {
        Alert.alert(
          'Login Failed',
          res.message || 'Invalid email or password',
        );
      }

    } catch (error) {
      console.log('Login Error:', error);

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
      colors={['#102326', '#020204', '#30052F']}
      locations={[0, 0.55, 1]}
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

          {/* Title */}
          <Text style={styles.title}>
            LOGIN TO YOUR ACCOUNT
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
              placeholderTextColor="#C9C9D1"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>

            <MaterialIcons
              name="lock"
              size={20}
              color="#FFFFFF"
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#C9C9D1"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              keyboardType="numeric"
              maxLength={8}
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

          {/* Forgot Password */}
          <TouchableOpacity
            style={styles.forgotContainer}
            onPress={() =>
              navigation.navigate('ForgetPasswordScreen')
            }
          >
            <Text style={styles.forgotText}>
              Forgot password?
            </Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            style={styles.loginButton}
            activeOpacity={0.85}
            onPress={handleLogin}
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

                <Text style={styles.loginButtonText}>
                  LOGIN
                </Text>
              </>
            )}
          </TouchableOpacity>

          {/* Signup Text */}
          <View style={styles.signupRow}>
            <Text style={styles.signupHint}>
              Don't have an account?
            </Text>
          </View>

          {/* Signup Button */}
          <TouchableOpacity
            style={styles.signupButton}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('SignupScreen')}
          >
            <Text style={styles.signupButtonText}>
              SIGN UP
            </Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default LoginScreen;
