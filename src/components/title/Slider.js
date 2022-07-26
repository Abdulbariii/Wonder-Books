import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="flex flex-col gap-10">
          <h1>The first book</h1>
          <img
            className="w-60 h-56"
            src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          ></img>
          <p>
            "I am not afraid of storms, for I am learning how to sail my ship."
            "I am not afraid of storms, for I am learning how to sail my ship."
            "I am not afraid of storms, for I am learning how to sail my ship."
          </p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col gap-10">
          <h1>The first book</h1>
          <img
            className="w-60 h-56"
            src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          ></img>
          <p>
            "I am not afraid of storms, for I am learning how to sail my ship."
            "I am not afraid of storms, for I am learning how to sail my ship."
            "I am not afraid of storms, for I am learning how to sail my ship."
          </p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col gap-10">
          <h1>The first book</h1>
          <img
            className="w-60 h-56"
            src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          ></img>
          <p>
            "I am not afraid of storms, for I am learning how to sail my ship."
            "I am not afraid of storms, for I am learning how to sail my ship."
            "I am not afraid of storms, for I am learning how to sail my ship."
          </p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col gap-10">
          <h1>The first book</h1>
          <img
            className="w-60 h-56"
            src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          ></img>
          <p>
            "I am not afraid of storms, for I am learning how to sail my ship."
            "I am not afraid of storms, for I am learning how to sail my ship."
            "I am not afraid of storms, for I am learning how to sail my ship."
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
