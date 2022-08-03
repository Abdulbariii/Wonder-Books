import React from "react";
import { useFetch } from "../../hook/useFetch";
import useTheme from "../../hook/useTheme";
import { Link } from "react-router-dom";
export default function Card() {
  const { searchBook, mode, color, text } = useTheme();
  const { index } = useTheme();

  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchBook}&maxResults=12&startIndex=${index}&orderBy=relevance&langRestrict=english/?q=subject:romance`;
  const { data, isPending, error } = useFetch(url);
  const books = data && data.items;

  return (
    <div className="flex justify-evenly gap-7 lg:gap-10 pt-20  overflow-hidden  flex-wrap items-start w-full h-full">
      {isPending && (
        <h1 className="text-2xl absolute top-64 left-1/2 translate-x-[-50%]">
          Loading...
        </h1>
      )}
      {error && <h1>{error}</h1>}
      {books &&
        books.map((d) => (
          <Link
            to={`/book/:${d.id}`}
            key={d.id}
            className={`lg:w-64 w-28 h-52 rounded-2xl hover:scale-105 ${color} bg-opacity-30 p-1 gap-2   transition-all duration-200 flex lg:h-96 flex-col  items-center justify-start text-center `}
          >
            <img
              className="object-cover w-40 h-36 shadow-inner  shadow-[#0000006d] rounded-2xl hover:translate-y-[-30px]   lg:h-80 lg:w-60 transition-all duration-200  "
              src={
                d.volumeInfo.imageLinks &&
                d.volumeInfo.imageLinks.thumbnail.concat("&fife=w700-h1000")
              }
            />

            <h1
              className={`overflow-hidden ${
                mode === "bg-gray-900"
                  ? "text-gray-50 text-opacity-95"
                  : "text-gray-900 text-opacity-80"
              }  lg:text-sm text-[10px]`}
            >
              {d.volumeInfo.title}
            </h1>
          </Link>
        ))}
    </div>
  );
}
