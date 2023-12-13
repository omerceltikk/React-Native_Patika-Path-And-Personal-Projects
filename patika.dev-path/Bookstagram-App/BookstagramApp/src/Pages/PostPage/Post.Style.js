import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    backgroundColor: "#161A30"
  },
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop:40,
    padding: 30,
  },
  input: {
    borderRadius: 100,
    paddingHorizontal: 20,
    backgroundColor: "#a1a3ac",
    margin:15,
  },
  textArea: {
    borderRadius: 20,
    paddingHorizontal: 20,
    backgroundColor: "#a1a3ac",
    margin:15,
  },
  heading:{
    padding:5,
  paddingHorizontal:15,
    color:"gray",
    fontWeight:"bold",
  },  
  button:{
    padding:10,
    paddingHorizontal:60,
    textAlign:"center",
    alignSelf:"center",
    backgroundColor:"#E74646",
    borderRadius:10,
    color:"#fff",
    marginTop:10
  },
  company:{
    fontWeight:"700",
    fontSize:35,
    textAlign:"center",
    color:"#E74646",
    marginBottom:20
  },
  textColor:{
    color:"#fff"
  },
  link:{
    textAlign:"center",
    fontSize:13,
    fontStyle:"italic",
    color:"#8EACCD"
  },
  buttonArea:{
    flexDirection:"row",
    justifyContent:"space-around",
    gap:20,
    paddingHorizontal:20,
    margin:10
  },
  takePic:{
    flex:1,
    backgroundColor:"#2d3044",
    padding:20,
    borderRadius:15,
    alignItems:"center"
  },
  chooseImage:{
    flex:1,
    backgroundColor:"#2d3044",
    padding:20,
    borderRadius:15,
    alignItems:"center"
  },
  error:{
    textAlign:"center",
    marginTop:20
  }
})