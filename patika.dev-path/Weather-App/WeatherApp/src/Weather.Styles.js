import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    // background:
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    display: 'flex',
    // flexDirection: 'row',
    padding: 10,
  },

  input: {
    backgroundColor: '#cecece',
    // marginVertical: 20,
    borderBottomWidth: 2,
    borderColor: '#cecece',
    borderRadius: 30,
    padding: 10,
  },
  button: {
    margin: 30,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#435585',
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 25,
    color: '#FFFBF5',
  },
  todoTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#435585',
  },
  todoItem: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#DE8F5F',
  },
  head: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#aaaaaa',
    textDecorationLine: 'underline',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    paddingVertical: 20,
  },
  innerCard: {
    paddingVertical: 30,
    paddingHorizontal: 6,
    alignItems:"center"
  },
  cardText: {
    flexDirection: 'row',
    padding: 2,
    fontWeight: 'bolder',
  },
  list: {
    flex: 1,
    backgroundColor: '#cecece',
    opacity: 0.7,
    borderRadius:30,
    
  },
});
