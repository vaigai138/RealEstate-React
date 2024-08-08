import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import "./App.css"
import Companies from "./Components/Companies/Companies";
import Residencies from "./Components/Residencies/Residencies";
import Value from "./Components/Value/Value";
import Contacts from "./Components/Contacts/Contacts";
import GetStarted from "./Components/GetStarted/GetStarted";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
      <div className="container">
        <div className="white-gradient"/>
        </div>
      <Header/>
      <Hero/>
      </div>
      <Companies />
      <Residencies/>
      <Value/>
      <Contacts/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
