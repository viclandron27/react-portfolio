import React, { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
// import Nav from "./Nav";
import NavTabs from "./NavTabs";
import Resume from "./pages/Resume";

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    // YOUR CODE HERE
    //

    switch (currentPage) {
      case "Portfolio":
        return <Project />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <header>
        <nav>
          <h1>Victoria Landron</h1>
          <NavTabs
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </nav>
      </header>
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default Header;
