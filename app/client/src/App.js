import "./App.css";
import React from 'react';
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import GetNewRecipes from "./components/routes/GetNewRecipes";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import { faBowlRice } from "@fortawesome/free-solid-svg-icons";


function App() {
  return (
    
    <div className="app">
      {/* <Header /> */}
      <GetNewRecipes />
      <Footer />

    </div>
  )
}

export default App;
