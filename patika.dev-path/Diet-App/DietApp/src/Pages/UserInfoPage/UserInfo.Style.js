import styles from "../../Styles/AuthPage.Style"
import { Dimensions, StyleSheet } from "react-native"


export default StyleSheet.create({
      ...styles,
      container:{
        ...styles.container,
        backgroundColor:"#cecece"
      },
      main:{
        ...styles.main,
      },
      input:{
        ...styles.input,
        backgroundColor:"#aaa"
      },
      imageStyle:{
        ...styles.imageStyle
      },
      button:{
        ...styles.button
      },
      title:{
        color:"rgb(120,120,120)",
        fontSize:18,
        fontWeight:"600",
        fontStyle:"italic",
        marginBottom:20,
      },
      titleColored:{
        ...styles.title,
        color:"#5C8374",
        fontWeight:"800"
      },
      company:{
        ...styles.company,
        color:"#5C8374",
        fontSize:20,
        textAlign:"left",
        marginVertical:10,
      },
      genderGroup:{
        flexDirection:"row",
        display:"flex",
        justifyContent:"center"
      },
      radioText:{
        fontWeight:"700",
        color:"rgb(120,120,120)",
        fontSize:18
      },
      innerRadio:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        margin:5
      },
      innerInputGroup:{
        flexDirection:"row",
        justifyContent:"space-between",
      },
      innerInput:{
        ...styles.input,
        flex:0.3,
        margin:5,
        fontSize:10,
        marginVertical:10,
        backgroundColor:"#eee"
      },
      dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },

    })
   


