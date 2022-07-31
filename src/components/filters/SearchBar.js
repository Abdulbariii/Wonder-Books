import React, { useState } from "react";
import useTheme from "../../hook/useTheme";

export default function SearchBar() {
  const { searchChange, mode, color, text } = useTheme();
  const [bookName, setBookName] = useState();
  const searchHandler = (event) => {
    setBookName(event.target.value);
  };

  const sumbitSearch = (event) => {
    event.preventDefault();
    searchChange(bookName);
    console.log(bookName);
  };

  return (
    <div>
      <form onSubmit={sumbitSearch}>
        <div className={`flex  gap-5 flex-wrap ${text}  cursor-pointer`}>
          <input
            placeholder="Search"
            className={`w-96 h-10 rounded-2xl  ${
              mode === "bg-gray-900" ? "bg-gray-50" : "bg-gray-900"
            }  p-5 text-xl`}
            onChange={searchHandler}
          ></input>
          <button
            className={`text-4xl hover:scale-125 transition-all duration-150`}
          >
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
      </form>
    </div>
  );
}
