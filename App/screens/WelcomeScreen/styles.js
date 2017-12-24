import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerSlogan: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  sloganLabel: {
    color: '#fff',
    fontSize: 18
  },
  subSloganLabel: {
    color: '#fff',
    fontSize: 20
  },
  headerSubSlogan: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    width: '100%',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeImage: {
    width: '100%',
    height: '100%'
  },
  footer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0099ff'
  },
  submitBtn: {
      width: 200,
      height: 40,
      borderColor: '#006699',
      backgroundColor: '#006699',
      borderRadius: 10,
  },
  submitBtnInner: {
      color: '#fff'
  }
});
