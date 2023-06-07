import React from "react";
import "./HomeScreen.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../axios/Requests";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* NavBar  */}
      <Navbar />

      {/* Banner  */}
      <Banner />
      {/* Row  */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        islargeRow
      />

      <Row title="TOP TRENDING" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
