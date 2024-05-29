import { useNavigate } from "react-router-dom";

import "./SteamPage.scss";
export default function SteamPage({ steamList }) {
  let navigate = useNavigate();

  let firstFiveGames = steamList.slice(0, 5);

  return (
    <div className="steampage-container">
      <img src="https://images.alphacoders.com/133/1339887.png" alt="" />
      <ul>
        {firstFiveGames.map((game) => (
          <a href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}>
            <li className="list-element">
              <p className="gametitle">
                {game.title.length > 10
                  ? game.title.slice(0, 40) + `....`
                  : game.title}
              </p>
              <p className="normalprice">${game.normalPrice}</p>
              <div>
                <p className="saleprice">${game.salePrice}</p>
              </div>
            </li>
          </a>
        ))}
      </ul>
      <hr />
      <button
        className="steam-button"
        onClick={() => {
          navigate(`./steamlist1`);
        }}
      >
        <p>View All Steam Deals</p>
      </button>
    </div>
  );
}
