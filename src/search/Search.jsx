import { useEffect, useState } from "react";
import "./Search.scss";
import { useNavigate } from "react-router-dom";

export default function Search({ setSearch,getSearchList }) {
  let navigate=useNavigate()
  function searchHandler(e) {
    setSearch(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    getSearchList()
    navigate(`./search`)
    
  }
  return (
    <form className="searchbar-container" onSubmit={handleSubmit}>
      <input
        className="searchbar-input"
        type="text"
        onChange={searchHandler}
        placeholder="Search..."
      />
    </form>
  );
}
