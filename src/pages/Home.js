import React from "react";
import Title from "../components/title/Title";
import Slider from "../components/title/Slider";

export default function Home() {
  return (
    <div className="flex md:mx-24 md:flex-wrap lg:flex-nowrap py-20 lg:py-0   px-5 justify-center flex-col md:flex-row gap-20 items-center min-h-screen">
      <Title></Title>
      <Slider></Slider>
    </div>
  );
}
