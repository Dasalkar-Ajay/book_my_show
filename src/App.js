import './App.css';
import {Routes,Route} from "react-router-dom";

import HomePage from './Pages/HomePage';
import PlayPage from './Pages/PlayPage';
import MoviePage from './Pages/MoviePage'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
   <Routes>
    <Route path='/' element={<HomePage/>}/>;
    <Route path='/movies/:id' element={<MoviePage/>}/>;
    <Route path='/play' element={<PlayPage/>}/>;

   </Routes>
  );
}

export default App;
