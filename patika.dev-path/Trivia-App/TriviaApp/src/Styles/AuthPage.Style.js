import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    backgroundColor: "#E36414"
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
    backgroundColor:"#5C8374",
    borderRadius:100,
    marginTop:10,
    borderWidth:1,
    borderColor:"#5C8374"
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
    color:"#5F0F40"
  }
})