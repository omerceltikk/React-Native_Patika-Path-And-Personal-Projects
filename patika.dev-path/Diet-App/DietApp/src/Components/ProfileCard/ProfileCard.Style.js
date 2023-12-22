import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  card: {
    flexDirection:"row",
    borderRadius:25,
    borderWidth:1,
    borderColor:"#304D30",
    margin:10,
    flex:1,
    backgroundColor:"#eee"
  },
  headerArea:{
    flexDirection:"column",
    textAlign:"center",
    flex:0.7,
    justifyContent:"space-between"
  },
  infoArea:{
    flexDirection:"row",
    overflow:"scroll",
    padding:10,
    backgroundColor:"#89B9AD",
    borderRadius:15,
    margin:10,
    },
  title:{
    color:"#304D30",
    fontSize:16,
    padding:10,
    fontWeight:"bold",
    fontStyle:"italic",
  },  
  imageStyle:{
    flex:0.3,
    borderTopLeftRadius:25,
    borderBottomLeftRadius:25,
    padding:20,    
    maxHeight:120
  },
  tag:{
    paddingHorizontal:5,
    color:"#eee",
    fontWeight:"bold"
  }
});
