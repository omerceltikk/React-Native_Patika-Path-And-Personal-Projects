import { Dimensions, StyleSheet } from "react-native"
const deviceSize = Dimensions.get("window")
export default StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#eee",
    justifyContent:"space-between",
    borderRadius:15
  },
  button:{
    padding:10,
    margin:30,
    borderRadius:10,
    backgroundColor:"#5C8374",
    justifyContent:"end",
    alignItems:"center",
    width: deviceSize.width /2,
  },
  buttonText:{
    color:"#ccc",
    textAlign:"center"
  },
  modal:{
    justifyContent:"center",
    margin:0
  },
  title: {
    fontSize:16,
    fontWeight:"bold",
    fontStyle:"italic",
    margin:10
  },
  picker:{
    backgroundColor:"#eee",
  }
})