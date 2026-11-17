

                       //  new


// import React, { useState, useRef, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StatusBar,
//   KeyboardAvoidingView,
//   ScrollView,
//   Platform,

// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import styles from './styles'
// const OTP_LENGTH = 4;
// const RESEND_SECONDS = 159; // 02:39

// const OTPScreen = ({ navigation }) => {
//   const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
//   const [focusedIndex, setFocusedIndex] = useState(0);
//   const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
//   const inputs = useRef([]);

//   // Countdown timer
//   useEffect(() => {
//     if (secondsLeft <= 0) return;
//     const timer = setInterval(() => {
//       setSecondsLeft(prev => prev - 1);
//     }, 1000);
//     return () => clearInterval(timer);
//   }, [secondsLeft]);

//   const formatTime = total => {
//     const m = String(Math.floor(total / 60)).padStart(2, '0');
//     const s = String(total % 60).padStart(2, '0');
//     return `${m}:${s}`;
//   };

//   const handleChange = (text, index) => {
//     const digit = text.replace(/[^0-9]/g, '').slice(-1);
//     const next = [...otp];
//     next[index] = digit;
//     setOtp(next);

//     if (digit && index < OTP_LENGTH - 1) {
//       inputs.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyPress = ({ nativeEvent }, index) => {
//     if (nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
//       const next = [...otp];
//       next[index - 1] = '';
//       setOtp(next);
//       inputs.current[index - 1]?.focus();
//     }
//   };

//   const handleResend = () => {
//     if (secondsLeft > 0) return;
//     // Yahan resend OTP ki API call lagao
//     setOtp(Array(OTP_LENGTH).fill(''));
//     setSecondsLeft(RESEND_SECONDS);
//     inputs.current[0]?.focus();
//   };

//   const handleVerify = () => {
//     const code = otp.join('');
//     if (code.length < OTP_LENGTH) return;
//     // Yahan verify ki API call lagao
//     console.log('OTP:', code);
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
//             <Text style={styles.title}>EMAIL VERIFICATION</Text>
//             <Text style={styles.subtitle}>
//               Please type OTP code that we give you
//             </Text>

//             {/* OTP boxes */}
//             <View style={styles.otpRow}>
//               {otp.map((digit, index) => (
//                 <TextInput
//                   key={index}
//                   ref={ref => (inputs.current[index] = ref)}
//                   style={[
//                     styles.otpBox,
//                     focusedIndex === index && styles.otpBoxFocused,
//                   ]}
//                   value={digit}
//                   onChangeText={text => handleChange(text, index)}
//                   onKeyPress={e => handleKeyPress(e, index)}
//                   onFocus={() => setFocusedIndex(index)}
//                   keyboardType="number-pad"
//                   maxLength={1}
//                   textAlign="center"
//                   selectionColor="#4BC6DE"
//                   autoFocus={index === 0}
//                 />
//               ))}
//             </View>

//             {/* Resend */}
//             <View style={styles.resendRow}>
//               <Text style={styles.resendText}>Resend on </Text>
//               {secondsLeft > 0 ? (
//                 <Text style={styles.timer}>{formatTime(secondsLeft)}</Text>
//               ) : (
//                 <TouchableOpacity onPress={handleResend}>
//                   <Text style={styles.resendActive}>Resend now</Text>
//                 </TouchableOpacity>
//               )}
//             </View>
//           </View>

//           {/* Bottom button */}
//           <TouchableOpacity
//             style={styles.button}
//             activeOpacity={0.85}
//             onPress={() => navigation.navigate('NewPasswordScreen')}
//           >
//             <Ionicons name="arrow-forward" size={16} color="#020204" />
//             <Text style={styles.buttonText}>VERIFY NOW</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </LinearGradient>
//   );
// };



// export default OTPScreen;



// import React, { useState, useRef, useEffect } from 'react';

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
//   ActivityIndicator,
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import axios from 'axios';

// import { useSelector, useDispatch } from 'react-redux';

