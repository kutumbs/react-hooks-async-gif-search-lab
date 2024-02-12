import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  const apiUrl =
    "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=oxu5PNPhgvEN4n0Hgejy3TR76ePHB3ZH&rating=g"
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        const data = response.data;
        const newData = data.slice(0, 3);
        setGifs(newData);
      });
  }, []);
console.log(search)
  function handleSubmit(search) {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=oxu5PNPhgvEN4n0Hgejy3TR76ePHB3ZH&rating=g`
    )
      .then((res) => res.json())
      .then((response) => {
        const data = response.data;
        const newData = data.slice(0, 3);
        setGifs(newData);
      });
  }

  return (
    <div>
      <GifSearch onSubmit={handleSubmit} />
      <GifList gifsData={gifs} />
    </div>
  );
}

export default GifListContainer;