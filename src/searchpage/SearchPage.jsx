import { Link } from 'react-router-dom'
import './SearchPage.scss'
export default function SearchPage({searchList}){
    console.log(searchList)
    return (
        <div className="searchpage-container">
            {/* <ul>
                {searchList.map(el=><li>
                    {el.title}
                </li>)}
            </ul> */}
        </div>
    )
}