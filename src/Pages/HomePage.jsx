import react, { useState } from 'react';
import DefaultLayoutHoc from '../Layout/Default.Layout';
import PosterSlider from '../Components/PosterSlider/PosterSlider.Component';
import EntertainmentCardComponent from '../Components/Entertainment/EntertainmentCardComponent';
import HeroCarousel from '../Components/HeroCarousel/HeroCarouselComponent';



const HomePage = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setpremierMovies] = useState([]);
    const [onlineStreamEvents, setonlineStreamEvents] = useState([]);
    return (
        <>
            <HeroCarousel />
            <div className='Container mx-auto px-5 md:px-12 my-8'>
                <h1 className="text-2xl  font-bold text-gray-800  sm:ml-3 ml-0 my-3"> The best of Entertainment</h1>
                <EntertainmentCardComponent />
            </div>
            <div className='Container mx-auto px-4 md:px-12 my-8'>
                <PosterSlider title="Recommended Movies "
                    subtitle="List of Recommended Movies"
                    posters={recommendedMovies}
                    isDark={false}
                />
            </div>

            <div className="bg-premier-800 py-12">
                <div className="container mx-auto px-5 md:px-12 my-8 flex flex-col gap-3">
                    <div className="hidden md:flex">
                        {/* <img src="http://egov.eletsonline.com/wp-content/uploads/2015/03/RuPay.svg_.png" alt="Rupay" className="w-full h-full" /> */}
                    </div>
                    <PosterSlider
                     title="premiers"
                        subtitle="Brand new Releases every friday"
                        posters={premierMovies}
                        isDark={true}
                    />
                </div>
            </div>

            <div className="Container mx-auto px-5 md:px-12 my-8">
                <PosterSlider
 title="Online Streaming Events"
 subtitle="Online Stream Events"
 posters={onlineStreamEvents}
 isDark={false}
                />
            </div>
        </>
    )
}

export default DefaultLayoutHoc(HomePage);