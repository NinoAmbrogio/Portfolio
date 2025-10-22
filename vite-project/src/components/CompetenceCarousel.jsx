
import html5 from "../assets/html5.png";
import javascriptlogo from "../assets/javascriptlogo.png";
import reactlogo from "../assets/react.png";
import reduxlogo from "../assets/redux.png";
import tailwindlogo from "../assets/tailwindcss.png";
import gitlogo from "../assets/git.png";
import githublogo from "../assets/github.png";

import typescript from "../assets/typescript.png";
import nodejs from "../assets/nodejs.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CompetenceCarousel = () => {
  const cardData = [
    { title: "HTML5", image: html5 },
    { title: "Javascript", image: javascriptlogo },
    { title: "React", image: reactlogo },
    { title: "Redux", image: reduxlogo },
    { title: "TailwindCss", image: tailwindlogo },
    { title: "Git", image: gitlogo },
    { title: "GitHub", image: githublogo },
    { title: "Typescript", image: typescript },
    { title: "NodeJs", image: nodejs },
  ];

  return (
    <div className="relative max-w-4xl mx-auto"> 
      
      <div className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-10 z-10 bg-gradient-to-r from-transparent via-transparent to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-10 z-10 bg-gradient-to-l from-transparent via-transparent to-transparent" />

     
      <style>{`
        .swiper-button-next, .swiper-button-prev {
          width: 26px; height: 26px; 
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 14px; 
        }
        .swiper-pagination-bullet {
          width: 6px; height: 6px; opacity: .5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>

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
        spaceBetween={12}                       
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 12 },
          768: { slidesPerView: 3, spaceBetween: 14 },
          1024: { slidesPerView: 4, spaceBetween: 16 },
        }}
        className="w-full"
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index} className="!h-auto">
            <div className="flex items-center justify-center w-full 
                            h-40 md:h-44 lg:h-48                   /* prima 15/18/20rem */
                            rounded-lg relative group 
                            hover:scale-[0.98] transition-all duration-300">
              <img
                src={card.image}
                alt={card.title}
                className="max-h-full max-w-full object-contain p-2 md:p-3" /* padding ridotto */
              />
              <div className="flex items-center justify-center px-3 opacity-0 group-hover:opacity-100 
                              transition-all duration-300 absolute bottom-0 left-0 w-full h-full 
                              bg-black/30 rounded-lg backdrop-blur-[2px]">
                <p className="text-white text-sm md:text-base font-semibold text-center">
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
