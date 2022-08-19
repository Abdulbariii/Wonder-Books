import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "./scroll.css";
// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper";

export default function FavoriteCards() {
  return (
    <div className=" h-full w-full text-5xl  flex  justify-start items-start">
      <Swiper
        direction={"vertical"}
        slidesPerView={"auto"}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper text-start flex text-5xl  justify-start items-start"
      >
        <SwiperSlide className="flex text-5xl justify-start items-start gap-5   flex-wrap ">
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
          <h1>Slaw</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
