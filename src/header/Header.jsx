import { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Search from "../search/Search";

export default function Header({getSearchList,setSearch}) {


  return (
    <div className="header-container">
      <div className="nav-container">
        <Link to={`/`}>
          
          <h2>Game Guru</h2>
        </Link>
        <h3>Home</h3>
        <h3>About</h3>
        <Search getSearchList={getSearchList} setSearch={setSearch}/>
      </div>
    </div>
  );
}
