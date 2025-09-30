import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";
import Card from "../Card/Card";
import LeftNavButton from "./LeftNavButton";
import RightNavButton from "./RightNavButton";

export default function Carousel({ albums , isSongsSection}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
      {activeIndex > 0 && <LeftNavButton onClick={goPrev} />}
      {activeIndex < albums.length - 7 && <RightNavButton onClick={goNext} />}
      {/* Assuming 7 slidesPerView */}

      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={7}
        slidesPerGroup={4}
        loop={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        // breakpoints={
        //   {340: { slidesPerView: 2 }, 
        //    768: { slidesPerView: 4 },  
        //   1536: { slidesPerView: 7 }
        // }}
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
