import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor:"#B31312",
    paddingHorizontal: 20,
    paddingVertical:10,
  },
  generalCard:{
    backgroundColor:"white",
    borderRadius:30,
    padding:15,
    borderWidth:1,
    borderColor:"#cecece",
  },
  innerCard:{
    flexDirection:"row",
    alignItems: 'center',
    justifyContent:"center",
    padding:15,
    gap:15,
  },
  button:{
    backgroundColor:"#EA906C",
    color:"white",
    padding:5,
    borderRadius:10,
    fontSize:12,
    fontWeight:'bold'
  },
  name:{
    color:"#192655",
    fontSize:18,
    fontWeight:"bold",
    padding:10
  },
  image:{
    flex:1,
    width:"100%",
    height:500,
    marginVertical:10,
    borderRadius:20
  }
});
