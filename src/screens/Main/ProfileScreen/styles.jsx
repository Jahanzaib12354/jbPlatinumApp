import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 145,
    paddingTop: 32,
    paddingBottom: 25,
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 'bold',
  },

  profileContainer: {
    alignItems: 'center',
    paddingVertical: 15,
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

  name: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 15,
  },

  email: {
    color: '#AAB2D5',
    fontSize: 14,
    marginTop: 5,
  },

  memberBadge: {
    backgroundColor: '#303C73',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 10,
  },

  memberText: {
    color: '#AAB8FF',
    fontSize: 12,
    fontWeight: 'bold',
  },

  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5968D9',
    paddingHorizontal: 22,
    paddingVertical: 11,
    borderRadius: 10,
    marginTop: 18,
    gap: 8,
  },

  editButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },

  section: {
    paddingHorizontal: 20,
    marginTop: 25,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 14,
  },

  infoCard: {
    backgroundColor: '#292F50',
    borderRadius: 14,
    padding: 17,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },

  infoTextContainer: {
    marginLeft: 14,
  },

  infoLabel: {
    color: '#AAB2D5',
    fontSize: 12,
  },

  infoValue: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 5,
  },

  infoDivider: {
    height: 1,
    backgroundColor: '#41496D',
    marginVertical: 8,
  },

  menuCard: {
    backgroundColor: '#292F50',
    borderRadius: 14,
    paddingHorizontal: 15,
    marginBottom: 30,
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 17,
    borderBottomWidth: 1,
    borderBottomColor: '#41496D',
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },

  menuText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});
export default styles;