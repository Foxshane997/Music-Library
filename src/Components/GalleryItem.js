import React from "react";
import { useState } from "react";

function GalleryItem(){
    let [view, setView] = useState(false)
    return (
    <div onClick={() => setView(!view)} style={{display: 'inline-block'}}>
        <p>One Gallery item</p>
    </div>
    )
}

export default GalleryItem