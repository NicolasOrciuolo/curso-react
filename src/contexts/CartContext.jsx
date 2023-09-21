import { createContext, useState } from "react";

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
   const [items, setItems] = useState([])

   const addItem = (product, quantity) => {
      const itemsExist = items.some(item => item.id === product.id)

      if (!itemsExist)
         setItems(prev => [...prev, { ...product, quantity }])
      else {
         const addQuantity = items.map(item => {
            if (item.id === product.id)
               return {
                  ...product, quantity: item.quantity + quantity
               }
            else return item
         })
         setItems(addQuantity)
      }
   }

   const totalWidget = items.reduce((acc, val) => acc + val.quantity, 0)

   const removeItem = (id) => {
      const itemsFiltered = items.filter(item => item.id !== id)
      setItems(itemsFiltered)
   }

   const clear = () => {
      setItems([])
   }

   return (
      <CartContext.Provider value={{ items, addItem, removeItem, clear, totalWidget }}>
         {children}
      </CartContext.Provider>
   )
}