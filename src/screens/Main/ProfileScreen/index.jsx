
import React, {useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import styles from './styles'
const ProfileScreen = ({navigation}) => {
  const user = useSelector(
    state =>
      state.auth?.user ||
      state.auth?.userData ||
      state.user?.user ||
      {},
  );

  const [profile, setProfile] = useState({
    name:
      user.name ||
      user.full_name ||
      user.first_name ||
      '',
    email: user.email || '',
    phone:
      user.phone ||
      user.phone_number ||
      '',
  });

  const menuItems = [
    {
      title: 'Personal Information',
      icon: 'person-outline',
    },
    {
      title: 'My Events',
      icon: 'calendar-outline',
    },
    {
      title: 'Favorite Events',
      icon: 'heart-outline',
    },
    {
      title: 'Notifications',
      icon: 'notifications-outline',
    },
    {
      title: 'Privacy & Security',
      icon: 'lock-closed-outline',
    },
    {
      title: 'Help & Support',
      icon: 'help-circle-outline',
    },
  ];

  return (
    <LinearGradient
      colors={['#10152F', '#171D3D', '#22294F']}
      style={styles.container}>

      <StatusBar barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>

          {/* <TouchableOpacity>
            <Icon
              name="settings-outline"
              size={25}
              color="#FFFFFF"
            />
          </TouchableOpacity> */}
        </View>

        {/* Profile Information */}
        <View style={styles.profileContainer}>

          <View style={styles.avatar}>
            <Icon
              name="person"
              size={55}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.name}>
            {profile.name || 'Your Name'}
          </Text>

          <Text style={styles.email}>
            {profile.email || 'Your Email'}
          </Text>

          <View style={styles.memberBadge}>
            <Text style={styles.memberText}>Member</Text>
          </View>

          <TouchableOpacity
            style={styles.editButton}
            onPress={() =>
              navigation.navigate('EditProfileScreen', {
                profile: profile,
                onSave: updatedProfile => {
                  setProfile(updatedProfile);
                },
              })
            }>

            <Icon
              name="create-outline"
              size={19}
              color="#FFFFFF"
            />

            <Text style={styles.editButtonText}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>

        {/* Account Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Account Information
          </Text>

          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <Icon
                name="mail-outline"
                size={21}
                color="#AAB2D5"
              />

              <View style={styles.infoTextContainer}>
                <Text style={styles.infoLabel}>Email Address</Text>
                <Text style={styles.infoValue}>
                  {profile.email || 'Not available'}
                </Text>
              </View>
            </View>

            <View style={styles.infoDivider} />

            <View style={styles.infoRow}>
              <Icon
                name="call-outline"
                size={21}
                color="#AAB2D5"
              />

              <View style={styles.infoTextContainer}>
                <Text style={styles.infoLabel}>Phone Number</Text>
                <Text style={styles.infoValue}>
                  {profile.phone || 'Not available'}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* My Account */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Account</Text>

          <View style={styles.menuCard}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}>

                <View style={styles.menuLeft}>
                  <Icon
                    name={item.icon}
                    size={21}
                    color="#AAB2D5"
                  />

                  <Text style={styles.menuText}>
                    {item.title}
                  </Text>
                </View>

                <Icon
                  name="chevron-forward"
                  size={20}
                  color="#AAB2D5"
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

      </ScrollView>
    </LinearGradient>
  );
};

export default ProfileScreen;


