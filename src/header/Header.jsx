import { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Search from "../search/Search";

export default function Header({setSearch,search}) {
  function overMouse() {
    console.log(`very good`);
  }
  let h2Element = document.querySelector(`h2`);
  //   h2Element.addEventListener(`click`,overMouse)

  return (
    <div className="header-container">
      <div className="nav-container">
        <Link to={`/`}>
          
          <h2>Game Guru</h2>
        </Link>
        <h3>Home</h3>
        <h3>About</h3>
        <Search setSearch={setSearch}search={search}/>
      </div>
    </div>
  );
}
