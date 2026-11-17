// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Image,
//   ScrollView,
//   TouchableOpacity,
  
//   Dimensions,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';
// import styles from './styles'
// const {width} = Dimensions.get('window');
// const CARD_W = width * 0.78;
// const CARD_GAP = 10;

// const slides = [
//   {
//     id: 1,
//     img: require('../../../assets/img8.png'),
//     title: 'NIGHTS THAT HIT DIFFERENT.',
//     sub: 'Rooftop takeover • Atlanta',
//     time: '00:42',
//   },
//   {
//     id: 2,
//     img: require('../../../assets/img10.png'),
//     title: 'UNFORGETTABLE NIGHTS.',
//     sub: 'Private party • Atlanta',
//     time: '00:30',
//   },
// ];

// const InviteUsScreen = ({navigation}) => {
//   const [page, setPage] = useState(0);
//   const [form, setForm] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     location: '',
//     business: '',
//     message: '',
//   });

//   const set = (k, v) => setForm(p => ({...p, [k]: v}));

//   const onScroll = e => {
//     const x = e.nativeEvent.contentOffset.x;
//     setPage(Math.round(x / (CARD_W + CARD_GAP)));
//   };

//   return (
//     <LinearGradient
//       colors={['#0B1F2A', '#000000', '#3A0B4A']}
//       start={{x: 0, y: 0}}
//       end={{x: 1, y: 1}}
//       style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Icon name="arrow-back" size={22} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>INVITE US</Text>
//       </View>

//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{paddingBottom: 40}}>
//         {/* Carousel */}
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           snapToInterval={CARD_W + CARD_GAP}
//           decelerationRate="fast"
//           onScroll={onScroll}
//           scrollEventThrottle={16}
//           contentContainerStyle={{paddingHorizontal: 16}}>
//           {slides.map(s => (
//             <View key={s.id} style={styles.card}>
//               <Image source={s.img} style={styles.cardImg} />
//               <View style={styles.cardOverlay} />
//               <View style={styles.badge}>
//                 <Icon name="sparkles" size={10} color="#fff" />
//                 <Text style={styles.badgeText}>PAST EVENTS</Text>
//               </View>
//               <View style={styles.playBtn}>
//                 <Icon name="play" size={18} color="#fff" />
//               </View>
//               <View style={styles.cardBottom}>
//                 <View style={{flex: 1}}>
//                   <Text style={styles.cardTitle}>{s.title}</Text>
//                   <Text style={styles.cardSub}>{s.sub}</Text>
//                 </View>
//                 <Text style={styles.cardTime}>{s.time}</Text>
//               </View>
//             </View>
//           ))}
//         </ScrollView>

//         {/* Indicator */}
//         <View style={styles.indicatorRow}>
//           <View style={styles.dots}>
//             {slides.map((s, i) => (
//               <View
//                 key={s.id}
//                 style={[
//                   styles.dot,
//                   i === page && {backgroundColor: '#4BC6DE', width: 22},
//                 ]}
//               />
//             ))}
//           </View>
//           <Text style={styles.counter}>
//             {String(page + 1).padStart(2, '0')} / 03
//           </Text>
//         </View>

//         {/* Form */}
//         <View style={{paddingHorizontal: 16}}>
//           <Text style={styles.formTitle}>INVITE JB PLATINUM</Text>

//           <TextInput
//             style={styles.input}
//             placeholder="First Name"
//             placeholderTextColor="#B5B5B5"
//             value={form.firstName}
//             onChangeText={v => set('firstName', v)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Last Name"
//             placeholderTextColor="#B5B5B5"
//             value={form.lastName}
//             onChangeText={v => set('lastName', v)}
//           />

//           <View style={styles.inputRow}>
//             <View style={styles.iconBox}>
//               <Icon name="mail" size={14} color="#000" />
//             </View>
//             <TextInput
//               style={styles.rowInput}
//               placeholder="Email"
//               placeholderTextColor="#B5B5B5"
//               keyboardType="email-address"
//               autoCapitalize="none"
//               value={form.email}
//               onChangeText={v => set('email', v)}
//             />
//           </View>

//           <View style={styles.inputRow}>
//             <Text style={{fontSize: 18, marginRight: 6}}>🇺🇸</Text>
//             <Icon name="chevron-down" size={14} color="#fff" />
//             <View style={styles.divider} />
//             <TextInput
//               style={styles.rowInput}
//               placeholder="+1 000 000 000"
//               placeholderTextColor="#B5B5B5"
//               keyboardType="phone-pad"
//               value={form.phone}
//               onChangeText={v => set('phone', v)}
//             />
//           </View>

