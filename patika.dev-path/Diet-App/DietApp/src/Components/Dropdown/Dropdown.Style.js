import { Dimensions, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  dropdown: {
    borderRadius:20,
  },
  buttonStyle:{
    width:"100%",
    borderRadius:20,
    marginVertical:20,
    backgroundColor:"#eee",
    color:"#5C8374"
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
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
});

export default styles;