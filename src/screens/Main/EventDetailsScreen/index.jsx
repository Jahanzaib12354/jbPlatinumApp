
// import React from 'react';

// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   StatusBar,
//   StyleSheet,
//   Alert,
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import styles from './styles'
// const EventDetailsScreen = ({ navigation, route }) => {

//   // Receive selected event from FirstHomeScreen
//   const event = route.params?.event || {};

//   const eventTitle = event.title || 'Chicago Steppin';
//   const eventDate = event.date || 'Fri, Sep 24';
//   const eventPlace = event.place || 'New Universe';

//   const eventImage = event.image || require('../../../assets/img6.png');

//   return (
//     <LinearGradient
//       colors={['#100D18', '#260B32', '#08080D']}
//       style={styles.container}
//     >

//       <StatusBar
//         backgroundColor="#100D18"
//         barStyle="light-content"
//       />

//       <ScrollView showsVerticalScrollIndicator={false}>

//         {/* Header */}
//         <View style={styles.header}>
//           <TouchableOpacity
//             onPress={() => navigation.goBack()}
//           >
//             <MaterialIcons
//               name="arrow-back"
//               size={25}
//               color="#FFFFFF"
//             />
//           </TouchableOpacity>

//           <Text style={styles.headerTitle}>
            
//           </Text>

//           {/* <TouchableOpacity
//             onPress={() => Alert.alert('Event', 'Event options')}
//           >
//             <MaterialIcons
//               name="more-vert"
//               size={25}
//               color="#FFFFFF"
//             />
//           </TouchableOpacity> */}
//         </View>

//         {/* Event Main Image */}
//         <View style={styles.imageContainer}>
//           <Image
//             source={eventImage}
//             style={styles.mainImage}
//             resizeMode="cover"
//           />

//           <View style={styles.imageDots}>
//             <View style={styles.activeDot} />
//             <View style={styles.dot} />
//             <View style={styles.dot} />
//             <View style={styles.dot} />
//           </View>
//         </View>

//         {/* Event Title */}
//         <View style={styles.content}>

//           <Text style={styles.eventTitle}>
//             {eventTitle.toUpperCase()}
//           </Text>

//           <View style={styles.line} />

//           {/* Date and Time */}
//           <View style={styles.infoRow}>

//             <View style={styles.iconCircle}>
//               <MaterialIcons
//                 name="calendar-month"
//                 size={20}
//                 color="#FFFFFF"
//               />
//             </View>

//             <View style={styles.infoText}>
//               <Text style={styles.infoHeading}>
//                 {eventDate}
//               </Text>

//               <Text style={styles.infoSub}>
//                 18:00 - 23:00 PM
//               </Text>

//               <TouchableOpacity
//                 style={styles.smallButton}
//                 onPress={() =>
//                   Alert.alert('Calendar', 'Add event to your calendar')
//                 }
//               >
//                 <MaterialIcons
//                   name="calendar-today"
//                   size={13}
//                   color="#FFFFFF"
//                 />
//                 <Text style={styles.buttonText}>
//                   Add To My Calendar
//                 </Text>
//               </TouchableOpacity>
//             </View>

//           </View>

//           {/* Location */}
//           <View style={styles.infoRow}>

//             <View style={styles.iconCircle}>
//               <MaterialIcons
//                 name="location-on"
//                 size={20}
//                 color="#FFFFFF"
//               />
//             </View>

//             <View style={styles.infoText}>
//               <Text style={styles.infoHeading}>
//                 {eventPlace}
//               </Text>

//               <Text style={styles.infoSub}>
//                 Event Venue
//               </Text>

//               <TouchableOpacity
//                 style={styles.smallButton}
//                 onPress={() =>
//                   Alert.alert('Location', eventPlace)
//                 }
//               >
//                 <MaterialIcons
//                   name="location-on"
//                   size={13}
//                   color="#FFFFFF"
//                 />
//                 <Text style={styles.buttonText}>
//                   See Location on Maps
//                 </Text>
//               </TouchableOpacity>
//             </View>

//           </View>

//           <View style={styles.line} />

//           {/* Organizer */}
//           <View style={styles.organizerRow}>

//             <View style={styles.organizerImage}>
//             <Image
//              source={require('../../../assets/img17.png')}
//                   style={styles.organizerImageStyle}
//                     resizeMode="cover"
//                />
//              </View>

//             <View>
//               <Text style={styles.infoHeading}>
//                 Event Organizer
//               </Text>

//               <Text style={styles.infoSub}>
//                 Organizer
//               </Text>
//             </View>

//           </View>

//           {/* About Event */}
//           <Text style={styles.sectionTitle}>
//             ABOUT EVENT
//           </Text>

//           <Text style={styles.description}>
//             Join us for an amazing Chicago Steppin
//             experience. Enjoy great music, dance,
//             entertainment and unforgettable moments
//             with friends and family.
//           </Text>

//           {/* Gallery */}
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>
//               GALLERY (LIVE EVENT)
//             </Text>

//             <TouchableOpacity>
//               <Text style={styles.seeAll}>
//                 See All
//               </Text>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.galleryRow}>

//             <Image
//               source={eventImage}
//               style={styles.galleryImage}
//             />

//             <Image
//               source={eventImage}
//               style={styles.galleryImage}
//             />

//             <View style={styles.galleryLast}>
//               <Image
//                 source={eventImage}
//                 style={styles.galleryImage}
//               />