// import { clearOtpFlow } from '../../../redux/auth/authSlice';

// import styles from './styles';

// const OTP_LENGTH = 4;
// const RESEND_SECONDS = 159;

// const OTPScreen = ({ navigation, route }) => {

//   const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
//   const [focusedIndex, setFocusedIndex] = useState(0);
//   const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
//   const [loading, setLoading] = useState(false);

//   const inputs = useRef([]);

//   // Redux
//   const dispatch = useDispatch();

//   const otpFlow = useSelector(
//     state => state.auth.otpFlow
//   );

//   // Email from previous screen
//   const email = route.params?.email;

//   // Countdown Timer
//   useEffect(() => {

//     if (secondsLeft <= 0) return;

//     const timer = setInterval(() => {
//       setSecondsLeft(prev => prev - 1);
//     }, 1000);

//     return () => clearInterval(timer);

//   }, [secondsLeft]);

//   // Format Timer
//   const formatTime = total => {

//     const m = String(Math.floor(total / 60)).padStart(2, '0');
//     const s = String(total % 60).padStart(2, '0');

//     return `${m}:${s}`;

//   };

//   // OTP Input
//   const handleChange = (text, index) => {

//     const digit = text.replace(/[^0-9]/g, '').slice(-1);

//     const next = [...otp];

//     next[index] = digit;

//     setOtp(next);

//     if (digit && index < OTP_LENGTH - 1) {
//       inputs.current[index + 1]?.focus();
//     }

//   };

//   // Backspace
//   const handleKeyPress = ({ nativeEvent }, index) => {

//     if (
//       nativeEvent.key === 'Backspace' &&
//       !otp[index] &&
//       index > 0
//     ) {

//       const next = [...otp];

//       next[index - 1] = '';

//       setOtp(next);

//       inputs.current[index - 1]?.focus();

//     }

//   };

//   // Resend OTP
//   const handleResend = () => {

//     if (secondsLeft > 0) return;

//     // Yahan resend OTP API call lagao

//     setOtp(Array(OTP_LENGTH).fill(''));

//     setSecondsLeft(RESEND_SECONDS);

//     inputs.current[0]?.focus();

//   };

//   // Verify OTP
//   const handleVerify = async () => {

//     const code = otp.join('');

//     if (code.length !== OTP_LENGTH) {
//       Alert.alert('Error', 'Please enter complete OTP');
//       return;
//     }

//     if (!otpFlow) {
//       Alert.alert('Error', 'OTP flow is missing. Please try again.');
//       return;
//     }

//     if (!email) {
//       Alert.alert('Error', 'Email is missing. Please try again.');
//       return;
//     }

//     try {

//       setLoading(true);

//       // Backend OTP Verification API
//       const response = await axios.post(
//         'YOUR_VERIFY_OTP_API_URL',
//         {
//           email: email,
//           otp: code,
//         }
//       );

//       // Only continue if backend confirms OTP
//       if (response.data.success === true) {

//         // Signup Flow
//         if (otpFlow === 'signup') {

//           dispatch(clearOtpFlow());

//           navigation.replace('FirstHomeScreen');

//         }

//         // Forgot Password Flow
//         else if (otpFlow === 'forgotPassword') {

//           dispatch(clearOtpFlow());

//           navigation.replace('NewPasswordScreen', {
//             email: email,
//           });

//         }

//         else {

//           Alert.alert('Error', 'Invalid OTP flow');

//         }

//       } else {

//         Alert.alert(
//           'Invalid OTP',
//           response.data.message || 'Please enter correct OTP'
//         );

//       }

//     } catch (error) {

//       Alert.alert(
//         'Verification Failed',
//         error.response?.data?.message ||
//         'Unable to verify OTP. Please try again.'
//       );

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

//           {/* Top Part */}

//           <View>

//             <Text style={styles.title}>
//               EMAIL VERIFICATION
//             </Text>

//             <Text style={styles.subtitle}>
//               Please type OTP code that we give you
//             </Text>

