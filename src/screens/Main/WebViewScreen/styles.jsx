import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

header: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 18,
  paddingTop: 30,
  paddingBottom: 45,
  position: 'relative',
},

headerTitle: {
  color: '#FFFFFF',
  fontSize: 20,
  fontWeight: 'bold',
  position: 'absolute',
  left: 0,
  right: 0,
  textAlign: 'center',
},


  backButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.10)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTextContainer: {
    flex: 1,
    marginLeft: 14,
  },

 

  headerSubtitle: {
    fontSize: 12,
    color: '#AAB2D5',
    marginTop: 3,
  },

  refreshButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.10)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  urlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 14,
  },

  urlInputContainer: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#172329',
    borderRadius: 14,
    paddingHorizontal: 13,
    borderWidth: 1,
    borderColor: '#34464E',
  },

  urlInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 13,
    marginHorizontal: 10,
  },

  openButton: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: '#7138A8',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  browserControls: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    marginBottom: 12,
  },

  controlButton: {
    width: 38,
    height: 35,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.10)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 9,
  },

  secureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },

  secureText: {
    color: '#AAB2D5',
    fontSize: 11,
    marginLeft: 6,
  },

  webViewContainer: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  webView: {
    flex: 1,
  },

  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  loadingText: {
    color: '#333333',
    marginTop: 12,
    fontSize: 13,
  },

  topLoading: {
    position: 'absolute',
    top: 8,
    right: 15,
    zIndex: 10,
    backgroundColor: '#7138A8',
    padding: 8,
    borderRadius: 20,
  },

});

export default styles;