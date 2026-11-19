

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    paddingTop: 35,
    paddingBottom: 25,
  },

  headerTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  avatarContainer: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 30,
  },

  avatar: {
    width: 105,
    height: 105,
    borderRadius: 55,
    backgroundColor: '#4B55A5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#7D8BFF',
  },

  avatarText: {
    color: '#C4C9E3',
    marginTop: 12,
    fontSize: 14,
  },

  form: {
    paddingHorizontal: 22,
  },

  label: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 9,
    marginTop: 17,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#292F50',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 55,
    borderWidth: 1,
    borderColor: '#41496D',
  },

  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 15,
    marginLeft: 12,
  },

  saveButton: {
    height: 55,
    backgroundColor: '#5968D9',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
    marginBottom: 30,
    gap: 10,
  },

  saveText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default styles;