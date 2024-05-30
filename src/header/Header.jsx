import { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import { all } from "axios";

export default function Header({setReducedList,getSearchList,setSearch,search,allGames,setMainSearch}) {


  return (
    <div className="header-container">
      <div className="nav-container">
        <Link to={`/`}>
          
          <h2 className="title">Game Guru</h2>
        </Link>
        <Link to={'/'}><h3>Home</h3></Link>
        
        <h3>About</h3>
        <Search setReducedList={setReducedList}setMainSearch={setMainSearch} getSearchList={getSearchList} setSearch={setSearch}search={search}allGames={allGames}/>
      </div>
    </div>
  );
}
