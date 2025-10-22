import React from "react";
import HTML5 from "../assets/HTML5.png";
import Javascriptlogo from "../assets/Javascriptlogo.png";
import ReactLogo from "../assets/React.png";
import ReduxLogo from "../assets/Redux.png";
import TailwindLogo from "../assets/Tailwindcss.png";
import GitLogo from "../assets/git.png";
import GitHubLogo from "../assets/github.png";
import BackEnd from "../assets/BackEnd.png";
import Typescript from "../assets/Typescript.png"
import NodeJs from  "../assets/NodeJs.png"


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CompetenceCarousel = () => {
  const cardData = [
    { title: "HTML5", image: HTML5 },
    { title: "Javascript", image: Javascriptlogo },
    { title: "React", image: ReactLogo },
    { title: "Redux", image: ReduxLogo },
    { title: "TailwindCss", image: TailwindLogo },
    { title: "Git", image: GitLogo },
    { title: "GitHub", image: GitHubLogo },
    { title: "Backend", image: BackEnd },
    {title : "Typescript", image: Typescript},
    {title : "NodeJs", image: NodeJs }
  ];

  return (
    <div className="relative max-w-6xl mx-auto">
      
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-16 z-10 bg-gradient-to-r from-transparent via-transparent to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-16 z-10 bg-gradient-to-l from-transparent via-transparent to-transparent" />

      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
        }}
        className="w-full"
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index} className="!h-auto">
            <div className="flex items-center justify-center w-full h-[15rem] md:h-[18rem] lg:h-[20rem] rounded-xl relative group hover:scale-95 transition-all duration-300">
              <img
                src={card.image}
                alt={card.title}
                className="max-h-full max-w-full object-contain p-4"
              />
              <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 left-0 w-full h-full bg-black/30 rounded-xl backdrop-blur-sm">
                <p className="text-white text-lg font-semibold text-center">
                  {card.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CompetenceCarousel;