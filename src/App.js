import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Routes, Route } from "react-router-dom";

function App({ state, addPost, updatePostInput }) {
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
              path={path}
              element={
                <Profile
                  profile={state.profile}
                  addPost={addPost}
                  updatePostInput={updatePostInput}
                />
              }
            />
          ))}
          <Route
            path="/messages"
            element={<Dialogs dialogs={state.dialogs} messages={state.messages} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
