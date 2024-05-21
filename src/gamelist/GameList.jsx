import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./GameList.scss";
export default function GameList() {
  const [tableList, setTableList] = useState([]);
  const [image, setImage] = useState(``);
  const [savings, setSavings] = useState(false);
  const [rating, setRating] = useState(false);
  const [title, setTitle] = useState(false);
  const [price, setPrice] = useState(false);
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
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        let newList = structuredClone(res);
        setTableList(newList);
        setImage(list[id[id.length - 1]]);
      });
  }, [id[id.length - 1]]);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        let newList = structuredClone(res);
        setTableList(newList);
        setImage(list[id[id.length - 1]]);
      });
  }, [id[id.length - 1]]);

  function filterSavings() {
    const filteredList = tableList.map((el) => el);
    console.log(savings);
    if (savings) {
      filteredList.sort((a, b) => a[`savings`] - b[`savings`]);
    } else {
      filteredList.sort((a, b) => b[`savings`] - a[`savings`]);
    }
    setTableList(filteredList);
  }
  function filterRating() {
    const filteredList = tableList.map((el) => el);
    console.log(rating);
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
  let url;
  if (id[id.length - 1] === `1`) {
    url = `https://store.steampowered.com/app`;
  }

  console.log(id);
  return (
    <div className="gamelist-container">
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
            <th className="release">Release</th>
            <th className="reviews">Reviews</th>
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
                  href={
                    url +
                    `/` +
                    el.steamAppID +
                    `/</td>` +
                    el.dealID
                  }
                >
                  {el.title.length > 34
                    ? el.title.slice(0, 34) + `...`
                    : el.title}
                </a>
              </td>
              <td className="dealrating-cell">{el.dealRating}</td>
              <td className="release-cell">{}</td>
              <td className="reviews-cell"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
