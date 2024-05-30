import { Link, useNavigate } from "react-router-dom";
import "./GreenManGaming.scss";
export default function GreenManGaming({ greenManList }) {
  let firstFiveGames = greenManList.slice(0, 5);
  let navigate = useNavigate();
  return (
    <div className="greenmangaming-container">
      <img
        src="https://www.greenmangaming.com/blog/wp-content/uploads/2017/08/gmglogo_BlogBanner-890x606.jpg"
        alt=""
      />
      <ul>
        {firstFiveGames.map((game) => (
          <a href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}>
            <li>
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
        onClick={() => navigate(`/gamelist/greenmangaming3`)}
        className="greenmangaming-button"
      >
        <p>View All GMG Deals</p>
      </button>
    </div>
  );
}
