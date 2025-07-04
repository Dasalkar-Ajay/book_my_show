import React from "react";
import DefaultLayoutHoc from "../Layout/Default.Layout";

// components
import Poster from "../Components/Poster/Poster.Component";
import PlayFilters from "../Components/PlayFilters/PlayFilters.Components";


const PlayPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
          <h2 className="text-2xl font-bold mb-4">Plays in Hospet</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://picsum.photos/200/300?random=1"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://picsum.photos/200/300?random=2"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://picsum.photos/200/300?random=3"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://picsum.photos/200/300?random=4"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://picsum.photos/200/300?random=5"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://picsum.photos/200/300?random=6"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 p-4 bg-white rounded">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div>
            <PlayFilters
              title="Date"
              tags={["Today", "Tomorrow", "This Weekend"]}
            />
          </div>
          <div>
            <PlayFilters
              title="Language"
              tags={["English", "Kannada", "Hindi", "Telgu"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayoutHoc(PlayPage);
