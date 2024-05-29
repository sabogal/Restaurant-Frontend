// import { createContext, useState } from "react";


// export const Shoppingcart = createContext()

// export const ShoppingcartProvider = ({ children }) => {
//     const [count, setCount] = useState(0);
//     const [isProductDetailOpen, setisProductDetailOpen] = useState(false);
//     const OpenproductDetail = () => setisProductDetailOpen(true);
//     const CloseproductDetail = () => setisProductDetailOpen(false);

//     const [isbuyOpen, setisbuyOpen] = useState(false);
//     const Openbuy = () => setisbuyOpen(true);
//     const Closebuy = () => setisbuyOpen(false);

//     const [productShow, setproductShow] = useState({});

//     const [CartProducts, setCartProducts] = useState([]);

//     return (
//         <Shoppingcart.Provider value={{count, setCount, OpenproductDetail, CloseproductDetail, isProductDetailOpen, setproductShow, productShow, setCartProducts, CartProducts, isbuyOpen, Openbuy, Closebuy }}>
//             {children}
//         </Shoppingcart.Provider>
//     )

// }

// context/context.js
import React, { createContext, useState } from 'react';

export const Shoppingcart = createContext();

export const ShoppingcartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setisProductDetailOpen] = useState(false);
  const [productShow, setProductShow] = useState([]); 
  const [cartProducts, setCartProducts] = useState({}); // Usamos un objeto para almacenar productos por id
      const OpenproductDetail = () => setisProductDetailOpen(true);
    const CloseproductDetail = () => setisProductDetailOpen(false);
  const [isbuyOpen, setisbuyOpen] = useState(false);
  const Openbuy = () => setisbuyOpen(true);
  const Closebuy = () => setisbuyOpen(false);
  const addProductToCart = (product) => {
    setCartProducts(prevCart => {
      const newCart = { ...prevCart };
      if (newCart[product.id]) {
        newCart[product.id].amount += 1;
      } else {
        newCart[product.id] = { ...product, amount: 1 };
      }
      return newCart;
    });
    setCount(prevCount => prevCount + 1);
  };

  return (
    <Shoppingcart.Provider value={{
      count,
      setCount,
      productShow,
      setProductShow,
      cartProducts,
      CloseproductDetail,
      addProductToCart,
      OpenproductDetail,
      isbuyOpen,
      Closebuy,
      Openbuy
    }}>
      {children}
    </Shoppingcart.Provider>
  );
};