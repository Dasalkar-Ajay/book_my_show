import './App.css';
import axios from "axios";

import {Routes, Route} from "react-router-dom";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import HomePage from './Pages/HomePage';
import PlayPage from './Pages/PlayPage';
import MoviePage from './Pages/MoviePage';


axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params ={};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}

export default App;
