import React from "react";
import Swal from "sweetalert2";
import { LoginForm } from "../Login/LoginForm";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { domain } from "./src/Components/urls";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async ({ username, password }) => {
    try {
      const response = await fetch(domain, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Autenticación exitosa
        let data_usuario = await response.json();
        Cookies.set('102365', data_usuario.data.token, { expires: 1, path: '/' })
        Cookies.set('102360', data_usuario.id, { expires: 1, path: '/' })
        Cookies.set('102361', data_usuario.username, { expires: 1, path: '/' })
        
        
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Has iniciado sesión correctamente.",
        });
        navigate("../Dashboardred", { replace: true });

        
      } else {
        // Error en la autenticación
        await Swal.fire('Error', 'Usuario o contraseña incorrectos', 'error');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      await Swal.fire('Error', 'Ocurrió un error al iniciar sesión', 'error');
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
