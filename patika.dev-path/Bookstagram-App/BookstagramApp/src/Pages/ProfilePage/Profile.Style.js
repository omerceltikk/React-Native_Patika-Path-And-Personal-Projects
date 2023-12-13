import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#161A30",
    padding:40
  },
  main: {
    display: "flex",
    flexDirection:"column",
    width: "100%",
    marginTop:40,
    padding: 30,
  },
  headerArea:{
    flexDirection:"row",
    alignItems:"center",
    paddingBottom:40,
    borderBottomWidth:1,
    borderBottomColor:"gray"
  },
  header:{
    fontWeight:"bold",
    fontSize:24,
    marginLeft:30,
    color:"gray",
  },
  icon:{
    borderWidth:1,
    borderColor:"gray",
    borderRadius:100,
    width:60,
    height:60,
    zIndex:200
  },
  postsArea:{
    flex:1,
    backgroundColor:"#111426",
    marginTop:30,
    borderRadius:30,
  },
  posts:{
    flex:0.33
  }
})