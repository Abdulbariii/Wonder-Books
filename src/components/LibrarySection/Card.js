import React from "react";
import { useFetch } from "../../hook/useFetch";
export default function Card() {
  const { data, isPending, error } = useFetch(
    "https://www.googleapis.com/books/v1/volumes?q=random:keyes&key=AIzaSyBLmw55bH-rB7hKD-CPJPvlTI0LtQ5tAK8"
  );
  const books = data && data.items;
  console.log(books);
  return (
    <div className="flex justify-around gap-20 flex-wrap items-center w-full h-full">
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {data &&
        books.map((d) => (
          <div key={d.id} className=" w-72 h-72 flex flex-col justify-around ">
            <img
              className="object-cover w-40 h-40"
              src={
                d.volumeInfo.imageLinks &&
                d.volumeInfo.imageLinks.smallThumbnail
              }
            />

            <h1 className="text-xl">{d.volumeInfo.title}</h1>
          </div>
        ))}
    </div>
  );
}
