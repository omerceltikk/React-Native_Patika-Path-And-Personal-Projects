import {Provider} from "react-redux"
import store from "./Redux/Store";
import { Text } from "react-native";
function App() {
  return (
    <Provider store={store}>
    <Text>
      sadasdsad
      </Text>  
    </Provider>
  );
}
export default App;
