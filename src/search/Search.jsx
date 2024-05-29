import { useEffect, useState } from "react";
import "./Search.scss";
import { useNavigate } from "react-router-dom";


export default function Search({ setReduceList,setSearch,getSearchList,search,allGames,setMainSearch }) {

  const [emptyList,setEmptylist]=useState([])
  function reduceListToEachElementOnce(array) {
    let arr=[]
    let newArray=[]
    if(array.length){
      for(let element of array){
        if(!arr.includes(element.title)){
          newArray.push(element)
          arr.push(element.title)
        }
      }
      console.log(newArray)
        return newArray
    }
  
  }
  
  let navigate=useNavigate()
  function searchHandler(e) {
    setSearch(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if(search){ 
      let result=search.length?   getSearchList(allGames,search):emptyList;
     

      setMainSearch( result)
      setReduceList(reduceListToEachElementOnce(result))
   
      navigate(`./search`)}
  

  }
  return (
    <form className="searchbar-container" onSubmit={handleSubmit}>
      <input
       value={search}
        className="searchbar-input"
        type="text"
        onChange={searchHandler}
        placeholder="Search..."
      />
    </form>
  );
}
