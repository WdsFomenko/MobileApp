import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  routeType: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '100%',
  },
  routeTypeIcon: {
    flex: 0.05,
  },
  routeIcon: {
    width: 30,
    height: 30,
    fontSize: 22,
    color: '#006699',
    position: 'absolute',
    right: 0,
    top: 5
  },
  routeTypeWrapper: {
    flex: 0.85,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 60,
  },
  routeTypeLabel: {
    height: 30,
    fontSize: 16,
  },
  routeTypeContainer: {
    width: '100%',
    borderWidth: 1,
    height: 30,
    borderColor: '#cccccc'
  },
  routeTypeInput: {
    color: '#006699',
    height: 25,
  },
  routeTypeOption: {
    height: 20,
    color: '#006699'
  }
});