// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Nav from "./components/Nav";

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

  return (
    <div className="App">
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About currentCategory={currentCategory}></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
