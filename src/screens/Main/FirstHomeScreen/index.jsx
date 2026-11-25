// // import React, { useState } from 'react';
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   Image,
// //   FlatList,
// //   ScrollView,
// //   StatusBar,
// //   Dimensions,
// //   StyleSheet,
// // } from 'react-native';
// // import LinearGradient from 'react-native-linear-gradient';
// // import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// // import local from './styles'

// // const { width } = Dimensions.get('window');
// // const SIDE = 20;
// // const GAP = 14;
// // const BIG_CARD = width * 0.86;
// // const GRID_CARD = (width - SIDE * 2 - GAP) / 2;

// // const RECOMMENDED = [
// //   {
// //     id: 'r1',
// //     title: 'Chicago steppin',
// //     date: 'Thy, Sep 24 • 18.00 - 23.00 PM',
// //     place: 'Grand Park, New York',
// //     image: require('../../../assets/img5.png'),
// //   },
// //   {
// //     id: 'r2',
// //     title: 'Music Night',
// //     date: 'Fri, Sep 25 • 19.00 - 23.00 PM',
// //     place: 'Central Hall, New York',
// //     image: require('../../../assets/img13.png'),
// //   },
// // ];

// // const UPCOMING = [
// //   {
// //     id: 'u1',
// //     title: 'Chicago Steppin',
// //     date: 'Fri, Sep 24 • 18.00 - 23.00 PM',
// //     place: 'New Universe, Ne...',
// //     image: require('../../../assets/img6.png'),
// //   },
// //   {
// //     id: 'u2',
// //     title: 'Cha Cha',
// //     date: 'Fri, Sep 24 • 18.00 - 23.00 PM',
// //     place: 'Central Park, Ne...',
// //     image: require('../../../assets/img7.png'),
// //   },
// //   {
// //     id: 'u3',
// //     title: 'Cha Cha',
// //     date: 'Fri, Sep 24 • 18.00 - 23.00 PM',
// //     place: 'Auditorium Build...',
// //     image: require('../../../assets/img8.png'),
// //   },
// //   {
// //     id: 'u4',
// //     title: 'Urban Ballroom',
// //     date: 'Fri, Sep 24 • 18.00 - 23.00 PM',
// //     place: 'City Space, New...',
// //     image: require('../../../assets/img9.png'),
// //   },
// // ];

// // const RECENT = [
// //   {
// //     id: 'e1',
// //     title: 'Chicago Steppin',
// //     place: 'New Universe, Ne...',
// //     image: require('../../../assets/img10.png'),
// //   },
// //   {
// //     id: 'e2',
// //     title: 'Cha Cha',
// //     place: 'Central Park, Ne...',
// //     image: require('../../../assets/img11.png'),
// //   },
// //   {
// //     id: 'e3',
// //     title: 'Cha Cha',
// //     place: 'Auditorium Build...',
// //     image: require('../../../assets/img12.png'),
// //   },
// // ];

// // const TABS = [
// //   { key: 'home', label: 'Home', icon: 'home', screen: 'FirstHomeScreen' },
// //   { key: 'events', label: 'Events', icon: 'event', screen: 'EventsScreen' },
// //   { key: 'sponsors', label: 'Sponsors', icon: 'people', screen: 'SponsorsScreen' },
// //   { key: 'profile', label: 'Profile', icon: 'person', screen: 'ProfileScreen' },
// // ];

// // const SectionHeader = ({ title, onSeeAll }) => (
// //   <View style={local.sectionHeader}>
// //     <Text style={local.sectionTitle}>{title}</Text>
// //     <TouchableOpacity onPress={onSeeAll}>
// //       <Text style={local.seeAll}>See All</Text>
// //     </TouchableOpacity>
// //   </View>
// // );

// // const FirstHomeScreen = ({ navigation }) => {
// //   const [search, setSearch] = useState('');
// //   const [activeTab, setActiveTab] = useState('home');

// //   const renderRecommended = ({ item }) => (
// //     <TouchableOpacity activeOpacity={0.9} style={local.bigCard}>
// //       <Image source={item.image} style={local.bigImage} />
// //       <Text style={local.bigTitle}>{item.title}</Text>
// //       <Text style={local.bigDate}>{item.date}</Text>
// //       <View style={local.row}>
// //         <MaterialIcons name="location-on" size={16} color="#4BC6DE" />
// //         <Text style={local.bigPlace}>{item.place}</Text>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   const renderUpcoming = ({ item }) => (
// //     <TouchableOpacity activeOpacity={0.9} style={local.gridCard}>
// //       <Image source={item.image} style={local.gridImage} />
// //       <Text style={local.gridTitle} numberOfLines={1}>
// //         {item.title}
// //       </Text>
// //       <Text style={local.gridDate} numberOfLines={1}>
// //         {item.date}
// //       </Text>
// //       <View style={local.row}>
// //         <MaterialIcons name="location-on" size={12} color="#4BC6DE" />
// //         <Text style={local.gridPlace} numberOfLines={1}>
// //           {item.place}
// //         </Text>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   const renderRecent = ({ item }) => (
// //     <TouchableOpacity activeOpacity={0.9} style={local.recentCard}>
// //       <Image source={item.image} style={local.recentImage} />
// //       <Text style={local.recentTitle} numberOfLines={1}>
// //         {item.title}
// //       </Text>
// //       <View style={local.row}>
// //         <MaterialIcons name="location-on" size={10} color="#4BC6DE" />
// //         <Text style={local.recentPlace} numberOfLines={1}>
// //           {item.place}
// //         </Text>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   return (
// //     <LinearGradient
// //       colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
// //       locations={[0, 0.25, 0.5, 0.7, 1]}
// //       start={{ x: 0, y: 0 }}
// //       end={{ x: 1, y: 1 }}
// //       style={local.container}
// //     >
// //       <StatusBar hidden />

// //       <ScrollView
// //         contentContainerStyle={local.scrollContent}
// //         showsVerticalScrollIndicator={false}
// //         keyboardShouldPersistTaps="handled"
// //       >
// //         {/* Header */}
// //         <View style={local.header}>
// //           <View style={local.userRow}>
// //            <View style={local.avatar}>
// //        <Image
// //         source={require('../../../assets/img4.png')}
// //          style={local.avatarImage}
// //                />
// //           </View>
// //             <Text style={local.userName}>ANDREW AINSLEY</Text>
// //           </View>

// //           <TouchableOpacity style={local.bellBox} activeOpacity={0.8}>
// //             <MaterialIcons name="notifications-none" size={20} color="#FFFFFF" />
// //           </TouchableOpacity>
// //         </View>

// //         {/* Search */}
// //         <View style={local.searchBox}>
// //           <MaterialIcons name="search" size={20} color="#4BC6DE" />
// //           <TextInput
// //             style={local.searchInput}
// //             placeholder="What event are you looking for..."
// //             placeholderTextColor="#E5E5EA"
// //             value={search}
// //             onChangeText={setSearch}
// //           />
// //           <TouchableOpacity hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
// //             <MaterialIcons name="tune" size={20} color="#4BC6DE" />
// //           </TouchableOpacity>
// //         </View>

// //         {/* Recommended */}
// //         <SectionHeader title="RECOMMENDED EVENTS" />
// //         <FlatList
// //           data={RECOMMENDED}
// //           renderItem={renderRecommended}
// //           keyExtractor={item => item.id}
// //           horizontal
// //           showsHorizontalScrollIndicator={false}
// //           contentContainerStyle={{ paddingHorizontal: SIDE }}
// //           ItemSeparatorComponent={() => <View style={{ width: GAP }} />}
// //         />

// //         {/* Upcoming */}
// //         <SectionHeader title="UPCOMING EVENTS" />
// //         <FlatList
// //           data={UPCOMING}
// //           renderItem={renderUpcoming}
// //           keyExtractor={item => item.id}
// //           numColumns={2}
// //           scrollEnabled={false}
// //           columnWrapperStyle={{ justifyContent: 'space-between' }}
// //           contentContainerStyle={{ paddingHorizontal: SIDE }}
// //         />

// //         {/* Recent */}
// //         <SectionHeader title="RECENT EVENTS" />
// //         <FlatList
// //           data={RECENT}
// //           renderItem={renderRecent}
// //           keyExtractor={item => item.id}
// //           horizontal
// //           showsHorizontalScrollIndicator={false}
// //           contentContainerStyle={{ paddingHorizontal: SIDE }}
// //           ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
// //         />
// //       </ScrollView>

// //       {/* Bottom tab bar */}
// //       <View style={local.tabBar}>
// //         {TABS.map(tab => {
// //           const active = activeTab === tab.key;
// //           return (
// //             // <TouchableOpacity
// //             //   key={tab.key}
// //             //   style={local.tabItem}
// //             //   activeOpacity={0.8}
// //             //   onPress={() => setActiveTab(tab.key)}
              
// //             // >
// //             <TouchableOpacity
// //                    key={tab.key}
// //                     style={local.tabItem}
// //                       activeOpacity={0.8}
// //                     onPress={() => {
// //                          setActiveTab(tab.key);
// //                      if (tab.screen && tab.key !== 'home') {
// //                           navigation.navigate(tab.screen);
// //                          }
// //                      }}
// // >
// //               <MaterialIcons
// //                 name={tab.icon}
// //                 size={22}
// //                 color={active ? '#4BC6DE' : '#9A9AA5'}
// //               />
// //               <Text style={[local.tabLabel, active && local.tabLabelActive]}>
// //                 {tab.label}
// //               </Text>
// //             </TouchableOpacity>
// //           );
// //         })}
// //       </View>
// //     </LinearGradient>
// //   );
// // };
// // export default FirstHomeScreen;



// // import React, { useState } from 'react';
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   Image,
// //   FlatList,
// //   ScrollView,
// //   StatusBar,
// //   Dimensions,
// //   StyleSheet,
// // } from 'react-native';

// // import LinearGradient from 'react-native-linear-gradient';
// // import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// // import local from './styles';

// // const { width } = Dimensions.get('window');
// // const SIDE = 20;
// // const GAP = 14;

// // const RECOMMENDED = [
// //   {
// //     id: 'r1',
// //     title: 'Chicago steppin',
// //     date: 'Thy, Sep 24 • 18.00 - 23.00 PM',
// //     place: 'Grand Park, New York',
// //     image: require('../../../assets/img5.png'),
// //   },
// //   {
// //     id: 'r2',
// //     title: 'Music Night',
// //     date: 'Fri, Sep 25 • 19.00 - 23.00 PM',
// //     place: 'Central Hall, New York',
// //     image: require('../../../assets/img13.png'),
// //   },
// // ];

// // const UPCOMING = [
// //   {
// //     id: 'u1',
// //     title: 'Chicago Steppin',
// //     date: 'Fri, Sep 24 • 18.00 - 23.00 PM',
// //     place: 'New Universe, Ne...',
// //     image: require('../../../assets/img6.png'),
// //   },
// //   {
// //     id: 'u2',
// //     title: 'Cha Cha',
// //     date: 'Fri, Sep 24 • 18.00 - 23.00 PM',
// //     place: 'Central Park, Ne...',
// //     image: require('../../../assets/img7.png'),
// //   },
// //   {
// //     id: 'u3',
// //     title: 'Cha Cha',
// //     date: 'Fri, Sep 24 • 18.00 - 23.00 PM',
// //     place: 'Auditorium Build...',
// //     image: require('../../../assets/img8.png'),
// //   },
// //   {
// //     id: 'u4',
// //     title: 'Urban Ballroom',
// //     date: 'Fri, Sep 24 • 18.00 - 23.00 PM',
// //     place: 'City Space, New...',
// //     image: require('../../../assets/img9.png'),
// //   },
// // ];

// // const RECENT = [
// //   {
// //     id: 'e1',
// //     title: 'Chicago Steppin',
// //     place: 'New Universe, Ne...',
// //     image: require('../../../assets/img10.png'),
// //   },
// //   {
// //     id: 'e2',
// //     title: 'Cha Cha',
// //     place: 'Central Park, Ne...',
// //     image: require('../../../assets/img11.png'),
// //   },
// //   {
// //     id: 'e3',
// //     title: 'Cha Cha',
// //     place: 'Auditorium Build...',
// //     image: require('../../../assets/img12.png'),
// //   },
// // ];

// // const TABS = [
// //   { key: 'home', label: 'Home', icon: 'home', screen: 'FirstHomeScreen' },
// //   { key: 'events', label: 'Events', icon: 'event', screen: 'EventsScreen' },
// //   { key: 'sponsors', label: 'Sponsors', icon: 'people', screen: 'SponsorsScreen' },
// //   { key: 'profile', label: 'Profile', icon: 'person', screen: 'ProfileScreen' },
// // ];

// // const SectionHeader = ({ title, onSeeAll }) => (
// //   <View style={local.sectionHeader}>
// //     <Text style={local.sectionTitle}>{title}</Text>

// //     <TouchableOpacity onPress={onSeeAll}>
// //       <Text style={local.seeAll}>See All</Text>
// //     </TouchableOpacity>
// //   </View>
// // );

// // const FirstHomeScreen = ({ navigation }) => {
// //   const [search, setSearch] = useState('');
// //   const [activeTab, setActiveTab] = useState('home');

// //   // Event Details Navigation
// //   const handleEventPress = item => {
// //     navigation.navigate('EventDetailsScreen', {
// //       event: item,
// //     });
// //   };

