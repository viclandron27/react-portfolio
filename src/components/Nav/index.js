import React from "react";

function Nav(props) {
 const {
        // categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
      } = props;

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

  function categorySelected(name) {
    console.log(`${name} clicked`)
  }

  return (
    <header>
      <nav>
        <h1 className="title">Victoria Landron</h1>
        <ul className="nav-categories">
          <li className="mx-2">
            <a href="#about" onClick={() => setContactSelected(false)}>About Me</a>
          </li>

          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span onClick={() => categorySelected(category.name)}>
                  {category.name}
            </span>
            </li>
          ))}

          <li>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
