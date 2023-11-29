import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    // justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#ededed"
  },
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop:40,
    padding: 50,

  },
  input: {
    borderRadius: 100,
    paddingHorizontal: 20,
    backgroundColor: "#dadada",
    margin:15,
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
    // width:"50%",
    textAlign:"center",
    alignSelf:"center",
    backgroundColor:"#E74646",
    borderRadius:100,
    color:"#fff"
    
  },
  company:{
    fontWeight:"700",
    fontSize:35,
    textAlign:"center",
    color:"#E74646",
    marginBottom:10
  },
  textColor:{
    color:"#fff"
  },
  link:{
    textAlign:"center",
    fontSize:13,
    fontStyle:"italic",
    color:"#8EACCD"
  }
})