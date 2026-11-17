
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#100B14',
  },

  mainContainer: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 35,
  },

  // Header

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 45,
  },

//   backButton: {
//     width: 28,
//     height: 38,
//     borderRadius: 20,
//     backgroundColor: '#292331',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

  backIcon: {
    color: '#FFFFFF',
    fontSize: 30,
    marginTop: -5,
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'BebasNeue-Regular',
    letterSpacing: 1,
  },

  emptySpace: {
    width: 38,
  },

  // Heading

  headingContainer: {
    marginBottom: 28,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 9,
  },

  subtitle: {
    color: '#AAA0B0',
    fontSize: 13,
    lineHeight: 20,
  },

  // Image Picker

  imagePicker: {
    width: '100%',
    height: 300,
    borderWidth: 1.5,
    borderColor: '#B52DDA',
    borderStyle: 'dashed',
    borderRadius: 18,
    backgroundColor: '#21142B',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  placeholderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  uploadIconContainer: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: '#3B204B',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },

  uploadIcon: {
    color: '#FFFFFF',
    fontSize: 45,
    fontWeight: '300',
    marginTop: -5,
  },

  chooseText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  tapText: {
    color: '#AAA0B0',
    fontSize: 12,
    marginTop: 9,
  },

  previewImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  selectedText: {
    color: '#36D6B0',
    fontSize: 12,
    marginTop: 12,
    textAlign: 'center',
  },

  // Select Button

  selectButton: {
    width: '100%',
    height: 52,
    backgroundColor: '#292331',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
    borderWidth: 1,
    borderColor: '#5C3D68',
  },

  selectButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  // Upload Button

  uploadButton: {
    width: '100%',
    height: 52,
    backgroundColor: '#B92DD8',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    elevation: 5,
  },

  uploadButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  // Bottom Text

  bottomText: {
    color: '#817787',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 25,
  },
  notificationButton: {
   width: '100%',
   height: 50,
  backgroundColor: '#FFFFFF',
  borderRadius: 22,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 15,
},

notificationButtonText: {
  color: '#100B14',
  fontSize: 16,
  fontWeight: 'bold',
},
});

export default styles;
