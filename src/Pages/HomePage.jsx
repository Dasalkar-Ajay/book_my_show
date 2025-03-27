import react, { useState } from 'react';
import DefaultLayoutHoc from '../Layout/Default.Layout';
import PosterSlider from '../Components/PosterSlider/PosterSlider.Component';
import EntertainmentCardComponent from '../Components/Entertainment/EntertainmentCardComponent';
import HeroCarousel from '../Components/HeroCarousel/HeroCarouselComponent';



const HomePage=()=>{
    const [recommendedMovies, setRecommendedMovies] = useState([])
    const [premierMovies, setpremierMovies] = useState([])
    const [onlineStreamEvents, setonlineStreamEvents] = useState([])
    return (
        <>
        <HeroCarousel />
        <div className='Container mx-auto px-4 md:px-12 my-8'>
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3"> The best of Entertainment</h1>
        </div>
        </>
    )
}

export default DefaultLayoutHoc(HomePage);