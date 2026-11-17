import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 18,
    paddingBottom: 29,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
    marginLeft: 12,
  },
//   form: {
//     paddingHorizontal: 18,
//     paddingBottom: 40,
//   },
form: {
  flexGrow: 1,
  paddingTop: 20,
  paddingHorizontal: 18,
  paddingBottom: 30,
},
  inputBox: {
  flexDirection: 'row',
  alignItems: 'center',
  height: 52,
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.7)',
  borderRadius: 14,
  paddingHorizontal: 14,
  marginBottom: 29,
},
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 13,
    paddingVertical: 0,
  },
  leftIcon: {
    marginRight: 12,
  },
  countryPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  flag: {
    fontSize: 18,
    marginRight: 6,
  },
  dialCode: {
    color: '#fff',
    fontSize: 13,
    marginRight: 8,
  },
  messageBox: {
    height: 110,
    alignItems: 'flex-start',
    paddingTop: 12,
  },
  messageInput: {
    height: '100%',
  },
  uploadBox: {
    height: 110,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
    borderStyle: 'dashed',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    overflow: 'hidden',
  },
  uploadText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 8,
  },
  preview: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  removeBtn: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: '#000',
    borderRadius: 12,
  },
//   button: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#4BC6DE',
//     height: 48,
//     borderRadius: 24,
//   },
button: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#4BC6DE',
  height: 48,
  borderRadius: 24,
  marginTop: 'auto',
},
  buttonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 8,
    letterSpacing: 0.5,
  },

  /* Country modal */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  modalCard: {
    backgroundColor: '#0B0F14',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 8,
  },
  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(255,255,255,0.12)',
  },
  countryFlag: {
    fontSize: 20,
    marginRight: 12,
  },
  countryName: {
    flex: 1,
    color: '#fff',
    fontSize: 13,
  },
  countryCode: {
    color: '#9A9A9A',
    fontSize: 13,
    marginRight: 10,
  },
});

export default styles;