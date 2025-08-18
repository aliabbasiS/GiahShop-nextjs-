// store.ts
import { create } from "zustand"

export interface Flower {
  id: number
  name: string
  description: string
  price: string
  image: string
}

interface State {
  products: Flower[]
  cart: Flower[]
}

interface Actions {
  addToCart: (product: Flower) => void
  getCart: () => Flower[]
  getFromApi: () => Promise<void>
}

const useShoppingStore = create<State & Actions>((set, get) => ({
  products: [],
  cart: [],

  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),

  getCart: () => get().cart,

  getFromApi: async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products") // replace with your API
      const data = await res.json()

      // map to Flower structure if needed
      const flowers: Flower[] = data.map((item: any, index: number) => ({
        id: item.id || index,
        name: item.title || "No name",
        description: item.description || "",
        price: item.price ? `$${item.price}` : "0",
        image: item.image || "",
      }))

      set({ products: flowers })
    } catch (err) {
      console.error("Failed to fetch products", err)
    }
  },
}))

export default useShoppingStore
