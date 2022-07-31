import React, { useState } from "react";
import useTheme from "../../hook/useTheme";

export default function SearchBar() {
  const { searchChange } = useTheme();
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
        <div className="flex gap-5 flex-wrap text-7xl text-red-400 cursor-pointer">
          <input
            placeholder="Search"
            className="w-96 h-10 text-red-200 "
            onChange={searchHandler}
          ></input>
          <button>
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
      </form>
    </div>
  );
}