// //   const renderRecommended = ({ item }) => (
// //     <TouchableOpacity
// //       activeOpacity={0.9}
// //       style={local.bigCard}
      
// //     >
// //       <Image source={item.image} style={local.bigImage} />

// //       <Text style={local.bigTitle}>{item.title}</Text>

// //       <Text style={local.bigDate}>{item.date}</Text>

// //       <View style={local.row}>
// //         <MaterialIcons name="location-on" size={16} color="#4BC6DE" />

// //         <Text style={local.bigPlace}>{item.place}</Text>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   // Upcoming Events
// //   const renderUpcoming = ({ item }) => (
// //     <TouchableOpacity
// //       activeOpacity={0.9}
// //       style={local.gridCard}
// //       onPress={() => handleEventPress(item)}
// //     >
// //       <Image source={item.image} style={local.gridImage} />

// //       <Text style={local.gridTitle} numberOfLines={1}>
// //         {item.title}
// //       </Text>

// //       <Text style={local.gridDate} numberOfLines={1}>
// //         {item.date}
// //       </Text>

// //       <View style={local.row}>
// //         <MaterialIcons name="location-on" size={12} color="#4BC6DE" />

// //         <Text style={local.gridPlace} numberOfLines={1}>
// //           {item.place}
// //         </Text>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   // Recent Events
// //   const renderRecent = ({ item }) => (
// //     <TouchableOpacity
// //       activeOpacity={0.9}
// //       style={local.recentCard}
// //       onPress={() => handleEventPress(item)}
// //     >
// //       <Image source={item.image} style={local.recentImage} />

// //       <Text style={local.recentTitle} numberOfLines={1}>
// //         {item.title}
// //       </Text>

// //       <View style={local.row}>
// //         <MaterialIcons name="location-on" size={10} color="#4BC6DE" />

// //         <Text style={local.recentPlace} numberOfLines={1}>
// //           {item.place}
// //         </Text>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   return (
// //     <LinearGradient
// //       colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
// //       locations={[0, 0.25, 0.5, 0.7, 1]}
// //       start={{ x: 0, y: 0 }}
// //       end={{ x: 1, y: 1 }}
// //       style={local.container}
// //     >
// //       <StatusBar hidden />

// //       <ScrollView
// //         contentContainerStyle={local.scrollContent}
// //         showsVerticalScrollIndicator={false}
// //         keyboardShouldPersistTaps="handled"
// //       >

// //         {/* Header */}
// //         <View style={local.header}>
// //           <View style={local.userRow}>
// //             <View style={local.avatar}>
// //               <Image
// //                 source={require('../../../assets/img4.png')}
// //                 style={local.avatarImage}
// //               />
// //             </View>

// //             <Text style={local.userName}>ANDREW AINSLEY</Text>
// //           </View>

// //           <TouchableOpacity style={local.bellBox} activeOpacity={0.8}>
// //             <MaterialIcons
// //               name="notifications-none"
// //               size={20}
// //               color="#FFFFFF"
// //             />
// //           </TouchableOpacity>
// //         </View>

// //         {/* Search */}
// //         <View style={local.searchBox}>
// //           <MaterialIcons name="search" size={20} color="#4BC6DE" />

// //           <TextInput
// //             style={local.searchInput}
// //             placeholder="What event are you looking for..."
// //             placeholderTextColor="#E5E5EA"
// //             value={search}
// //             onChangeText={setSearch}
// //           />

// //           <TouchableOpacity
// //             hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
// //           >
// //             <MaterialIcons name="tune" size={20} color="#4BC6DE" />
// //           </TouchableOpacity>
// //         </View>

// //         {/* Recommended */}
// //         <SectionHeader title="RECOMMENDED EVENTS" />

// //         <FlatList
// //           data={RECOMMENDED}
// //           renderItem={renderRecommended}
// //           keyExtractor={item => item.id}
// //           horizontal
// //           showsHorizontalScrollIndicator={false}
// //           contentContainerStyle={{ paddingHorizontal: SIDE }}
// //           ItemSeparatorComponent={() => <View style={{ width: GAP }} />}
// //         />

// //         {/* Upcoming */}
// //         <SectionHeader title="UPCOMING EVENTS" />

// //         <FlatList
// //           data={UPCOMING}
// //           renderItem={renderUpcoming}
// //           keyExtractor={item => item.id}
// //           numColumns={2}
// //           scrollEnabled={false}
// //           columnWrapperStyle={{ justifyContent: 'space-between' }}
// //           contentContainerStyle={{ paddingHorizontal: SIDE }}
// //         />

// //         {/* Recent */}
// //         <SectionHeader title="RECENT EVENTS" />

// //         <FlatList
// //           data={RECENT}
// //           renderItem={renderRecent}
// //           keyExtractor={item => item.id}
// //           horizontal
// //           showsHorizontalScrollIndicator={false}
// //           contentContainerStyle={{ paddingHorizontal: SIDE }}
// //           ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
// //         />

// //       </ScrollView>

// //       {/* Bottom Tab Bar */}
// //       <View style={local.tabBar}>
// //         {TABS.map(tab => {
// //           const active = activeTab === tab.key;

// //           return (
// //             <TouchableOpacity
// //               key={tab.key}
// //               style={local.tabItem}
// //               activeOpacity={0.8}
// //               onPress={() => {
// //                 setActiveTab(tab.key);

// //                 if (tab.screen && tab.key !== 'home') {
// //                   navigation.navigate(tab.screen);
// //                 }
// //               }}
// //             >
// //               <MaterialIcons
// //                 name={tab.icon}
// //                 size={22}
// //                 color={active ? '#4BC6DE' : '#9A9AA5'}
// //               />

// //               <Text style={[local.tabLabel, active && local.tabLabelActive]}>
// //                 {tab.label}
// //               </Text>
// //             </TouchableOpacity>
// //           );
// //         })}
// //       </View>

// //     </LinearGradient>
// //   );
// // };

// // export default FirstHomeScreen;





// // import React, { useState, useEffect } from 'react';

// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   Image,
// //   FlatList,
// //   ScrollView,
// //   StatusBar,
// //   Dimensions,
// //   ActivityIndicator,
// // } from 'react-native';

// // import LinearGradient from 'react-native-linear-gradient';
// // import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// // import local from './styles';

// // const { width } = Dimensions.get('window');
// // const SIDE = 20;
// // const GAP = 14;

// // const BASE_URL = 'https://xhcqhdxq-8006.inc1.devtunnels.ms';

// // // Recommended Events (Static Data)
// // const RECOMMENDED = [
// //   {
// //     id: 'r1',
// //     title: 'Chicago steppin',
// //     date: 'Thy, Sep 24 • 18.00 - 23.00 PM',
// //     place: 'Grand Park, New York',
// //     image: require('../../../assets/img5.png'),
// //   },
// //   {
// //     id: 'r2',
// //     title: 'Music Night',
// //     date: 'Fri, Sep 25 • 19.00 - 23.00 PM',
// //     place: 'Central Hall, New York',
// //     image: require('../../../assets/img13.png'),
// //   },
// // ];

// // // Bottom Tabs
// // const TABS = [
// //   { key: 'home', label: 'Home', icon: 'home', screen: 'FirstHomeScreen' },
// //   { key: 'events', label: 'Events', icon: 'event', screen: 'EventsScreen' },
// //   { key: 'sponsors', label: 'Sponsors', icon: 'people', screen: 'SponsorsScreen' },
// //   { key: 'profile', label: 'Profile', icon: 'person', screen: 'ProfileScreen' },
// // ];

// // // Section Header
// // const SectionHeader = ({ title, onSeeAll }) => (
// //   <View style={local.sectionHeader}>
// //     <Text style={local.sectionTitle}>{title}</Text>

// //     <TouchableOpacity onPress={onSeeAll}>
// //       <Text style={local.seeAll}>See All</Text>
// //     </TouchableOpacity>
// //   </View>
// // );

// // const FirstHomeScreen = ({ navigation }) => {
// //   const [search, setSearch] = useState('');
// //   const [activeTab, setActiveTab] = useState('home');

// //   // API Data States
// //   const [upcomingEvents, setUpcomingEvents] = useState([]);
// //   const [recentEvents, setRecentEvents] = useState([]);

// //   // Separate Loading States
// //   const [upcomingLoading, setUpcomingLoading] = useState(true);
// //   const [recentLoading, setRecentLoading] = useState(true);

// //   // Separate Error States
// //   const [upcomingError, setUpcomingError] = useState('');
// //   const [recentError, setRecentError] = useState('');

// //   // Fetch Recent Events API
// //   useEffect(() => {
// //     const fetchRecentEvents = async () => {
// //       try {
// //         setRecentLoading(true);
// //         setRecentError('');

// //         const response = await fetch(`${BASE_URL}/latestEvent`);

// //         console.log('Recent API Status:', response.status);

// //         const data = await response.json();

// //         console.log('Recent API Response:', data);

// //         if (!response.ok) {
// //           throw new Error(
// //             data.message || 'Recent events request failed',
// //           );
// //         }

// //         if (data.success) {
// //           setRecentEvents(data.data || []);
// //         } else {
// //           setRecentEvents([]);
// //           setRecentError(
// //             data.message || 'Unable to load recent events.',
// //           );
// //         }
// //       } catch (error) {
// //         console.log('Recent API Error:', error.message);

// //         setRecentEvents([]);
// //         setRecentError('Unable to load recent events. Please try again.');
// //       } finally {
// //         setRecentLoading(false);
// //       }
// //     };

// //     fetchRecentEvents();
// //   }, []);

// //   // Fetch Upcoming Events API
// //   useEffect(() => {
// //     const fetchUpcomingEvents = async () => {
// //       try {
// //         setUpcomingLoading(true);
// //         setUpcomingError('');

// //         const response = await fetch(`${BASE_URL}/upcomimEvent`);

// //         console.log('Upcoming API Status:', response.status);

// //         const data = await response.json();

// //         console.log('Upcoming API Response:', data);

// //         if (!response.ok) {
// //           throw new Error(
// //             data.message || 'Upcoming events request failed',
// //           );
// //         }

// //         if (data.success) {
// //           setUpcomingEvents(data.data || []);
// //         } else {
// //           setUpcomingEvents([]);
// //           setUpcomingError(
// //             data.message || 'Unable to load upcoming events.',
// //           );
// //         }
// //       } catch (error) {
// //         console.log('Upcoming API Error:', error.message);

// //         setUpcomingEvents([]);
// //         setUpcomingError(
// //           'Unable to load upcoming events. Please try again.',
// //         );
// //       } finally {
// //         setUpcomingLoading(false);
// //       }
// //     };

// //     fetchUpcomingEvents();
// //   }, []);

// //   // Convert API Data into Card Format
// //   const formatEvent = item => {
// //     const imagePath = item.images?.[0];

// //     let imageSource = require('../../../assets/img6.png');

// //     if (imagePath) {
// //       if (imagePath.startsWith('http')) {
// //         imageSource = { uri: imagePath };
// //       } else {
// //         const imageName = imagePath.split(/[\\/]/).pop();

// //         imageSource = {
// //           uri: `${BASE_URL}/uploads/events/${encodeURIComponent(imageName)}`,
// //         };
// //       }
// //     }

// //     const formattedDate = item.date
// //       ? new Date(item.date).toLocaleDateString('en-US', {
// //           weekday: 'short',
// //           month: 'short',
// //           day: 'numeric',
// //         })
// //       : '';

// //     return {
// //       ...item,
// //       id: item._id,
// //       title: item.Title || item.title || item.name || 'Event',
// //       date: [formattedDate, item.time].filter(Boolean).join(' • '),
// //       place: item.address || item.place || '',
// //       image: imageSource,
// //     };
// //   };

// //   // Event Details Navigation
// //   const handleEventPress = item => {
// //     navigation.navigate('EventDetailsScreen', {
// //       event: item,
// //     });
// //   };

// //   // Recommended Events (No Navigation)
// //   const renderRecommended = ({ item }) => (
// //     <TouchableOpacity
// //       activeOpacity={0.9}
// //       style={local.bigCard}
// //     >
// //       <Image source={item.image} style={local.bigImage} />

// //       <Text style={local.bigTitle}>
// //         {item.title}
// //       </Text>

// //       <Text style={local.bigDate}>
// //         {item.date}
// //       </Text>

// //       <View style={local.row}>
// //         <MaterialIcons
// //           name="location-on"
// //           size={16}
// //           color="#4BC6DE"
// //         />

// //         <Text style={local.bigPlace}>
// //           {item.place}
// //         </Text>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   // Upcoming Events
// //   const renderUpcoming = ({ item }) => (
// //     <TouchableOpacity
// //       activeOpacity={0.9}
// //       style={local.gridCard}
// //       onPress={() => handleEventPress(item)}
// //     >
// //       <Image
// //         source={item.image}
// //         style={local.gridImage}
// //       />

// //       <Text style={local.gridTitle} numberOfLines={1}>
// //         {item.title}
// //       </Text>

// //       <Text style={local.gridDate} numberOfLines={1}>
// //         {item.date}
// //       </Text>

// //       <View style={local.row}>
// //         <MaterialIcons
// //           name="location-on"
// //           size={12}
// //           color="#4BC6DE"
// //         />

// //         <Text style={local.gridPlace} numberOfLines={1}>
// //           {item.place}
// //         </Text>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   // Recent Events
// //   const renderRecent = ({ item }) => (
// //     <TouchableOpacity
// //       activeOpacity={0.9}
// //       style={local.recentCard}
// //       onPress={() => handleEventPress(item)}
// //     >
// //       <Image
// //         source={item.image}
// //         style={local.recentImage}
// //       />

