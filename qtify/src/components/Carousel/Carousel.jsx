import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";
import Card from "../Card/Card";
import LeftNavButton from "./LeftNavButton";
import RightNavButton from "./RightNavButton";

export default function Carousel({ albums, isSongsSection }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slidesPerView = 7; // you can make this responsive later

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const goPrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const goNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div className="carousel-wrapper">
      {/* Always render buttons, only disable when not usable */}
      <LeftNavButton onClick={goPrev} disabled={activeIndex === 0} />
      <RightNavButton
        onClick={goNext}
        disabled={activeIndex >= albums.length - slidesPerView}
      />

      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={slidesPerView}
        slidesPerGroup={1}
        loop={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
      >
        {albums.map((album) => (
          <SwiperSlide key={album.id}>
            <Card
              image={album.image}
              albumName={album.title}
              follows={album.follows}
              likes={album.likes}
              isSongsSection={isSongsSection}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
