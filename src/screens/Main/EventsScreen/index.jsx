



import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import local from './styles';

const SIDE = 20;

const UPCOMING = [
  {
    id: 'u1',
    title: 'Chicago Steppin',
    date: 'Fri, Sep 25 • 13.00 - 15.00...',
    place: 'New Avenue, Wo...',
    image: require('../../../assets/img6.png'),
  },
  {
    id: 'u2',
    title: 'Cha Cha',
    date: 'Wed, Sep 23 • 19.00 - 22.00...',
    place: 'Central Park, Ne...',
    image: require('../../../assets/img7.png'),
  },
  {
    id: 'u3',
    title: 'Cha Cha',
    date: 'Tue, Sep 22 • 10.00 - 12.00...',
    place: 'Auditorium Build...',
    image: require('../../../assets/img8.png'),
    free: true,
  },
  {
    id: 'u4',
    title: 'Urban Ballroom',
    date: 'Sun, Sep 27 • 11.00 - 13.00...',
    place: 'City Space, New...',
    image: require('../../../assets/img9.png'),
  },
];

const RECENT = [
  {
    id: 'r1',
    title: 'Chicago Steppin',
    date: 'Mon, Sep 14 • 18.00 - 21.00...',
    place: 'New Universe, Ne...',
    image: require('../../../assets/img10.png'),
  },
  {
    id: 'r2',
    title: 'Cha Cha',
    date: 'Sat, Sep 12 • 17.00 - 20.00...',
    place: 'Central Park, Ne...',
    image: require('../../../assets/img11.png'),
  },
  {
    id: 'r3',
    title: 'Cha Cha',
    date: 'Fri, Sep 11 • 10.00 - 12.00...',
    place: 'Auditorium Build...',
    image: require('../../../assets/img12.png'),
  },
  {
    id: 'r4',
    title: 'Music Night',
    date: 'Thu, Sep 10 • 19.00 - 23.00...',
    place: 'Central Hall, New...',
    image: require('../../../assets/img5.png'),
  },
];

// Bottom Tabs
const TABS = [
  {
    key: 'home',
    label: 'Home',
    icon: 'home',
    screen: 'FirstHomeScreen',
  },
  {
    key: 'events',
    label: 'Events',
    icon: 'event',
    screen: 'EventsScreen',
  },
  {
    key: 'sponsors',
    label: 'Sponsors',
    icon: 'people',
    screen: 'SponsorsScreen',
  },
  {
    key: 'invite',
    label: 'Invite Us',
    icon: 'person-add',
    screen: 'InviteUsScreen',
  },
  {
    key: 'profile',
    label: 'Profile',
    icon: 'person',
    screen: 'ProfileScreen',
  },
];

const EventsScreen = ({ navigation }) => {
  const [activeSegment, setActiveSegment] = useState('upcoming');
  const [activeTab, setActiveTab] = useState('events');

  const data = activeSegment === 'upcoming' ? UPCOMING : RECENT;

  // Bottom Tab Navigation
  const handleTabPress = tab => {
    setActiveTab(tab.key);

    if (tab.key !== 'events') {
      navigation.navigate(tab.screen);
    }
  };

  // Event Details Navigation
  const handleEventPress = item => {
    navigation.navigate('EventDetailsScreen', {
      event: item,
    });
  };

  // Event Card
  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.9}
      style={local.card}
      onPress={() => handleEventPress(item)}
    >
      <View>
        <Image source={item.image} style={local.cardImage} />

        {item.free ? (
          <View style={local.freeBadge}>
            <Text style={local.freeText}>FREE</Text>
          </View>
        ) : null}
      </View>

      <Text style={local.cardTitle} numberOfLines={1}>
        {item.title}
      </Text>

      <Text style={local.cardDate} numberOfLines={1}>
        {item.date}
      </Text>

      <View style={local.row}>
        <MaterialIcons
          name="location-on"
          size={13}
          color="#4BC6DE"
        />

        <Text style={local.cardPlace} numberOfLines={1}>
          {item.place}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
      locations={[0, 0.25, 0.5, 0.7, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={local.container}
    >
      <StatusBar hidden />

      {/* Header */}
      <View style={local.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
          }}
        >
          <MaterialIcons
            name="arrow-back"
            size={24}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <Text style={local.headerTitle}>EVENTS</Text>
      </View>

      {/* Upcoming / Recent */}
      <View style={local.segmentRow}>
        {['upcoming', 'recent'].map(seg => {
          const active = activeSegment === seg;

          return (
            <TouchableOpacity
              key={seg}
              style={[
                local.segment,
                active && local.segmentActive,
              ]}
              activeOpacity={0.8}
              onPress={() => setActiveSegment(seg)}
            >
              <Text
                style={[
                  local.segmentText,
                  active && local.segmentTextActive,
                ]}
              >
                {seg === 'upcoming' ? 'Upcoming' : 'Recent'}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Events Grid */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        contentContainerStyle={local.listContent}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Tab Bar */}
      <View style={local.tabBar}>
        {TABS.map(tab => {
          const active = activeTab === tab.key;

          return (
            <TouchableOpacity
              key={tab.key}
              style={local.tabItem}
              activeOpacity={0.8}
              onPress={() => handleTabPress(tab)}
            >
              <MaterialIcons
                name={tab.icon}
                size={22}
                color={active ? '#4BC6DE' : '#9A9AA5'}
              />

              <Text
                style={[
                  local.tabLabel,
                  active && local.tabLabelActive,
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </LinearGradient>
  );
};

export default EventsScreen;
