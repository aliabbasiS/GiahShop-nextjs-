import { create } from "zustand"
import s from '../../public/shopescard/img1.png'
export interface Flower {
  id: string
  name: string
  description: string
  price: string
  image: string
}

interface CartItem extends Flower {
  quantity: number
}

interface StoreState {
  products: Flower[]
  cart: CartItem[]
  addToCart: (product: Flower) => void
  removeFromCart: (productId: string) => void
  getCart: () => CartItem[]
}

const useShoppingStore = create<StoreState>((set, get) => ({
  products: [
    {id:crypto.randomUUID(),name:'گیاه طبیعی بابا آدم',description:'pachira ',price:'555',image:'/shopescard/img1.png'},
    {id:crypto.randomUUID(),name:'  گیاه طبیعی یوکا ',description:'pachira ',price:'250',image:'/shopescard/img2.png'},
    {id:crypto.randomUUID(),name:'گیاه طبیعی سانسوریا سبز   ',description:'pachira ',price:'560',image:'/shopescard/img3.png'},
    {id:crypto.randomUUID(),name:' گیاه طبیعی ساکولنت ',description:'pachira ',price:'852',image:'/shopescard/img4.png'},
    {id:crypto.randomUUID(),name:' گیاه طبیعی ساکولنت  ',description:'pachira ',price:'535',image:'/shopescard/img2.png'},


  ],
  cart: [],
  addToCart: (product) => {
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id)
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] }
    })
  },
  removeFromCart: (productId) => {
    set((state) => {
      const existing = state.cart.find((item) => item.id === productId)
      if (existing && existing.quantity > 1) {
        return {
          cart: state.cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        }
      }
      return {
        cart: state.cart.filter((item) => item.id !== productId),
      }
    })
  },
  getCart: () => get().cart,
}))

export default useShoppingStore
