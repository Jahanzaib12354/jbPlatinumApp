
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 22,
    paddingBottom: 35,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 35,
  },

//   backButton: {
//     width: 42,
//     height: 42,
//     borderRadius: 12,
//     backgroundColor: 'rgba(255,255,255,0.10)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '700',
    marginLeft: 18,
  },

  iconContainer: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 25,
  },

  iconCircle: {
    width: 115,
    height: 115,
    borderRadius: 60,
    backgroundColor: 'rgba(255,92,101,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255,92,101,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },

  subtitle: {
    color: '#B8C0C8',
    fontSize: 14,
    lineHeight: 23,
    textAlign: 'center',
    marginHorizontal: 8,
    marginBottom: 30,
  },

  warningCard: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.10)',
    padding: 18,
    marginBottom: 30,
  },

  warningHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  warningTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    marginLeft: 10,
  },

  warningText: {
    color: '#D5D9DF',
    fontSize: 14,
    marginBottom: 15,
  },

  pointRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 13,
  },

  pointText: {
    color: '#B8C0C8',
    fontSize: 13,
    marginLeft: 10,
    flex: 1,
    lineHeight: 20,
  },

  deleteButton: {
    height: 55,
    borderRadius: 13,
    backgroundColor: '#D93643',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  deleteButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  cancelButton: {
    height: 53,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
  },

  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },

  footerText: {
    color: '#858D96',
    fontSize: 12,
    lineHeight: 19,
    textAlign: 'center',
    marginTop: 25,
    paddingHorizontal: 10,
  },

});

export default styles;
