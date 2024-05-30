import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./GameList.scss";
import GameListSearchBar from "./GameListSearchBar.jsx/GameListSearchBar";
export default function GameList() {
  const [tableList, setTableList] = useState([]);
  const [image, setImage] = useState(``);
  const [savings, setSavings] = useState(false);
  const [rating, setRating] = useState(false);
  const [title, setTitle] = useState(false);
  const [price, setPrice] = useState(false);
  const [date, setDate] = useState(false);
  const [initialList, setInitialList] = useState([]);
  const [gameListSearchWord, setGameListSearchWord] = useState(``);
  const { id } = useParams();

  let list = [
    ``,
    `https://assetsio.gnwcdn.com/steam-logo_pAVUl5r.png?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp`,
    `https://cdn.humblebundle.com/static/hashed/ae004602956f47425ecc0edaf72e710b8a4bb812.png`,
    `https://www.greenmangaming.com/blog/wp-content/uploads/2017/08/gmglogo_BlogBanner-890x606.jpg`,

    ``,
    ``,
    ``,
    `https://nogameb.com/wp-content/uploads/gamebillet.jpg`,
  ];

  let URL = `https://www.cheapshark.com/api/1.0/deals?storeID=${
    id[id.length - 1]
  }`;
  // useEffect(() => {
  //   fetch(URL)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       let newList = structuredClone(res);
  //       setTableList(newList);
  //       setInitialList(newList)

  //       setImage(list[id[id.length - 1]])
  //     });
  // }, [gameListSearchWord]);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        let newList = structuredClone(res);
        setTableList(newList);
        setInitialList(newList);
        setImage(list[id[id.length - 1]]);
      });
  }, [id[id.length - 1]]);

  function filterSavings() {
    const filteredList = tableList.map((el) => el);
    if (savings) {
      filteredList.sort((a, b) => a[`savings`] - b[`savings`]);
    } else {
      filteredList.sort((a, b) => b[`savings`] - a[`savings`]);
    }
    setTableList(filteredList);
  }
  function filterRating() {
    const filteredList = tableList.map((el) => el);
    if (rating) {
      filteredList.sort((a, b) => a[`dealRating`] - b[`dealRating`]);
    } else {
      filteredList.sort((a, b) => b[`dealRating`] - a[`dealRating`]);
    }
    setTableList(filteredList);
  }
  function filterPrice() {
    const filteredList = tableList.map((el) => el);
    if (price) {
      filteredList.sort((a, b) => a[`salePrice`] - b[`salePrice`]);
    } else {
      filteredList.sort((a, b) => b[`salePrice`] - a[`salePrice`]);
    }
    setTableList(filteredList);
  }
  function filterDate() {
    const filteredList = tableList.map((el) => el);
    if (date) {
      filteredList.sort(
        (a, b) =>
          new Date(a.releaseDate * 1000) - new Date(b.releaseDate * 1000)
      );
    } else {
      filteredList.sort(
        (a, b) =>
          new Date(b.releaseDate * 1000) - new Date(a.releaseDate * 1000)
      );
    }
    setTableList(filteredList);
  }

  function filterTitle() {
    const filteredList = tableList.map((el) => el);
    if (title) {
      filteredList.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
    } else {
      filteredList.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
      filteredList.reverse();
    }
    setTableList(filteredList);
  }

  function filterGameList(searchWord, gameList) {
    return gameList.filter((el) =>
      el.title.toLowerCase().match(searchWord.toLowerCase())
    );
  }
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="gamelist-container">
      <GameListSearchBar
        gameListSearchWord={gameListSearchWord}
        setTableList={setTableList}
        tableList={tableList}
        initialList={initialList}
        filterGameList={filterGameList}
        setGameListSearchWord={setGameListSearchWord}
      />
      <table>
        <thead>
          <tr>
            <th className="store">Store</th>
            <th
              className="savings"
              onClick={() => {
                filterSavings();
                setSavings(!savings);
              }}
            >
              Savings
            </th>
            <th
              className="price"
              onClick={() => {
                filterPrice();
                setPrice(!price);
              }}
            >
              Price{" "}
            </th>
            <th
              className="title"
              onClick={() => {
                filterTitle();
                setTitle(!title);
              }}
            >
              Title
            </th>
            <th
              className="deal-rating"
              onClick={() => {
                filterRating();
                setRating(!rating);
              }}
            >
              Deal Rating
            </th>
            <th className="release" onClick={() => filterDate(setDate(!date))}>
              Release
            </th>
          </tr>
        </thead>
        <tbody>
          {...tableList.map((el) => (
            <tr className="cells">
              <td className="store-cell">
                <img src={image} alt="" />
              </td>
              <td className="savings-cell">{Math.floor(el.savings)}%</td>
              <td className="price-cell">
                <span className="normalprice-cell">${el.normalPrice}</span>
                <br />
                <span className="saleprice-cell">${el.salePrice}</span>
              </td>
              <td className="title-cell">
                <img className="titlecell-img" src={el.thumb} alt="" />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.cheapshark.com/redirect?dealID=${el.dealID}`}
                >
                  {el.title.length > 34
                    ? el.title.slice(0, 34) + `...`
                    : el.title}
                </a>
              </td>
              <td className="dealrating-cell">{el.dealRating}</td>
              <td className="release-cell">
                {months[new Date(el.releaseDate * 1000).getMonth()]}{" "}
                {new Date(el.releaseDate * 1000).getDate()},{" "}
                {new Date(el.releaseDate * 1000).getFullYear()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
