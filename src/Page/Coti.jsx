import React, {useEffect, useState} from 'react'

import { showData } from '../Components/showdata';
import Cookies from 'js-cookie';
import Sidebar from '../Components/sidebar';
import { Menus } from '../Components/Sidebarvaresolar';
import Logo from '../assets/Img/logo1.png';
import { DatatebleWare } from '../Components/DatatebleWare';
import { DatatebleCoti } from '../Components/DatatebleCoti';
const Coti = () => {

    const [Infocoti, setInfocoti] = useState([]);
    let token = Cookies.get("102365");
    useEffect(() => {
      showData("GET", token, "/reports/quotation/")
        .then((resultinfo) => {
          setInfocoti(resultinfo.data);
  
        })
        .catch((error) => console.log("error", error));
    }, []);

  return (

    <main className="Dashboard">
    <div className="  bg-gray-700">
      <div className=" ">
        <Sidebar menus={Menus} Logo={Logo}/>
      </div>
      
      <div className="pl-24 pr-4 md:pl-20 pt-5 md:pr-8 text-tertiary-200 h-screen">
 
      <h2 className="text-gray-100 text-3xl font-light p-1 flex  items-center justify-center ">Quotation</h2>
      <DatatebleCoti info={Infocoti}/>
      </div>
    </div>
  </main>
  )
}

export default Coti
