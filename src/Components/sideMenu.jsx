import { Plus, ShoppingCart, X } from 'lucide-react'
import React, { useContext } from 'react'
import { Shoppingcart } from '../context/context'
import { domain, rutes } from './urls';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

export const SideMenu = () => {
    let token = Cookies.get("102365");
    const context = useContext(Shoppingcart);

    const productShow = context.cartProducts || [];

    let keys = Object.keys(productShow);
    let length = keys.length;
    let productShowArray = Object.values(productShow);

    console.log(productShowArray);

    const transformProductsArray = (productShowArray) => {
        return productShowArray.map(product => ({
            fk_products: product.id, // O la propiedad que sea el identificador del producto
            amount: product.amount // Asumimos que cada objeto en productShowArray tiene una propiedad amount
        }));
    };


    const crearOrden = async () => {
        const products = transformProductsArray(productShowArray);
        try {
            const response = await fetch(rutes.workorder.url, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ state: 2, description: "N/A", products: products }),
            });

            if (response.ok) {
                // Autenticación exitosa


                Swal.fire('sucess', 'Orden creada', 'Revisa el apartado de ordenes');
                // navigate("../Dashboardred", { replace: true });


            } else {
                // Error en la autenticación
                await Swal.fire('Error', 'Al crear a la orden', '');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            await Swal.fire('Error', 'Ocurrió un error', error);
        }
    };

    // Asegúrate de que context.productShow no sea nulo o indefinido


    return (
        <aside className={`${context.isbuyOpen ? 'flex' : 'hidden'} w-[360px] flex flex-col fixed right-0 border border-gray-300 rounded-lg top-4 bg-white h-screen overflow-scroll`}>
            <div className='flex flex-col items-center p-6'>
                <div className='flex justify-between w-full mb-16'>
                    <h2 className='font-bold text-xl text-black'> Checkout </h2>
                    <X className='h-6 w-6 text-black' onClick={() => context.Closebuy()} />
                </div>
                {length > 0 ? (

                    productShowArray.map((data) => (
                        <div className='mt-4' key={data.id}>
                            <figure>
                                <img className="w-96 h-48 object-cover rounded-xl" src={domain + data.image} alt={data.name} />
                            </figure>
                            <p className='flex flex-col justify-center mt-10'>
                                <span className='font-medium text-2xl text-black mb-4'>{data.name}</span>
                                <span className='font-medium text-md text-gray-700'>$ {data.price} pesos</span>
                                <span className='font-medium text-md text-gray-700'>X {data.amount} </span>
                            </p>
                        </div>
                    ))
                ) : (
                    <div className='mt-4'>
                        <p className='text-lg text-gray-700'>No hay productos seleccionados</p>
                    </div>
                )}
                <div className="flex justify-start mt-10 text-black">
                    <button className="flex gap-3 bg-[#fab779] p-4 rounded-2xl" onClick={crearOrden}>
                        Ordenar <ShoppingCart />
                    </button>
                </div>
            </div>
        </aside>
    );
};