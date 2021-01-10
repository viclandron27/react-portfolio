import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.js"
import Footer from "./components/Footer";
// import Header from "./components/Header"

function App() {

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);
  // const [contactSelected, setContactSelected] = useState(false);
  // const [portfolioSelected, setPortfolioSelected] = useState(false);

  return (
    <div className="App">
      {/* <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
      ></Nav> */}
      <main>
        <Header></Header>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;