//             {/* OTP Boxes */}

//             <View style={styles.otpRow}>

//               {otp.map((digit, index) => (

//                 <TextInput
//                   key={index}
//                   ref={ref => (inputs.current[index] = ref)}
//                   style={[
//                     styles.otpBox,
//                     focusedIndex === index && styles.otpBoxFocused,
//                   ]}
//                   value={digit}
//                   onChangeText={text => handleChange(text, index)}
//                   onKeyPress={e => handleKeyPress(e, index)}
//                   onFocus={() => setFocusedIndex(index)}
//                   keyboardType="number-pad"
//                   maxLength={1}
//                   textAlign="center"
//                   selectionColor="#4BC6DE"
//                   autoFocus={index === 0}
//                 />

//               ))}

//             </View>

//             {/* Resend */}

//             <View style={styles.resendRow}>

//               <Text style={styles.resendText}>
//                 Resend on
//               </Text>

//               {secondsLeft > 0 ? (

//                 <Text style={styles.timer}>
//                   {formatTime(secondsLeft)}
//                 </Text>

//               ) : (

//                 <TouchableOpacity onPress={handleResend}>

//                   <Text style={styles.resendActive}>
//                     Resend now
//                   </Text>

//                 </TouchableOpacity>

//               )}

//             </View>

//           </View>

//           {/* Verify Button */}

//           <TouchableOpacity
//             style={styles.button}
//             activeOpacity={0.85}
//             onPress={handleVerify}
//             disabled={loading}
//           >

//             {loading ? (

//               <ActivityIndicator color="#020204" />

//             ) : (

//               <>
//                 <Ionicons
//                   name="arrow-forward"
//                   size={16}
//                   color="#020204"
//                 />

//                 <Text style={styles.buttonText}>
//                   VERIFY NOW
//                 </Text>
//               </>

//             )}

//           </TouchableOpacity>

//         </ScrollView>

//       </KeyboardAvoidingView>

//     </LinearGradient>

//   );

// };

// export default OTPScreen;







// import React, { useState, useRef, useEffect } from 'react';

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
//   ActivityIndicator,
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import { useDispatch } from 'react-redux';
// import { clearOtpFlow } from '../../../redux/auth/authSlice';

// import styles from './styles';

// const OTP_LENGTH = 4;
// const RESEND_SECONDS = 159;

// const OTP_VERIFY_URL =
//   'https://xhcqhdxq-8006.inc1.devtunnels.ms/verifyOTP';

// const OTPScreen = ({ navigation, route }) => {
//   const { email, isSignup, token } = route.params || {};

//   const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
//   const [focusedIndex, setFocusedIndex] = useState(0);
//   const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
//   const [loading, setLoading] = useState(false);

//   const inputs = useRef([]);

//   const dispatch = useDispatch();

//   // Countdown Timer
//   useEffect(() => {
//     if (secondsLeft <= 0) return;

//     const timer = setInterval(() => {
//       setSecondsLeft(prev => Math.max(prev - 1, 0));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [secondsLeft]);

//   // Format Timer
//   const formatTime = total => {
//     const minutes = String(Math.floor(total / 60)).padStart(2, '0');
//     const seconds = String(total % 60).padStart(2, '0');

//     return `${minutes}:${seconds}`;
//   };

//   // OTP Input - Single digit and Paste Support
//   const handleChange = (text, index) => {
//     const digits = text.replace(/[^0-9]/g, '');

//     const next = [...otp];

//     if (digits.length > 1) {
//       const pastedDigits = digits.slice(0, OTP_LENGTH).split('');

//       pastedDigits.forEach((digit, i) => {
//         next[i] = digit;
//       });

//       setOtp(next);

//       const nextIndex = Math.min(
//         pastedDigits.length,
//         OTP_LENGTH - 1
//       );

//       inputs.current[nextIndex]?.focus();

//       return;
//     }

//     next[index] = digits.slice(-1);

//     setOtp(next);

