import React from "react";
import useTheme from "../../hook/useTheme";
import { useState } from "react";
export default function SearchDashboard() {
  const { searchChange, mode, color, text, nextPageChange } = useTheme();
  const [bookName, setBookName] = useState();
  const searchHandler = (event) => {
    setBookName(event.target.value);
  };

  const sumbitSearch = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="flex flex-wrap gap-10">
        <form onSubmit={sumbitSearch}>
          <div className={`flex  gap-5 flex-wrap ${text}  cursor-pointer`}>
            <button
              className={`text-4xl hover:scale-125 transition-all duration-150`}
            >
              <ion-icon name="search-outline"></ion-icon>
            </button>
            <input
              value={bookName}
              placeholder="Search"
              className={` w-56 h-8  rounded-2xl  ${
                mode === "bg-gray-900" ? "bg-gray-50" : "bg-gray-900"
              }  p-3 text-lg`}
              onChange={searchHandler}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
