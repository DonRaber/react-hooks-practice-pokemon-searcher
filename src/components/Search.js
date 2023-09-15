import React from "react";

function Search({setPokeSearch}) {

  const searchPoke = (e) =>{
    setPokeSearch(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={searchPoke} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
