import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./store/Store";

// Testing here code work or node.
// console.log("Store", store.getState());
// store.dispatch({ type: "CHANGE_TASK", payload: "new task name" });
// console.log("Store", store.getState());
// console.log("Store", store.getState().TaskReducer.task);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
