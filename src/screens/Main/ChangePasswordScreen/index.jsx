
import React, {useState} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  Alert,
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import {useSelector} from 'react-redux';

import styles from './styles';

const BASE_URL = 'https://xhcqhdxq-8006.inc1.devtunnels.ms';

const ChangePasswordScreen = ({navigation}) => {
  const token = useSelector(state => state.auth?.token);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChangePassword = async () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'New password and confirm password do not match.');
      return;
    }

    if (oldPassword === newPassword) {
      Alert.alert('Error', 'New password must be different from old password.');
      return;
    }

    if (!token) {
      Alert.alert('Error', 'Please login again.');
      return;
    }

    try {
      setLoading(true);

      const res = await axios.patch(
        `${BASE_URL}/changePassword`,
        {
          oldpassword: oldPassword,
          newPassword: newPassword,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log('CHANGE PASSWORD RESPONSE:', res.data);

      if (res.data.success === true) {
        Alert.alert(
          'Success',
          res.data.message || 'Password changed successfully!',
          [
            {
              text: 'OK',
              onPress: () => navigation.goBack(),
            },
          ],
        );

        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        Alert.alert(
          'Error',
          res.data.message || 'Unable to change password.',
        );
      }
    } catch (error) {
      console.log(
        'CHANGE PASSWORD ERROR:',
        error.response?.data || error.message,
      );

      Alert.alert(
        'Error',
        error.response?.data?.message ||
          error.response?.data?.messgae ||
          'Something went wrong. Please try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  const renderPasswordInput = (
    label,
    value,
    setValue,
    visible,
    setVisible,
    placeholder,
  ) => (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>

      <View style={styles.passwordInputWrapper}>
        <TextInput
          style={styles.passwordInput}
          placeholder={placeholder}
          placeholderTextColor="#9299A8"
          value={value}
          onChangeText={setValue}
          secureTextEntry={!visible}
          autoCapitalize="none"
        />

        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Icon
            name={visible ? 'eye-off-outline' : 'eye-outline'}
            size={22}
            color="#AAB2D5"
          />
        </TouchableOpacity>
      </View>
    </View>
  );

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
  extraHeight={100}
>

        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Change Password</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.iconContainer}>
            <Icon name="lock-closed-outline" size={40} color="#FFFFFF" />
          </View>

          <Text style={styles.title}>Update Your Password</Text>

          <Text style={styles.subtitle}>
            Enter your current password and choose a new secure password.
          </Text>

          {renderPasswordInput(
            'Old Password',
            oldPassword,
            setOldPassword,
            showOld,
            setShowOld,
            'Enter old password',
          )}

          {renderPasswordInput(
            'New Password',
            newPassword,
            setNewPassword,
            showNew,
            setShowNew,
            'Enter new password',
          )}

          {renderPasswordInput(
            'Confirm New Password',
            confirmPassword,
            setConfirmPassword,
            showConfirm,
            setShowConfirm,
            'Confirm new password',
          )}

          <TouchableOpacity
            style={styles.changeButton}
            onPress={handleChangePassword}
            disabled={loading}>

            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.changeButtonText}>
                Change Password
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      
    </LinearGradient>
  );
};

export default ChangePasswordScreen;
