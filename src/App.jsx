// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Companies from "./Components/Companies/Companies";
import Residencies from "./Components/Residencies/Residencies";
import Value from "./Components/Value/Value";
import Contacts from "./Components/Contacts/Contacts";
import GetStarted from "./Components/GetStarted/GetStarted";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* The Header can include links to different routes */}
        <div>
          <div className="container">
            <div className="white-gradient" />
          </div>
          <Hero /> {/* Hero can be part of a specific route or always displayed */}
        </div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/residencies" element={<Residencies />} />
          <Route path="/value" element={<Value />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
