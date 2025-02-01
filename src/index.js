import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./components/redux/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

let updateUI = () => {
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </Provider>
  );
};

updateUI(store.getState());

store.subscribe(() => {
  updateUI(store.getState);
});
