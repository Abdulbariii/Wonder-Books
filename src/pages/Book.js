import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";
import BookDetail from "../components/books/BookDetail";
export default function Book() {
  const { id } = useParams();
  const url = `https://www.googleapis.com/books/v1/volumes/${id.replace(
    ":",
    ""
  )}?key=AIzaSyBLmw55bH-rB7hKD-CPJPvlTI0LtQ5tAK8`;
  const { data, isPending, error } = useFetch(url);

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={` flex md:mx-24 md:flex-wrap   lg:flex-nowrap py-20 lg:py-0   px-5 justify-start flex-col md:flex-row gap-20 items-center min-h-screen`}
    >
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {data && <BookDetail data={data}></BookDetail>}
    </motion.div>
  );
}
