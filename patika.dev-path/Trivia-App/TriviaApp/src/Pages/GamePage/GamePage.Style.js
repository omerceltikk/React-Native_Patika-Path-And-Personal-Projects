import { StyleSheet } from "react-native"
import baseStyles from "../../Styles/AuthPage.Style"
export default StyleSheet.create({
  ...baseStyles,
  container: {
    ...baseStyles.container,
    flex:1
  },
  main: {
    width: "100%",
    paddingVertical: 30,
    paddingHorizontal:10,
    flex:1
  },
  imageStyle:{
    flex:0.4,
    width:200,
    height:200,
    alignSelf:"center",
    marginBottom:30
  },
  leadershipArea:{
    flex:0.6
  },
  textColor:{
    ...baseStyles.textColor,
    fontWeight:"bold",
    fontSize:20,
    textAlign:"center"
  },
  headerArea:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    textAlign:"center",
    backgroundColor:"#ddd",
    borderRadius:25,
    padding:10,
    margin:10,
    textAlign:"center",
    // flex:1
  },
  innerHeader:{
    textAlign:"center",
    flex:0.33,
    fontSize:18
  }
})