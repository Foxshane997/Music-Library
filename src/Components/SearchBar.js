import React, { useContext } from "react";
import { SearchContext } from "../Context/SearchContext";

function SearchBar() {
  const { term, handleSearch } = useContext(SearchContext);

  return (
    <form>
      <input type="text" placeholder="Search Here" />
      <button onClick={(e) => handleSearch(e, term.current.value)}>
        Submit
      </button>
    </form>
  );
}

export default SearchBar;
