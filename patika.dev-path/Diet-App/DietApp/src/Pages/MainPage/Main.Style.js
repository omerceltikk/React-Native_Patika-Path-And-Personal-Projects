import { StyleSheet,Dimensions } from "react-native"
const deviceSize = Dimensions.get("window")
export default StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    height:"100%",
    backgroundColor: "#eee",
  },
  main: {
    // flex:1,
    display: "flex",
    // width: deviceSize.width,
    flexDirection: "column",
    width: "100%",
    paddingVertical: 30,
    paddingHorizontal:10,
    marginBottom:20
  },
  content1:{
    flex:0.5
  },  
  header:{
    color:"rgb(120,120,120)",
    fontSize:18,
    fontWeight:"600",
    fontStyle:"italic",
    marginBottom:20,
  }
})