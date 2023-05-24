import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* <NavBar /> */}
        <Login />
        <Profile />
        {/* <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Profile />} />
          </Routes>
        </BrowserRouter> */}
      </div>
    </div>
  );
}

export default App;
