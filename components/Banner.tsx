"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      initial={{
        y: 50,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ duration: 2 }}
      className="w-full flex justify-center my-20"
    >
      <div className="w-3/4 flex flex-col md:flex-row justify-around items-center py-20 px-5 border border-[#a39697] shadow-2xl rounded-lg gap-8 md:gap-0">
        <div className="w-full md:w-1/4 flex items-center flex-col md:flex-row">
          <Image
            src={"/redcake.jpeg"}
            alt="red cake"
            height={120}
            width={120}
            className="rounded-full hover:scale-150 hover:transition"
          />
          <div className="px-3 text-center md:text-left pt-4 md:pt-0">
            <p className="text-[#4d0507] font-bold italic">Products</p>
            <p className="italic">
              We Provide you with excellent dishes in world!
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/4 flex items-center flex-col md:flex-row">
          <Image
            src={"/bluecake.jpeg"}
            alt="red cake"
            height={120}
            width={120}
            className="rounded-full hover:scale-150 hover:transition"
          />
          <div className="px-3 text-center md:text-left pt-4 md:pt-0">
            <p className="text-[#4d0507] font-bold italic">Cake Class</p>
            <p>Next master chef which defines cake class</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 flex items-center flex-col md:flex-row">
          <Image
            src={"/redcake.jpeg"}
            alt="red cake"
            width={120}
            height={120}
            className="rounded-full hover:scale-150 hover:transition"
          />
          <div className="px-3 text-center md:text-left pt-4 md:pt-0">
            <p className="text-[#4d0507] font-bold italic">Recipes</p>
            <p>We Provide you with excellent dishes in world!</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
