import { StyleSheet,Dimensions } from "react-native";


const { width } = Dimensions.get('window');
const SIDE = 20;
const GAP = 14;
const BIG_CARD = width * 0.86;
const GRID_CARD = (width - SIDE * 2 - GAP) / 2;
const CARD_WIDTH = (width - SIDE * 2 - GAP) / 2;

const local = StyleSheet.create({
  container: { flex: 1 },
  row: { flexDirection: 'row', alignItems: 'center' },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIDE,
    paddingTop: 36,
    paddingBottom: 18,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'BebasNeue-Regular',
    letterSpacing: 1,
    marginLeft: 12,
  },

  // Segment tabs
  segmentRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.2)',
    marginBottom: 18,
  },
  segment: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  segmentActive: {
    borderBottomColor: '#4BC6DE',
  },
  segmentText: {
    color: '#9A9AA5',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  segmentTextActive: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-SemiBold',
  },

  // List
  listContent: {
    paddingHorizontal: SIDE,
    paddingBottom: 100,
  },

  // Card
  card: {
    width: CARD_WIDTH,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
    borderRadius: 22,
    padding: 8,
    marginBottom: GAP,
    backgroundColor: 'rgba(255,255,255,0.04)',
  },
  cardImage: {
    width: '100%',
    height: CARD_WIDTH - 16,
    borderRadius: 16,
    marginBottom: 10,
  },
  freeBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#6B4FD8',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  freeText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontFamily: 'Poppins-SemiBold',
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'BebasNeue-Regular',
    letterSpacing: 0.5,
    paddingHorizontal: 4,
  },
  cardDate: {
    color: '#4BC6DE',
    fontSize: 9,
    fontFamily: 'Poppins-Regular',
    marginVertical: 4,
    paddingHorizontal: 4,
  },
  cardPlace: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    marginLeft: 4,
  },

  // Bottom tab bar
  tabBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    flexDirection: 'row',
    backgroundColor: 'rgba(5,10,12,0.96)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.15)',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    color: '#9A9AA5',
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    marginTop: 2,
  },
  tabLabelActive: {
    color: '#4BC6DE',
    fontFamily: 'Poppins-SemiBold',
  },
});
export default local;