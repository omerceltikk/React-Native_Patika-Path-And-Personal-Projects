import { Provider } from "react-redux"
import store from "./Redux/Store";
import Router from "./Router";
import FlashMessage from "react-native-flash-message";

function App() {

  return (
    <Provider store={store}>
      <Router />
      <FlashMessage position="top" />
    </Provider>
  );
}
export default App;
