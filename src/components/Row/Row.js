import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Row.css";
import { IMAGE_URL } from "../../constants/request";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

export default function Row({
  id,
  title,
  fetchUrl,
  isLargeRow,
  play,
  playingBy,
  onChange,
}) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    width: "100%",
    height: "360px",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (playingBy !== id) {
      onChange(0, id);
    }
    movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        if (urlParams.get("v") === trailerUrl) {
          setTrailerUrl("");
          onChange(id, id);
        } else if (id === playingBy) {
          setTrailerUrl(urlParams.get("v"));
        } else {
          setTrailerUrl(urlParams.get("v"));
          onChange(id, id);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request);
      return request;
    }

    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <div className="row_title">
        <h2>{title}</h2>
      </div>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_poster_large"}`}
            src={`${IMAGE_URL}${
              isLargeRow ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>

      <div>
        {play && trailerUrl && (
          <Youtube videoId={trailerUrl} opts={opts}></Youtube>
        )}
      </div>
    </div>
  );
}
