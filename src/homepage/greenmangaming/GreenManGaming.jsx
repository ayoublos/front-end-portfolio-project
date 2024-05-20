import { Link } from 'react-router-dom'
import './GreenManGaming.scss'
export default function GreenManGaming({greenManList}){

let firstFiveGames=greenManList.slice(0,5)

    return (<div className="greenmangaming-container">
        <img src="https://www.greenmangaming.com/blog/wp-content/uploads/2017/08/gmglogo_BlogBanner-890x606.jpg" alt="" />
        <ul>
            {firstFiveGames.map(game=><li>
                <p className='gametitle'>{game.title.length>10?game.title.slice(0,40)+`....`:game.title}</p>
                <p className='normalprice'>${game.normalPrice}</p>
                <div><p className='saleprice'>${game.salePrice}</p></div>

            </li>)}


        </ul>
        <hr />
        <button className='greenmangaming-button'><p>View All Steam Deals</p></button>

    </div>)
}