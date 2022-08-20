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
import useTheme from "../../hook/useTheme";

export default function BookshelfCards(props) {
  const { color } = useTheme();
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
        <SwiperSlide className="flex text-5xl  justify-start items-start gap-5   flex-wrap ">
          {props.documents && props.documents.length > 0 ? (
            props.documents &&
            props.documents.map((doc) => (
              <div
                key={doc.id}
                className="flex   text-start flex-col gap-2 justify-start items-start"
              >
                <div className="relative w-24 con-cardShelf flex justify-end items-end overflow-hidden">
                  <img
                    className="w-24  relative rounded-md h-36 object-scale-down"
                    src={doc.image && doc.image}
                  />
                  <div
                    className={`absolute w-full z-1 h-0   transition-all duration-200 cardShelf flex justify-center items-start text-red-500 rounded-md ${color} bg-opacity-90 text-5xl`}
                  >
                    <button
                      onClick={() => {
                        props.deleteDocument(doc.id);
                      }}
                      className="text-5xl cursor-pointer"
                    >
                      <ion-icon name="close-outline"></ion-icon>
                    </button>
                  </div>
                </div>

                <h1 className="text-sm  z-10">
                  {doc.title && doc.title.length && subText(doc.title, 12)}
                </h1>
              </div>
            ))
          ) : (
            <h1>You haven't Added any books</h1>
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
/*   {props.documents &&
            props.documents.map((doc) => (
              <div
                key={doc.id}
                className="flex text-start flex-col gap-2 justify-start items-start"
              >
                <img
                  className="w-24 h-36 object-scale-down"
                  src={doc.image && doc.image}
                />
                <h1 className="text-sm  ">
                  {doc.title && doc.title.length && subText(doc.title, 12)}
                </h1>
              </div>
            ))}*/
