

import React, {useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Alert,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

import {useSelector, useDispatch} from 'react-redux';

import styles from './styles';

// Redux logout action ka path apne project ke mutabiq rakhein
import {logout} from '../../../redux/auth/authSlice';

const BASE_URL = 'https://xhcqhdxq-8006.inc1.devtunnels.ms';

const DeleteProfileScreen = ({navigation}) => {

  const {token} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  // Confirmation Alert
  const handleDeleteAccount = () => {

    Alert.alert(
      'Delete Account',
      'Are you sure you want to permanently delete your account?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete Account',
          style: 'destructive',
          onPress: deleteProfile,
        },
      ],
    );
  };

  // Delete Profile API
  const deleteProfile = async () => {

    if (!token) {
      Alert.alert('Error', 'Please login again.');
      return;
    }

    try {

      setLoading(true);

      const response = await axios.delete(
        `${BASE_URL}/delete`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        },
      );

      console.log('DELETE PROFILE RESPONSE:', response.data);

      if (response.data.success === true) {

        Alert.alert(
          'Success',
          response.data.message || 'Your account has been deleted successfully.',
          [
            {
              text: 'OK',
              onPress: () => {
                dispatch(logout());

                navigation.reset({
                  index: 0,
                  routes: [{name: 'LoginScreen'}],
                });
              },
            },
          ],
        );

      } else {

        Alert.alert(
          'Error',
          response.data.message || 'Unable to delete account.',
        );

      }

    } catch (error) {

      console.log(
        'DELETE PROFILE ERROR:',
        error.response?.data || error.message,
      );

      Alert.alert(
        'Error',
        error.response?.data?.message ||
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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* Header */}

        <View style={styles.header}>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon
              name="arrow-back"
              size={23}
              color="#FFFFFF"
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Delete Account
          </Text>

        </View>

        {/* Warning Icon */}

        <View style={styles.iconContainer}>

          <View style={styles.iconCircle}>

            <Icon
              name="trash-outline"
              size={55}
              color="#FF5C65"
            />

          </View>

        </View>

        {/* Title */}

        <Text style={styles.title}>
          Delete Your Account?
        </Text>

        <Text style={styles.subtitle}>
          We're sorry to see you go. Please understand that
          deleting your account is a permanent action.
        </Text>

        {/* Warning Card */}

        <View style={styles.warningCard}>

          <View style={styles.warningHeader}>

            <Icon
              name="alert-circle-outline"
              size={23}
              color="#FF6B72"
            />

            <Text style={styles.warningTitle}>
              Important Information
            </Text>

          </View>

          <Text style={styles.warningText}>
            Once your account is deleted:
          </Text>

          <View style={styles.pointRow}>
            <Icon
              name="close-circle-outline"
              size={18}
              color="#FF7777"
            />

            <Text style={styles.pointText}>
              Your profile information will be removed.
            </Text>
          </View>

          <View style={styles.pointRow}>
            <Icon
              name="close-circle-outline"
              size={18}
              color="#FF7777"
            />

            <Text style={styles.pointText}>
              You may lose access to your account.
            </Text>
          </View>

          <View style={styles.pointRow}>
            <Icon
              name="close-circle-outline"
              size={18}
              color="#FF7777"
            />

            <Text style={styles.pointText}>
              This action may not be reversible.
            </Text>
          </View>

        </View>

        {/* Delete Button */}

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDeleteAccount}
          disabled={loading}
          activeOpacity={0.8}
        >

          {loading ? (

            <ActivityIndicator color="#FFFFFF" />

          ) : (

            <>
              <Icon
                name="trash-outline"
                size={20}
                color="#FFFFFF"
              />

              <Text style={styles.deleteButtonText}>
                Delete My Account
              </Text>
            </>

          )}

        </TouchableOpacity>

        {/* Cancel Button */}

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
          disabled={loading}
        >

          <Text style={styles.cancelButtonText}>
            Cancel
          </Text>

        </TouchableOpacity>

        <Text style={styles.footerText}>
          If you are experiencing any issues, please contact
          our support team before deleting your account.
        </Text>

      </ScrollView>

    </LinearGradient>

  );
};

export default DeleteProfileScreen;
