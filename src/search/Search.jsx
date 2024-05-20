import './Search.scss';

export default function Search({setSearch,search}){
    function searchHandler(e){
        setSearch(e.target.value)

    }
    // function handleSubmit(e){
    //     e.preventDefault()


    // }
    return(
        <form className="searchbar-container" >
            <input className='searchbar-input' type="text" onChange={searchHandler}/>

        </form>
    )
}