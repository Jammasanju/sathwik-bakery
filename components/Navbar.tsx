"use client";

import { useProductStore } from "@/store/ProductStore";
import useStore from "@/store/useStore";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { BiCart } from "react-icons/bi";

const Navbar = () => {
  const router = useRouter();
  const productsChoosen = useStore(
    useProductStore,
    (state) => state.productsChoosen
  );
  const onHomeClick = useCallback(() => {
    router.replace("/");
  }, [router]);
  const onCartClick = () => {
    router.push("/cart");
  };

  return (
    <div className="h-20 bg-[#f5e5c4] text-black flex items-center italic md:px-10 justify-between">
      <motion.div
        initial={{
          x: -350,
        }}
        animate={{
          x: 5,
        }}
        transition={{ duration: 1 }}
        className="cursor-pointer"
        onClick={onHomeClick}
      >
        <p className="text-[#4d1a00] text-2xl font-semibold hover:-rotate-3 hover:scale-110">
          Sathwik Jamma Bakery{" "}
          <span className="wave 2s linear infinite">{"->"}</span>
        </p>
      </motion.div>
      <motion.div
        initial={{
          x: 150,
        }}
        animate={{
          x: 5,
        }}
        transition={{ duration: 1 }}
        className="pr-4 flex items-center cursor-pointer"
        onClick={onCartClick}
      >
        <BiCart size={42} />
        <p className="hidden md:block text-[#4d1a00] text-2xl pl-4">Cart</p>
        <p className="text-[#4d1a00] text-2xl">
          {productsChoosen?.length !== 0 && `(${productsChoosen?.length})`}
        </p>
      </motion.div>
    </div>
  );
};

export default Navbar;
