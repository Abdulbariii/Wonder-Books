import React from "react";
import FavoriteCards from "../../components/favorite/FavoriteCards";
export default function Favorite() {
  return (
    <div className="text-red-300 h-96 grow w-[50rem] px-10 flex justify-start items-start text-start">
      <FavoriteCards></FavoriteCards>
    </div>
  );
}
