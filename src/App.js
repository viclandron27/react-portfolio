import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";

function App() {
  const categories = [
    {
      name: "Portfolio",
      description: "Overview of my different projects",
    },
    {
      name: "Resume",
      description:
        "Link to my resume describing all my previous work and experience",
    },
  ];
  
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);

  return (
    <div className="App">
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
      ></Nav>
      <main>

        {!contactSelected ? (
          <>
            <About currentCategory={currentCategory}></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}

        
         {/* {!portfolioSelected ? (
          <>
            <About currentCategory={currentCategory}></About>
          </>
        ) : (
          <Portfolio></Portfolio>
        )} */}

      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;