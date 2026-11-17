import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
  },

  imageFrame: {
    width: '86%',
    height: '52%',
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#38D0DB',
    padding: 4,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
  },

  textContainer: {
    width: '86%',
    alignItems: 'center',
    marginTop: 28,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  description: {
    color: '#C9C9D1',
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
    marginTop: 12,
  },

  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#49304B',
    marginHorizontal: 3,
  },

  activeDot: {
    width: 22,
    backgroundColor: '#38D0DB',
  },

  button: {
    position: 'absolute',
    bottom: 30,
    width: '86%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#38D0DB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#020204',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1,
  },
});

export default styles;