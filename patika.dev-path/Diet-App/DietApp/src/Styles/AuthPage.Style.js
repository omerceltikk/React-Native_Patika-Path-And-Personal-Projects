import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    backgroundColor: "#304D30"
  },
  main: {
    width: "100%",
    marginTop:60,
    padding: 30,
  },
  input: {
    borderRadius: 100,
    paddingHorizontal: 20,
    backgroundColor: "#dadada",
    margin:10,
  },
  imageStyle: {
    zIndex: 1,
    width: 400,
    height: 300,
    alignSelf:"center",
  },
  button:{
    padding:10,
    paddingHorizontal:60,
    textAlign:"center",
    alignSelf:"center",
    backgroundColor:"#5C8374",
    borderRadius:100,
    marginTop:10,
  },
  company:{
    fontWeight:"700",
    fontSize:35,
    textAlign:"center",
    color:"#ddd",
    marginVertical:20
  },
  textColor:{
    color:"#ddd",
  },
  link:{
    marginTop:10,
    textAlign:"center",
    fontSize:13,
    fontStyle:"italic",
    color:"#FAEED1"
  }
})