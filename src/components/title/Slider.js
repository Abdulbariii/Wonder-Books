import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import useTheme from "../../hook/useTheme";
import { useFetch } from "../../hook/useFetch";

export default function Slider() {
  const { data, isPending, error } = useFetch(
    "https://www.googleapis.com/books/v1/volumes?q=paulo:keyes&orderBy=newest&maxResults=10&key=AIzaSyBLmw55bH-rB7hKD-CPJPvlTI0LtQ5tAK8"
  );

  const { mode } = useTheme();
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
        className={`mySwiper  ${
          mode === "bg-gray-900" ? "text-white" : "text-black"
        }`}
      >
        {isPending && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {data &&
          data.items.map((book) => (
            <SwiperSlide key={book.id}>
              <Link
                to={`/book/:${book.id}`}
                className="flex flex-col items-center gap-10 cursor-pointer "
              >
                <h1 className="text-xl w-fit">{book.volumeInfo.title}</h1>
                <img
                  className="object-cover w-72 rounded-2xl   h-96"
                  src={
                    book.volumeInfo.imageLinks &&
                    book.volumeInfo.imageLinks.thumbnail.replace(
                      "zoom=1",
                      "zoom=10"
                    )
                  }
                />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
