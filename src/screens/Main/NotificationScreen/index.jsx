


import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'
const NOTIFICATIONS = [
  {
    id: '1',
    type: 'event',
    title: 'Upcoming Event',
    date: '24 Sep. 2026',
    time: '20:00 PM',
    isNew: true,
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
  },
  {
    id: '2',
    type: 'event',
    title: 'Upcoming Event',
    date: '23 Sep. 2026',
    time: '18:30 PM',
    isNew: true,
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
  },
  {
    id: '3',
    type: 'account',
    title: 'Account Setup Successful!',
    date: '20 Sep. 2026',
    time: '14:27 PM',
    isNew: false,
    body:
      'Your account creation is successful, you can now experience our services.',
  },
];

const NotificationItem = ({item}) => {
  const isEvent = item.type === 'event';

  return (
    <View style={styles.item}>
      <View style={styles.row}>
        <View style={styles.iconCircle}>
          <Icon
            name={isEvent ? 'calendar-outline' : 'person'}
            size={22}
            color="#4BC6DE"
          />
        </View>

        <View style={styles.titleWrap}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.dateTime}>
            {item.date}  |  {item.time}
          </Text>
        </View>

        {item.isNew && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>New</Text>
          </View>
        )}
      </View>

      <Text style={styles.body}>
        {item.body}
        {isEvent && <Text style={styles.readMore}> Read more...</Text>}
      </Text>
    </View>
  );
};

const NotificationsScreen = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#000000', '#0B0F14', '#3A0B4A']}
      start={{x: 0.2, y: 0}}
      end={{x: 1, y: 1}}
      locations={[0, 0.6, 1]}
      style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={10}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>NOTIFICATIONS</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}>
        {NOTIFICATIONS.map(item => (
          <NotificationItem key={item.id} item={item} />
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

export default NotificationsScreen;

