import "./App.css";
import { useEffect, useState, Fragment, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./Components/Gallery";
import SearchBar from "./Components/SearchBar";
import AlbumView from "./Components/AlbumView";
import ArtistView from "./Components/ArtistView";
// import { createResource as fetchData } from "./helper";

const App = () => {
  let [searchTerm, setSearchTerm] = useState("");
  let [message, setMessage] = useState("Search for Music!");
  let [data, setData] = useState([]);

  const API_URL = "https://itunes.apple.com/search?term=";

  useEffect(() => {
    if (searchTerm) {
      const fetchDataFromApi = async () => {
        document.title = `${searchTerm} Music`;
        try {
          const response = await fetch(API_URL + searchTerm);
          const resData = await response.json();
          if (resData.results.length > 0) {
            setData(resData.results);
          } else {
            setMessage("Not Found");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          setMessage("Error fetching data. Please try again later.");
        }
      };
      fetchDataFromApi();
    }
  }, [searchTerm]);

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearchTerm(term);
  };

  return (
    <div className="App">
      {message}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <SearchBar handleSearch={handleSearch} />
                {/* {message} */}
                <Suspense fallback={<h1>Loading...</h1>}>
                <Gallery data={data} />
                </Suspense>
              </Fragment>
            }
          />
          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/artist/:id" element={<ArtistView />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
