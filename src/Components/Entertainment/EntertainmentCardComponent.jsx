import React from 'react'
import Slider from 'react-slick';

const EntertainmentCard = (props) => {
  return <>
    <div>
      <img className='w-full h-full rounded-lg' src={props.src} alt='entertainment'/>
    </div>
  </>
}

const EntertainmentCardSlider = () => {
  const EntertainmentImage = [
    "https://tse2.mm.bing.net/th?id=OIP.pKp_tAEpe9uAGT8HU7s-hwHaLH&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.mkKIWCylZ5s50TJGTheA7QHaLG&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.CkrKcQ9JYJmYxhbcgoLX8gHaK_&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.ydVrtjTrs2ex5Z8BPdwLrgHaK-&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.nY91bF4QLUuKp4O03k1V1QHaK-&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.wf2SOR0BFw-aoEbzUj36TwHaKh&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.GHs-EKZFDLYFi-NaelQHowHaKe&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.a0YPTG64aStl3FLShb3HMgHaK9&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.uP6fftTfUhuSfcYNkthJQQHaKy&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.9KtjoByO23JzLq_5feA05AAAAA&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.LrUM2txKz4rOKFJ8rFctkAHaK9&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP._K1Mx169DW56Srekn5ulvwHaK0&pid=Api&P=0&h=180",
    ];

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} >
        {EntertainmentImage.map((image) => <EntertainmentCard src={image} />)}
      </Slider>
    </>
  );
}

export default EntertainmentCardSlider