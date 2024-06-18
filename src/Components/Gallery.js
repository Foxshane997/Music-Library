// 

import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import GalleryItem from "./GalleryItem";

function Gallery(props) {

<<<<<<< HEAD
  const display = props.data.map((item, index) => {
    return <GalleryItem item={item} key={index} />;
  });
=======
const display = props.data.map((item, index) => {
return <GalleryItem item={item} key={index} />;
});
>>>>>>> withContext

return <div>{display}</div>;
}

export default Gallery;