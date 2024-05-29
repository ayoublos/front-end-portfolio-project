import { useNavigate } from "react-router-dom";
import "./HumbleStore.scss";

export default function HumbleStore({ humbleStoreList }) {
  let navigate = useNavigate();
  let firstFiveGames = humbleStoreList.slice(0, 5);

  return (
    <div className="humblestore-container">
      <img
        src="https://cdn.vox-cdn.com/thumbor/nSPsh_joCgjCB9U1eQwlqYShZLw=/62x0:737x450/1400x788/filters:focal(62x0:737x450):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/34685751/humble-store-logo_800.0.jpg"
        alt=""
      />
      <ul>
        {firstFiveGames.map((game) => (
          <a href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}>
            <li>
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
        onClick={() => navigate(`./humblestore2`)}
        className="humblestore-button"
      >
        View All Humble Store Deals
      </button>
    </div>
  );
}
