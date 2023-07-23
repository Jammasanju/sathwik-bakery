import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ProductState {
  productsChoosen: number[];
  setProductsChoosen: (id: number) => void;
  quantities: { [id: number]: number };
  setQuantities: (id: number, incr: number) => void;
}

export const useProductStore = create<ProductState>()(
  persist(
    (set) => ({
      productsChoosen: [],
      quantities: { 1: 0, 2: 0, 3: 0, 4: 0 },
      setProductsChoosen: (id: any) =>
        set((state) => ({
          productsChoosen: [...state.productsChoosen].includes(id)
            ? state.productsChoosen
            : [...state.productsChoosen, id],
        })),
      setQuantities: (id: number, incr: number) => {
        set((state) => ({
          quantities: {
            ...state.quantities,
            [id]:
              state.quantities[id] + incr >= 0
                ? state.quantities[id] + incr
                : 0,
          },
        }));
        set((state) => ({
          productsChoosen: state.productsChoosen.filter((iid) =>
            Object.keys(state.quantities)
              .filter((id) => state.quantities[Number(id)] > 0)
              .includes(iid.toString())
          ),
        }));
      },
    }),
    { name: "sathwik-bakery", storage: createJSONStorage(() => sessionStorage) }
  )
);
