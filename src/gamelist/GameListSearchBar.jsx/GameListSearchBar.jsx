import "./GameListSearchBar.scss";

export default function GameListSearchBar({
  gameListSearchWord,
  setTableList,
  tableList,
  initialList,
  filterGameList,
  setGameListSearchWord,
}) {
  function handleTextChange(e) {
    let input = e.target.value;
    setGameListSearchWord(input);
    // let result=input.length?filterGameList(input,tableList):initialList;
    // setTableList(result)

    // setGameListSearchWord(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    let result = gameListSearchWord.length
      ? filterGameList(gameListSearchWord, initialList)
      : initialList;
    setTableList(result);
    setGameListSearchWord(``);
  }
  return (
    <form className="gamelistsearchbar-container" onSubmit={handleSubmit}>
      <label htmlFor="">
        <input
          placeholder="Search"
          value={gameListSearchWord}
          onChange={handleTextChange}
          className="gamelistsearchbar-input"
          type="text"
        />
        <button type="submit">Show</button>
      </label>
    </form>
  );
}