// //       <Text style={local.recentTitle} numberOfLines={1}>
// //         {item.title}
// //       </Text>

// //       <View style={local.row}>
// //         <MaterialIcons
// //           name="location-on"
// //           size={10}
// //           color="#4BC6DE"
// //         />

// //         <Text style={local.recentPlace} numberOfLines={1}>
// //           {item.place}
// //         </Text>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   // Format API Events
// //   const upcomingData = upcomingEvents.map(formatEvent);
// //   const recentData = recentEvents.map(formatEvent);

// //   return (
// //     <LinearGradient
// //       colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
// //       locations={[0, 0.25, 0.5, 0.7, 1]}
// //       start={{ x: 0, y: 0 }}
// //       end={{ x: 1, y: 1 }}
// //       style={local.container}
// //     >
// //       <StatusBar hidden />

// //       <ScrollView
// //         contentContainerStyle={local.scrollContent}
// //         showsVerticalScrollIndicator={false}
// //         keyboardShouldPersistTaps="handled"
// //       >

// //         {/* Header */}
// //         <View style={local.header}>
// //           <View style={local.userRow}>
// //             <View style={local.avatar}>
// //               <Image
// //                 source={require('../../../assets/img4.png')}
// //                 style={local.avatarImage}
// //               />
// //             </View>

// //             <Text style={local.userName}>
// //               ANDREW AINSLEY
// //             </Text>
// //           </View>

// //           <TouchableOpacity
// //             style={local.bellBox}
// //             activeOpacity={0.8}
// //           >
// //             <MaterialIcons
// //               name="notifications-none"
// //               size={20}
// //               color="#FFFFFF"
// //             />
// //           </TouchableOpacity>
// //         </View>

// //         {/* Search */}
// //         <View style={local.searchBox}>
// //           <MaterialIcons
// //             name="search"
// //             size={20}
// //             color="#4BC6DE"
// //           />

// //           <TextInput
// //             style={local.searchInput}
// //             placeholder="What event are you looking for..."
// //             placeholderTextColor="#E5E5EA"
// //             value={search}
// //             onChangeText={setSearch}
// //           />

// //           <TouchableOpacity
// //             hitSlop={{
// //               top: 10,
// //               bottom: 10,
// //               left: 10,
// //               right: 10,
// //             }}
// //           >
// //             <MaterialIcons
// //               name="tune"
// //               size={20}
// //               color="#4BC6DE"
// //             />
// //           </TouchableOpacity>
// //         </View>

// //         {/* Recommended Events */}
// //         <SectionHeader title="RECOMMENDED EVENTS" />

// //         <FlatList
// //           data={RECOMMENDED}
// //           renderItem={renderRecommended}
// //           keyExtractor={item => item.id}
// //           horizontal
// //           showsHorizontalScrollIndicator={false}
// //           contentContainerStyle={{ paddingHorizontal: SIDE }}
// //           ItemSeparatorComponent={() => (
// //             <View style={{ width: GAP }} />
// //           )}
// //         />

// //         {/* Upcoming Events */}
// //         <SectionHeader title="UPCOMING EVENTS" />

// //         {upcomingLoading ? (
// //           <ActivityIndicator
// //             size="large"
// //             color="#4BC6DE"
// //             style={{ marginVertical: 20 }}
// //           />
// //         ) : upcomingError ? (
// //           <Text
// //             style={{
// //               color: '#FF6B6B',
// //               textAlign: 'center',
// //               marginVertical: 15,
// //             }}
// //           >
// //             {upcomingError}
// //           </Text>
// //         ) : (
// //           <FlatList
// //             data={upcomingData}
// //             renderItem={renderUpcoming}
// //             keyExtractor={(item, index) => item.id || String(index)}
// //             numColumns={2}
// //             scrollEnabled={false}
// //             columnWrapperStyle={{
// //               justifyContent: 'space-between',
// //             }}
// //             contentContainerStyle={{
// //               paddingHorizontal: SIDE,
// //             }}
// //             ListEmptyComponent={() => (
// //               <Text
// //                 style={{
// //                   color: '#FFFFFF',
// //                   textAlign: 'center',
// //                   marginVertical: 15,
// //                 }}
// //               >
// //                 No upcoming events found
// //               </Text>
// //             )}
// //           />
// //         )}

// //         {/* Recent Events */}
// //         <SectionHeader title="RECENT EVENTS" />

// //         {recentLoading ? (
// //           <ActivityIndicator
// //             size="large"
// //             color="#4BC6DE"
// //             style={{ marginVertical: 20 }}
// //           />
// //         ) : recentError ? (
// //           <Text
// //             style={{
// //               color: '#FF6B6B',
// //               textAlign: 'center',
// //               marginVertical: 15,
// //             }}
// //           >
// //             {recentError}
// //           </Text>
// //         ) : (
// //           <FlatList
// //             data={recentData}
// //             renderItem={renderRecent}
// //             keyExtractor={(item, index) => item.id || String(index)}
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             contentContainerStyle={{
// //               paddingHorizontal: SIDE,
// //             }}
// //             ItemSeparatorComponent={() => (
// //               <View style={{ width: 12 }} />
// //             )}
// //             ListEmptyComponent={() => (
// //               <Text
// //                 style={{
// //                   color: '#FFFFFF',
// //                   marginVertical: 15,
// //                 }}
// //               >
// //                 No recent events found
// //               </Text>
// //             )}
// //           />
// //         )}

// //       </ScrollView>

// //       {/* Bottom Tab Bar */}
// //       <View style={local.tabBar}>
// //         {TABS.map(tab => {
// //           const active = activeTab === tab.key;

// //           return (
// //             <TouchableOpacity
// //               key={tab.key}
// //               style={local.tabItem}
// //               activeOpacity={0.8}
// //               onPress={() => {
// //                 setActiveTab(tab.key);

// //                 if (tab.screen && tab.key !== 'home') {
// //                   navigation.navigate(tab.screen);
// //                 }
// //               }}
// //             >
// //               <MaterialIcons
// //                 name={tab.icon}
// //                 size={22}
// //                 color={active ? '#4BC6DE' : '#9A9AA5'}
// //               />

// //               <Text
// //                 style={[
// //                   local.tabLabel,
// //                   active && local.tabLabelActive,
// //                 ]}
// //               >
// //                 {tab.label}
// //               </Text>
// //             </TouchableOpacity>
// //           );
// //         })}
// //       </View>

// //     </LinearGradient>
// //   );
// // };

// // export default FirstHomeScreen;





// // import React, { useState, useEffect } from 'react';

// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   Image,
// //   FlatList,
// //   ScrollView,
// //   StatusBar,
// //   Dimensions,
// //   ActivityIndicator,
// // } from 'react-native';

// // import LinearGradient from 'react-native-linear-gradient';
// // import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// // import { useSelector } from 'react-redux';

// // import local from './styles';

// // const { width } = Dimensions.get('window');
// // const SIDE = 20;
// // const GAP = 14;

// // const BASE_URL = 'https://xhcqhdxq-8006.inc1.devtunnels.ms';

// // // Recommended Events (Static Data)
// // const RECOMMENDED = [
// //   {
// //     id: 'r1',
// //     title: 'Chicago steppin',
// //     date: 'Thy, Sep 24 • 18.00 - 23.00 PM',
// //     place: 'Grand Park, New York',
// //     image: require('../../../assets/img5.png'),
// //   },
// //   {
// //     id: 'r2',
// //     title: 'Music Night',
// //     date: 'Fri, Sep 25 • 19.00 - 23.00 PM',
// //     place: 'Central Hall, New York',
// //     image: require('../../../assets/img13.png'),
// //   },
// // ];

// // // Bottom Tabs
// // const TABS = [
// //   { key: 'home', label: 'Home', icon: 'home', screen: 'FirstHomeScreen' },
// //   { key: 'events', label: 'Events', icon: 'event', screen: 'EventsScreen' },
// //   { key: 'sponsors', label: 'Sponsors', icon: 'people', screen: 'SponsorsScreen' },
// //    { key: 'invite', label: 'Invite Us', icon: 'person-add', screen: 'InviteUsScreen' },
// //   { key: 'profile', label: 'Profile', icon: 'person', screen: 'ProfileScreen' },
// // ];

// // // Section Header
// // const SectionHeader = ({ title, onSeeAll }) => (
// //   <View style={local.sectionHeader}>
// //     <Text style={local.sectionTitle}>{title}</Text>

// //     <TouchableOpacity onPress={onSeeAll}>
// //       <Text style={local.seeAll}>See All</Text>
// //     </TouchableOpacity>
// //   </View>
// // );

// // const FirstHomeScreen = ({ navigation }) => {
// //   const [search, setSearch] = useState('');
// //   const [activeTab, setActiveTab] = useState('home');

// //   // Get Login Token From Redux
// //   const token = useSelector(state => state.auth.token);

// //   // API Data States
// //   const [upcomingEvents, setUpcomingEvents] = useState([]);
// //   const [recentEvents, setRecentEvents] = useState([]);

// //   // Loading States
// //   const [upcomingLoading, setUpcomingLoading] = useState(true);
// //   const [recentLoading, setRecentLoading] = useState(true);

// //   // Error States
// //   const [upcomingError, setUpcomingError] = useState('');
// //   const [recentError, setRecentError] = useState('');

// //   // Fetch Recent Events API
// //   useEffect(() => {
// //     const fetchRecentEvents = async () => {
// //       try {
// //         setRecentLoading(true);
// //         setRecentError('');

// //         if (!token) {
// //           throw new Error('Login token not found');
// //         }

// //         const response = await fetch(`${BASE_URL}/latestEvent`, {
// //           method: 'GET',
// //           headers: {
// //             Accept: 'application/json',
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });

// //         const data = await response.json();

// //         console.log('Recent API Status:', response.status);
// //         console.log('Recent API Response:', data);

// //         if (!response.ok) {
// //           throw new Error(
// //             data.message || `Server Error: ${response.status}`,
// //           );
// //         }

// //         if (data.success) {
// //           setRecentEvents(data.data || []);
// //         } else {
// //           setRecentEvents([]);
// //           throw new Error(data.message || 'Recent events not found');
// //         }
// //       } catch (error) {
// //         console.log('Recent API Error:', error.message);
// //         setRecentEvents([]);
// //         setRecentError(
// //           'Unable to load recent events. Please try again.',
// //         );
// //       } finally {
// //         setRecentLoading(false);
// //       }
// //     };

// //     fetchRecentEvents();
// //   }, [token]);

// //   // Fetch Upcoming Events API
// //   useEffect(() => {
// //     const fetchUpcomingEvents = async () => {
// //       try {
// //         setUpcomingLoading(true);
// //         setUpcomingError('');

// //         if (!token) {
// //           throw new Error('Login token not found');
// //         }

// //         const response = await fetch(`${BASE_URL}/upcomimEvent`, {
// //           method: 'GET',
// //           headers: {
// //             Accept: 'application/json',
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });

// //         const data = await response.json();

// //         console.log('Upcoming API Status:', response.status);
// //         console.log('Upcoming API Response:', data);

// //         if (!response.ok) {
// //           throw new Error(
// //             data.message || `Server Error: ${response.status}`,
// //           );
// //         }

// //         if (data.success) {
// //           setUpcomingEvents(data.data || []);
// //         } else {
// //           setUpcomingEvents([]);
// //           throw new Error(data.message || 'Upcoming events not found');
// //         }
// //       } catch (error) {
// //         console.log('Upcoming API Error:', error.message);
// //         setUpcomingEvents([]);
// //         setUpcomingError(
// //           'Unable to load upcoming events. Please try again.',
// //         );
// //       } finally {
// //         setUpcomingLoading(false);
// //       }
// //     };

// //     fetchUpcomingEvents();
// //   }, [token]);

// //   // Convert API Data into Card Format
// //   const formatEvent = item => {
// //     const imagePath = item.images?.[0];

// //     let imageSource = require('../../../assets/img6.png');

// //     if (imagePath) {
// //       if (imagePath.startsWith('http')) {
// //         imageSource = { uri: imagePath };
// //       } else {
// //         const imageName = imagePath.split(/[\\/]/).pop();

// //         imageSource = {
// //           uri: `${BASE_URL}/uploads/events/${encodeURIComponent(imageName)}`,
// //         };
// //       }
// //     }

// //     const formattedDate = item.date
// //       ? new Date(item.date).toLocaleDateString('en-US', {
// //           weekday: 'short',
// //           month: 'short',
// //           day: 'numeric',
// //         })
// //       : '';

// //     return {
// //       ...item,
// //       id: item._id,
// //       title: item.Title || item.title || item.name || 'Event',
// //       date: [formattedDate, item.time].filter(Boolean).join(' • '),
// //       place: item.address || item.place || '',
// //       image: imageSource,
// //     };
// //   };

// //   // Event Details Navigation
// //   const handleEventPress = item => {
// //     navigation.navigate('EventDetailsScreen', {
// //       event: item,
// //     });
// //   };

// //   // Recommended Events (No Navigation)
// //   const renderRecommended = ({ item }) => (
// //     <TouchableOpacity
// //       activeOpacity={0.9}
// //       style={local.bigCard}
// //     >
// //       <Image source={item.image} style={local.bigImage} />

