



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   FlatList,
//   StatusBar,
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import local from './styles';

// const SIDE = 20;

// const UPCOMING = [
//   {
//     id: 'u1',
//     title: 'Chicago Steppin',
//     date: 'Fri, Sep 25 • 13.00 - 15.00...',
//     place: 'New Avenue, Wo...',
//     image: require('../../../assets/img6.png'),
//   },
//   {
//     id: 'u2',
//     title: 'Cha Cha',
//     date: 'Wed, Sep 23 • 19.00 - 22.00...',
//     place: 'Central Park, Ne...',
//     image: require('../../../assets/img7.png'),
//   },
//   {
//     id: 'u3',
//     title: 'Cha Cha',
//     date: 'Tue, Sep 22 • 10.00 - 12.00...',
//     place: 'Auditorium Build...',
//     image: require('../../../assets/img8.png'),
//     free: true,
//   },
//   {
//     id: 'u4',
//     title: 'Urban Ballroom',
//     date: 'Sun, Sep 27 • 11.00 - 13.00...',
//     place: 'City Space, New...',
//     image: require('../../../assets/img9.png'),
//   },
// ];

// const RECENT = [
//   {
//     id: 'r1',
//     title: 'Chicago Steppin',
//     date: 'Mon, Sep 14 • 18.00 - 21.00...',
//     place: 'New Universe, Ne...',
//     image: require('../../../assets/img10.png'),
//   },
//   {
//     id: 'r2',
//     title: 'Cha Cha',
//     date: 'Sat, Sep 12 • 17.00 - 20.00...',
//     place: 'Central Park, Ne...',
//     image: require('../../../assets/img11.png'),
//   },
//   {
//     id: 'r3',
//     title: 'Cha Cha',
//     date: 'Fri, Sep 11 • 10.00 - 12.00...',
//     place: 'Auditorium Build...',
//     image: require('../../../assets/img12.png'),
//   },
//   {
//     id: 'r4',
//     title: 'Music Night',
//     date: 'Thu, Sep 10 • 19.00 - 23.00...',
//     place: 'Central Hall, New...',
//     image: require('../../../assets/img5.png'),
//   },
// ];

// // Bottom Tabs
// const TABS = [
//   {
//     key: 'home',
//     label: 'Home',
//     icon: 'home',
//     screen: 'FirstHomeScreen',
//   },
//   {
//     key: 'events',
//     label: 'Events',
//     icon: 'event',
//     screen: 'EventsScreen',
//   },
//   {
//     key: 'sponsors',
//     label: 'Sponsors',
//     icon: 'people',
//     screen: 'SponsorsScreen',
//   },
//   {
//     key: 'invite',
//     label: 'Invite Us',
//     icon: 'person-add',
//     screen: 'InviteUsScreen',
//   },
//   {
//     key: 'profile',
//     label: 'Profile',
//     icon: 'person',
//     screen: 'ProfileScreen',
//   },
// ];

// const EventsScreen = ({ navigation }) => {
//   const [activeSegment, setActiveSegment] = useState('upcoming');
//   const [activeTab, setActiveTab] = useState('events');

//   const data = activeSegment === 'upcoming' ? UPCOMING : RECENT;

//   // Bottom Tab Navigation
//   const handleTabPress = tab => {
//     setActiveTab(tab.key);

//     if (tab.key !== 'events') {
//       navigation.navigate(tab.screen);
//     }
//   };

//   // Event Details Navigation
//   const handleEventPress = item => {
//     navigation.navigate('EventDetailsScreen', {
//       event: item,
//     });
//   };

//   // Event Card
//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       activeOpacity={0.9}
//       style={local.card}
//       onPress={() => handleEventPress(item)}
//     >
//       <View>
//         <Image source={item.image} style={local.cardImage} />

//         {item.free ? (
//           <View style={local.freeBadge}>
//             <Text style={local.freeText}>FREE</Text>
//           </View>
//         ) : null}
//       </View>

//       <Text style={local.cardTitle} numberOfLines={1}>
//         {item.title}
//       </Text>

//       <Text style={local.cardDate} numberOfLines={1}>
//         {item.date}
//       </Text>

//       <View style={local.row}>
//         <MaterialIcons
//           name="location-on"
//           size={13}
//           color="#4BC6DE"
//         />

