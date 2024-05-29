import {
  Building2,
  ChevronLeft,
  CircuitBoard,
  Layers3,
  LayoutDashboard,
  LayoutList,
  Leaf,
  RouterIcon,
  Target,
  User,
  UserCircle2,
} from "lucide-react";
import { useState } from "react";
import { Logout } from "./Logout";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";


export default function Sidebar(props) {
  const [open, setOpen] = useState(false);

  let name = Cookies.get("102361");

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-[#c53f09] h-full p-5  pt-8 fixed duration-300 z-50`}
    >
      <ChevronLeft
        className={`absolute cursor-pointer bg-gray-100 -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex items-center">
        <img
          src={props.Logo}
          className={`cursor-pointer duration-500 w-40 ${
            open && "rotate-[360deg]"
          }`}
        />
   
      </div>
      <ul className="pt-6">
        {props.menus.map((Menu, index) => (
          <li key={index}>
            <Link
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-100 text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
              to={Menu.ruta}
            >
              {Menu.src}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      
      {/* <div  className="inline-flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-100 text-sm items-center gap-x-4 
  mt-9 false">
      <h5
       
      >
        {infoUser.name}
      </h5>
      </div> */}
      <div>
        <Logout SidebarClose={open} />
      </div>
    </div>
  );
}
