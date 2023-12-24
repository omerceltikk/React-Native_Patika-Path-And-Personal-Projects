import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flex:1,
    backgroundColor:"#ddd",
    borderRadius:25,
    borderWidth:1,
    margin:10,
  },
  headerArea:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    textAlign:"center",
    padding:20,
    flex:1
  },
  header:{
    fontWeight:"bold",
    fontSize:18,
    color:"#27005D",
    justifyContent:"center",
    alignItems:"center",
    flex:0.33,
    textAlign:"center"
  },
  title:{
    color:"#3D246C",
    fontStyle:"italic",
    fontSize:18,
    flex:0.33,
    textAlign:"center"
  },
});
