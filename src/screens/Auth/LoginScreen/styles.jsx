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
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 30,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: 40,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#C9C9D1',
    paddingHorizontal: 18,
    marginBottom: 18,
    backgroundColor: 'rgba(255,255,255,0.03)',
  },

  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: 12,
    paddingVertical: 0,
  },

  forgotContainer: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },

  forgotText: {
    color: '#C9C9D1',
    fontSize: 12,
  },

  loginButton: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#38D0DB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginButtonText: {
    color: '#020204',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1,
    marginLeft: 10,
  },

  signupRow: {
    alignItems: 'center',
    marginTop: 28,
    marginBottom: 12,
  },

  signupHint: {
    color: '#C9C9D1',
    fontSize: 13,
  },

  signupButton: {
    height: 50,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: '#38D0DB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  signupButtonText: {
    color: '#38D0DB',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1,
  },
});

export default styles;