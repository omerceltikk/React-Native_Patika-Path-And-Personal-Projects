import { StyleSheet } from "react-native"
import baseStyles from "../../Styles/AuthPage.Style"
export default StyleSheet.create({
  ...baseStyles,
  container: {
    ...baseStyles.container,
    justifyContent:"space-evenly",
    padding:30
  },

  header:{
    fontSize:32,
    fontWeight:"bold",
    color:"#ccc",
    margin:20
  },
  textColor:{
    ...baseStyles.textColor,
    fontWeight:"bold",
    fontSize:20,
    textAlign:"center"
  },
  imageStyle:{
    width:350,
    height:350,
    alignSelf:"center",
    marginBottom:30
  },
 
})