import { Link } from 'react-router-dom'
import './GameBillet.scss'
export default function GameBillet({gameBilletList}){

let firstFiveGames=gameBilletList.slice(0,5)

    return (<div className="gamebillet-container">
        <img src="https://cdn.gadevo.com/images/lojas/gamebillet.png" alt="" />
        <ul>
            {firstFiveGames.map(game=><li>
                <p className='gametitle'>{game.title.length>10?game.title.slice(0,40)+`....`:game.title}</p>
                <p className='normalprice'>${game.normalPrice}</p>
                <div><p className='saleprice'>${game.salePrice}</p></div>

            </li>)}


        </ul>
        <hr />
        <button className='gamebillet-button'><p>View All Steam Deals</p></button>

    </div>)
}