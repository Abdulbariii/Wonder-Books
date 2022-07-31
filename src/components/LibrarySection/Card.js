import React from "react";
import { useFetch } from "../../hook/useFetch";
import useTheme from "../../hook/useTheme";
export default function Card() {
  const { searchBook } = useTheme();

  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchBook}&orderBy=relevance&langRestrict=english`;
  const { data, isPending, error } = useFetch(url);
  const books = data && data.items;

  return (
    <div className="flex justify-around gap-20 flex-wrap items-center w-full h-full">
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {data &&
        books.map((d) => (
          <div key={d.id} className=" w-72 h-72 flex flex-col justify-around ">
            <img
              className="object-cover w-64 h-80"
              src={
                d.volumeInfo.imageLinks &&
                d.volumeInfo.imageLinks.thumbnail.concat("&fife=w700-h1000")
              }
            />

            <h1 className="text-xl">{d.volumeInfo.title}</h1>
          </div>
        ))}
    </div>
  );
}
