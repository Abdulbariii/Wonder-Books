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
import { subText } from "../../utils/subText";

export default function Slider() {
  const { data, isPending, error } = useFetch(
    "https://www.googleapis.com/books/v1/volumes?q=paulo:keyes&orderBy=newest&maxResults=10&key=AIzaSyBLmw55bH-rB7hKD-CPJPvlTI0LtQ5tAK8"
  );

  const { mode } = useTheme();
  return (
    <div className="lg:w-96 w-80 flex justify-center mb-20 items-center">
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
                className="flex flex-col  items-center gap-10 cursor-pointer "
              >
                <h1 className="text-xl w-fit">
                  {subText(book.volumeInfo.title, 30)}
                </h1>
                <img
                  className="object-cover w-72 rounded-2xl   h-96"
                  src={
                    book.volumeInfo.imageLinks &&
                    book.volumeInfo.imageLinks.thumbnail.concat(
                      "&fife=w700-h1000"
                    )
                  }
                />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
