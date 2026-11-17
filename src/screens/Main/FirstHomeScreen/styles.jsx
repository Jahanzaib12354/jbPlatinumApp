import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const SIDE = 20;
const GAP = 14;
const BIG_CARD = width * 0.86;
const GRID_CARD = (width - SIDE * 2 - GAP) / 2;

const local = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { paddingTop: 36, paddingBottom: 110 },
  row: { flexDirection: 'row', alignItems: 'center' },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIDE,
    marginBottom: 18,
  },
  userRow: { flexDirection: 'row', alignItems: 'center' },
//   avatar: {
//     width: 38,
//     height: 38,
//     borderRadius: 19,
//     backgroundColor: 'rgba(255,255,255,0.15)',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 10,
//   },
avatar: {
  width: 38,
  height: 38,
  borderRadius: 19,
  overflow: 'hidden',
  marginRight: 10,
},

avatarImage: {
  width: '100%',
  height: '100%',
  borderRadius: 19,
  resizeMode: 'cover',
},
  userName: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'BebasNeue-Regular',
    letterSpacing: 1,
  },
  bellBox: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Search
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 46,
    marginHorizontal: SIDE,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
    borderRadius: 14,
    paddingHorizontal: 14,
    marginBottom: 22,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginHorizontal: 10,
    paddingVertical: 0,
  },

  // Section header
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIDE,
    marginTop: 22,
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'BebasNeue-Regular',
    letterSpacing: 1,
  },
  seeAll: {
    color: '#E5E5EA',
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
  },

  // Recommended (big)
  bigCard: {
    width: BIG_CARD,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.45)',
    borderRadius: 22,
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.04)',
  },
  bigImage: {
    width: '100%',
    height: 150,
    borderRadius: 16,
    marginBottom: 12,
  },
  bigTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'BebasNeue-Regular',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  bigDate: {
    color: '#4BC6DE',
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 8,
  },
  bigPlace: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginLeft: 4,
  },

  // Upcoming (grid)
  gridCard: {
    width: GRID_CARD,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.45)',
    borderRadius: 18,
    padding: 8,
    marginBottom: GAP,
    backgroundColor: 'rgba(255,255,255,0.04)',
  },
  gridImage: {
    width: '100%',
    height: 105,
    borderRadius: 13,
    marginBottom: 8,
  },
  gridTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'BebasNeue-Regular',
    letterSpacing: 0.5,
  },
  gridDate: {
    color: '#4BC6DE',
    fontSize: 9,
    fontFamily: 'Poppins-Regular',
    marginVertical: 3,
  },
  gridPlace: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 9,
    fontFamily: 'Poppins-Regular',
    marginLeft: 3,
  },

  // Recent (small)
  recentCard: {
    width: 100,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.45)',
    borderRadius: 14,
    padding: 6,
    backgroundColor: 'rgba(255,255,255,0.04)',
  },
  recentImage: {
    width: '100%',
    height: 62,
    borderRadius: 10,
    marginBottom: 6,
  },
  recentTitle: {
    color: '#FFFFFF',
    fontSize: 11,
    fontFamily: 'BebasNeue-Regular',
  },
  recentPlace: {
    flex: 1,
    color: '#E5E5EA',
    fontSize: 7,
    fontFamily: 'Poppins-Regular',
    marginLeft: 2,
  },

  // Tab bar
  tabBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 80,
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