import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import './GameList.scss'


export default function GameList(){
    const[tableList,setTableList]=useState([])
    const {id}=useParams()

    let URL = `https://www.cheapshark.com/api/1.0/deals?storeID=${id[id.length-1]}`;
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        let newList = structuredClone(res);
        setTableList(newList);
      });
  }, []);

    
    
   
console.log(tableList)
    return (
    <div style={{height:`${tableList.length*4.7}vw`}} className="gamelist-container">
        
        <table>
  <thead>
    <tr>
        <th className="store">Store</th>
        <th className="savings">Savings</th>
        <th className="price">Price</th>
        <th className="title">Title</th>
        <th className="deal-rating">Deal Rating</th>
        <th className="release">Release</th>
        <th className="reviews">Reviews</th>
        <th className="recent">Recent</th>

     
    </tr>
   
   
  </thead>
  <tbody>
    {...tableList.map(el=>
         <tr>
            
            <td className="store-cell">                <img src="https://assetsio.gnwcdn.com/steam-logo_pAVUl5r.png?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" alt="" />
</td>
            <td className="savings-cell">{Math.floor(el.savings)}%</td>
            <td className="price-cell"><span className="normalprice-cell">${el.normalPrice}</span><br /><span className="saleprice-cell">${el.salePrice}</span></td>
            <td className="title-cell"><img className="titlecell-img" src={el.thumb} alt="" />{el.title.length>34?el.title.slice(0,34)+`...`:el.title}</td>
            <td className="dealrating-cell">{el.dealRating}</td>
            <td className="release-cell">{}</td>
            <td className="reviews-cell"></td>
            <td className="recent-cell"></td>
         </tr>
    )}
   
  </tbody>
</table>
      

        


    </div>
)

}