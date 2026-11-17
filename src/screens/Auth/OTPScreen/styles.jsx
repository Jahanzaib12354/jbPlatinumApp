import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: { flex: 1 },

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

  subtitle: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginBottom: 44,
  },

  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },

  otpBox: {
    width: 62,
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.75)',
    borderRadius: 10,
    color: '#4BC6DE',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    padding: 0,
  },

  otpBoxFocused: {
    borderColor: '#4BC6DE',
  },

  resendRow: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },

  resendText: {
    color: '#E5E5EA',
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
  },

  timer: {
    color: '#FFFFFF',
    fontSize: 11,
    fontFamily: 'Poppins-Bold',
  },

  resendActive: {
    color: '#4BC6DE',
    fontSize: 11,
    fontFamily: 'Poppins-Bold',
  },

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
});

export default styles;