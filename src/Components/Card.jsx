import React, { useContext } from "react";
import img from '../assets/default.jpg';
import {domain} from '../Components/urls'
import "./Card.css";
import { Shoppingcart } from "../context/context";
import { Plus } from "lucide-react";

export const Card = (props) => {
  const context = useContext(Shoppingcart);
  const { id, price, name, description, image } = props.info;
  
  const formattedPrice = price.toLocaleString('es-ES');

  const addProduct = (product) => {
    context.addProductToCart(product);
  };

  const showProduct = (product) => {
    context.OpenproductDetail();
    context.setProductShow(product);
  };

  return (
    <div className="card" onClick={() => showProduct(props.info)}>
      <div className="card-header">
        <div className="profile">
          <span className="letter">{id}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{name}</h5>
          <div className="card-date">{formattedPrice}</div>
        </div>
      </div>
      <img className="w-96 h-48 object-cover rounded-xl mt-2" src={domain + image} alt={img} />
      <div className="card-price">
        <h1 className="card-price-h3">$ {formattedPrice} Pesos</h1>
      </div>
      <div className="w-full text-lg my-8 flex justify-center">{description ? description : "sin descripcion"}</div>
      <div className="flex justify-center">
        <button className="purchase" onClick={(e) => {
          e.stopPropagation();
          addProduct(props.info);
        }}>
          Agregar al carrito <Plus/>
        </button>
      </div>
    </div>
  );
};