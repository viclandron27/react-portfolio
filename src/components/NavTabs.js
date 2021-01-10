import React from "react";

function NavTabs(props) {
  const tabs = ["About", "Portfolio", "Resume", "Contact"];
  return (
      <ul className="nav-categories">
        {tabs.map((tab) => (
          <li className="mx-1" key={tab}>
            <a
              href={"#" + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
  );
}

export default NavTabs;
