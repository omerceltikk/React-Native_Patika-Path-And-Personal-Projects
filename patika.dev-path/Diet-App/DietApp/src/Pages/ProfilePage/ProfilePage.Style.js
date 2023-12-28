import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#5C8374',
    flex: 1,
  },
  main: {
    flex: 1,
  },
  headerArea: {
    // flex:0.5,
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#5C8374',
  },
  mainInfo: {
    // flex:1,
    marginTop: 10,
    paddingVertical: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#cecece',
  },
  infoArea: {
    // flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingVertical: 30,
    backgroundColor: '#89B9AD',
    borderRadius: 15,
    margin: 10,
  },
  listArea: {
    backgroundColor: '#cecece',
    flex: 1,
    paddingBottom: 100,
  },
  innerInfo: {
    flex: 0.5,
    gap: 10,
  },
  button: {
    backgroundColor: '#5C8374',
    color: 'white',
    padding: 10,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginHorizontal: 10,
  },
  title: {
    color: '#eeee',
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  imageStyle: {
    maxHeight: 120,
    borderWidth: 1,
    color: '#cecece',
  },
  tag: {
    fontSize: 18,
    paddingHorizontal: 5,
    color: '#eee',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