//               <View style={styles.galleryOverlay}>
//                 <Text style={styles.galleryCount}>
//                   20+
//                 </Text>
//               </View>
//             </View>

//           </View>

//           {/* Event Sponsors */}
//           <Text style={styles.sectionTitle}>
//             EVENT SPONSORS
//           </Text>

//           <View style={styles.sponsorRow}>
//             <View style={styles.sponsorCircle}>
//               <Text style={styles.sponsorText}>
//                 01 SPONSOR
//               </Text>
//             </View>

//             <View style={styles.sponsorCircle}>
//               <Text style={styles.sponsorText}>
//                 02 SPONSOR
//               </Text>
//             </View>

//             <View style={styles.sponsorCircle}>
//               <Text style={styles.sponsorText}>
//                 03 SPONSOR
//               </Text>
//             </View>
//           </View>

//         </View>

//       </ScrollView>
//     </LinearGradient>
//   );
// };

// export default EventDetailsScreen;


import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import styles from './styles';

const EventDetailsScreen = ({ navigation, route }) => {

  const { event } = route.params || {};

  const [uploadedImage, setUploadedImage] = useState(null);

  useEffect(() => {
    if (route.params?.uploadedImage) {
      setUploadedImage(route.params.uploadedImage);
    }
  }, [route.params?.uploadedImage]);

  const galleryImages = [
    require('../../../assets/img15.png'),
    
    require('../../../assets/Img16.png'),
  ];

  return (
    <View style={styles.container}>

      <StatusBar
        backgroundColor="#100B14"
        barStyle="light-content"
      />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header Image */}

        <View style={styles.imageContainer}>

          <Image
            source={event?.image || require('../../../assets/img6.png')}
            style={styles.mainImage}
          />

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backText}>‹</Text>
          </TouchableOpacity>

        </View>

        {/* Event Information */}

        <View style={styles.content}>

          <Text style={styles.eventTitle}>
            {event?.title || event?.name || 'CHICAGO STEPPIN'}
          </Text>

          <View style={styles.line} />

          {/* Date */}

          <View style={styles.infoRow}>

            <Text style={styles.infoIcon}>▣</Text>

            <View>
              <Text style={styles.infoHeading}>
                Monday, December 24, 2024
              </Text>

              <Text style={styles.infoSub}>
                18:00 - 23:00 PM (GMT +0700)
              </Text>
            </View>

          </View>

          <TouchableOpacity style={styles.smallButton}>
            <Text style={styles.buttonText}>
              + Add My Calendar
            </Text>
          </TouchableOpacity>

          {/* Location */}

          <View style={styles.infoRow}>

            <Text style={styles.infoIcon}>●</Text>

            <View>
              <Text style={styles.infoHeading}>
                Grand Park, New York City, US
              </Text>

              <Text style={styles.infoSub}>
                Grand City, 5404 New York, United States.
              </Text>
            </View>

          </View>

          <TouchableOpacity style={styles.smallButton}>
            <Text style={styles.buttonText}>
              See Location on Maps
            </Text>
          </TouchableOpacity>

          <View style={styles.line} />

          {/* Organizer */}

          <View style={styles.organizerRow}>

            <View style={styles.organizerIcon}>
              <Text style={{ color: '#FFFFFF' }}>WM</Text>
            </View>

            <View>
              <Text style={styles.infoHeading}>
                World of Music
              </Text>

              <Text style={styles.infoSub}>
                Organizer
              </Text>
            </View>

          </View>

          {/* About Event */}

          <Text style={styles.sectionTitle}>
            ABOUT EVENT
          </Text>

          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Read more......
          </Text>

          {/* Gallery */}

          <View style={styles.galleryHeader}>

            <Text style={styles.sectionTitle}>
              GALLERY (PIC EVENT)
            </Text>

            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.gallery}>

            {/* First Image */}

            <Image
              source={galleryImages[0]}
              style={styles.galleryImage}
            />

            {/* Second Image */}

            <Image
              source={galleryImages[1]}
              style={styles.galleryImage}
            />

            {/* Uploaded Image / Upload Button */}

            <TouchableOpacity
              style={styles.uploadContainer}
              onPress={() =>
                navigation.navigate('UploadPicturesScreen', {
                  event,
                })
              }
            >

              {uploadedImage ? (

                <Image
                  source={{ uri: uploadedImage }}
                  style={styles.uploadedImage}
                />

              ) : (

                <View style={styles.uploadPlaceholder}>
                  <Text style={styles.uploadIcon}>+</Text>
                  <Text style={styles.uploadText}>
                    Upload Image
                  </Text>
                </View>

              )}

            </TouchableOpacity>

          </View>

          {/* Sponsors */}

          <Text style={styles.sectionTitle}>
            EVENT SPONSORS
          </Text>

          <View style={styles.sponsorRow}>

            <View style={styles.sponsorCircle}>
              <Text style={styles.sponsorText}>01 SPONSOR</Text>
            </View>

            <View style={styles.sponsorCircle}>
              <Text style={styles.sponsorText}>02 SPONSOR</Text>
            </View>

            <View style={styles.sponsorCircle}>
              <Text style={styles.sponsorText}>03 SPONSOR</Text>
            </View>

          </View>

        </View>

      </ScrollView>

    </View>
  );
};

export default EventDetailsScreen;
