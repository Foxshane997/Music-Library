<<<<<<< HEAD
import { useState } from 'react'

function SearchBar(props) {
    let [searchTerm, setSearchTerm] = useState('')

    return (
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>

            <input type="text" placeholder="Enter a search term here" onChange={
                (e) => setSearchTerm(e.target.value)
            } />

            <input type="submit" />

        </form>
    )
}

export default SearchBar
=======
// import React, { useContext } from "react";
// import { SearchContext } from "../Context/SearchContext";

// function SearchBar() {
//   const { term, handleSearch } = useContext(SearchContext);

//   return (
//     <form>
//       <input type="text" placeholder="Search Here" />
//       <button onClick={(e) => handleSearch(e, term.current.value)}>
//         Submit
//       </button>
//     </form>
//   );
// }

// export default SearchBar;


import { useState } from "react";

function SearchBar(props) {
let [searchTerm, setSearchTerm] = useState("");

return (
<form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
<input type="text" placeholder="Enter a search term here" onChange={(e) => setSearchTerm(e.target.value)} />

<input type="submit" />
</form>
);
}

export default SearchBar;
>>>>>>> withContext
