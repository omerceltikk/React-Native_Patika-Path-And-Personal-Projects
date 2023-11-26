import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor:"#363062",
    paddingHorizontal: 20,
    paddingVertical:10,
  },
  innerCard:{
    flexDirection:"row",
    alignItems: 'center',
    justifyContent:"center",
    padding:15,
    borderColor:"#cecece",
    borderWidth:1,
    backgroundColor:"white",
    gap:15,
  },
  button:{
    backgroundColor:"#DDF2FD",
    padding:5,
    borderRadius:10,
    fontSize:12,
    fontWeight:'bold'
  },
  category:{
    fontSize:15,
    fontWeight:"bold",
    color:"orange",
    fontStyle:"italic",
    textAlign:"center"
  },
  inner:{
    flex:1
  },
  name:{
    color:"#192655",
    fontSize:18,
    fontWeight:"bold"
  }
});
