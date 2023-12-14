import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container:{
    borderColor:"#000",
    margin:10,
    borderWidth:1,
    padding:20,
    borderRadius:20,
  },
  listContainer:{
    flexDirection:"row",
    alignItems:"center",
    flex:1,
    marginBottom:10,
  },
  bookname:{
    flex:1,
    color:"gray",
    fontWeight:"900"
  },
  inner:{
    flex:1
  },  
  title:{
    // flex:1,
    color:"gray",
    fontWeight:"600"
  },
  date:{
    flex:1,
    color:"gray",
    fontWeight:"400",
    fontStyle:"italic"
  },
  image:{
    width:70,
    height:70,
    borderRadius:100,
    marginRight:30,
  }
})