
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 25,
  },

  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  formContainer: {
    paddingHorizontal: 22,
    paddingTop: 25,
  },

  iconContainer: {
    width: 85,
    height: 85,
    borderRadius: 45,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 22,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitle: {
    color: '#AAB2D5',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 10,
    marginBottom: 30,
  },

  inputContainer: {
    marginBottom: 20,
  },

  inputLabel: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 10,
  },

  passwordInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#45515C',
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(255,255,255,0.06)',
    height: 55,
  },

  passwordInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 15,
  },

  changeButton: {
    height: 55,
    backgroundColor: '#783C91',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 40,
  },

  changeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
