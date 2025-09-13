import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Devices from "./pages/DevicePage.jsx";
import About from "./pages/About.jsx";
import Login from "./components/Login.jsx";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <nav className="bg-gradient-to-r from-secure-blue to-wipe-green text-white p-4 fixed w-full top-0 z-10 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center animate-fade-in">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">SecureWipe AI</span>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
          <div
            className={`md:flex space-x-6 ${isMenuOpen ? "block" : "hidden"} md:block absolute md:static top-16 left-0 w-full md:w-auto bg-secure-blue md:bg-transparent p-4 md:p-0`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block md:inline-block text-white hover:text-wipe-green transition-colors duration-300 py-2 md:py-0 ${
                  isActive ? "text-wipe-green font-semibold" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/devices"
              className={({ isActive }) =>
                `block md:inline-block text-white hover:text-wipe-green transition-colors duration-300 py-2 md:py-0 ${
                  isActive ? "text-wipe-green font-semibold" : ""
                }`
              }
            >
              Devices
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block md:inline-block text-white hover:text-wipe-green transition-colors duration-300 py-2 md:py-0 ${
                  isActive ? "text-wipe-green font-semibold" : ""
                }`
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="pt-20">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/devices"
            element={
              <ProtectedRoute>
                <Devices />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;