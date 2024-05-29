import { LogOut } from "lucide-react";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { rutes } from './urls';

export const Logout = (props) => {
  const token = Cookies.get("102365");
  const id = Cookies.get("102360");
  const [open, setOpen] = useState(props.SidebarClose);

  useEffect(() => {
    setOpen(props.SidebarClose);
  }, [props]);

  const credentials = {
    user: id,
  };
  const Logoutfun = () => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(credentials),
      redirect: "follow",
    };
    
    return fetch(rutes.logout.url,
      requestOptions
    ).then((response) => {
      if (response.status === 200) {
        Cookies.remove("102365", { path: "/" });
        Cookies.remove("102360", { path: "/" });
        window.location.href = "/";
      } else {
        Swal.fire({
          title: "Error!",
          footer: "Fallo en el servidor",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  return (
    <a
      className="inline-flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-100 text-sm items-center gap-x-4 
  mt-9 false"
      onClick={Logoutfun}
      id="log_out"
    >
      <LogOut />
      <span className={`${!open && "hidden"} origin-left duration-200`}>
        Logout
      </span>
    </a>
  );
};
