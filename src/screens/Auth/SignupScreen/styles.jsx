
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  flex: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 28,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 34,
    fontFamily: 'BebasNeue-Regular',
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: 40,
  },

  // Input Fields
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 18,
    backgroundColor: 'rgba(255,255,255,0.06)',
  },

  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    marginLeft: 12,
    paddingVertical: 0,
  },

  inputNoIcon: {
    marginLeft: 0,
  },

  flagBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  flag: {
    fontSize: 18,
    marginRight: 2,
  },

  dialCode: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    marginLeft: 8,
  },

  phoneInput: {
    marginLeft: 6,
  },

  // Signup Button
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    backgroundColor: '#4BC6DE',
    borderRadius: 24,
  },

  buttonText: {
    color: '#020204',
    fontSize: 13,
    fontFamily: 'Poppins-Bold',
    marginLeft: 8,
  },

  // Country Picker Modal
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  modalSheet: {
    maxHeight: '75%',
    backgroundColor: '#0B0F12',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },

  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  modalTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    borderRadius: 14,
    paddingHorizontal: 14,
    marginBottom: 8,
  },

  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
    paddingVertical: 0,
  },

  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(255,255,255,0.12)',
  },

  countryFlag: {
    fontSize: 22,
    marginRight: 12,
  },

  countryName: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },

  countryDial: {
    color: '#C9C9D1',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    marginRight: 10,
  },

  emptyText: {
    color: '#9A9AA5',
    textAlign: 'center',
    marginTop: 24,
    fontFamily: 'Poppins-Regular',
  },

});

export default styles;