//     if (digits && index < OTP_LENGTH - 1) {
//       inputs.current[index + 1]?.focus();
//     }
//   };

//   // Backspace
//   const handleKeyPress = ({ nativeEvent }, index) => {
//     if (nativeEvent.key === 'Backspace') {
//       if (otp[index]) {
//         const next = [...otp];
//         next[index] = '';
//         setOtp(next);
//       } else if (index > 0) {
//         const next = [...otp];
//         next[index - 1] = '';

//         setOtp(next);
//         inputs.current[index - 1]?.focus();
//       }
//     }
//   };

//   // Resend OTP
//   const handleResend = () => {
//     if (secondsLeft > 0) return;

//     Alert.alert(
//       'Resend OTP',
//       'Resend OTP API is not connected yet.'
//     );
//   };

//   // Verify OTP
//   const handleVerify = async () => {
//     // Get OTP from all four boxes
//     const code = otp.join('').trim();

//     console.log('OTP State:', JSON.stringify(otp));
//     console.log('Entered OTP:', code);
//     console.log('OTP Length:', code.length);

//     // Validate OTP
//     if (!/^\d{4}$/.test(code)) {
//       Alert.alert(
//         'Error',
//         'Please enter complete 4-digit OTP'
//       );
//       return;
//     }

//     if (!email) {
//       Alert.alert('Error', 'Email is missing');
//       return;
//     }

//     if (isSignup !== true) {
//       Alert.alert(
//         'Error',
//         'Invalid signup verification flow.'
//       );
//       return;
//     }

//     if (!token || typeof token !== 'string') {
//       Alert.alert(
//         'Error',
//         'Signup token is missing or invalid. Please signup again.'
//       );
//       return;
//     }

//     try {
//       setLoading(true);

//       console.log('OTP Email:', email);
//       console.log('Signup Token Available:', !!token);

//       const response = await fetch(OTP_VERIFY_URL, {
//         method: 'POST',

//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//           Authorization: `Bearer ${token}`,
//         },

//         body: JSON.stringify({
//           OTP: code,
//         }),
//       });

//       let data;

//       try {
//         data = await response.json();
//       } catch (error) {
//         throw new Error('Invalid response from backend');
//       }

//       console.log('OTP Verification Status:', response.status);
//       console.log('OTP Verification Response:', data);

//       if (!response.ok || data?.success !== true) {
//         throw new Error(
//           data?.message ||
//           data?.error ||
//           'OTP verification failed'
//         );
//       }

//       dispatch(clearOtpFlow());

//       Alert.alert(
//         'Success',
//         'Your account has been verified successfully.',
//         [
//           {
//             text: 'OK',
//             onPress: () => {
//               navigation.replace('LoginScreen');
//             },
//           },
//         ]
//       );

//     } catch (error) {
//       console.log(
//         'OTP Verification Error:',
//         error.message
//       );

//       Alert.alert(
//         'Verification Failed',
//         error.message || 'Something went wrong. Please try again.'
//       );

//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <LinearGradient
//       colors={[
//         '#24444D',
//         '#050A0C',
//         '#000000',
//         '#000000',
//         '#4B0F57',
//       ]}
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
//               EMAIL VERIFICATION
//             </Text>

//             <Text style={styles.subtitle}>
//               Please type OTP code that we sent to your email
//             </Text>

//             <Text
//               style={{
//                 color: '#4BC6DE',
//                 textAlign: 'center',
//                 marginTop: 12,
//                 marginBottom: 25,
//               }}
//             >
//               {email}
//             </Text>

//             {/* OTP Boxes */}
//             <View style={styles.otpRow}>
//               {otp.map((digit, index) => (
//                 <TextInput
//                   key={index}
//                   ref={ref => (inputs.current[index] = ref)}
//                   style={[
//                     styles.otpBox,
//                     focusedIndex === index &&
//                       styles.otpBoxFocused,
//                   ]}
//                   value={digit}
//                   onChangeText={text =>
//                     handleChange(text, index)
//                   }
//                   onKeyPress={e =>
//                     handleKeyPress(e, index)
//                   }
//                   onFocus={() =>
//                     setFocusedIndex(index)
//                   }
//                   keyboardType="number-pad"
//                   maxLength={4}
//                   textAlign="center"
//                   selectionColor="#4BC6DE"
//                   editable={!loading}
//                 />
//               ))}
//             </View>

