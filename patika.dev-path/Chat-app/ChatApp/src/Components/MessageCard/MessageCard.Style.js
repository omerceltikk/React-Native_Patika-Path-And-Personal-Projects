import { Dimensions, StyleSheet } from "react-native"
const deviceSize = Dimensions.get("window")

const base_container = StyleSheet.create({
  container:{
    marginVertical:10,
    backgroundColor:"#E36414",
    padding:15,
    borderRadius:20,
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width:deviceSize.width /4 * 3
  },
  text:{
    color:"#ddd",
    fontSize:20,
  },
  date:{
    marginVertical:5,
    color:"#cecece",
    fontSize:12,
    textAlign:"right"
  }
})


export default {
  currentUser: StyleSheet.create({
      ...base_container,
      container:{
        ...base_container.container,
        alignSelf:"flex-end"
      },
      text:{
        ...base_container.text,
        textAlign:"right"
      },
      date:{
        ...base_container.date,
        textAlign:"left"
      }
    }),
    otherUsers: StyleSheet.create({
      ...base_container,
      container:{
        ...base_container.container,
        alignSelf:"flex-start"
      },
      text:{
        ...base_container.text,
        textAlign:"left"
      },
      date:{
        ...base_container.date,
        textAlign:"right"
      }
    })
    
  }

