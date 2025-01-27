import React from "react";

import "./App.css";

import logo from "./assets/images/logo.jpg";

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <header className="app__header">
          <img src={logo} alt="Logo" className="app__logo" />
        </header>
        <nav className="app__nav">
          <div className="app__nav-item">
            <a href="#" className="app__link">
              Profile
            </a>
          </div>
          <div className="app__nav-item">
            <a href="#" className="app__link">
              Messages
            </a>
          </div>
          <div className="app__nav-item">
            <a href="#" className="app__link">
              News
            </a>
          </div>
          <div className="app__nav-item">
            <a href="#" className="app__link">
              Music
            </a>
          </div>
          <div className="app__nav-item">
            <a href="#" className="app__link">
              Settings
            </a>
          </div>
        </nav>
        <div className="app__content">
          <div className="app__main-content">Main content</div>
          <div className="app__posts">
            <h2 className="app__posts-title">My Posts</h2>
            <div className="app__posts-item">Post 1</div>
            <div className="app__posts-item">Post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