//             {/* Resend OTP */}
//             <View style={styles.resendRow}>
//               <Text style={styles.resendText}>
//                 Resend on
//               </Text>

//               {secondsLeft > 0 ? (
//                 <Text style={styles.timer}>
//                   {formatTime(secondsLeft)}
//                 </Text>
//               ) : (
//                 <TouchableOpacity onPress={handleResend}>
//                   <Text style={styles.resendActive}>
//                     Resend now
//                   </Text>
//                 </TouchableOpacity>
//               )}
//             </View>
//           </View>

//           {/* Verify Button */}
//           <TouchableOpacity
//             style={[
//               styles.button,
//               loading && { opacity: 0.7 },
//             ]}
//             activeOpacity={0.85}
//             onPress={handleVerify}
//             disabled={loading}
//           >
//             {loading ? (
//               <ActivityIndicator color="#020204" />
//             ) : (
//               <>
//                 <Ionicons
//                   name="arrow-forward"
//                   size={16}
//                   color="#020204"
//                 />

//                 <Text style={styles.buttonText}>
//                   VERIFY NOW
//                 </Text>
//               </>
//             )}
//           </TouchableOpacity>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </LinearGradient>
//   );
// };

// export default OTPScreen;



import React, { useState, useRef, useEffect } from 'react';

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

import { useDispatch } from 'react-redux';
import { clearOtpFlow } from '../../../redux/auth/authSlice';

import styles from './styles';

const OTP_LENGTH = 4;
const RESEND_SECONDS = 159;

const SIGNUP_VERIFY_URL =
  'https://xhcqhdxq-8006.inc1.devtunnels.ms/verifyOTP';

const FORGOT_VERIFY_URL =
  'https://xhcqhdxq-8006.inc1.devtunnels.ms/forgetpasswordverifyingOTP';

