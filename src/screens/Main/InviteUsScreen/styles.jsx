
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const CARD_W = width * 0.78;
export const CARD_GAP = 12;
const styles = StyleSheet.create({
  container: {flex: 1},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 19,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
    marginLeft: 12,
  },

  card: {
    width: CARD_W,
    height: 175,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: CARD_GAP,
  },
  cardImg: {width: '100%', height: '100%'},
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  badge: {
    position: 'absolute',
    top: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeText: {color: '#fff', fontSize: 8, fontWeight: '700', marginLeft: 4},
  playBtn: {
    position: 'absolute',
    top: '30%',
    left: '42%',
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#4BC6DE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBottom: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 8,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  cardTitle: {color: '#fff', fontSize: 14, fontWeight: '800'},
  cardSub: {color: '#ddd', fontSize: 9, marginTop: 2},
  cardTime: {color: '#fff', fontSize: 9},

  indicatorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 18,
  },
  dots: {flexDirection: 'row', alignItems: 'center'},
  dot: {
    width: 8,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#555',
    marginRight: 4,
  },
  counter: {color: '#aaa', fontSize: 10},

  formTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 14,
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.8)',
    borderRadius: 12,
    paddingHorizontal: 14,
    color: '#fff',
    fontSize: 12,
    marginBottom: 12,
  },
  inputRow: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.8)',
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 12,
  },
  rowInput: {flex: 1, color: '#fff', fontSize: 12, padding: 0},
  iconBox: {
    width: 18,
    height: 18,
    borderRadius: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  divider: {
    width: 1,
    height: 18,
    backgroundColor: 'rgba(255,255,255,0.4)',
    marginHorizontal: 10,
  },
  messageInput: {height: 110, paddingTop: 12},

  upload: {
    height: 100,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'rgba(255,255,255,0.6)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 16,
  },
  uploadText: {color: '#fff', fontSize: 12, marginTop: 6},

  submitBtn: {
    height: 46,
    borderRadius: 12,
    backgroundColor: '#4BC6DE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    color: '#000',
    fontSize: 12,
    fontWeight: '800',
    marginLeft: 8,
    letterSpacing: 0.5,
  },
});

export default styles;