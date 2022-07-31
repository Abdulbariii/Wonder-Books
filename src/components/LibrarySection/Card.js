import React from "react";
import { useFetch } from "../../hook/useFetch";
import useTheme from "../../hook/useTheme";
import { Link } from "react-router-dom";
export default function Card() {
  const { searchBook, mode, color, text } = useTheme();

  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchBook}&orderBy=relevance&langRestrict=english`;
  const { data, isPending, error } = useFetch(url);
  const books = data && data.items;

  return (
    <div className="flex justify-evenly gap-10 pt-20 p-5 overflow-hidden  flex-wrap items-start w-full h-full">
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {data &&
        books.map((d) => (
          <Link
            to={`/book/:${d.id}`}
            key={d.id}
            className={`w-64 rounded-2xl hover:scale-105 ${color} bg-opacity-30 p-3 gap-2   transition-all duration-200 flex h-96 flex-col  items-center justify-start`}
          >
            <img
              className="object-cover shadow-inner  shadow-[#0000006d] rounded-2xl hover:translate-y-[-30px]   h-80 w-60 transition-all duration-200  "
              src={
                d.volumeInfo.imageLinks &&
                d.volumeInfo.imageLinks.thumbnail.concat("&fife=w700-h1000")
              }
            />

            <h1
              className={`${
                mode === "bg-gray-900"
                  ? "text-gray-50 text-opacity-95"
                  : "text-gray-900 text-opacity-80"
              }  text-sm`}
            >
              {d.volumeInfo.title}
            </h1>
          </Link>
        ))}
    </div>
  );
}
