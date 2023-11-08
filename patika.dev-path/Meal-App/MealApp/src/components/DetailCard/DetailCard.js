import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor:"#ccc",
    paddingHorizontal: 20,
    paddingVertical:10,
    flex:1
  },
  innerCard:{
    backgroundColor:"white",
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:10,
    borderColor:"#cecece",
    borderWidth:1,
    borderRadius:30
  },
  button:{
    backgroundColor:"#DDF2FD",
    padding:5,
    borderRadius:10,
    fontSize:12,
    fontWeight:'bold'
  },
  category:{
    fontSize:23,
    fontWeight:"bold",
    color:"#2B3499",
    fontStyle:"italic"
  },
  header:{
    fontSize:23,
    fontWeight:"bold",
    color:"#EC8F5E",
    fontStyle:"italic"
  },
  Image:{
    width:300,
    height:300
  }
});
