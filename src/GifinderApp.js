import React, { useState } from "react";
// import PropTypes from "prop-types";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { DayAndNight } from "./components/switch/DayAndNight";

function GifinderApp() {
  const [categories, setCategories] = useState([]);
    
  return (
    <>
      <div style={{display: "flex", flexDirection:"row",alignItems: "center", justifyContent:"center"}}>
        <h2>Gifinder</h2>
        {/* <DayAndNight /> */}
      </div>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
}

// GifinderApp.propTypes = {};

export default GifinderApp;
