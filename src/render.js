import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { addPost, updatePostInput } from "./components/redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let updateUI = (state) => {
  root.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updatePostInput={updatePostInput} />
    </BrowserRouter>
  );
};
