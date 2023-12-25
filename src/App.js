import React from "react";
import Body from "./Components/Body"
import { Provider } from "react-redux";
import appStore from "./Utils/store/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body/>
   </Provider>
  );
}

export default App;

