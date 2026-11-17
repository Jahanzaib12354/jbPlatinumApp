


import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const SPONSORS = [
  {id: '1', name: '01 SPONSOR'},
  {id: '2', name: '02 SPONSOR'},
  {id: '3', name: '03 SPONSOR'},
  {id: '4', name: '04 SPONSOR'},
  {id: '5', name: '05 SPONSOR'},
  {id: '6', name: '06 SPONSOR'},
];

const TABS = [
  {
    key: 'home',
    label: 'Home',
    route: 'FirstHomeScreen',
    icon: 'home-outline',
  },
  {
    key: 'events',
    label: 'Events',
    route: 'EventsScreen',
    icon: 'calendar-outline',
  },
  {
    key: 'sponsors',
    label: 'Sponsors',
    route: 'SponsorsScreen',
    icon: 'ribbon-outline',
  },
  {
    key: 'invite',
    label: 'Invite Us',
    route: 'InviteUsScreen',
    icon: 'person-add-outline',
  },
  {
    key: 'profile',
    label: 'Profile',
    route: 'ProfileScreen',
    icon: 'person-outline',
  },
];

const SponsorCircle = ({item}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => console.log('Sponsor pressed:', item.name)}>
    <LinearGradient
      colors={['#4BC6DE', '#FF0A78']}
      start={{x: 0.1, y: 0}}
      end={{x: 0.9, y: 1}}
      style={styles.ring}>
      <View style={styles.circleInner}>
        <Text style={styles.sponsorText}>{item.name}</Text>
      </View>
    </LinearGradient>
  </TouchableOpacity>
);

const BottomTabBar = ({navigation, active}) => (
  <View style={styles.tabBar}>
    {TABS.map(tab => {
      const isActive = tab.key === active;

      return (
        <TouchableOpacity
          key={tab.key}
          style={styles.tabItem}
          activeOpacity={0.7}
          onPress={() => {
            if (!isActive) {
              navigation.navigate(tab.route);
            }
          }}>
          {isActive ? (
            <View style={styles.tabIconActive}>
              <Icon name={tab.icon} size={18} color="#000" />
            </View>
          ) : (
            <Icon name={tab.icon} size={24} color="#9A9A9A" />
          )}

          <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

const SponsorsScreen = ({navigation}) => {
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

      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={10}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>OUR SPONSORS</Text>
        </View>

        {/* Sponsors grid */}
        <View style={styles.grid}>
          {SPONSORS.map(item => (
            <SponsorCircle key={item.id} item={item} />
          ))}
        </View>

        {/* Become a sponsor */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('BecomeSponsor')}>
          <Icon name="arrow-forward" size={18} color="#000" />
          <Text style={styles.buttonText}>BECOME A SPONSOR</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom tab bar */}
      <BottomTabBar navigation={navigation} active="sponsors" />

    </LinearGradient>
  );
};

export default SponsorsScreen;
