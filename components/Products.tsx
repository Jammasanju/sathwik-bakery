"use client";

import ProductsList from "@/db/Products";
import { useProductStore } from "@/store/ProductStore";
import Image from "next/image";
import { shallow } from "zustand/shallow";

const Products = () => {
  const products = ProductsList;
  const setProductsChoosen = useProductStore(
    (state) => state.setProductsChoosen,
    shallow
  );
  const setQuantities = useProductStore((state) => state.setQuantities);
  const addProduct = (id: number) => () => {
    setQuantities(id, 1);
    setProductsChoosen(id);
  };

  return (
    <div className="flex w-full justify-center flex-col md:flex-row items-center gap-16 md:gap-12 my-20">
      {products.map((item) => (
        <div
          key={item.id}
          className="border md:px-0 hover:scale-125 md:hover:scale-150 hover:transition cursor-pointer rounded-lg shadow-xl mt-8 md:pt-0"
          onClick={addProduct(item.id)}
        >
          <div className="hidden md:block">
            <Image
              src={item.imgUrl}
              alt={item.alt}
              height={120}
              width={160}
              className="rounded-t-lg"
            />
          </div>
          <div className="md:hidden">
            <Image
              src={item.imgUrl}
              alt={item.alt}
              height={210}
              width={280}
              className="rounded-t-lg"
            />
          </div>
          <p className="text-center text-violet-600 font-semibold bg-[#c1dde3]">
            {item.name}
          </p>
          <p className="text-center text-red-600">{item.price}</p>
          <div className="flex w-full justify-center">
            <p className="text-center translate-y-4 bg-blue-200 w-28">
              Add to Cart
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
