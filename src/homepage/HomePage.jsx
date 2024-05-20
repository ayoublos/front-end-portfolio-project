import './HomePage.scss'
import GameBillet from './gamebillet/GameBillet'
import GreenManGaming from './greenmangaming/GreenManGaming'
import HumbleStore from './humblestore/HumbleStore'
import SteamPage from './steampage/SteamPage'
export default function HomePage({steamList,humbleStoreList,greenManList,gameBilletList}){
    return (
        <div className="homepage-container">
            <SteamPage steamList={steamList}/>
            <HumbleStore humbleStoreList={humbleStoreList}/>
            <GreenManGaming greenManList={greenManList}/>
            <GameBillet gameBilletList={gameBilletList}/>

            
        

            
        </div>


    )
}