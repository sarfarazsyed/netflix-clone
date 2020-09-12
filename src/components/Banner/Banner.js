import React, { useState, useEffect } from "react";
import axios from "axios";
import requests, { IMAGE_URL } from "../../constants/request";
import "./Banner.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
export default function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    width: "100%",
    playerVars: {
      autoplay: true,
    },
  };
  useEffect(() => {
    async function fetchData() {
      const response = await axios
        .get(requests.fetchNowPlayingMovies)
        .then((response) => {
          setMovie(
            response.data.results[
              Math.floor(Math.random() * response.data.results.length - 1)
            ]
          );
        });
      return response;
    }
    fetchData();
  }, []);
  function handleClick() {
    movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        if (urlParams.get("v") === trailerUrl) {
          setTrailerUrl("");
        } else {
          setTrailerUrl(urlParams.get("v"));
        }
      })
      .catch((error) => console.log(error));
  }

  const trunc = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + "..." : str;

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundImage: `url(${IMAGE_URL}${
            movie?.backdrop_path || movie?.poster_path
          })`,
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.name || movie?.title || movie?.origin_name || ""}
          </h1>

          <div>
            <button className="banner_buttons" onClick={() => handleClick()}>
              {trailerUrl === "" ? "PLAY" : "STOP"}
            </button>
            <button className="banner_buttons"> LIKE</button>
          </div>
          <div className="banner_description">
            {trunc(movie?.overview || "", 150)}
          </div>
        </div>
        <div className="banner-fadebottom"></div>
      </header>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}></Youtube>}
    </>
  );
}
