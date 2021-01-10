// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Nav from "./components/Nav";

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
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
