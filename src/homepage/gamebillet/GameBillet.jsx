import { Link, useNavigate } from "react-router-dom";
import "./GameBillet.scss";
export default function GameBillet({ gameBilletList }) {
  let firstFiveGames = gameBilletList.slice(0, 5);
  let navigate = useNavigate();
  return (
    <div className="gamebillet-container">
      <img src="https://cdn.gadevo.com/images/lojas/gamebillet.png" alt="" />
      <ul>
        {firstFiveGames.map((game) => (
          <a target="_blank"  href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}>
            <li>
              {" "}
              <p className="gametitle">
                {game.title.length > 30
                  ? game.title.slice(0, 30) + `....`
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
        onClick={() => navigate(`/gamelist/gamebillet7`)}
        className="gamebillet-button"
      >
        <p>View All Game Billet Deals</p>
      </button>
    </div>
  );
}
