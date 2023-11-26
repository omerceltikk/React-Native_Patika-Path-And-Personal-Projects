import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button:{
    backgroundColor:"#363062",
    padding:3,
    borderRadius:20,
    fontSize:15,
    fontWeight:'bold',
    margin:10,
    color:"#ddd"
  },
  buttonArea:{
    flex:1,
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"center"
  },
  disabled:{
    backgroundColor:"#fff",
    padding:3,
    borderRadius:20,
    fontSize:15,
    fontWeight:'bold',
    margin:10,
    color:"#bbb"
  }
});