//         <Text style={local.cardPlace} numberOfLines={1}>
//           {item.place}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <LinearGradient
//       colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
//       locations={[0, 0.25, 0.5, 0.7, 1]}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 1 }}
//       style={local.container}
//     >
//       <StatusBar hidden />

//       {/* Header */}
//       <View style={local.header}>
//         <TouchableOpacity
//           onPress={() => navigation.goBack()}
//           hitSlop={{
//             top: 10,
//             bottom: 10,
//             left: 10,
//             right: 10,
//           }}
//         >
//           <MaterialIcons
//             name="arrow-back"
//             size={24}
//             color="#FFFFFF"
//           />
//         </TouchableOpacity>

//         <Text style={local.headerTitle}>EVENTS</Text>
//       </View>

//       {/* Upcoming / Recent */}
//       <View style={local.segmentRow}>
//         {['upcoming', 'recent'].map(seg => {
//           const active = activeSegment === seg;

//           return (
//             <TouchableOpacity
//               key={seg}
//               style={[
//                 local.segment,
//                 active && local.segmentActive,
//               ]}
//               activeOpacity={0.8}
//               onPress={() => setActiveSegment(seg)}
//             >
//               <Text
//                 style={[
//                   local.segmentText,
//                   active && local.segmentTextActive,
//                 ]}
//               >
//                 {seg === 'upcoming' ? 'Upcoming' : 'Recent'}
//               </Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>

//       {/* Events Grid */}
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         numColumns={2}
//         columnWrapperStyle={{
//           justifyContent: 'space-between',
//         }}
//         contentContainerStyle={local.listContent}
//         showsVerticalScrollIndicator={false}
//       />

//       {/* Bottom Tab Bar */}
//       <View style={local.tabBar}>
//         {TABS.map(tab => {
//           const active = activeTab === tab.key;

//           return (
//             <TouchableOpacity
//               key={tab.key}
//               style={local.tabItem}
//               activeOpacity={0.8}
//               onPress={() => handleTabPress(tab)}
//             >
//               <MaterialIcons
//                 name={tab.icon}
//                 size={22}
//                 color={active ? '#4BC6DE' : '#9A9AA5'}
//               />

//               <Text
//                 style={[
//                   local.tabLabel,
//                   active && local.tabLabelActive,
//                 ]}
//               >
//                 {tab.label}
//               </Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     </LinearGradient>
//   );
// };

// export default EventsScreen;



import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';

import local from './styles';

const SIDE = 20;

const BASE_URL = 'https://xhcqhdxq-8006.inc1.devtunnels.ms';

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

