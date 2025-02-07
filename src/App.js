import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App({ state, dispatch }) {
  const profilePaths = ["/", "/profile", "/news", "/music", "/settings"];
  return (
    <div className="app">
      <div className="app__wrapper">
        <Header />
        <Navbar />
        <Routes>
          {profilePaths.map((path) => (
            <Route
              key={path}
              path={path === "/profile" ? "/profile/:userId?" : path}
              element={<Profile profile={state.profile} dispatch={dispatch} />}
            />
          ))}
          <Route
            path="/messages"
            element={<DialogsContainer dialogs={state.dialogs} dispatch={dispatch} />}
          />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
