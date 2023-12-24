import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    backgroundColor: "#27005D",
  },
  main: {
    width: "100%",
    padding: 30,
  },
  input: {
    borderRadius: 100,
    paddingHorizontal: 20,
    backgroundColor: "#dadada",
    marginVertical:15,
  },
  imageStyle: {
    zIndex: 1,
    width: 400,
    height: 400,
    alignSelf:"center",
    marginBottom:30
  },
  button:{
    padding:10,
    paddingHorizontal:60,
    textAlign:"center",
    alignSelf:"center",
    backgroundColor:"#2E97A7",
    borderRadius:100,
    marginTop:10,
  },
  company:{
    fontWeight:"700",
    fontSize:35,
    textAlign:"center",
    color:"#ddd",
    marginBottom:20
  },
  textColor:{
    color:"#ddd",
  },
  link:{
    textAlign:"center",
    fontSize:13,
    fontStyle:"italic",
    color:"#cecece",
    marginTop:10
  }
})