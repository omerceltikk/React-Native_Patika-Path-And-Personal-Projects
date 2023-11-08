import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor:"#ccc",
    paddingHorizontal: 20,
    paddingVertical:10
  },
  innerCard:{
    backgroundColor:"white",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:10,
    borderColor:"#cecece",
    borderWidth:1,
    borderRadius:30
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#cecece',
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
    color:"orange",
    fontStyle:"italic"
  }
});
