import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  comfortContainer: {
    width: '100%',
    height: 140,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  comfortTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 30
  },
  comfortButtom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 110,
  },
  comfortTitle: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  comfortTitleIcon: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoIcon: {
    width: 30,
    height: 30,
    fontSize: 22,
    color: '#006699'
  }
});
