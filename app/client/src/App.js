import "./App.css";
import React from 'react';
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import GetNewRecipes from "./components/routes/GetNewRecipes";

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
