import React, {useEffect, useState} from 'react'
import { Datateble } from '../Components/Datateble';
import { showData } from '../Components/showdata';
import Cookies from 'js-cookie';
import Sidebar from '../Components/sidebar';
import { Menus } from '../Components/Sidebarvaresolar';
import Logo from '../assets/Img/logo1.png';
import {rutes} from '../Components/urls'
const Users = () => {

    const [Infousers, setInfousers] = useState([]);
    let token = Cookies.get("102365");
    useEffect(() => {
      showData("GET", token, rutes.user.GET)
        .then((resultinfo) => {
          setInfousers(resultinfo);
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
 
      <h2 className="text-gray-100 text-3xl font-light p-1 flex  items-center justify-center ">Users</h2>
      <Datateble info={Infousers}/>
      </div>
    </div>
  </main>
  )
}

export default Users
