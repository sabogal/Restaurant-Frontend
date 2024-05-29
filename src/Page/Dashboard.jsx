import React, { useContext, useEffect, useState } from 'react'
import { showData } from '../Components/showdata';
import Cookies from 'js-cookie';
import Sidebar from '../Components/sidebar';
import { Menus } from '../Components/Sidebarvaresolar';
import Logo from '../assets/Img/logo1.png';
import { rutes } from '../Components/urls'
import { Card } from '../Components/Card'
import { ShoppingCart } from 'lucide-react';
import { Shoppingcart } from '../context/context';
import { ProductDetail } from '../Components/ProductDetail';
import { SideMenu } from '../Components/sideMenu';

const Cars = () => {
    const context = useContext(Shoppingcart)
    const [InfoCar, setInfoCar] = useState([]);
    let token = Cookies.get("102365");
    useEffect(() => {
        showData("GET", token, rutes.products.url)
            .then((resultinfo) => {
                setInfoCar(resultinfo.data);
                console.log(resultinfo);
            })
            .catch((error) => console.log("error", error));
    }, []);

    const showCheckout = (products) => {
        context.Openbuy()
        context.setProductShow(products)
        console.log(products);
      }

    return (
        <main className="Dashboard ">
            <div className="bg-zinc-100">
                <div className=" ">
                    <Sidebar menus={Menus} Logo={Logo} />
                </div>

                <div className="pl-24 pr-4 md:pl-20 pt-5 md:pr-8 text-tertiary-200 ">
                    <h2 className="text-gray-500 text-3xl font-light p-1 flex items-center justify-center">Catalogo</h2>
                    <div className="p-1 flex flex-wrap items-center justify-center w-4/5">
                        {InfoCar.map((data) => {
                            return <Card key={data.id} info={data} className="mb-1 mr-4" />;
                        })}
                    </div>
                    <a onClick={() => showCheckout(context.CartProducts)} className=' z-50 fixed bg-slate-500 text-slate-50 w-20 h-20 rounded-full flex justify-center items-center right-0 mx-4 bottom-1'>
                        <ShoppingCart />
                        <div className='absolute left-0 top-0 rounded-full bg-red-400 h-8 w-8 flex justify-center items-center ' >
                        {context.count}

                        </div>
                    </a>
                </div>

            </div>
            <ProductDetail/>
            <SideMenu/>

        </main>



    )
}

export default Cars
