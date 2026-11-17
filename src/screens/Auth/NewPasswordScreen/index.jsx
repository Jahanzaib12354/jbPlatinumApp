



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

import { useDispatch } from 'react-redux';
import { clearOtpFlow } from '../../../redux/auth/authSlice';

import styles from './styles';
import axios from 'axios';

const BASE_URL = 'https://xhcqhdxq-8006.inc1.devtunnels.ms';

const NewPasswordScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // OTP screen se token receive hoga
  const { email, token } = route.params || {};

  

const handleUpdatePassword = async () => {
  if (!password.trim()) {
    Alert.alert('Error', 'Please enter your new password');
    return;
  }

  if (password.length < 8) {
    Alert.alert('Error', 'Password must be at least 8 characters');
    return;
  }

let data = JSON.stringify({
  "newPassword": password
});

let config = {
  method: 'patch',
  maxBodyLength: Infinity,
  url: 'https://xhcqhdxq-8006.inc1.devtunnels.ms/resetPassword',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': `Bearer ${token}`, 
  },
  data : data
};

// try {
//   const res = await axios.request(config)
//   if(res.data.success){
//     navigation.navigate('LoginScreen')
//   }
//   console.log('res',res.data)
// } catch (error) {
//   console.log('error',error)
// }

try {
  const res = await axios.request(config);

  console.log('Response:', res.data);

  if (res.data.success) {
    Alert.alert(
      'Success',
      'Your password has been changed successfully!',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('LoginScreen'),
        },
      ]
    );
  } else {
    Alert.alert(
      'Verification Failed',
      res.data.message || 'Verification failed. Please try again.'
    );
  }

} catch (error) {
  console.log('API Error:', error.response?.data || error.message);

  Alert.alert(
    'Error',
    error.response?.data?.message ||
    'Something went wrong. Please try again.'
  );
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
          {/* Top Part */}
          <View>
            <Text style={styles.title}>
              ENTER YOUR NEW PASSWORD
            </Text>

            <Text style={styles.subtitle}>
              We will save a new password to your account
            </Text>

            <View style={styles.inputContainer}>
              <MaterialIcons
                name="password"
                size={20}
                color="#FFFFFF"
              />

              <TextInput
                style={styles.input}
                placeholder="New Password"
                placeholderTextColor="#E5E5EA"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
          </View>

          {/* Update Button */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.85}
            onPress={handleUpdatePassword}
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
                  UPDATE PASSWORD
                </Text>
              </>
            )}
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default NewPasswordScreen;
