import { useState } from "react";
import "./HomePage.scss";
import GameBillet from "./gamebillet/GameBillet";
import GreenManGaming from "./greenmangaming/GreenManGaming";
import HumbleStore from "./humblestore/HumbleStore";
import SteamPage from "./steampage/SteamPage";
export default function HomePage({
  steamList,
  humbleStoreList,
  greenManList,
  gameBilletList,
}) {
  const [change,setChange]=useState(false)
  function changeLetters(e) {
    let iteration = 0;
    let value = "TOP DEALS BY STORE";

    const interval = setInterval(() => {
      e.target.innerText = e.target.innerText
        .split(``)
        .map((element, index) =>
          index < iteration
            ? value[index]
            : letters[Math.floor(Math.random() * 26)].toUpperCase()
        )
        .join(``);
      iteration++;
      if (iteration > value.length) {
        clearInterval(interval);
      }
    }, 50);

    
    setChange(false)
  }
  //   function changeL(e){
  //     let iteration=0
  //     let value='NOT GOING TO STOPE'

  //     const interval=setInterval(()=>{

  //     e.target.innerText=e.target.innerText.split(``).map((element,index)=>index<iteration?value[index]:letters[Math.floor(Math.random()*26)].toUpperCase()).join(``)
  //   iteration++
  //   if(iteration>value.length){
  //     clearInterval(interval)
  //   }

  //   },50)

  //   //
  // setChange(true)
  //   }
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return (
    <>
      <h1  className="heading" onMouseOver={changeLetters}>
        {" "}
        TOP DEALS BY STORE
      </h1>
      <div className="homepage-container">
        <SteamPage steamList={steamList} />
        <HumbleStore humbleStoreList={humbleStoreList} />
        <GreenManGaming greenManList={greenManList} />
        <GameBillet gameBilletList={gameBilletList} />
      </div>
    </>
  );
}
