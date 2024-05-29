import { CircleDollarSign, CircuitBoard, LayoutDashboard, Users } from "lucide-react";

export const Menus = [
    { title: "Inicio", src: <LayoutDashboard />, ruta: "/" },
    { title: "Ordenes", src: <CircleDollarSign />, ruta: "/Orders" },
    { title: "Productos", src: <CircuitBoard />, ruta: "/Products" },
    { title: "Users", src: <Users />, ruta: "/Users" },
  ];


  