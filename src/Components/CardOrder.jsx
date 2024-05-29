import React, { useContext } from "react";
import img from '../assets/default.jpg';
import {domain} from './urls'
import "./Card.css";
import { Shoppingcart } from "../context/context";
import { Check, Plus } from "lucide-react";

export const CardOrder = (props) => {
  console.log(props.info);
  const context = useContext(Shoppingcart);
  const { id, fk_products, full_price } = props.info;
  
  const formattedPrice = full_price.toLocaleString('es-ES');
  const productos = fk_products;
  const addProduct = (product) => {
    context.addProductToCart(product);
  };
  
  console.log(productos);

  return (
    <div className="border-orange-200 p-6 border-2 rounded-lg w-96 flex flex-col justify-center items-center" >
      <div className="">
      <h1 className="card-price-h3">orden #{id} </h1>
      </div>
      <div>
      <h2 className="flex justify-center text-2xl text-black mb-8">Productos </h2>
      <div className="w-full my-8 flex justify-center text-black text-3xl">${formattedPrice}</div>
      <div className="p-4 mb-8 h-64 overflow-scroll w-full">
        {productos.map((data, index) => (
          <div className='mt-4' key={index}>
            <p className='flex flex-col justify-center mt-10'>
              <span className='text-lg font-bold text-black mb-4'>{data.name}</span>
              <span className='font-medium text-md text-gray-700'>$ {data.basic_price} pesos</span>
              <span className='font-medium text-md text-gray-700'>Cantidad x{data.amount}</span>
            </p>
          </div>
        ))
        }
      </div>

      </div>
      
      <div className="flex justify-center">
        <button className="purchase text-black" onClick={(e) => {
          e.stopPropagation();
          addProduct(props.info);
        }}>
          Atender <Check/>
        </button>
      </div>
    </div>
  );
};