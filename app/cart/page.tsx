"use client";

import ProductsList from "@/db/Products";
import { useProductStore } from "@/store/ProductStore";
import useStore from "@/store/useStore";
import Image from "next/image";

const Page = () => {
  const productsChoosen = useStore(
    useProductStore,
    (state) => state.productsChoosen
  );
  let quantities = useStore(useProductStore, (state) => state.quantities);

  const setQuantities = useProductStore((state) => state.setQuantities);

  const productsInCart = ProductsList.filter((product) =>
    productsChoosen?.includes(product.id)
  );
  const addItem = (id: number, incr: number) => setQuantities!(id, incr);

  const onLogDetails = () => {
    console.log("Checkout Details...");
    productsInCart.forEach((product) => {
      console.log(
        product.name,
        " with product id:",
        product.id,
        " -> quantity of",
        quantities![product.id],
        " with a price of",
        Math.round(quantities![product.id] * product.price * 100) / 100
      );
    });
    const totalAmount = productsInCart.reduce(
      (acc, curr) => acc + curr.price * quantities![curr.id],
      0
    );
    console.log("Total Amount for Checkout in cart is", totalAmount);
  };

  return (
    <div className="mt-40 flex w-full justify-center flex-col items-center gap-6">
      {productsInCart.length === 0 && (
        <p className="text-2xl">Add Items in cart to view this.....</p>
      )}
      {productsInCart?.map((product) => (
        <div
          key={`${product.id}_1`}
          className="bg-[#f7f5f0] w-3/4 md:w-1/2 rounded-3xl"
        >
          <div className="flex justify-between md:justify-around p-2 items-center ">
            <div>
              <Image
                src={product.imgUrl}
                alt={product.name}
                height={80}
                width={80}
              />
              <p className="text-red-500 font-semibold pl-4 py-1">
                {product.price} {`  (${quantities![product.id]})`}
              </p>
              <div className="flex cursor-pointer bg-[#ffffff] rounded-3xl">
                <p
                  onClick={() => addItem(product.id, 1)}
                  className="text-3xl py-1 pr-2 pl-3 border-r leading-8 hover:bg-[#e3e2de] hover:rounded-l-3xl"
                >
                  +
                </p>
                <p
                  onClick={() => addItem(product.id, -1)}
                  className="text-3xl py-1 pl-3 pr-3 border-l leading-8 hover:rounded-r-3xl hover:bg-[#e3e2de]"
                >
                  -
                </p>
              </div>
            </div>
            <div>
              <p className="text-red-500 font-semibold py-1">{product.name}</p>
              <p>
                {Math.round(quantities![product.id] * product.price * 100) /
                  100}{" "}
                rs/-
              </p>
            </div>
          </div>
        </div>
      ))}
      <div
        className="animate-bounce bg-[#611610] text-white mt-10 p-6 px-10 rounded-lg cursor-pointer"
        onClick={onLogDetails}
      >
        Checkout (
        {productsInCart.reduce(
          (acc, curr) => acc + curr.price * quantities![curr.id],
          0
        )}
        rs/-)
      </div>
    </div>
  );
};

export default Page;
