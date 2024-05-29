import React, {useEffect, useState} from 'react'
import { Datateble } from '../Components/Datateble';
import { showData } from '../Components/showdata';
import Cookies from 'js-cookie';
import Sidebar from '../Components/sidebar';
import { Menus } from '../Components/Sidebarvaresolar';
import Logo from '../assets/Img/logo1.png';
import {rutes} from '../Components/urls'
import { DatateblePt } from '../Components/DatateblePt';
const Product = () => {

    const [InfoProducts, setInfoProducts] = useState([]);
    let token = Cookies.get("102365");
    useEffect(() => {
      showData("GET", token, rutes.products.url)
        .then((resultinfo) => {
          setInfoProducts(resultinfo);
        })
        .catch((error) => console.log("error", error));
    }, []);

  return (

    <main className="Dashboard">
    <div className=" bg-gray-100">
      <div className=" ">
        <Sidebar menus={Menus} Logo={Logo}/>
      </div>
      
      <div className="pl-24 pr-4 md:pl-20 pt-5 md:pr-8 text-tertiary-200 h-screen">
 
      <h2 className="text-gray-100 text-3xl font-light p-1 flex  items-center justify-center ">Products</h2>
      <DatateblePt info={InfoProducts}/>
      </div>
    </div>
  </main>
  )
}

export default Product
