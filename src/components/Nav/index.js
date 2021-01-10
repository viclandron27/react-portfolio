import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
 const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected,
        portfolioSelected,
        setPortfolioSelected,
      } = props;



  function categorySelected(name) {
    console.log(`${name} clicked`)
  }

  return (
    <header>
      <nav>
        <h1 className="title">Victoria Landron</h1>
        <ul className="nav-categories">
          <li className={`mx-1 ${!contactSelected && 'navActive'}`}>
            <a href="#about" onClick={() => setContactSelected(false)}>About Me</a>
          </li>
          <li className={`mx-1 ${!contactSelected && 'navActive'}`}>
              <span href="#portfolio" onClick={() => {
                  setContactSelected(false);
                  setPortfolioSelected(true);
                  }}>Portfolio</span>
          </li>
          <li className={`mx-1 ${!contactSelected && portfolioSelected && 'navActive'}`}>
              <span href="#resume" onClick={() => setContactSelected(false)}>Resume </span>
          </li>

          {/* {categories.map((category) => (
            <li className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && `navActive`
                }`} 
                key={category.name}>
             <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);;
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))} */}

          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span href="contact" onClick={() => setContactSelected(true)}>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;