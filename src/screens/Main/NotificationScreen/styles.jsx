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
    paddingBottom: 40,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
    marginLeft: 12,
  },
  list: {
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 40,
  },
  item: {
    marginBottom: 26,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: 'rgba(75,198,222,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWrap: {
    flex: 1,
    marginLeft: 14,
  },
  title: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  dateTime: {
    color: '#D0D0D0',
    fontSize: 12,
    marginTop: 3,
  },
  badge: {
    backgroundColor: '#FF0A78',
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  body: {
    color: '#E5E5E5',
    fontSize: 12,
    lineHeight: 18,
  },
  readMore: {
    color: '#fff',
    fontWeight: '600',
  },
});
export default styles;