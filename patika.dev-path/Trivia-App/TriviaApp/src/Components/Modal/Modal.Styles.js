import { Dimensions, StyleSheet } from "react-native"
const deviceSize = Dimensions.get("window")
export default StyleSheet.create({
  container: {
    alignItems: "center",
    height: deviceSize.height / 4,
    backgroundColor: "#eee",
    justifyContent:"space-around",
    borderRadius:25
  },
  input: {
    paddingHorizontal: 20,
    width:"90%",
    borderRadius:20,
    margin:15,
    backgroundColor:"#eee"
  },
  button:{
    padding:10,
    marginBottom:10,
    borderRadius:10,
    backgroundColor:"#2E97A7",
    justifyContent:"end",
    alignItems:"center",
    width: deviceSize.width /2,
  },
  buttonText:{
    color:"#ccc",
    textAlign:"center"
  },

})