//           <View style={styles.inputRow}>
//             <Icon name="location" size={18} color="#fff" />
//             <TextInput
//               style={[styles.rowInput, {marginLeft: 10}]}
//               placeholder="Location"
//               placeholderTextColor="#B5B5B5"
//               value={form.location}
//               onChangeText={v => set('location', v)}
//             />
//           </View>

//           <TextInput
//             style={styles.input}
//             placeholder="Name of business"
//             placeholderTextColor="#B5B5B5"
//             value={form.business}
//             onChangeText={v => set('business', v)}
//           />

//           <TextInput
//             style={[styles.input, styles.messageInput]}
//             placeholder="Message..."
//             placeholderTextColor="#B5B5B5"
//             multiline
//             textAlignVertical="top"
//             value={form.message}
//             onChangeText={v => set('message', v)}
//           />

//           {/* Upload */}
//           <TouchableOpacity style={styles.upload} activeOpacity={0.7}>
//             <Icon name="cloud-upload-outline" size={26} color="#4BC6DE" />
//             <Text style={styles.uploadText}>Upload a file/image</Text>
//           </TouchableOpacity>

//           {/* Submit */}
//           <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8}>
//             <Icon name="arrow-forward" size={16} color="#000" />
//             <Text style={styles.submitText}>SUBMIT INVITATION</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </LinearGradient>
//   );
// };

// export default InviteUsScreen;



import React, {useState} from 'react';

import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Alert,
  ActivityIndicator,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {useSelector} from 'react-redux';

import styles from './styles';

const BASE_URL = 'https://xhcqhdxq-8006.inc1.devtunnels.ms';

const {width} = Dimensions.get('window');
const CARD_W = width * 0.78;
const CARD_GAP = 10;

const slides = [
  {
    id: 1,
    img: require('../../../assets/img8.png'),
    title: 'NIGHTS THAT HIT DIFFERENT.',
    sub: 'Rooftop takeover • Atlanta',
    time: '00:42',
  },
  {
    id: 2,
    img: require('../../../assets/img10.png'),
    title: 'UNFORGETTABLE NIGHTS.',
    sub: 'Private party • Atlanta',
    time: '00:30',
  },
];

