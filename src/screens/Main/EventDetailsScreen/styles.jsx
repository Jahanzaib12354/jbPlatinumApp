
// import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//   },

//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 15,
//     paddingVertical: 12,
//   },

//   headerTitle: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },

//   imageContainer: {
//     marginHorizontal: 10,
//     height: 300,
//     borderRadius: 5,
//     overflow: 'hidden',
//   },

//   mainImage: {
//     width: '100%',
//     height: '100%',
//   },

//   imageDots: {
//     position: 'absolute',
//     bottom: 10,
//     alignSelf: 'center',
//     flexDirection: 'row',
//     gap: 5,
//   },

//   activeDot: {
//     width: 18,
//     height: 5,
//     borderRadius: 5,
//     backgroundColor: '#FFFFFF',
//   },

//   dot: {
//     width: 5,
//     height: 5,
//     borderRadius: 5,
//     backgroundColor: '#AAAAAA',
//   },

//   content: {
//     paddingHorizontal: 15,
//     paddingTop: 15,
//     paddingBottom: 30,
//   },

//   eventTitle: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 12,
//   },

//   line: {
//     height: 1,
//     backgroundColor: '#777777',
//     marginVertical: 12,
//   },

//   infoRow: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginVertical: 8,
//   },

//   iconCircle: {
//     width: 38,
//     height: 38,
//     borderRadius: 20,
//     backgroundColor: '#292335',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },

//   infoText: {
//     flex: 1,
//   },

//   infoHeading: {
//     color: '#FFFFFF',
//     fontSize: 13,
//     fontWeight: '600',
//   },

//   infoSub: {
//     color: '#BBBBBB',
//     fontSize: 10,
//     marginTop: 4,
//   },

//   smallButton: {
//     backgroundColor: '#6924A4',
//     paddingHorizontal: 9,
//     paddingVertical: 5,
//     borderRadius: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//     alignSelf: 'flex-start',
//     marginTop: 7,
//     gap: 5,
//   },

//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 9,
//   },

//   organizerRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 12,
//   },

//   organizerImage: {
//     width: 42,
//     height: 42,
//     borderRadius: 25,
//     backgroundColor: '#622080',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },

//   sectionTitle: {
//     color: '#FFFFFF',
//     fontSize: 13,
//     fontWeight: 'bold',
//     marginTop: 15,
//     marginBottom: 10,
//   },

//   description: {
//     color: '#BBBBBB',
//     fontSize: 11,
//     lineHeight: 17,
//   },

//   sectionHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },

//   seeAll: {
//     color: '#FFFFFF',
//     fontSize: 10,
//   },

//   galleryRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },

//   galleryImage: {
//     width: '100%',
//     height: 70,
//     borderRadius: 10,
//   },

//   galleryLast: {
//     width: '31%',
//     height: 70,
//     position: 'relative',
//   },

//   galleryOverlay: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0,0,0,0.6)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//   },

//   galleryCount: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },

//   sponsorRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 5,
//   },

//   sponsorCircle: {
//     width: 68,
//     height: 68,
//     borderRadius: 40,
//     borderWidth: 1,
//     borderColor: '#B02BDF',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   sponsorText: {
//     color: '#FFFFFF',
//     fontSize: 9,
//   },

// });
// export default styles;


import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#100B14',
  },

  imageContainer: {
    width: '100%',
    height: 340,
  },

  mainImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  backButton: {
    position: 'absolute',
    top: 20,
    left: 18,
    width: 38,
    height: 38,
    borderRadius: 20,
    backgroundColor: '#00000099',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backText: {
    color: '#FFFFFF',
    fontSize: 30,
    marginTop: -5,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 35,
  },

  eventTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontFamily: 'BebasNeue-Regular',
    letterSpacing: 0.5,
  },

  line: {
    height: 1,
    backgroundColor: '#65536A',
    marginVertical: 15,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 12,
  },

  infoIcon: {
    color: '#FFFFFF',
    fontSize: 19,
    backgroundColor: '#292331',
    padding: 9,
    borderRadius: 25,
  },

  infoHeading: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },

  infoSub: {
    color: '#B9AFBD',
    fontSize: 10,
    marginTop: 4,
  },

  smallButton: {
    backgroundColor: '#19BBD5',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginLeft: 43,
    marginTop: 7,
    marginBottom: 8,
  },

  buttonText: {
    color: '#080A10',
    fontSize: 9,
    fontWeight: 'bold',
  },

  organizerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginVertical: 5,
  },

  organizerIcon: {
    width: 38,
    height: 38,
    borderRadius: 22,
    backgroundColor: '#7626B5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'BebasNeue-Regular',
    marginTop: 20,
    marginBottom: 10,
  },

  description: {
    color: '#B9AFBD',
    fontSize: 10,
    lineHeight: 17,
  },

  galleryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  seeAll: {
    color: '#C7B6D1',
    fontSize: 10,
  },

  gallery: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },

  galleryImage: {
    width: (width - 60) / 3,
    height: 90,
    borderRadius: 12,
    resizeMode: 'cover',
  },

  uploadContainer: {
    width: (width - 60) / 3,
    height: 90,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#9D32CF',
  },

  uploadedImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  uploadPlaceholder: {
    flex: 1,
    backgroundColor: '#21142B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  uploadIcon: {
    color: '#FFFFFF',
    fontSize: 28,
  },

  uploadText: {
    color: '#FFFFFF',
    fontSize: 9,
    textAlign: 'center',
  },

  sponsorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },

  sponsorCircle: {
    width: (width - 70) / 3,
    height: 65,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#B72EDB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sponsorText: {
    color: '#FFFFFF',
    fontSize: 9,
  },

});

export default styles;
