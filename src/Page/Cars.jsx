import React, { useEffect, useState } from 'react'
import { showData } from '../Components/showdata';
import Cookies from 'js-cookie';
import Sidebar from '../Components/sidebar';
import { Menus } from '../Components/Sidebarvaresolar';

import Logo from '../assets/Img/logo1.png';
import { rutes } from '../Components/urls'
import { Card } from '../Components/Card'


const Cars = () => {
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

    return (
        <main className="Dashboard">
            <div className="bg-zinc-200">
                <div className=" ">
                    <Sidebar menus={Menus} Logo={Logo} />
                </div>

                <div className="pl-24 pr-4 md:pl-20 pt-5 md:pr-8 text-tertiary-200 h-screen">
                    <h2 className="text-gray-400 text-3xl font-light p-1 flex items-center justify-center">Catalog</h2>
                    <div className="p-1 flex flex-wrap items-center justify-center h-max">
                        {InfoCar.map((data) => {
                            return <Card key={data.id} info={data} className="mb-1 mr-4" />;
                        })}
                    </div>
                </div>
            </div>

        </main>



    )
}

export default Cars
