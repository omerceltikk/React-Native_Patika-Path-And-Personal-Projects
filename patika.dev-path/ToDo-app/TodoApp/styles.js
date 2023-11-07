import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  container: {
    // flex:1,
    // backgroundColor:"black"
  },
  innerContainer: {
    display: 'flex',
    // flexDirection: 'row',
    padding:10
  },
  header:{
    fontSize:30,
    textAlign:"center",
    marginVertical:20,
    color:"orange",
    fontWeight:"bold",
  },
  title:{
    fontSize:25,
    textAlign:"left",
    marginHorizontal:15,
    color:"orange",
    fontWeight:"semibold"
  },
  input:{
    backgroundColor:"#cecece",
    marginVertical:20,
    borderBottomWidth:2,
    borderColor:"#cecece",
    borderRadius: 30,
    padding:10
  },
  button:{
    margin:30,
    padding:20,
    alignItems:"center",
    backgroundColor:"#435585",
    borderRadius:30,
  },
  buttonText:{
    fontSize:25,
    color:"#FFFBF5",
  },
  todoList:{
    marginHorizontal:50,
    paddingVertical:20,
    flexDirection:'row',
    justifyContent:"space-between",
    borderBottomWidth:1,
    borderBottomColor:"#cecece",
  },
  todoTitle:{
    fontWeight:"bold",
    fontSize:20,
    color:"#435585",
  },
  todoItem:{
    fontWeight:"bold",
    fontSize:20,
    color:"#DE8F5F",
  },
  head:{
    fontWeight:"bold",
    fontSize:20,
    color:"#aaaaaa",
    textDecorationLine:"underline"
  }
});
