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


  return (
    <>
      <main>
        <Router>
          <Header />
          <h1 className="top-deals">
            {/* <span>
              <img
                src="https://media.istockphoto.com/id/1221544459/vector/cartoon-fire-flame-icon-emoticon-lit-fire-silhouette-sign-burn-fireball-emblem.jpg?s=612x612&w=0&k=20&c=zHSWv_sa-UQISgolE43rLYyZticMjXn-P4huTUEKVys="
                alt=""
              />
            </span> */}
            Top Deals by Store
          </h1>
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
          {/* <Route/>  */}
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
