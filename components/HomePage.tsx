"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Banner from "./Banner";
import Products from "./Products";

const HomePage = () => {
  const [text] = useTypewriter({
    words: [
      "<Welcome to Sathwik's Bakery />",
      "We have excellent sweets for you....!!!",
    ],
    loop: true,
  });

  return (
    <div className="bg-[#f7f2f3] min-h-screen py-20">
      <div className="flex w-full justify-center pt-10 md:pt-20 text-xl md:text-3xl font-semibold">
        <span>{text}</span>
        <Cursor cursorColor="red" />
      </div>
      <Banner />
      <p className="font-semibold text-lg md:text-2xl text-center pt-5">
        Try Our New Products
      </p>
      <div className="flex w-full justify-center">
        <div className="mt-4 h-1 bg-red-500 w-1/3 animate-ping" />
      </div>
      <Products />
    </div>
  );
};

export default HomePage;
