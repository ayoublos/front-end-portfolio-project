import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HomePage from "./homepage/HomePage";
import GameList from "./gamelist/GameList";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./header/Header";

function App() {
  const [steamList, setSteamList] = useState([]);
  const [humbleStoreList, setHumbleStoreList] = useState([]);
  const [greenManList, setGreenManList] = useState([]);
  const [gameBilletList, setGameBilletList] = useState([]);
  const[search,setSearch]=useState(``)

  let steamURL = `https://www.cheapshark.com/api/1.0/deals?storeID=1`;
  useEffect(() => {
    fetch(steamURL)
      .then((res) => res.json())
      .then((res) => {
        let newList = structuredClone(res);
        setSteamList(newList);
      });
  }, []);

  let humbleStoreURL = `https://www.cheapshark.com/api/1.0/deals?storeID=2`;
  useEffect(() => {
    fetch(humbleStoreURL)
      .then((res) => res.json())
      .then((res) => {
        let newList = structuredClone(res);

        setHumbleStoreList(newList);
      });
  }, []);

  let greenManGamingURL = `https://www.cheapshark.com/api/1.0/deals?storeID=3`;
  useEffect(() => {
    fetch(greenManGamingURL)
      .then((res) => res.json())
      .then((res) => {
        let newList = structuredClone(res);

        setGreenManList(newList);
      });
  }, []);

  let gameBilletURL = `https://www.cheapshark.com/api/1.0/deals?storeID=7`;
  useEffect(() => {
    fetch(gameBilletURL)
      .then((res) => res.json())
      .then((res) => {
        let newList = structuredClone(res);

        setGameBilletList(newList);
      });
  }, []);

console.log(search)
  return (
    <>
      <main>
        <Router>
          <Header setSearch={setSearch}search={search}/>
          
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  steamList={steamList}
                  humbleStoreList={humbleStoreList}
                  greenManList={greenManList}
                  gameBilletList={gameBilletList}
                />
              }
            />
            <Route path="/:id" element={<GameList/>}/>
          <Route/> 
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
