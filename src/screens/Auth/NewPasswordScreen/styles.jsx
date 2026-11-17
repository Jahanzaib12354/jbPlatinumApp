
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

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.75)',
    borderRadius: 14,
    paddingHorizontal: 16,
  },

  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    marginLeft: 12,
    paddingVertical: 0,
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