const EventsScreen = ({navigation}) => {
  const [activeSegment, setActiveSegment] = useState('upcoming');
  const [activeTab, setActiveTab] = useState('events');

  // Redux Token
  const token = useSelector(state => state.auth.token);

  // API Data
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [recentEvents, setRecentEvents] = useState([]);

  // Loading
  const [upcomingLoading, setUpcomingLoading] = useState(true);
  const [recentLoading, setRecentLoading] = useState(true);

  // Errors
  const [upcomingError, setUpcomingError] = useState('');
  const [recentError, setRecentError] = useState('');

  // Fetch Upcoming Events API
  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      try {
        setUpcomingLoading(true);
        setUpcomingError('');

        if (!token) {
          throw new Error('Login token not found');
        }

        const response = await fetch(`${BASE_URL}/upcomimEvent`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        console.log('Upcoming API Status:', response.status);
        console.log('Upcoming API Response:', data);

        if (!response.ok) {
          throw new Error(
            data.message || `Server Error: ${response.status}`,
          );
        }

        if (data.success) {
          setUpcomingEvents(data.data || []);
        } else {
          setUpcomingEvents([]);
          throw new Error(data.message || 'Upcoming events not found');
        }
      } catch (error) {
        console.log('Upcoming API Error:', error.message);
        setUpcomingEvents([]);
        setUpcomingError('Unable to load upcoming events.');
      } finally {
        setUpcomingLoading(false);
      }
    };

    fetchUpcomingEvents();
  }, [token]);

  // Fetch Recent Events API
  useEffect(() => {
    const fetchRecentEvents = async () => {
      try {
        setRecentLoading(true);
        setRecentError('');

        if (!token) {
          throw new Error('Login token not found');
        }

        const response = await fetch(`${BASE_URL}/latestEvent`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        console.log('Recent API Status:', response.status);
        console.log('Recent API Response:', data);

        if (!response.ok) {
          throw new Error(
            data.message || `Server Error: ${response.status}`,
          );
        }

        if (data.success) {
          setRecentEvents(data.data || []);
        } else {
          setRecentEvents([]);
          throw new Error(data.message || 'Recent events not found');
        }
      } catch (error) {
        console.log('Recent API Error:', error.message);
        setRecentEvents([]);
        setRecentError('Unable to load recent events.');
      } finally {
        setRecentLoading(false);
      }
    };

    fetchRecentEvents();
  }, [token]);

  // Format Event Image
  const getEventImage = item => {
    const imagePath = item.images?.[0];

    if (!imagePath) {
      return require('../../../assets/img6.png');
    }

    if (imagePath.startsWith('http')) {
      return {uri: imagePath};
    }

    // Extract filename from Windows or Linux path
    const imageName = imagePath.split(/[\\/]/).pop();

    // Handle /uploads/events/image.png
    if (imagePath.startsWith('/uploads/events/')) {
      return {
        uri: `${BASE_URL}${imagePath}`,
      };
    }

    // Handle filename or Windows path
    return {
      uri: `${BASE_URL}/uploads/events/${encodeURIComponent(imageName)}`,
    };
  };

  // Format Event Data
  const formatEvent = item => {
    const formattedDate = item.date
      ? new Date(item.date).toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        })
      : '';

    return {
      ...item,
      id: item._id,
      title: item.Title || item.title || 'Event',
      date: [formattedDate, item.time].filter(Boolean).join(' • '),
      place: item.address || item.place || '',
      image: getEventImage(item),
    };
  };

  // Select Upcoming or Recent Data
  const data =
    activeSegment === 'upcoming' ? upcomingEvents : recentEvents;

  const loading =
    activeSegment === 'upcoming' ? upcomingLoading : recentLoading;

  const error =
    activeSegment === 'upcoming' ? upcomingError : recentError;

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
  const renderItem = ({item}) => {
    const formattedItem = formatEvent(item);

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={local.card}
        onPress={() => handleEventPress(formattedItem)}>
        <View>
          <Image
            source={formattedItem.image}
            style={local.cardImage}
          />

          {item.free ? (
            <View style={local.freeBadge}>
              <Text style={local.freeText}>FREE</Text>
            </View>
          ) : null}
        </View>

        <Text style={local.cardTitle} numberOfLines={1}>
          {formattedItem.title}
        </Text>

        <Text style={local.cardDate} numberOfLines={1}>
          {formattedItem.date}
        </Text>

        <View style={local.row}>
          <MaterialIcons
            name="location-on"
            size={13}
            color="#4BC6DE"
          />

          <Text style={local.cardPlace} numberOfLines={1}>
            {formattedItem.place}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <LinearGradient
      colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
      locations={[0, 0.25, 0.5, 0.7, 1]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={local.container}>
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
          }}>
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
              onPress={() => setActiveSegment(seg)}>
              <Text
                style={[
                  local.segmentText,
                  active && local.segmentTextActive,
                ]}>
                {seg === 'upcoming' ? 'Upcoming' : 'Recent'}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Events Grid */}
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#4BC6DE"
          style={{flex: 1}}
        />
      ) : error ? (
        <Text
          style={{
            color: '#FF6B6B',
            textAlign: 'center',
            marginTop: 25,
          }}>
          {error}
        </Text>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) =>
            String(item._id || item.id || index)
          }
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          contentContainerStyle={local.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text
              style={{
                color: '#FFFFFF',
                textAlign: 'center',
                marginTop: 25,
              }}>
              No {activeSegment} events found
            </Text>
          )}
        />
      )}

      {/* Bottom Tab Bar */}
      <View style={local.tabBar}>
        {TABS.map(tab => {
          const active = activeTab === tab.key;

          return (
            <TouchableOpacity
              key={tab.key}
              style={local.tabItem}
              activeOpacity={0.8}
              onPress={() => handleTabPress(tab)}>
              <MaterialIcons
                name={tab.icon}
                size={22}
                color={active ? '#4BC6DE' : '#9A9AA5'}
              />

              <Text
                style={[
                  local.tabLabel,
                  active && local.tabLabelActive,
                ]}>
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
