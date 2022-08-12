import React from "react";
import Title from "../components/title/Title";
import Slider from "../components/title/Slider";
import useTheme from "../hook/useTheme";
import { motion } from "framer-motion";
export default function Home() {
  const { mode } = useTheme();
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={` flex md:mx-24 md:flex-wrap  lg:flex-nowrap py-10 lg:py-0   px-5 justify-start flex-col md:flex-row gap-20 items-center min-h-screen`}
    >
      <Title></Title>
      <Slider></Slider>
    </motion.div>
  );
}