const InviteUsScreen = ({navigation}) => {
  const token = useSelector(state => state.auth.token);

  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    business: '',
    message: '',
  });

  const set = (k, v) => {
    setForm(p => ({...p, [k]: v}));
  };

  const onScroll = e => {
    const x = e.nativeEvent.contentOffset.x;
    setPage(Math.round(x / (CARD_W + CARD_GAP)));
  };

  // Submit Invitation API
  const handleSubmit = async () => {
    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.location.trim() ||
      !form.business.trim() ||
      !form.message.trim()
    ) {
      Alert.alert('Required Fields', 'Please fill all fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email.trim())) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    // Check Redux token
    if (!token || typeof token !== 'string' || !token.trim()) {
      Alert.alert(
        'Login Required',
        'Your login token was not found. Please login again.',
      );
      return;
    }

    const payload = {
      first_name: form.firstName.trim(),
      last_name: form.lastName.trim(),
      email: form.email.trim(),
      phone_number: form.phone.trim(),
      address: form.location.trim(),
      business_name: form.business.trim(),
      message: form.message.trim(),
    };

    // Avoid adding Bearer twice
    const authToken = token.trim().startsWith('Bearer ')
      ? token.trim()
      : `Bearer ${token.trim()}`;

    try {
      setLoading(true);

      console.log('Invitation Payload:', payload);
      console.log('Invitation Token Available:', !!token);

      const response = await axios.post(
        `${BASE_URL}/invitation`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: authToken,
          },
          timeout: 30000,
        },
      );

      console.log('Invitation Response:', response.data);

      if (response.data.success) {
        Alert.alert(
          'Success',
          response.data.message || 'Invitation sent successfully!',
          [
            {
              text: 'OK',
              onPress: () => {
                setForm({
                  firstName: '',
                  lastName: '',
                  email: '',
                  phone: '',
                  location: '',
                  business: '',
                  message: '',
                });
              },
            },
          ],
        );
      } else {
        Alert.alert(
          'Failed',
          response.data.message || 'Invitation could not be sent.',
        );
      }
    } catch (error) {
      console.log('Invitation Error Message:', error.message);
      console.log('Invitation Error Status:', error.response?.status);
      console.log('Invitation Error Response:', error.response?.data);

      Alert.alert(
        'Invitation Error',
        error.response?.data?.message ||
          error.message ||
          'Something went wrong. Please try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={['#0B1F2A', '#000000', '#3A0B4A']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>INVITE US</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 40}}>

        {/* Carousel */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_W + CARD_GAP}
          decelerationRate="fast"
          onScroll={onScroll}
          scrollEventThrottle={16}
          contentContainerStyle={{paddingHorizontal: 16}}>

          {slides.map(s => (
            <View key={s.id} style={styles.card}>
              <Image source={s.img} style={styles.cardImg} />

              <View style={styles.cardOverlay} />

              <View style={styles.badge}>
                <Icon name="sparkles" size={10} color="#fff" />
                <Text style={styles.badgeText}>PAST EVENTS</Text>
              </View>

              <View style={styles.playBtn}>
                <Icon name="play" size={18} color="#fff" />
              </View>

              <View style={styles.cardBottom}>
                <View style={{flex: 1}}>
                  <Text style={styles.cardTitle}>{s.title}</Text>
                  <Text style={styles.cardSub}>{s.sub}</Text>
                </View>

                <Text style={styles.cardTime}>{s.time}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Indicator */}
        <View style={styles.indicatorRow}>
          <View style={styles.dots}>
            {slides.map((s, i) => (
              <View
                key={s.id}
                style={[
                  styles.dot,
                  i === page && {
                    backgroundColor: '#4BC6DE',
                    width: 22,
                  },
                ]}
              />
            ))}
          </View>

          <Text style={styles.counter}>
            {String(page + 1).padStart(2, '0')} /{' '}
            {String(slides.length).padStart(2, '0')}
          </Text>
        </View>

        {/* Invitation Form */}
        <View style={{paddingHorizontal: 16}}>
          <Text style={styles.formTitle}>INVITE JB PLATINUM</Text>

          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#B5B5B5"
            value={form.firstName}
            onChangeText={v => set('firstName', v)}
          />

          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#B5B5B5"
            value={form.lastName}
            onChangeText={v => set('lastName', v)}
          />

          <View style={styles.inputRow}>
            <View style={styles.iconBox}>
              <Icon name="mail" size={14} color="#000" />
            </View>

            <TextInput
              style={styles.rowInput}
              placeholder="Email"
              placeholderTextColor="#B5B5B5"
              keyboardType="email-address"
              autoCapitalize="none"
              value={form.email}
              onChangeText={v => set('email', v)}
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={{fontSize: 18, marginRight: 6}}>🇵🇰</Text>

            <Icon name="chevron-down" size={14} color="#fff" />

            <View style={styles.divider} />

            <TextInput
              style={styles.rowInput}
              placeholder="03XXXXXXXXX"
              placeholderTextColor="#B5B5B5"
              keyboardType="phone-pad"
              value={form.phone}
              onChangeText={v => set('phone', v)}
            />
          </View>

          <View style={styles.inputRow}>
            <Icon name="location" size={18} color="#fff" />

            <TextInput
              style={[styles.rowInput, {marginLeft: 10}]}
              placeholder="Location"
              placeholderTextColor="#B5B5B5"
              value={form.location}
              onChangeText={v => set('location', v)}
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Name of business"
            placeholderTextColor="#B5B5B5"
            value={form.business}
            onChangeText={v => set('business', v)}
          />

          <TextInput
            style={[styles.input, styles.messageInput]}
            placeholder="Message..."
            placeholderTextColor="#B5B5B5"
            multiline
            textAlignVertical="top"
            value={form.message}
            onChangeText={v => set('message', v)}
          />

          {/* Upload */}
          <TouchableOpacity style={styles.upload} activeOpacity={0.7}>
            <Icon
              name="cloud-upload-outline"
              size={26}
              color="#4BC6DE"
            />
            <Text style={styles.uploadText}>Upload a file/image</Text>
          </TouchableOpacity>

          {/* Submit */}
          <TouchableOpacity
            style={[
              styles.submitBtn,
              loading && {opacity: 0.6},
            ]}
            activeOpacity={0.8}
            onPress={handleSubmit}
            disabled={loading}>

            {loading ? (
              <ActivityIndicator size="small" color="#000" />
            ) : (
              <>
                <Icon name="arrow-forward" size={16} color="#000" />
                <Text style={styles.submitText}>SUBMIT INVITATION</Text>
              </>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default InviteUsScreen;

