import React from "react";
import useTheme from "../../hook/useTheme";
import { useState } from "react";
export default function SearchDashboard() {
  const {
    searchChange,
    mode,
    color,
    text,
    nextPageChange,
    searchBookshelfHandler,
  } = useTheme();
  const [bookName, setBookName] = useState();
  const searchHandler = (event) => {
    setBookName(event.target.value);
  };

  const sumbitSearch = (event) => {
    event.preventDefault();
    searchBookshelfHandler(bookName);
    setBookName("");
  };
  return (
    <div className="flex  w-72 flex-wrap flex-col gap-10 ">
      <div>
        <form onSubmit={sumbitSearch}>
          <div className={`flex  gap-5 flex-wrap ${text}  cursor-pointer`}>
            <button
              className={`text-3xl hover:scale-125 transition-all duration-150`}
            >
              <ion-icon name="search-outline"></ion-icon>
            </button>
            <input
              value={bookName}
              placeholder="Search"
              className={` w-56 h-5  rounded-2xl  ${
                mode === "bg-gray-900" ? "bg-gray-50" : "bg-gray-900"
              }  p-4 text-lg`}
              onChange={searchHandler}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
