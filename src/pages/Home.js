import React from "react";
import Title from "../components/title/Title";
import Slider from "../components/title/Slider";

export default function Home() {
  return (
    <div className="flex mx-24 px-5 justify-center flex-col md:flex-row gap-20 items-center  h-screen">
      <Title></Title>
      <Slider></Slider>
    </div>
  );
}