// //       <Text style={local.bigTitle}>
// //         {item.title}
// //       </Text>

// //       <Text style={local.bigDate}>
// //         {item.date}
// //       </Text>

// //       <View style={local.row}>
// //         <MaterialIcons
// //           name="location-on"
// //           size={16}
// //           color="#4BC6DE"
// //         />

// //         <Text style={local.bigPlace}>
// //           {item.place}
// //         </Text>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   // Upcoming Events
// //   const renderUpcoming = ({ item }) => (
// //     <TouchableOpacity
// //       activeOpacity={0.9}
// //       style={local.gridCard}
// //       onPress={() => handleEventPress(item)}
// //     >
// //       <Image
// //         source={item.image}
// //         style={local.gridImage}
// //       />

// //       <Text style={local.gridTitle} numberOfLines={1}>
// //         {item.title}
// //       </Text>

// //       <Text style={local.gridDate} numberOfLines={1}>
// //         {item.date}
// //       </Text>

// //       <View style={local.row}>
// //         <MaterialIcons
// //           name="location-on"
// //           size={12}
// //           color="#4BC6DE"
// //         />

// //         <Text style={local.gridPlace} numberOfLines={1}>
// //           {item.place}
// //         </Text>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   // Recent Events
// //   const renderRecent = ({ item }) => (
// //     <TouchableOpacity
// //       activeOpacity={0.9}
// //       style={local.recentCard}
// //       onPress={() => handleEventPress(item)}
// //     >
// //       <Image
// //         source={item.image}
// //         style={local.recentImage}
// //       />

// //       <Text style={local.recentTitle} numberOfLines={1}>
// //         {item.title}
// //       </Text>

// //       <View style={local.row}>
// //         <MaterialIcons
// //           name="location-on"
// //           size={10}
// //           color="#4BC6DE"
// //         />

// //         <Text style={local.recentPlace} numberOfLines={1}>
// //           {item.place}
// //         </Text>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   // Format API Events
// //   const upcomingData = upcomingEvents.map(formatEvent);
// //   const recentData = recentEvents.map(formatEvent);

// //   return (
// //     <LinearGradient
// //       colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
// //       locations={[0, 0.25, 0.5, 0.7, 1]}
// //       start={{ x: 0, y: 0 }}
// //       end={{ x: 1, y: 1 }}
// //       style={local.container}
// //     >
// //       <StatusBar hidden />

// //       <ScrollView
// //         contentContainerStyle={local.scrollContent}
// //         showsVerticalScrollIndicator={false}
// //         keyboardShouldPersistTaps="handled"
// //       >

// //         {/* Header */}
// //         <View style={local.header}>
// //           <View style={local.userRow}>
// //             <View style={local.avatar}>
// //               <Image
// //                 source={require('../../../assets/img4.png')}
// //                 style={local.avatarImage}
// //               />
// //             </View>

// //             <Text style={local.userName}>
// //               ANDREW AINSLEY
// //             </Text>
// //           </View>

// //           <TouchableOpacity
// //             style={local.bellBox}
// //             activeOpacity={0.8}
// //           >
// //             <MaterialIcons
// //               name="notifications-none"
// //               size={20}
// //               color="#FFFFFF"
// //             />
// //           </TouchableOpacity>
// //         </View>

// //         {/* Search */}
// //         <View style={local.searchBox}>
// //           <MaterialIcons
// //             name="search"
// //             size={20}
// //             color="#4BC6DE"
// //           />

// //           <TextInput
// //             style={local.searchInput}
// //             placeholder="What event are you looking for..."
// //             placeholderTextColor="#E5E5EA"
// //             value={search}
// //             onChangeText={setSearch}
// //           />

// //           <TouchableOpacity
// //             hitSlop={{
// //               top: 10,
// //               bottom: 10,
// //               left: 10,
// //               right: 10,
// //             }}
// //           >
// //             <MaterialIcons
// //               name="tune"
// //               size={20}
// //               color="#4BC6DE"
// //             />
// //           </TouchableOpacity>
// //         </View>

// //         {/* Recommended Events */}
// //         <SectionHeader title="RECOMMENDED EVENTS" />

// //         <FlatList
// //           data={RECOMMENDED}
// //           renderItem={renderRecommended}
// //           keyExtractor={item => item.id}
// //           horizontal
// //           showsHorizontalScrollIndicator={false}
// //           contentContainerStyle={{ paddingHorizontal: SIDE }}
// //           ItemSeparatorComponent={() => (
// //             <View style={{ width: GAP }} />
// //           )}
// //         />

// //         {/* Upcoming Events */}
// //         <SectionHeader title="UPCOMING EVENTS" />

// //         {upcomingLoading ? (
// //           <ActivityIndicator
// //             size="large"
// //             color="#4BC6DE"
// //             style={{ marginVertical: 20 }}
// //           />
// //         ) : upcomingError ? (
// //           <Text
// //             style={{
// //               color: '#FF6B6B',
// //               textAlign: 'center',
// //               marginVertical: 15,
// //             }}
// //           >
// //             {upcomingError}
// //           </Text>
// //         ) : (
// //           <FlatList
// //             data={upcomingData}
// //             renderItem={renderUpcoming}
// //             keyExtractor={(item, index) => item.id || String(index)}
// //             numColumns={2}
// //             scrollEnabled={false}
// //             columnWrapperStyle={{
// //               justifyContent: 'space-between',
// //             }}
// //             contentContainerStyle={{
// //               paddingHorizontal: SIDE,
// //             }}
// //             ListEmptyComponent={() => (
// //               <Text
// //                 style={{
// //                   color: '#FFFFFF',
// //                   textAlign: 'center',
// //                   marginVertical: 15,
// //                 }}
// //               >
// //                 No upcoming events found
// //               </Text>
// //             )}
// //           />
// //         )}

// //         {/* Recent Events */}
// //         <SectionHeader title="RECENT EVENTS" />

// //         {recentLoading ? (
// //           <ActivityIndicator
// //             size="large"
// //             color="#4BC6DE"
// //             style={{ marginVertical: 20 }}
// //           />
// //         ) : recentError ? (
// //           <Text
// //             style={{
// //               color: '#FF6B6B',
// //               textAlign: 'center',
// //               marginVertical: 15,
// //             }}
// //           >
// //             {recentError}
// //           </Text>
// //         ) : (
// //           <FlatList
// //             data={recentData}
// //             renderItem={renderRecent}
// //             keyExtractor={(item, index) => item.id || String(index)}
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             contentContainerStyle={{
// //               paddingHorizontal: SIDE,
// //             }}
// //             ItemSeparatorComponent={() => (
// //               <View style={{ width: 12 }} />
// //             )}
// //             ListEmptyComponent={() => (
// //               <Text
// //                 style={{
// //                   color: '#FFFFFF',
// //                   marginVertical: 15,
// //                 }}
// //               >
// //                 No recent events found
// //               </Text>
// //             )}
// //           />
// //         )}

// //       </ScrollView>

// //       {/* Bottom Tab Bar */}
// //       <View style={local.tabBar}>
// //         {TABS.map(tab => {
// //           const active = activeTab === tab.key;

// //           return (
// //             <TouchableOpacity
// //               key={tab.key}
// //               style={local.tabItem}
// //               activeOpacity={0.8}
// //               onPress={() => {
// //                 setActiveTab(tab.key);

// //                 if (tab.screen && tab.key !== 'home') {
// //                   navigation.navigate(tab.screen);
// //                 }
// //               }}
// // //               onPress={() => {
// // //   setActiveTab(tab.key);
// // //   navigation.navigate(tab.screen);
// // // }}
// //             >
// //               <MaterialIcons
// //                 name={tab.icon}
// //                 size={22}
// //                 color={active ? '#4BC6DE' : '#9A9AA5'}
// //               />

// //               <Text
// //                 style={[
// //                   local.tabLabel,
// //                   active && local.tabLabelActive,
// //                 ]}
// //               >
// //                 {tab.label}
// //               </Text>
// //             </TouchableOpacity>
// //           );
// //         })}
// //       </View>

// //     </LinearGradient>
// //   );
// // };

// // export default FirstHomeScreen;


// // import React, {useState, useEffect, useRef} from 'react';

// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   Image,
// //   FlatList,
// //   ScrollView,
// //   StatusBar,
// //   ActivityIndicator,
// // } from 'react-native';

// // import LinearGradient from 'react-native-linear-gradient';
// // import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// // import {useSelector} from 'react-redux';

// // import local from './styles';

// // const SIDE = 20;
// // const GAP = 14;

// // const BASE_URL = 'https://xhcqhdxq-8006.inc1.devtunnels.ms';

// // // Recommended Events
// // const RECOMMENDED = [
// //   {
// //     id: 'r1',
// //     title: 'Chicago steppin',
// //     date: 'Thy, Sep 24 • 18.00 - 23.00 PM',
// //     place: 'Grand Park, New York',
// //     image: require('../../../assets/img5.png'),
// //   },
// //   {
// //     id: 'r2',
// //     title: 'Music Night',
// //     date: 'Fri, Sep 25 • 19.00 - 23.00 PM',
// //     place: 'Central Hall, New York',
// //     image: require('../../../assets/img13.png'),
// //   },
// // ];

// // // Bottom Tabs
// // const TABS = [
// //   {key: 'home', label: 'Home', icon: 'home', screen: 'FirstHomeScreen'},
// //   {key: 'events', label: 'Events', icon: 'event', screen: 'EventsScreen'},
// //   {
// //     key: 'sponsors',
// //     label: 'Sponsors',
// //     icon: 'people',
// //     screen: 'SponsorsScreen',
// //   },
// //   {
// //     key: 'invite',
// //     label: 'Invite Us',
// //     icon: 'person-add',
// //     screen: 'InviteUsScreen',
// //   },
// //   {
// //     key: 'profile',
// //     label: 'Profile',
// //     icon: 'person',
// //     screen: 'ProfileScreen',
// //   },
// // ];

// // // Section Header
// // const SectionHeader = ({title, onSeeAll}) => (
// //   <View style={local.sectionHeader}>
// //     <Text style={local.sectionTitle}>{title}</Text>

// //     <TouchableOpacity onPress={onSeeAll}>
// //       <Text style={local.seeAll}>See All</Text>
// //     </TouchableOpacity>
// //   </View>
// // );

// // const FirstHomeScreen = ({navigation}) => {
// //   const [search, setSearch] = useState('');
// //   const [activeTab, setActiveTab] = useState('home');

// //   // Redux Login Token
// //   const token = useSelector(state => state.auth.token);

// //   // API Data States
// //   const [upcomingEvents, setUpcomingEvents] = useState([]);
// //   const [recentEvents, setRecentEvents] = useState([]);

// //   // Loading States
// //   const [upcomingLoading, setUpcomingLoading] = useState(true);
// //   const [recentLoading, setRecentLoading] = useState(true);

// //   // Error States
// //   const [upcomingError, setUpcomingError] = useState('');
// //   const [recentError, setRecentError] = useState('');

// //   // Search States
// //   const [searchResults, setSearchResults] = useState([]);
// //   const [searchLoading, setSearchLoading] = useState(false);
// //   const [searchError, setSearchError] = useState('');

// //   // Prevent old search responses from replacing new results
// //   const searchRequestRef = useRef(0);

// //   // Fetch Recent Events
// //   useEffect(() => {
// //     const fetchRecentEvents = async () => {
// //       try {
// //         setRecentLoading(true);
// //         setRecentError('');

// //         if (!token) {
// //           throw new Error('Login token not found');
// //         }

// //         const response = await fetch(`${BASE_URL}/latestEvent`, {
// //           method: 'GET',
// //           headers: {
// //             Accept: 'application/json',
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });

// //         const data = await response.json();

// //         console.log('Recent API Status:', response.status);
// //         console.log('Recent API Response:', data);

// //         if (!response.ok) {
// //           throw new Error(
// //             data.message || `Server Error: ${response.status}`,
// //           );
// //         }

// //         if (data.success) {
// //           setRecentEvents(data.data || []);
// //         } else {
// //           setRecentEvents([]);
// //           throw new Error(data.message || 'Recent events not found');
// //         }
// //       } catch (error) {
// //         console.log('Recent API Error:', error.message);
// //         setRecentEvents([]);
// //         setRecentError('Unable to load recent events. Please try again.');
// //       } finally {
// //         setRecentLoading(false);
// //       }
// //     };

// //     fetchRecentEvents();
// //   }, [token]);

// //   // Fetch Upcoming Events
// //   useEffect(() => {
// //     const fetchUpcomingEvents = async () => {
// //       try {
// //         setUpcomingLoading(true);
// //         setUpcomingError('');

// //         if (!token) {
// //           throw new Error('Login token not found');
// //         }

// //         const response = await fetch(`${BASE_URL}/upcomimEvent`, {
// //           method: 'GET',
// //           headers: {
// //             Accept: 'application/json',
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });

// //         const data = await response.json();

// //         console.log('Upcoming API Status:', response.status);
// //         console.log('Upcoming API Response:', data);

// //         if (!response.ok) {
// //           throw new Error(
// //             data.message || `Server Error: ${response.status}`,
// //           );
// //         }

// //         if (data.success) {
// //           setUpcomingEvents(data.data || []);
// //         } else {
// //           setUpcomingEvents([]);
// //           throw new Error(data.message || 'Upcoming events not found');
// //         }
// //       } catch (error) {
// //         console.log('Upcoming API Error:', error.message);
// //         setUpcomingEvents([]);
// //         setUpcomingError('Unable to load upcoming events. Please try again.');
// //       } finally {
// //         setUpcomingLoading(false);
// //       }
// //     };

