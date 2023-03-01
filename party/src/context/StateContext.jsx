import React, { createContext, useContext, useState, useEffect } from "react"
import { toast } from "react-hot-toast"

const Context = createContext()

export const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1)
  const [query, setQuery] = useState("")
  const [isShowing, setIsShowing] = useState(false)

  let foundProduct
  let index

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => itemid === product.id)

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.id === product.id)
          return {
            ...cartProduct,
            quantity: cartProduct.product + quantity,
          }
      })

      setCartItems(updatedCartItems)
    } else {
      product.quantity = quantity

      setCartItems([...cartItems, { ...product }])
    }

    toast.success(`${qty} ${product.name} added to the cart.`)
  }

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item.id === product.id)
    const newCartItems = cartItems.filter((item) => item.id !== product.id)

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    )
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    )
    setCartItems(newCartItems)
  }

  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItems.find((item) => item.id === id)
    index = cartItems.findIndex((product) => product.id === id)
    const newCartItems = cartItems.filter((item) => item.id !== id)

    if (value === "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ])
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ])
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
      }
    }
  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1)
  }

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1

      return prevQty - 1
    })
  }

  return (
    <Context.Provider
      value={{
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
        setQuery,
        query,
        isShowing,
        setIsShowing,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
