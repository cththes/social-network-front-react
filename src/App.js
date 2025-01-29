import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/messages" element={<Dialogs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/news" element={<Profile />} />
          <Route path="/music" element={<Profile />} />
          <Route path="/settings" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;