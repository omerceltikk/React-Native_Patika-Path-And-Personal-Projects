import { Dimensions, StyleSheet } from "react-native"
const deviceSize = Dimensions.get("window")
export default StyleSheet.create({
  container: {
    alignItems: "center",
    height: deviceSize.height / 4,
    backgroundColor: "#eee",
    justifyContent:"space-between"
  },
  input: {
    paddingHorizontal: 20,
    width:"90%",
    borderRadius:20,
    margin:15,
  },
  button:{
    padding:10,
    marginBottom:10,
    borderRadius:10,
    backgroundColor:"#E36414",
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
  }
})