// //     fetchUpcomingEvents();
// //   }, [token]);

// //   // Search API with 500ms Debounce
// //   useEffect(() => {
// //     const searchText = search.trim();

// //     // Search only when at least 3 characters are entered
// //     if (searchText.length < 3) {
// //       searchRequestRef.current += 1;
// //       setSearchResults([]);
// //       setSearchLoading(false);
// //       setSearchError('');
// //       return;
// //     }

// //     const requestId = ++searchRequestRef.current;

// //     const timer = setTimeout(async () => {
// //       try {
// //         setSearchLoading(true);
// //         setSearchError('');

// //         if (!token) {
// //           throw new Error('Login token not found');
// //         }

// //         const response = await fetch(`${BASE_URL}/search`, {
// //           method: 'POST',
// //           headers: {
// //             Accept: 'application/json',
// //             'Content-Type': 'application/json',
// //             Authorization: `Bearer ${token}`,
// //           },
// //           body: JSON.stringify({
// //             Title: searchText,
// //           }),
// //         });

// //         const data = await response.json();

// //         console.log('Search API Status:', response.status);
// //         console.log('Search API Response:', data);

// //         if (!response.ok) {
// //           throw new Error(data.message || 'Search request failed');
// //         }

// //         // Ignore old search responses
// //         if (requestId !== searchRequestRef.current) {
// //           return;
// //         }

// //         if (data.success) {
// //           setSearchResults(data.events || []);
// //         } else {
// //           setSearchResults([]);
// //           setSearchError(data.message || 'No events found.');
// //         }
// //       } catch (error) {
// //         if (requestId === searchRequestRef.current) {
// //           console.log('Search API Error:', error.message);
// //           setSearchResults([]);
// //           setSearchError('Unable to search events. Please try again.');
// //         }
// //       } finally {
// //         if (requestId === searchRequestRef.current) {
// //           setSearchLoading(false);
// //         }
// //       }
// //     }, 500);

// //     return () => {
// //       clearTimeout(timer);
// //       searchRequestRef.current += 1;
// //     };
// //   }, [search, token]);

// //   // Convert API Data into Card Format
// //   const formatEvent = item => {
// //     const imagePath = item.images?.[0];

// //     let imageSource = require('../../../assets/img6.png');

// //     if (imagePath) {
// //       if (imagePath.startsWith('http')) {
// //         imageSource = {uri: imagePath};
// //       } else {
// //         const imageName = imagePath.split(/[\\/]/).pop();

// //         imageSource = {
// //           uri: `${BASE_URL}/uploads/events/${encodeURIComponent(imageName)}`,
// //         };
// //       }
// //     }

// //     const formattedDate = item.date
// //       ? new Date(item.date).toLocaleDateString('en-US', {
// //           weekday: 'short',
// //           month: 'short',
// //           day: 'numeric',
// //         })
// //       : '';

// //     return {
// //       ...item,
// //       id: item._id,
// //       title: item.Title || item.title || item.name || 'Event',
// //       date: [formattedDate, item.time].filter(Boolean).join(' • '),
// //       place: item.address || item.place || '',
// //       image: imageSource,
// //     };
// //   };

// //   // Event Details Navigation
// //   const handleEventPress = item => {
// //     navigation.navigate('EventDetailsScreen', {
// //       event: item,
// //     });
// //   };

// //   // Recommended Events
// //   const renderRecommended = ({item}) => (
// //     <TouchableOpacity activeOpacity={0.9} style={local.bigCard}>
// //       <Image source={item.image} style={local.bigImage} />

// //       <Text style={local.bigTitle}>{item.title}</Text>

// //       <Text style={local.bigDate}>{item.date}</Text>

// //       <View style={local.row}>
// //         <MaterialIcons name="location-on" size={16} color="#4BC6DE" />

// //         <Text style={local.bigPlace}>{item.place}</Text>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   // Upcoming Event Card
// //   const renderUpcoming = ({item}) => (
// //     <TouchableOpacity
// //       activeOpacity={0.9}
// //       style={local.gridCard}
// //       onPress={() => handleEventPress(item)}>
// //       <Image source={item.image} style={local.gridImage} />

// //       <Text style={local.gridTitle} numberOfLines={1}>
// //         {item.title}
// //       </Text>

// //       <Text style={local.gridDate} numberOfLines={1}>
// //         {item.date}
// //       </Text>

// //       <View style={local.row}>
// //         <MaterialIcons name="location-on" size={12} color="#4BC6DE" />

// //         <Text style={local.gridPlace} numberOfLines={1}>
// //           {item.place}
// //         </Text>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   // Recent Event Card
// //   const renderRecent = ({item}) => (
// //     <TouchableOpacity
// //       activeOpacity={0.9}
// //       style={local.recentCard}
// //       onPress={() => handleEventPress(item)}>
// //       <Image source={item.image} style={local.recentImage} />

// //       <Text style={local.recentTitle} numberOfLines={1}>
// //         {item.title}
// //       </Text>

// //       <View style={local.row}>
// //         <MaterialIcons name="location-on" size={10} color="#4BC6DE" />

// //         <Text style={local.recentPlace} numberOfLines={1}>
// //           {item.place}
// //         </Text>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   // Format API Events
// //   const upcomingData = upcomingEvents.map(formatEvent);
// //   const recentData = recentEvents.map(formatEvent);
// //   const searchData = searchResults.map(formatEvent);

// //   // Check Search Length
// //   const isSearching = search.trim().length >= 3;

// //   return (
// //     <LinearGradient
// //       colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
// //       locations={[0, 0.25, 0.5, 0.7, 1]}
// //       start={{x: 0, y: 0}}
// //       end={{x: 1, y: 1}}
// //       style={local.container}>
// //       <StatusBar hidden />

// //       <ScrollView
// //         contentContainerStyle={local.scrollContent}
// //         showsVerticalScrollIndicator={false}
// //         keyboardShouldPersistTaps="handled">

// //         {/* Header */}
// //         <View style={local.header}>
// //           <View style={local.userRow}>
// //             <View style={local.avatar}>
// //               <Image
// //                 source={require('../../../assets/img4.png')}
// //                 style={local.avatarImage}
// //               />
// //             </View>

// //             <Text style={local.userName}>ANDREW AINSLEY</Text>
// //           </View>

// //           <TouchableOpacity style={local.bellBox} activeOpacity={0.8}>
// //             <MaterialIcons
// //               name="notifications-none"
// //               size={20}
// //               color="#FFFFFF"
// //             />
// //           </TouchableOpacity>
// //         </View>

// //         {/* Search */}
// //         <View style={local.searchBox}>
// //           <MaterialIcons name="search" size={20} color="#4BC6DE" />

// //           <TextInput
// //             style={local.searchInput}
// //             placeholder="What event are you looking for..."
// //             placeholderTextColor="#E5E5EA"
// //             value={search}
// //             onChangeText={setSearch}
// //           />

// //           <TouchableOpacity
// //             hitSlop={{
// //               top: 10,
// //               bottom: 10,
// //               left: 10,
// //               right: 10,
// //             }}
// //             onPress={() => setSearch('')}>
// //             <MaterialIcons
// //               name={search.length > 0 ? 'close' : 'tune'}
// //               size={20}
// //               color="#4BC6DE"
// //             />
// //           </TouchableOpacity>
// //         </View>

// //         {/* Recommended Events */}
// //         <SectionHeader title="RECOMMENDED EVENTS" />

// //         <FlatList
// //           data={RECOMMENDED}
// //           renderItem={renderRecommended}
// //           keyExtractor={item => item.id}
// //           horizontal
// //           showsHorizontalScrollIndicator={false}
// //           contentContainerStyle={{paddingHorizontal: SIDE}}
// //           ItemSeparatorComponent={() => <View style={{width: GAP}} />}
// //         />

// //         {/* Combined Events Section */}
// //         <SectionHeader title="EVENTS" />

// //         {isSearching ? (
// //           // Search Results
// //           searchLoading ? (
// //             <ActivityIndicator
// //               size="large"
// //               color="#4BC6DE"
// //               style={{marginVertical: 20}}
// //             />
// //           ) : searchError ? (
// //             <Text
// //               style={{
// //                 color: '#FF6B6B',
// //                 textAlign: 'center',
// //                 marginVertical: 15,
// //               }}>
// //               {searchError}
// //             </Text>
// //           ) : (
// //             <FlatList
// //               data={searchData}
// //               renderItem={renderUpcoming}
// //               keyExtractor={(item, index) => item.id || String(index)}
// //               numColumns={2}
// //               scrollEnabled={false}
// //               columnWrapperStyle={{
// //                 justifyContent: 'space-between',
// //               }}
// //               contentContainerStyle={{
// //                 paddingHorizontal: SIDE,
// //               }}
// //               ListEmptyComponent={() => (
// //                 <Text
// //                   style={{
// //                     color: '#FFFFFF',
// //                     textAlign: 'center',
// //                     marginVertical: 15,
// //                   }}>
// //                   No matching events found
// //                 </Text>
// //               )}
// //             />
// //           )
// //         ) : (
// //           // Default Upcoming and Recent Events
// //           <>
// //             {/* Upcoming Events */}
// //             {upcomingLoading ? (
// //               <ActivityIndicator
// //                 size="large"
// //                 color="#4BC6DE"
// //                 style={{marginVertical: 20}}
// //               />
// //             ) : upcomingError ? (
// //               <Text
// //                 style={{
// //                   color: '#FF6B6B',
// //                   textAlign: 'center',
// //                   marginVertical: 15,
// //                 }}>
// //                 {upcomingError}
// //               </Text>
// //             ) : (
// //               <FlatList
// //                 data={upcomingData}
// //                 renderItem={renderUpcoming}
// //                 keyExtractor={(item, index) => item.id || String(index)}
// //                 numColumns={2}
// //                 scrollEnabled={false}
// //                 columnWrapperStyle={{
// //                   justifyContent: 'space-between',
// //                 }}
// //                 contentContainerStyle={{
// //                   paddingHorizontal: SIDE,
// //                 }}
// //                 ListEmptyComponent={() => (
// //                   <Text
// //                     style={{
// //                       color: '#FFFFFF',
// //                       textAlign: 'center',
// //                       marginVertical: 15,
// //                     }}>
// //                     No upcoming events found
// //                   </Text>
// //                 )}
// //               />
// //             )}

// //             {/* Recent Events */}
// //             {recentLoading ? (
// //               <ActivityIndicator
// //                 size="large"
// //                 color="#4BC6DE"
// //                 style={{marginVertical: 20}}
// //               />
// //             ) : recentError ? (
// //               <Text
// //                 style={{
// //                   color: '#FF6B6B',
// //                   textAlign: 'center',
// //                   marginVertical: 15,
// //                 }}>
// //                 {recentError}
// //               </Text>
// //             ) : (
// //               <FlatList
// //                 data={recentData}
// //                 renderItem={renderRecent}
// //                 keyExtractor={(item, index) => item.id || String(index)}
// //                 horizontal
// //                 showsHorizontalScrollIndicator={false}
// //                 contentContainerStyle={{
// //                   paddingHorizontal: SIDE,
// //                 }}
// //                 ItemSeparatorComponent={() => <View style={{width: 12}} />}
// //                 ListEmptyComponent={() => (
// //                   <Text
// //                     style={{
// //                       color: '#FFFFFF',
// //                       marginVertical: 15,
// //                     }}>
// //                     No recent events found
// //                   </Text>
// //                 )}
// //               />
// //             )}
// //           </>
// //         )}
// //       </ScrollView>

// //       {/* Bottom Tab Bar */}
// //       <View style={local.tabBar}>
// //         {TABS.map(tab => {
// //           const active = activeTab === tab.key;

// //           return (
// //             <TouchableOpacity
// //               key={tab.key}
// //               style={local.tabItem}
// //               activeOpacity={0.8}
// //               onPress={() => {
// //                 setActiveTab(tab.key);

// //                 if (tab.screen && tab.key !== 'home') {
// //                   navigation.navigate(tab.screen);
// //                 }
// //               }}>
// //               <MaterialIcons
// //                 name={tab.icon}
// //                 size={22}
// //                 color={active ? '#4BC6DE' : '#9A9AA5'}
// //               />

// //               <Text style={[local.tabLabel, active && local.tabLabelActive]}>
// //                 {tab.label}
// //               </Text>
// //             </TouchableOpacity>
// //           );
// //         })}
// //       </View>
// //     </LinearGradient>
// //   );
// // };

// // export default FirstHomeScreen;





// import React, {useState, useEffect, useRef} from 'react';

// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   FlatList,
//   ScrollView,
//   StatusBar,
//   Dimensions,
//   ActivityIndicator,
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {useSelector} from 'react-redux';

// import local from './styles';

// const {width} = Dimensions.get('window');
// const SIDE = 20;
// const GAP = 14;

// const BASE_URL = 'https://xhcqhdxq-8006.inc1.devtunnels.ms';

// // Recommended Events (Static Data)
// const RECOMMENDED = [
//   {
//     id: 'r1',
//     title: 'Chicago steppin',
//     date: 'Thy, Sep 24 • 18.00 - 23.00 PM',
//     place: 'Grand Park, New York',
//     image: require('../../../assets/img5.png'),
//   },
//   {
//     id: 'r2',
//     title: 'Music Night',
//     date: 'Fri, Sep 25 • 19.00 - 23.00 PM',
//     place: 'Central Hall, New York',
//     image: require('../../../assets/img13.png'),
//   },
// ];

