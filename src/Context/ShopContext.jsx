import React, { createContext, useState } from 'react'
import all_product from "../Components/Assets/Ecommerce_Frontend_Assets/Assets/all_product"


export const ShopContext = createContext(null)
//creating the default cart
    const getDefaultCart = () => {
      let cart = {};
      for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;  
      }
      return cart;
    }

const ShopContextProvider = (props) => {

  //creating a state to store the empty cart 
  const [cartItems, setCartItems] = useState(getDefaultCart())
  
  //function that adds Items to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}
    ))
  }

  //function that removes items from cart
  const removeFromCart = (itemId) => {
    setCartItems(prev => (
      {...prev, [itemId]:prev[itemId] - 1}
    ))
  }

  //function that gets the total cart amount
  const getTotalCartAmount = () => {
    
    let totalAmount = 0;
    for (const item in cartItems){
      if (cartItems[item] > 0){
        let info = all_product.find((prod) =>
          prod.id === Number(item)
        )
        totalAmount += info.new_price * cartItems[item]
      }
    }
    return totalAmount;
  }

  //function that gets toal cart count
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems){
      if (cartItems[item] > 0){
        totalItems += cartItems[item]
      }
    }
    return totalItems;
  }

  //context that stores and avails all the data to other parts of the website
  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems
  };

  return (
        <ShopContext.Provider value={contextValue}>
          {props.children}
        </ShopContext.Provider>
  )
}

export default ShopContextProvider; 