const OTPScreen = ({ navigation, route }) => {
  const {
    email,
    isSignup,
    isForgotPassword,
    token,
  } = route.params || {};

  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
  const [loading, setLoading] = useState(false);

  const inputs = useRef([]);
  const dispatch = useDispatch();

  // Identify verification flow
  const isValidFlow =
    (isSignup === true && isForgotPassword !== true) ||
    (isForgotPassword === true && isSignup !== true);

  // Countdown
  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft(prev => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  // Timer format
  const formatTime = total => {
    const minutes = String(Math.floor(total / 60)).padStart(2, '0');
    const seconds = String(total % 60).padStart(2, '0');

    return `${minutes}:${seconds}`;
  };

  // OTP input and paste support
  const handleChange = (text, index) => {
    const digits = text.replace(/[^0-9]/g, '');
    const next = [...otp];

    if (digits.length > 1) {
      const pastedDigits = digits.slice(0, OTP_LENGTH).split('');

      pastedDigits.forEach((digit, i) => {
        next[i] = digit;
      });

      setOtp(next);

      const nextIndex = Math.min(
        pastedDigits.length,
        OTP_LENGTH - 1,
      );

      inputs.current[nextIndex]?.focus();
      return;
    }

    next[index] = digits.slice(-1);
    setOtp(next);

    if (digits && index < OTP_LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  // Backspace
  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === 'Backspace') {
      const next = [...otp];

      if (next[index]) {
        next[index] = '';
        setOtp(next);
      } else if (index > 0) {
        next[index - 1] = '';
        setOtp(next);
        inputs.current[index - 1]?.focus();
      }
    }
  };

  // Resend OTP
  const handleResend = () => {
    if (secondsLeft > 0) return;

    Alert.alert(
      'Resend OTP',
      'Resend OTP API is not connected yet.',
    );
  };

  // Verify OTP
  const handleVerify = async () => {
    const code = otp.join('').trim();

    console.log('OTP:', code);
    console.log('Email:', email);
    console.log('Signup Flow:', isSignup);
    console.log('Forgot Password Flow:', isForgotPassword);

    if (!/^\d{4}$/.test(code)) {
      Alert.alert('Error', 'Please enter complete 4-digit OTP');
      return;
    }

    if (!email) {
      Alert.alert('Error', 'Email is missing');
      return;
    }

    if (!isValidFlow) {
      Alert.alert('Error', 'Invalid OTP verification flow.');
      return;
    }

    if (!token || typeof token !== 'string') {
      Alert.alert(
        'Error',
        'Verification token is missing. Please try again.',
      );
      return;
    }

    try {
      setLoading(true);

      // Select API according to flow
      const verifyUrl = isSignup
        ? SIGNUP_VERIFY_URL
        : FORGOT_VERIFY_URL;

      const response = await fetch(verifyUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          OTP: code,
        }),
      });

      const data = await response.json();

      console.log('OTP Verification Status:', response.status);
      console.log('OTP Verification Response:', data);

      if (!response.ok || data?.success !== true) {
        throw new Error(
          data?.message ||
          data?.error ||
          'OTP verification failed',
        );
      }

      if (isSignup) {
        dispatch(clearOtpFlow());

        Alert.alert(
          'Success',
          'Your account has been verified successfully.',
          [
            {
              text: 'OK',
              onPress: () => {
                navigation.replace('LoginScreen');
              },
            },
          ],
        );
      }

      if (isForgotPassword) {
        Alert.alert(
          'Success',
          'Your OTP has been verified successfully.',
          [
            {
              text: 'OK',
              onPress: () => {
                // Next step: navigate to your new password screen.
                navigation.navigate('NewPasswordScreen', {
                  email: email,
                  token: token,
                });
              },
            },
          ],
        );
      }
    } catch (error) {
      console.log('OTP Verification Error:', error.message);

      Alert.alert(
        'Verification Failed',
        error.message || 'Something went wrong. Please try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={[
        '#24444D',
        '#050A0C',
        '#000000',
        '#000000',
        '#4B0F57',
      ]}
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
              EMAIL VERIFICATION
            </Text>

            <Text style={styles.subtitle}>
              Please type OTP code that we sent to your email
            </Text>

            <Text
              style={{
                color: '#4BC6DE',
                textAlign: 'center',
                marginTop: 12,
                marginBottom: 25,
              }}
            >
              {email}
            </Text>

            {/* OTP Boxes */}
            <View style={styles.otpRow}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={ref => {
                    inputs.current[index] = ref;
                  }}
                  style={[
                    styles.otpBox,
                    focusedIndex === index &&
                      styles.otpBoxFocused,
                  ]}
                  value={digit}
                  onChangeText={text =>
                    handleChange(text, index)
                  }
                  onKeyPress={e =>
                    handleKeyPress(e, index)
                  }
                  onFocus={() =>
                    setFocusedIndex(index)
                  }
                  keyboardType="number-pad"
                  maxLength={4}
                  textAlign="center"
                  selectionColor="#4BC6DE"
                  editable={!loading}
                />
              ))}
            </View>

            {/* Resend OTP */}
            <View style={styles.resendRow}>
              <Text style={styles.resendText}>
                Resend on
              </Text>

              {secondsLeft > 0 ? (
                <Text style={styles.timer}>
                  {formatTime(secondsLeft)}
                </Text>
              ) : (
                <TouchableOpacity onPress={handleResend}>
                  <Text style={styles.resendActive}>
                    Resend now
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>

          {/* Verify Button */}
          <TouchableOpacity
            style={[
              styles.button,
              loading && { opacity: 0.7 },
            ]}
            activeOpacity={0.85}
            onPress={handleVerify}
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
                  VERIFY NOW
                </Text>
              </>
            )}
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default OTPScreen;
