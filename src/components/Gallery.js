import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Updated import path
import "swiper/css";
import "swiper/css/pagination";
import port1 from '../images/port (1).jpg';
import port2 from '../images/port (2).jpg';
import port3 from '../images/port (3).jpg';
import port4 from '../images/port (4).jpg';
import port5 from '../images/port (5).jpg';
import port6 from '../images/port (6).jpg';
import port7 from '../images/port (12).jpg';
import port8 from '../images/port (8).jpg';
import port9 from '../images/port (9).jpg';
import port10 from '../images/port (10).jpg';
import port11 from '../images/port (11).jpg';

const Gallery = () => {
  const images = [
    port1,
    port2,
    port3,
    port4,
    port5,
    port6,
    port7,
    port8,
    port9,
    port10,
    port11,
  ];

  return (
    <div id="gallery" className="py-10 bg-blue-800 text-white">
      <div className="container mx-auto px-6">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            type: "fraction", // Displays numbers like "1/6"
          }}
          breakpoints={{
            640: { slidesPerView: 2 }, // For tablets
            768: { slidesPerView: 3 }, // For small laptops
            1024: { slidesPerView: 4 }, // For desktops
            1280: { slidesPerView: 6 }, // For larger screens
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="rounded-lg shadow-lg w-full h-56 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
