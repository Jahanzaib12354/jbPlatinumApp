
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 35,
  },

  logoOuter: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: '#D000E9',
    borderLeftColor: '#00D9FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoInner: {
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: '#101014',
    borderWidth: 1,
    borderColor: '#24242A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoText: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '900',
  },

  appName: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '900',
    marginTop: 22,
    letterSpacing: -1,
  },

  loadingContainer: {
    position: 'absolute',
    bottom: 34,
    width: '100%',
    alignItems: 'center',
  },

  loadingBackground: {
    width: 67,
    height: 3,
    backgroundColor: '#49304B',
    borderRadius: 5,
  },

  loadingProgress: {
    width: 22,
    height: 3,
    backgroundColor: '#38D0DB',
    borderRadius: 5,
  },

});

export default styles;
