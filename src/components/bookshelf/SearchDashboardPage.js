import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "./scroll.css";
import { subText } from "../../utils/subText";
// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import { useFetch } from "../../hook/useFetch";
import useTheme from "../../hook/useTheme";
import AddToHaveRead from "../books/AddToHaveRead";
import AddToRead from "../books/AddToRead";
import AddToRnow from "../books/AddToRnow";
import AddToFav from "../books/AddToFav";
export default function SearchDashboardPage() {
  const { color, searchBookshelf, text } = useTheme();
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchBookshelf}&maxResults=12&orderBy=relevance&langRestrict=english/?q=subject:romance`;
  const { data, isPending, error } = useFetch(url);
  console.log(data && data);
  return (
    <div className=" h-full  text-5xl  flex  justify-start items-start">
      <Swiper
        direction={"vertical"}
        slidesPerView={"auto"}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide
          className={`flex text-5xl  flex-col justify-start items-start gap-5 ${text}  flex-wrap `}
        >
          {isPending && <h1>Loading...</h1>}
          {error && <h1>{error}</h1>}
          {searchBookshelf === "nothing" ? (
            <h1>Add books</h1>
          ) : (
            data &&
            data.items &&
            data.items.map((book) => (
              <div className="flex gap-10 justify-start items-center">
                <img
                  className="w-24  relative rounded-md h-36 object-scale-down"
                  src={
                    book.volumeInfo.imageLinks &&
                    book.volumeInfo.imageLinks.thumbnail.concat(
                      "&fife=w700-h1000"
                    )
                  }
                />

                <div className="w-40 flex gap-1 flex-col text-sm flex-wrap">
                  <AddToFav
                    image={
                      book.volumeInfo.imageLinks &&
                      book.volumeInfo.imageLinks.thumbnail.concat(
                        "&fife=w700-h1000"
                      )
                    }
                    title={book.volumeInfo.title && book.volumeInfo.title}
                  ></AddToFav>
                  <AddToRead
                    image={
                      book.volumeInfo.imageLinks &&
                      book.volumeInfo.imageLinks.thumbnail.concat(
                        "&fife=w700-h1000"
                      )
                    }
                    title={book.volumeInfo.title && book.volumeInfo.title}
                  ></AddToRead>
                  <AddToRnow
                    image={
                      book.volumeInfo.imageLinks &&
                      book.volumeInfo.imageLinks.thumbnail.concat(
                        "&fife=w700-h1000"
                      )
                    }
                    title={book.volumeInfo.title && book.volumeInfo.title}
                  ></AddToRnow>
                  <AddToHaveRead
                    image={
                      book.volumeInfo.imageLinks &&
                      book.volumeInfo.imageLinks.thumbnail.concat(
                        "&fife=w700-h1000"
                      )
                    }
                    title={book.volumeInfo.title && book.volumeInfo.title}
                  ></AddToHaveRead>
                </div>
              </div>
            ))
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
