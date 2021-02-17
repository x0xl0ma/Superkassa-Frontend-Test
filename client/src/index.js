import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./store/configureStore";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


const myApp = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

ReactDOM.render(myApp, document.getElementById("root"));

reportWebVitals();