// // Bottom Tabs
// const TABS = [
//   {key: 'home', label: 'Home', icon: 'home', screen: 'FirstHomeScreen'},
//   {key: 'events', label: 'Events', icon: 'event', screen: 'EventsScreen'},
//   {key: 'sponsors', label: 'Sponsors', icon: 'people', screen: 'SponsorsScreen'},
//   {key: 'invite', label: 'Invite Us', icon: 'person-add', screen: 'InviteUsScreen'},
//   {key: 'profile', label: 'Profile', icon: 'person', screen: 'ProfileScreen'},
// ];

// // Section Header
// const SectionHeader = ({title, onSeeAll}) => (
//   <View style={local.sectionHeader}>
//     <Text style={local.sectionTitle}>{title}</Text>

//     <TouchableOpacity onPress={onSeeAll}>
//       <Text style={local.seeAll}>See All</Text>
//     </TouchableOpacity>
//   </View>
// );

// const FirstHomeScreen = ({navigation}) => {
//   const [search, setSearch] = useState('');
//   const [activeTab, setActiveTab] = useState('home');

//   // Get Login Token From Redux
//   const token = useSelector(state => state.auth.token);

//   // API Data States
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [recentEvents, setRecentEvents] = useState([]);

//   // Loading States
//   const [upcomingLoading, setUpcomingLoading] = useState(true);
//   const [recentLoading, setRecentLoading] = useState(true);

//   // Error States
//   const [upcomingError, setUpcomingError] = useState('');
//   const [recentError, setRecentError] = useState('');

//   // Search States
//   const [searchResults, setSearchResults] = useState([]);
//   const [searchLoading, setSearchLoading] = useState(false);
//   const [searchError, setSearchError] = useState('');

//   // Prevent old search responses from replacing new results
//   const searchRequestRef = useRef(0);

//   // Fetch Recent Events API
//   useEffect(() => {
//     const fetchRecentEvents = async () => {
//       try {
//         setRecentLoading(true);
//         setRecentError('');

//         if (!token) {
//           throw new Error('Login token not found');
//         }

//         const response = await fetch(`${BASE_URL}/latestEvent`, {
//           method: 'GET',
//           headers: {
//             Accept: 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const data = await response.json();

//         console.log('Recent API Status:', response.status);
//         console.log('Recent API Response:', data);

//         if (!response.ok) {
//           throw new Error(
//             data.message || `Server Error: ${response.status}`,
//           );
//         }

//         if (data.success) {
//           setRecentEvents(data.data || []);
//         } else {
//           setRecentEvents([]);
//           throw new Error(data.message || 'Recent events not found');
//         }
//       } catch (error) {
//         console.log('Recent API Error:', error.message);
//         setRecentEvents([]);
//         setRecentError(
//           'Unable to load recent events. Please try again.',
//         );
//       } finally {
//         setRecentLoading(false);
//       }
//     };

//     fetchRecentEvents();
//   }, [token]);

//   // Fetch Upcoming Events API
//   useEffect(() => {
//     const fetchUpcomingEvents = async () => {
//       try {
//         setUpcomingLoading(true);
//         setUpcomingError('');

//         if (!token) {
//           throw new Error('Login token not found');
//         }

//         const response = await fetch(`${BASE_URL}/upcomimEvent`, {
//           method: 'GET',
//           headers: {
//             Accept: 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const data = await response.json();

//         console.log('Upcoming API Status:', response.status);
//         console.log('Upcoming API Response:', data);

//         if (!response.ok) {
//           throw new Error(
//             data.message || `Server Error: ${response.status}`,
//           );
//         }

//         if (data.success) {
//           setUpcomingEvents(data.data || []);
//         } else {
//           setUpcomingEvents([]);
//           throw new Error(data.message || 'Upcoming events not found');
//         }
//       } catch (error) {
//         console.log('Upcoming API Error:', error.message);
//         setUpcomingEvents([]);
//         setUpcomingError(
//           'Unable to load upcoming events. Please try again.',
//         );
//       } finally {
//         setUpcomingLoading(false);
//       }
//     };

//     fetchUpcomingEvents();
//   }, [token]);

//   // Search API with 500ms Debounce
//   useEffect(() => {
//     const searchText = search.trim();

//     if (searchText.length < 3) {
//       searchRequestRef.current += 1;
//       setSearchResults([]);
//       setSearchLoading(false);
//       setSearchError('');
//       return;
//     }

//     const requestId = ++searchRequestRef.current;

//     const timer = setTimeout(async () => {
//       try {
//         setSearchLoading(true);
//         setSearchError('');

//         if (!token) {
//           throw new Error('Login token not found');
//         }

//         const response = await fetch(`${BASE_URL}/search`, {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({
//             Title: searchText,
//           }),
//         });

//         const data = await response.json();

//         console.log('Search API Status:', response.status);
//         console.log('Search API Response:', data);

//         if (!response.ok) {
//           throw new Error(data.message || 'Search request failed');
//         }

//         // Ignore old search responses
//         if (requestId !== searchRequestRef.current) {
//           return;
//         }

//         if (data.success) {
//           setSearchResults(data.events || []);
//         } else {
//           setSearchResults([]);
//           setSearchError(data.message || 'No events found.');
//         }
//       } catch (error) {
//         if (requestId === searchRequestRef.current) {
//           console.log('Search API Error:', error.message);
//           setSearchResults([]);
//           setSearchError('Unable to search events. Please try again.');
//         }
//       } finally {
//         if (requestId === searchRequestRef.current) {
//           setSearchLoading(false);
//         }
//       }
//     }, 500);

//     return () => {
//       clearTimeout(timer);
//       searchRequestRef.current += 1;
//     };
//   }, [search, token]);

//   // Convert API Data into Card Format
//   const formatEvent = item => {
//     const imagePath = item.images?.[0];

//     let imageSource = require('../../../assets/img6.png');

//     if (imagePath) {
//       if (imagePath.startsWith('http')) {
//         imageSource = {uri: imagePath};
//       } else {
//         const imageName = imagePath.split(/[\\/]/).pop();

//         imageSource = {
//           uri: `${BASE_URL}/uploads/events/${encodeURIComponent(imageName)}`,
//         };
//       }
//     }

//     const formattedDate = item.date
//       ? new Date(item.date).toLocaleDateString('en-US', {
//           weekday: 'short',
//           month: 'short',
//           day: 'numeric',
//         })
//       : '';

//     return {
//       ...item,
//       id: item._id,
//       title: item.Title || item.title || item.name || 'Event',
//       date: [formattedDate, item.time].filter(Boolean).join(' • '),
//       place: item.address || item.place || '',
//       image: imageSource,
//     };
//   };

//   // Event Details Navigation
//   const handleEventPress = item => {
//     navigation.navigate('EventDetailsScreen', {
//       event: item,
//     });
//   };

//   // Recommended Events (No Navigation)
//   const renderRecommended = ({item}) => (
//     <TouchableOpacity
//       activeOpacity={0.9}
//       style={local.bigCard}>
//       <Image source={item.image} style={local.bigImage} />

//       <Text style={local.bigTitle}>
//         {item.title}
//       </Text>

//       <Text style={local.bigDate}>
//         {item.date}
//       </Text>

//       <View style={local.row}>
//         <MaterialIcons
//           name="location-on"
//           size={16}
//           color="#4BC6DE"
//         />

//         <Text style={local.bigPlace}>
//           {item.place}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );

//   // Upcoming Events
//   const renderUpcoming = ({item}) => (
//     <TouchableOpacity
//       activeOpacity={0.9}
//       style={local.gridCard}
//       onPress={() => handleEventPress(item)}>
//       <Image
//         source={item.image}
//         style={local.gridImage}
//       />

//       <Text style={local.gridTitle} numberOfLines={1}>
//         {item.title}
//       </Text>

//       <Text style={local.gridDate} numberOfLines={1}>
//         {item.date}
//       </Text>

//       <View style={local.row}>
//         <MaterialIcons
//           name="location-on"
//           size={12}
//           color="#4BC6DE"
//         />

//         <Text style={local.gridPlace} numberOfLines={1}>
//           {item.place}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );

//   // Recent Events
//   const renderRecent = ({item}) => (
//     <TouchableOpacity
//       activeOpacity={0.9}
//       style={local.recentCard}
//       onPress={() => handleEventPress(item)}>
//       <Image
//         source={item.image}
//         style={local.recentImage}
//       />

//       <Text style={local.recentTitle} numberOfLines={1}>
//         {item.title}
//       </Text>

//       <View style={local.row}>
//         <MaterialIcons
//           name="location-on"
//           size={10}
//           color="#4BC6DE"
//         />

//         <Text style={local.recentPlace} numberOfLines={1}>
//           {item.place}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );

//   // Format API Events
//   const upcomingData = upcomingEvents.map(formatEvent);
//   const recentData = recentEvents.map(formatEvent);
//   const searchData = searchResults.map(formatEvent);

//   // Check Search Length
//   const isSearching = search.trim().length >= 3;

//   return (
//     <LinearGradient
//       colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
//       locations={[0, 0.25, 0.5, 0.7, 1]}
//       start={{x: 0, y: 0}}
//       end={{x: 1, y: 1}}
//       style={local.container}>
//       <StatusBar hidden />

//       <ScrollView
//         contentContainerStyle={local.scrollContent}
//         showsVerticalScrollIndicator={false}
//         keyboardShouldPersistTaps="handled">

//         {/* Header */}
//         <View style={local.header}>
//           <View style={local.userRow}>
//             <View style={local.avatar}>
//               <Image
//                 source={require('../../../assets/img4.png')}
//                 style={local.avatarImage}
//               />
//             </View>

//             <Text style={local.userName}>
//               ANDREW AINSLEY
//             </Text>
//           </View>

//           <TouchableOpacity
//             style={local.bellBox}
//             activeOpacity={0.8}>
//             <MaterialIcons
//               name="notifications-none"
//               size={20}
//               color="#FFFFFF"
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Search */}
//         <View style={local.searchBox}>
//           <MaterialIcons
//             name="search"
//             size={20}
//             color="#4BC6DE"
//           />

//           <TextInput
//             style={local.searchInput}
//             placeholder="What event are you looking for..."
//             placeholderTextColor="#E5E5EA"
//             value={search}
//             onChangeText={setSearch}
//           />

//           <TouchableOpacity
//             hitSlop={{
//               top: 10,
//               bottom: 10,
//               left: 10,
//               right: 10,
//             }}>
//             <MaterialIcons
//               name="tune"
//               size={20}
//               color="#4BC6DE"
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Recommended Events */}
//         <SectionHeader title="RECOMMENDED EVENTS" />

//         <FlatList
//           data={RECOMMENDED}
//           renderItem={renderRecommended}
//           keyExtractor={item => item.id}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={{paddingHorizontal: SIDE}}
//           ItemSeparatorComponent={() => (
//             <View style={{width: GAP}} />
//           )}
//         />

//         {/* Upcoming Events / Search Results */}
//         <SectionHeader
//           title={isSearching ? 'SEARCH RESULTS' : 'UPCOMING EVENTS'}
//         />

//         {isSearching ? (
//           searchLoading ? (
//             <ActivityIndicator
//               size="large"
//               color="#4BC6DE"
//               style={{marginVertical: 20}}
//             />
//           ) : searchError ? (
//             <Text
//               style={{
//                 color: '#FF6B6B',
//                 textAlign: 'center',
//                 marginVertical: 15,
//               }}>
//               {searchError}
//             </Text>
//           ) : (
//             <FlatList
//               data={searchData}
//               renderItem={renderUpcoming}
//               keyExtractor={(item, index) => item.id || String(index)}
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={{paddingHorizontal: SIDE}}
//               ItemSeparatorComponent={() => (
//                 <View style={{width: GAP}} />
//               )}
//               ListEmptyComponent={() => (
//                 <Text
//                   style={{
//                     color: '#FFFFFF',
//                     textAlign: 'center',
//                     marginVertical: 15,
//                   }}>
//                   No matching events found
//                 </Text>
//               )}
//             />
//           )
//         ) : upcomingLoading ? (
//           <ActivityIndicator
//             size="large"
//             color="#4BC6DE"
//             style={{marginVertical: 20}}
//           />
//         ) : upcomingError ? (
//           <Text
//             style={{
//               color: '#FF6B6B',
//               textAlign: 'center',
//               marginVertical: 15,
//             }}>
//             {upcomingError}
//           </Text>
//         ) : (
//           <FlatList
//             data={upcomingData}
//             renderItem={renderUpcoming}
//             keyExtractor={(item, index) => item.id || String(index)}
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={{paddingHorizontal: SIDE}}
//             ItemSeparatorComponent={() => (
//               <View style={{width: GAP}} />
//             )}
//             ListEmptyComponent={() => (
//               <Text
//                 style={{
//                   color: '#FFFFFF',
//                   textAlign: 'center',
//                   marginVertical: 15,
//                 }}>
//                 No upcoming events found
//               </Text>
//             )}
//           />
//         )}

//         {/* Recent Events */}
//         <SectionHeader title="RECENT EVENTS" />

