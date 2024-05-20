import { useState } from 'react';
import './Header.scss';
export default function Header(){

  function overMouse(){
    console.log(`very good`)
  }
  let h2Element=document.querySelector(`h2`)
//   h2Element.addEventListener(`click`,overMouse)

    return (
        <div className='header-container'>
         <div className="nav-container">
            
            <h2 >hello</h2>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Search</h3>
            


            

        </div>
    

        </div>
    )
}