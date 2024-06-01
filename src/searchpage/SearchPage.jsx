import { useState } from "react";
import "./SearchPage.scss";
export default function SearchPage({
  reducedList,
  mainSearch,
  search,
  showGames,
  setShowGames,
}) {
  const [title, setTitle] = useState(null);
  const list = [
    ``,
    `https://assetsio.gnwcdn.com/steam-logo_pAVUl5r.png?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp`,
    `https://cdn.humblebundle.com/static/hashed/ae004602956f47425ecc0edaf72e710b8a4bb812.png`,
    `https://www.greenmangaming.com/blog/wp-content/uploads/2017/08/gmglogo_BlogBanner-890x606.jpg`,

    ``,
    ``,
    ``,
    `https://nogameb.com/wp-content/uploads/gamebillet.jpg`,
  ];
  const names = [
    ``,
    `Steam`,
    `HumbleStore`,
    `GreenManGaming`,

    ``,
    ``,
    ``,
    `GameBillet`,
  ];
  function toggleModal(title) {
    setShowGames(!showGames);
    setTitle(title);
  }
  console.log(mainSearch);
  return reducedList ? (
    <div className="searchpage-container">
      <ul className="main-list">
        {...reducedList.map((el) => (
          <li className="firstlist-element">
            <div name={el.title} className="image-container">
              <img className="thumb" src={el.thumb} alt="" />
              <br />

              <div className="name-container">
                <p> {el.title}</p>
                <button
                  onClick={() => {
                    toggleModal(el.title);
                    if (el.title !== title) {
                      setShowGames(true);
                    }
                  }}
                  className="showgames"
                >
                  {showGames && title === el.title ? `-` : `+`}
                </button>

                <br />
                <br />
                <span>($ {el.salePrice} and up)</span>
              </div>
              <div>
                {" "}
                {...mainSearch
                  .filter((element) => element.title === el.title)
                  .map((element) =>
                    showGames && title === element.title ? (
                      <a target="_blank" 
                        href={`https://www.cheapshark.com/redirect?dealID=${element.dealID}`}
                      >
                        <div className="secondlist-item">
                          <img
                            className="storeID"
                            src={list[element.storeID]}
                            alt=""
                          />{" "}
                          <h4>{names[element.storeID]}</h4>
                          <span>${element.salePrice}</span>
                        </div>
                      </a>
                    ) : null
                  )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="searchpage-container">
      <p className="noresults">no results</p>
    </div>
  );
}
