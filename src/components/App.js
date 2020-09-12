import React, { useState } from "react";
import "./App.css";
import Row from "./Row/Row";
import requests from "../constants/request";
import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";

export default function App() {
  const [playingBy, setPlayingBy] = useState(0);
  const [players, setPlayers] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  function stopPlayers() {
    setPlayers(() => ({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
    }));
  }

  function startPlayer(id) {
    var ps = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
    };
    ps[id] = true;
    setPlayers(ps);
  }

  function handleChange(playing, id) {
    if (playing === 0) {
      stopPlayers();
      setPlayingBy(playing);
    } else {
      stopPlayers();
      setPlayingBy(playing);
      startPlayer(id);
    }
  }

  // const obj = {
  //   Horor: {
  //     title: "Horror Movies",
  //     url: requests.fetchHorrorMovies,
  //   },
  //   Comedy: {
  //     title: "Comedy Movies",
  //     url: requests.fetchComedyMovies,
  //   },
  //   Action: {
  //     title: "Action Movies",
  //     url: requests.fetchActionMovies,
  //   },
  // };

  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        id="1"
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        playingBy={playingBy}
        play={players[1]}
        onChange={handleChange}
        isLargeRow
      />
      <Row
        id="2"
        title="Popular Movies"
        fetchUrl={requests.fetchPopularMovies}
        playingBy={playingBy}
        play={players[2]}
        onChange={handleChange}
      />
      <Row
        id="3"
        title="Upcoming Movies"
        fetchUrl={requests.fetchUpComingMovies}
        playingBy={playingBy}
        play={players[3]}
        onChange={handleChange}
      />
      <Row
        id="4"
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        playingBy={playingBy}
        play={players[4]}
        onChange={handleChange}
      />
      <Row
        id="5"
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        playingBy={playingBy}
        play={players[5]}
        onChange={handleChange}
      />
    </div>
  );
}
