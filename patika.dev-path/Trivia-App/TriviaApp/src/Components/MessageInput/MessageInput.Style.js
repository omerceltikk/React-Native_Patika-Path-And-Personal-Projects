import { Dimensions, StyleSheet } from "react-native"
const deviceSize = Dimensions.get("window")
export default StyleSheet.create({
  container: {
    alignItems: "center",
    height: deviceSize.height / 5,
    backgroundColor: "#eee",
    justifyContent:"space-between",
    width:"100%",
    margin:0,
    borderTopWidth:1,
    borderTopColor:"#ddd"
  },
  input: {
    paddingHorizontal: 20,
    width:"90%",
    borderRadius:20,
    margin:15,
    color:"#E36414",
  },
  button:{
    padding:10,
    marginBottom:10,
    borderRadius:10,
    backgroundColor:"#E36414",
    justifyContent:"end",
    alignItems:"center",
    width: deviceSize.width /3,
  },
  buttonText:{
    color:"#ccc",
    textAlign:"center"
  },
  modal:{
    justifyContent:"flex-end",
    margin:0
  }
})