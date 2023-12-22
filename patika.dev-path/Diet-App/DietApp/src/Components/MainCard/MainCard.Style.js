import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    borderRadius:25,
    borderWidth:1,
    borderColor:"#304D30",
    margin:10,
    flex:1
  },
  headerArea:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center",
    flex:1,
    paddingVertical:20,
    maxWidth:"50%"
  },
  header:{
    fontWeight:"bold",
    fontSize:16,
    color:"#000",
    justifyContent:"center",
    alignItems:"center",
    opacity:1.0,
    padding:10,
    marginTop:20
  },
  button:{
    backgroundColor:"#EA906C",
    color:"white",
    padding:5,
    borderRadius:10,
    fontSize:12,
    fontWeight:'bold'
  },

  title:{
    color:"gray",
    fontSize:14,
    marginTop:14,
  },  
  image:{
    flex:1,
    zIndex:200,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    padding:20,
    overflow:"hidden",
    opacity:0.9,
    height:150,
  },
  category:{
    color:"gray",
    fontSize:16,
  }
});
