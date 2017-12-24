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
    height: 30,
    backgroundColor: '#0099ff'
  },
  main: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
  },
  mainRouteOptionsSection: {
    width: '100%',
    height: 140,
    flexDirection: 'row',
    marginTop: 10
  },
  routeOptionsLeft: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  routeOptionsLeftTop: {
    flex: 0.5,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  routeOptionsLeftButtom: {
    flex: 0.5,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  routeOptionsRight: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainRouteTypeSection: {
    width: '100%',
    height: 60,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  submitBtn: {
    width: 200,
    height: 40,
    borderColor: '#006699',
    backgroundColor: '#0099ff',
    borderRadius: 10,
  },
  submitBtnInner: {
    color: '#fff'
  },
  routeType: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 60,
    width: '100%',
  },
  routeTypeLabel: {
    height: 30,
    fontSize: 16,
  },
  routeTypeContainer: {
    width: '90%',
    borderWidth: 1,
    height: 25,
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