//         {recentLoading ? (
//           <ActivityIndicator
//             size="large"
//             color="#4BC6DE"
//             style={{marginVertical: 20}}
//           />
//         ) : recentError ? (
//           <Text
//             style={{
//               color: '#FF6B6B',
//               textAlign: 'center',
//               marginVertical: 15,
//             }}>
//             {recentError}
//           </Text>
//         ) : (
//           <FlatList
//             data={recentData}
//             renderItem={renderRecent}
//             keyExtractor={(item, index) => item.id || String(index)}
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={{
//               paddingHorizontal: SIDE,
//             }}
//             ItemSeparatorComponent={() => (
//               <View style={{width: 12}} />
//             )}
//             ListEmptyComponent={() => (
//               <Text
//                 style={{
//                   color: '#FFFFFF',
//                   marginVertical: 15,
//                 }}>
//                 No recent events found
//               </Text>
//             )}
//           />
//         )}

//       </ScrollView>

//       {/* Bottom Tab Bar */}
//       <View style={local.tabBar}>
//         {TABS.map(tab => {
//           const active = activeTab === tab.key;

//           return (
//             <TouchableOpacity
//               key={tab.key}
//               style={local.tabItem}
//               activeOpacity={0.8}
//               onPress={() => {
//                 setActiveTab(tab.key);

//                 if (tab.screen && tab.key !== 'home') {
//                   navigation.navigate(tab.screen);
//                 }
//               }}>
//               <MaterialIcons
//                 name={tab.icon}
//                 size={22}
//                 color={active ? '#4BC6DE' : '#9A9AA5'}
//               />

//               <Text
//                 style={[
//                   local.tabLabel,
//                   active && local.tabLabelActive,
//                 ]}>
//                 {tab.label}
//               </Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>

//     </LinearGradient>
//   );
// };

// export default FirstHomeScreen;




// import React, {useState, useEffect, useRef} from 'react';

// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   FlatList,
//   ScrollView,
//   StatusBar,
//   ActivityIndicator,
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {useSelector} from 'react-redux';

// import local from './styles';

// const SIDE = 20;
// const GAP = 14;

// const BASE_URL = 'https://xhcqhdxq-8006.inc1.devtunnels.ms';

// // Recommended Events
// const RECOMMENDED = [
//   {
//     id: 'r1',
//     title: 'Chicago steppin',
//     date: 'Thy, Sep 24 • 18.00 - 23.00 PM',
//     place: 'Grand Park, New York',
//     image: require('../../../assets/img5.png'),
//   },
//   {
//     id: 'r2',
//     title: 'Music Night',
//     date: 'Fri, Sep 25 • 19.00 - 23.00 PM',
//     place: 'Central Hall, New York',
//     image: require('../../../assets/img13.png'),
//   },
// ];

// // Bottom Tabs
// const TABS = [
//   {key: 'home', label: 'Home', icon: 'home', screen: 'FirstHomeScreen'},
//   {key: 'events', label: 'Events', icon: 'event', screen: 'EventsScreen'},
//   {key: 'sponsors', label: 'Sponsors', icon: 'people', screen: 'SponsorsScreen'},
//   {key: 'invite', label: 'Invite Us', icon: 'person-add', screen: 'InviteUsScreen'},
//   {key: 'profile', label: 'Profile', icon: 'person', screen: 'ProfileScreen'},
// ];

// // Section Header
// const SectionHeader = ({title, onSeeAll}) => (
//   <View style={local.sectionHeader}>
//     <Text style={local.sectionTitle}>{title}</Text>

//     {onSeeAll ? (
//       <TouchableOpacity onPress={onSeeAll}>
//         <Text style={local.seeAll}>See All</Text>
//       </TouchableOpacity>
//     ) : null}
//   </View>
// );

// const FirstHomeScreen = ({navigation}) => {
//   const [search, setSearch] = useState('');
//   const [activeTab, setActiveTab] = useState('home');

//   // Redux Token
//   const token = useSelector(state => state.auth.token);

//   // API Data
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [recentEvents, setRecentEvents] = useState([]);

//   // Loading States
//   const [upcomingLoading, setUpcomingLoading] = useState(true);
//   const [recentLoading, setRecentLoading] = useState(true);

//   // Error States
//   const [upcomingError, setUpcomingError] = useState('');
//   const [recentError, setRecentError] = useState('');

//   // Search States
//   const [searchResults, setSearchResults] = useState([]);
//   const [searchLoading, setSearchLoading] = useState(false);
//   const [searchError, setSearchError] = useState('');

//   // Search Request Reference
//   const searchRequestRef = useRef(0);

//   // Fetch Recent Events
//   useEffect(() => {
//     const fetchRecentEvents = async () => {
//       try {
//         setRecentLoading(true);
//         setRecentError('');

//         if (!token) {
//           throw new Error('Login token not found');
//         }

//         const response = await fetch(`${BASE_URL}/latestEvent`, {
//           method: 'GET',
//           headers: {
//             Accept: 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const data = await response.json();

//         console.log('Recent API Status:', response.status);
//         console.log('Recent API Response:', data);

//         if (!response.ok) {
//           throw new Error(
//             data.message || `Server Error: ${response.status}`,
//           );
//         }

//         if (data.success) {
//           setRecentEvents(Array.isArray(data.data) ? data.data : []);
//         } else {
//           throw new Error(data.message || 'Recent events not found');
//         }
//       } catch (error) {
//         console.log('Recent API Error:', error.message);
//         setRecentEvents([]);
//         setRecentError('Unable to load recent events.');
//       } finally {
//         setRecentLoading(false);
//       }
//     };

//     fetchRecentEvents();
//   }, [token]);

//   // Fetch Upcoming Events
//   useEffect(() => {
//     const fetchUpcomingEvents = async () => {
//       try {
//         setUpcomingLoading(true);
//         setUpcomingError('');

//         if (!token) {
//           throw new Error('Login token not found');
//         }

//         const response = await fetch(`${BASE_URL}/upcomimEvent`, {
//           method: 'GET',
//           headers: {
//             Accept: 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const data = await response.json();

//         console.log('Upcoming API Status:', response.status);
//         console.log('Upcoming API Response:', data);

//         if (!response.ok) {
//           throw new Error(
//             data.message || `Server Error: ${response.status}`,
//           );
//         }

//         if (data.success) {
//           setUpcomingEvents(Array.isArray(data.data) ? data.data : []);
//         } else {
//           throw new Error(data.message || 'Upcoming events not found');
//         }
//       } catch (error) {
//         console.log('Upcoming API Error:', error.message);
//         setUpcomingEvents([]);
//         setUpcomingError('Unable to load upcoming events.');
//       } finally {
//         setUpcomingLoading(false);
//       }
//     };

//     fetchUpcomingEvents();
//   }, [token]);

//   // Search API with 500ms Debounce
//   useEffect(() => {
//     const searchText = search.trim();

//     if (searchText.length < 3) {
//       searchRequestRef.current += 1;
//       setSearchResults([]);
//       setSearchLoading(false);
//       setSearchError('');
//       return;
//     }

//     const requestId = ++searchRequestRef.current;

//     const timer = setTimeout(async () => {
//       try {
//         setSearchLoading(true);
//         setSearchError('');

//         if (!token) {
//           throw new Error('Login token not found');
//         }

//         const response = await fetch(`${BASE_URL}/search`, {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({
//             Title: searchText,
//           }),
//         });

//         const data = await response.json();

//         console.log('Search API Status:', response.status);
//         console.log('Search API Response:', data);

//         if (!response.ok) {
//           throw new Error(data.message || 'Search request failed');
//         }

//         if (requestId !== searchRequestRef.current) {
//           return;
//         }

//         if (data.success) {
//           setSearchResults(
//             Array.isArray(data.events) ? data.events : [],
//           );
//         } else {
//           setSearchResults([]);
//           setSearchError(data.message || 'No events found.');
//         }
//       } catch (error) {
//         if (requestId === searchRequestRef.current) {
//           console.log('Search API Error:', error.message);
//           setSearchResults([]);
//           setSearchError('Unable to search events. Please try again.');
//         }
//       } finally {
//         if (requestId === searchRequestRef.current) {
//           setSearchLoading(false);
//         }
//       }
//     }, 500);

//     return () => {
//       clearTimeout(timer);
//       searchRequestRef.current += 1;
//     };
//   }, [search, token]);

//   // Format Event Data
//   const formatEvent = item => {
//     const imagePath = item.images?.[0];

//     let imageSource = require('../../../assets/img6.png');

//     if (imagePath) {
//       if (imagePath.startsWith('http')) {
//         imageSource = {uri: imagePath};
//       } else if (imagePath.startsWith('/uploads/events/')) {
//         imageSource = {
//           uri: `${BASE_URL}${imagePath}`,
//         };
//       } else {
//         const imageName = imagePath.split(/[\\/]/).pop();

//         imageSource = {
//           uri: `${BASE_URL}/uploads/events/${encodeURIComponent(imageName)}`,
//         };
//       }
//     }

//     const formattedDate = item.date
//       ? new Date(item.date).toLocaleDateString('en-US', {
//           weekday: 'short',
//           month: 'short',
//           day: 'numeric',
//         })
//       : '';

//     return {
//       ...item,
//       id: item._id || item.id,
//       title: item.Title || item.title || item.name || 'Event',
//       date: [formattedDate, item.time].filter(Boolean).join(' • '),
//       place: item.address || item.place || '',
//       image: imageSource,
//     };
//   };

//   // Event Details Navigation
//   const handleEventPress = item => {
//     navigation.navigate('EventDetailsScreen', {
//       event: item,
//     });
//   };

//   // Recommended Events
//   const renderRecommended = ({item}) => (
//     <TouchableOpacity
//       activeOpacity={0.9}
//       style={local.bigCard}>
//       <Image source={item.image} style={local.bigImage} />

//       <Text style={local.bigTitle}>
//         {item.title}
//       </Text>

//       <Text style={local.bigDate}>
//         {item.date}
//       </Text>

//       <View style={local.row}>
//         <MaterialIcons
//           name="location-on"
//           size={16}
//           color="#4BC6DE"
//         />

//         <Text style={local.bigPlace}>
//           {item.place}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );

//   // All Events Card
//   const renderUpcoming = ({item}) => (
//     <TouchableOpacity
//       activeOpacity={0.9}
//       style={local.gridCard}
//       onPress={() => handleEventPress(item)}>

//       <Image
//         source={item.image}
//         style={local.gridImage}
//       />

//       <Text style={local.gridTitle} numberOfLines={1}>
//         {item.title}
//       </Text>

//       <Text style={local.gridDate} numberOfLines={1}>
//         {item.date}
//       </Text>

//       <View style={local.row}>
//         <MaterialIcons
//           name="location-on"
//           size={12}
//           color="#4BC6DE"
//         />

//         <Text style={local.gridPlace} numberOfLines={1}>
//           {item.place}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );

//   // Format API Events
//   const upcomingData = upcomingEvents.map(formatEvent);
//   const recentData = recentEvents.map(formatEvent);

//   // Combine Upcoming + Recent Events
//   const allEvents = [...upcomingData, ...recentData];

//   const searchData = searchResults.map(formatEvent);

//   // Search Check
//   const isSearching = search.trim().length >= 3;

//   return (
//     <LinearGradient
//       colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
//       locations={[0, 0.25, 0.5, 0.7, 1]}
//       start={{x: 0, y: 0}}
//       end={{x: 1, y: 1}}
//       style={local.container}>

//       <StatusBar hidden />

//       <ScrollView
//         contentContainerStyle={local.scrollContent}
//         showsVerticalScrollIndicator={false}
//         keyboardShouldPersistTaps="handled">

//         {/* Header */}
//         <View style={local.header}>
//           <View style={local.userRow}>
//             <View style={local.avatar}>
//               <Image
//                 source={require('../../../assets/img4.png')}
//                 style={local.avatarImage}
//               />
//             </View>

//             <Text style={local.userName}>
//               ANDREW AINSLEY
//             </Text>
//           </View>

//           <TouchableOpacity
//             style={local.bellBox}
//             activeOpacity={0.8}>
//             <MaterialIcons
//               name="notifications-none"
//               size={20}
//               color="#FFFFFF"
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Search */}
//         <View style={local.searchBox}>
//           <MaterialIcons
//             name="search"
//             size={20}
//             color="#4BC6DE"
//           />

//           <TextInput
//             style={local.searchInput}
//             placeholder="What event are you looking for..."
//             placeholderTextColor="#E5E5EA"
//             value={search}
//             onChangeText={setSearch}
//           />

//           <TouchableOpacity
//             hitSlop={{
//               top: 10,
//               bottom: 10,
//               left: 10,
//               right: 10,
//             }}>
//             <MaterialIcons
//               name="tune"
//               size={20}
//               color="#4BC6DE"
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Recommended Events */}
//         <SectionHeader title="RECOMMENDED EVENTS" />

//         <FlatList
//           data={RECOMMENDED}
//           renderItem={renderRecommended}
//           keyExtractor={item => item.id}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={{paddingHorizontal: SIDE}}
//           ItemSeparatorComponent={() => (
//             <View style={{width: GAP}} />
//           )}
//         />

//         {/* All Events / Search Results */}
//         <SectionHeader
//           title={isSearching ? 'SEARCH RESULTS' : 'ALL EVENTS'}
//           onSeeAll={
//             isSearching
//               ? undefined
//               : () => navigation.navigate('EventsScreen')
//           }
//         />

