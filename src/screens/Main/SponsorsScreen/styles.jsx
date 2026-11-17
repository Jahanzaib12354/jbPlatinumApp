import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const H_PADDING = 18;
const GAP = 14;
const CIRCLE = (width - H_PADDING * 2 - GAP * 2) / 3; // 3 circles per row

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: H_PADDING,
    paddingBottom: 50,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
    marginLeft: 12,
  },

  /* Sponsors grid */
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: H_PADDING,
    rowGap: 20,
  },
  ring: {
    width: CIRCLE,
    height: CIRCLE,
    borderRadius: CIRCLE / 2,
    padding: 2, // ring thickness
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleInner: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: CIRCLE / 2,
    backgroundColor: '#0A0A0F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sponsorText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
    textAlign: 'center',
  },

  /* Become a sponsor button */
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4BC6DE',
    marginHorizontal: H_PADDING,
    marginTop: 40,
    height: 48,
    borderRadius: 24,
  },
  buttonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 8,
    letterSpacing: 0.5,
  },

  /* Bottom tab bar */
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0B0F14',
    paddingTop: 10,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.08)',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 60,
  },
  tabIconActive: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#4BC6DE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    color: '#9A9A9A',
    fontSize: 10,
    marginTop: 4,
  },
  tabLabelActive: {
    color: '#4BC6DE',
  },
});

export default styles;