//         {isSearching ? (
//           searchLoading ? (
//             <ActivityIndicator
//               size="large"
//               color="#4BC6DE"
//               style={{marginVertical: 20}}
//             />
//           ) : searchError ? (
//             <Text
//               style={{
//                 color: '#FF6B6B',
//                 textAlign: 'center',
//                 marginVertical: 15,
//               }}>
//               {searchError}
//             </Text>
//           ) : (
//             <FlatList
//               data={searchData}
//               renderItem={renderUpcoming}
//               keyExtractor={(item, index) =>
//                 String(item.id || index)
//               }
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={{paddingHorizontal: SIDE}}
//               ItemSeparatorComponent={() => (
//                 <View style={{width: GAP}} />
//               )}
//               ListEmptyComponent={() => (
//                 <Text
//                   style={{
//                     color: '#FFFFFF',
//                     marginVertical: 15,
//                   }}>
//                   No matching events found
//                 </Text>
//               )}
//             />
//           )
//         ) : upcomingLoading || recentLoading ? (
//           <ActivityIndicator
//             size="large"
//             color="#4BC6DE"
//             style={{marginVertical: 20}}
//           />
//         ) : upcomingError && recentError ? (
//           <Text
//             style={{
//               color: '#FF6B6B',
//               textAlign: 'center',
//               marginVertical: 15,
//             }}>
//             Unable to load events. Please try again.
//           </Text>
//         ) : (
//           <FlatList
//             data={allEvents}
//             renderItem={renderUpcoming}
//             keyExtractor={(item, index) =>
//               String(item.id || index)
//             }
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={{paddingHorizontal: SIDE}}
//             ItemSeparatorComponent={() => (
//               <View style={{width: GAP}} />
//             )}
//             ListEmptyComponent={() => (
//               <Text
//                 style={{
//                   color: '#FFFFFF',
//                   marginVertical: 15,
//                 }}>
//                 No events found
//               </Text>
//             )}
//           />
//         )}

//       </ScrollView>

//       {/* Bottom Tab Bar */}
//       <View style={local.tabBar}>
//         {TABS.map(tab => {
//           const active = activeTab === tab.key;

//           return (
//             <TouchableOpacity
//               key={tab.key}
//               style={local.tabItem}
//               activeOpacity={0.8}
//               onPress={() => {
//                 setActiveTab(tab.key);

//                 if (tab.screen && tab.key !== 'home') {
//                   navigation.navigate(tab.screen);
//                 }
//               }}>

//               <MaterialIcons
//                 name={tab.icon}
//                 size={22}
//                 color={active ? '#4BC6DE' : '#9A9AA5'}
//               />

//               <Text
//                 style={[
//                   local.tabLabel,
//                   active && local.tabLabelActive,
//                 ]}>
//                 {tab.label}
//               </Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>

//     </LinearGradient>
//   );
// };

// export default FirstHomeScreen;



import React, {useState, useEffect, useRef} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';

import local from './styles';

const SIDE = 20;
const GAP = 14;

const BASE_URL = 'https://xhcqhdxq-8006.inc1.devtunnels.ms';

// Recommended Events
const RECOMMENDED = [
  {
    id: 'r1',
    title: 'Chicago steppin',
    date: 'Thy, Sep 24 • 18.00 - 23.00 PM',
    place: 'Grand Park, New York',
    image: require('../../../assets/img5.png'),
  },
  {
    id: 'r2',
    title: 'Music Night',
    date: 'Fri, Sep 25 • 19.00 - 23.00 PM',
    place: 'Central Hall, New York',
    image: require('../../../assets/img13.png'),
  },
];

// Bottom Tabs
const TABS = [
  {key: 'home', label: 'Home', icon: 'home', screen: 'FirstHomeScreen'},
  {key: 'events', label: 'Events', icon: 'event', screen: 'EventsScreen'},
  {key: 'sponsors', label: 'Sponsors', icon: 'people', screen: 'SponsorsScreen'},
  {key: 'invite', label: 'Invite Us', icon: 'person-add', screen: 'InviteUsScreen'},
  {key: 'profile', label: 'Profile', icon: 'person', screen: 'ProfileScreen'},
];

// Section Header
const SectionHeader = ({title, onSeeAll}) => (
  <View style={local.sectionHeader}>
    <Text style={local.sectionTitle}>{title}</Text>

    {onSeeAll ? (
      <TouchableOpacity onPress={onSeeAll}>
        <Text style={local.seeAll}>See All</Text>
      </TouchableOpacity>
    ) : null}
  </View>
);

const FirstHomeScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('home');

  // Redux Token
  const token = useSelector(state => state.auth.token);

  // All Events API States
  const [allEvents, setAllEvents] = useState([]);
  const [allEventsLoading, setAllEventsLoading] = useState(true);
  const [allEventsError, setAllEventsError] = useState('');

  // Search States
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState('');

  // Search Request Reference
  const searchRequestRef = useRef(0);

  // Fetch All Events API
  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
        setAllEventsLoading(true);
        setAllEventsError('');

        if (!token) {
          throw new Error('Login token not found');
        }

        const response = await fetch(`${BASE_URL}/allEvent`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        console.log('All Events API Status:', response.status);
        console.log('All Events API Response:', data);

        if (!response.ok) {
          throw new Error(
            data.message || `Server Error: ${response.status}`,
          );
        }

        if (data.success) {
          setAllEvents(
            Array.isArray(data.data) ? data.data : [],
          );
        } else {
          throw new Error(data.message || 'Events not found');
        }
      } catch (error) {
        console.log('All Events API Error:', error.message);
        setAllEvents([]);
        setAllEventsError('Unable to load events. Please try again.');
      } finally {
        setAllEventsLoading(false);
      }
    };

    fetchAllEvents();
  }, [token]);

  // Search API with 500ms Debounce
  useEffect(() => {
    const searchText = search.trim();

    if (searchText.length < 3) {
      searchRequestRef.current += 1;
      setSearchResults([]);
      setSearchLoading(false);
      setSearchError('');
      return;
    }

    const requestId = ++searchRequestRef.current;

    const timer = setTimeout(async () => {
      try {
        setSearchLoading(true);
        setSearchError('');

        if (!token) {
          throw new Error('Login token not found');
        }

        const response = await fetch(`${BASE_URL}/search`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            Title: searchText,
          }),
        });

        const data = await response.json();

        console.log('Search API Status:', response.status);
        console.log('Search API Response:', data);

        if (!response.ok) {
          throw new Error(data.message || 'Search request failed');
        }

        if (requestId !== searchRequestRef.current) {
          return;
        }

        if (data.success) {
          setSearchResults(
            Array.isArray(data.events)
              ? data.events
              : Array.isArray(data.data)
              ? data.data
              : [],
          );
        } else {
          setSearchResults([]);
          setSearchError(data.message || 'No events found.');
        }
      } catch (error) {
        if (requestId === searchRequestRef.current) {
          console.log('Search API Error:', error.message);
          setSearchResults([]);
          setSearchError('Unable to search events. Please try again.');
        }
      } finally {
        if (requestId === searchRequestRef.current) {
          setSearchLoading(false);
        }
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      searchRequestRef.current += 1;
    };
  }, [search, token]);

  // Format Event Data
  const formatEvent = item => {
    const imagePath = item.images?.[0];

    let imageSource = require('../../../assets/img6.png');

    if (imagePath) {
      if (imagePath.startsWith('http')) {
        imageSource = {uri: imagePath};
      } else if (imagePath.startsWith('/uploads/events/')) {
        imageSource = {
          uri: `${BASE_URL}${imagePath}`,
        };
      } else {
        const imageName = imagePath.split(/[\\/]/).pop();

        imageSource = {
          uri: `${BASE_URL}/uploads/events/${encodeURIComponent(imageName)}`,
        };
      }
    }

    const formattedDate = item.date
      ? new Date(item.date).toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        })
      : '';

    return {
      ...item,
      id: item._id || item.id,
      title: item.Title || item.title || item.name || 'Event',
      date: [formattedDate, item.time].filter(Boolean).join(' • '),
      place: item.address || item.place || '',
      image: imageSource,
    };
  };

  // Event Details Navigation
  const handleEventPress = item => {
    navigation.navigate('EventDetailsScreen', {
      event: item,
    });
  };

  // Recommended Events
  const renderRecommended = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.9}
      style={local.bigCard}>
      <Image source={item.image} style={local.bigImage} />

      <Text style={local.bigTitle}>
        {item.title}
      </Text>

      <Text style={local.bigDate}>
        {item.date}
      </Text>

      <View style={local.row}>
        <MaterialIcons
          name="location-on"
          size={16}
          color="#4BC6DE"
        />

        <Text style={local.bigPlace}>
          {item.place}
        </Text>
      </View>
    </TouchableOpacity>
  );

  // All Events Card
  const renderEvent = ({item}) => {
    const formattedItem = formatEvent(item);

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={local.gridCard}
        onPress={() => handleEventPress(formattedItem)}>

        <Image
          source={formattedItem.image}
          style={local.gridImage}
        />

        <Text style={local.gridTitle} numberOfLines={1}>
          {formattedItem.title}
        </Text>

        <Text style={local.gridDate} numberOfLines={1}>
          {formattedItem.date}
        </Text>

        <View style={local.row}>
          <MaterialIcons
            name="location-on"
            size={12}
            color="#4BC6DE"
          />

          <Text style={local.gridPlace} numberOfLines={1}>
            {formattedItem.place}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  // Format Search Data
  const searchData = searchResults;

  // Search Check
  const isSearching = search.trim().length >= 3;

  return (
    <LinearGradient
      colors={['#24444D', '#050A0C', '#000000', '#000000', '#4B0F57']}
      locations={[0, 0.25, 0.5, 0.7, 1]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={local.container}>

      <StatusBar hidden />

      <ScrollView
        contentContainerStyle={local.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">

        {/* Header */}
        <View style={local.header}>
          <View style={local.userRow}>
            <View style={local.avatar}>
              <Image
                source={require('../../../assets/img4.png')}
                style={local.avatarImage}
              />
            </View>

            <Text style={local.userName}>
              ANDREW AINSLEY
            </Text>
          </View>

          <TouchableOpacity
            style={local.bellBox}
            activeOpacity={0.8}>
            <MaterialIcons
              name="notifications-none"
              size={20}
              color="#FFFFFF"
            />
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={local.searchBox}>
          <MaterialIcons
            name="search"
            size={20}
            color="#4BC6DE"
          />

          <TextInput
            style={local.searchInput}
            placeholder="What event are you looking for..."
            placeholderTextColor="#E5E5EA"
            value={search}
            onChangeText={setSearch}
          />

          <TouchableOpacity
            hitSlop={{
              top: 10,
              bottom: 10,
              left: 10,
              right: 10,
            }}>
            <MaterialIcons
              name="tune"
              size={20}
              color="#4BC6DE"
            />
          </TouchableOpacity>
        </View>

        {/* Recommended Events */}
        <SectionHeader title="RECOMMENDED EVENTS" />

        <FlatList
          data={RECOMMENDED}
          renderItem={renderRecommended}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: SIDE}}
          ItemSeparatorComponent={() => (
            <View style={{width: GAP}} />
          )}
        />

        {/* All Events / Search Results */}
        <SectionHeader
          title={isSearching ? 'SEARCH RESULTS' : 'ALL EVENTS'}
          onSeeAll={
            isSearching
              ? undefined
              : () => navigation.navigate('EventsScreen')
          }
        />

        {isSearching ? (
          searchLoading ? (
            <ActivityIndicator
              size="large"
              color="#4BC6DE"
              style={{marginVertical: 20}}
            />
          ) : searchError ? (
            <Text
              style={{
                color: '#FF6B6B',
                textAlign: 'center',
                marginVertical: 15,
              }}>
              {searchError}
            </Text>
          ) : (
            <FlatList
              data={searchData}
              renderItem={renderEvent}
              keyExtractor={(item, index) =>
                String(item._id || item.id || index)
              }
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingHorizontal: SIDE}}
              ItemSeparatorComponent={() => (
                <View style={{width: GAP}} />
              )}
              ListEmptyComponent={() => (
                <Text
                  style={{
                    color: '#FFFFFF',
                    marginVertical: 15,
                  }}>
                  No matching events found
                </Text>
              )}
            />
          )
        ) : allEventsLoading ? (
          <ActivityIndicator
            size="large"
            color="#4BC6DE"
            style={{marginVertical: 20}}
          />
        ) : allEventsError ? (
          <Text
            style={{
              color: '#FF6B6B',
              textAlign: 'center',
              marginVertical: 15,
            }}>
            {allEventsError}
          </Text>
        ) : (
          <FlatList
            data={allEvents}
            renderItem={renderEvent}
            keyExtractor={(item, index) =>
              String(item._id || item.id || index)
            }
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: SIDE}}
            ItemSeparatorComponent={() => (
              <View style={{width: GAP}} />
            )}
            ListEmptyComponent={() => (
              <Text
                style={{
                  color: '#FFFFFF',
                  marginVertical: 15,
                }}>
                No events found
              </Text>
            )}
          />
        )}

      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={local.tabBar}>
        {TABS.map(tab => {
          const active = activeTab === tab.key;

          return (
            <TouchableOpacity
              key={tab.key}
              style={local.tabItem}
              activeOpacity={0.8}
              onPress={() => {
                setActiveTab(tab.key);

                if (tab.screen && tab.key !== 'home') {
                  navigation.navigate(tab.screen);
                }
              }}>

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

export default FirstHomeScreen;
