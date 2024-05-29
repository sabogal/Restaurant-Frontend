import { Plus, ShoppingCart, X } from 'lucide-react'
import React, { useContext } from 'react'
import { Shoppingcart } from '../context/context'
import { domain } from './urls';

export const SideMenu = () => {
    const context = useContext(Shoppingcart);

    const addProduct = (products) => {
        context.setCartProducts([...context.cartProducts, products]);
        context.setCount(context.count + 1);
    };

    // Asegúrate de que context.productShow no sea nulo o indefinido
    const productShow = context.productShow || [];

    return (
        <aside className={`${context.isbuyOpen ? 'flex' : 'hidden'} w-[360px] flex flex-col fixed right-0 border border-gray-300 rounded-lg top-4 bg-white h-screen`}>
            <div className='flex flex-col items-center p-6'>
                <div className='flex justify-between w-full mb-16'>
                    <h2 className='font-bold text-xl text-black'> Checkout </h2>
                    <X className='h-6 w-6 text-black' onClick={() => context.Closebuy()} />
                </div>
                {productShow.length > 0 ? (
                    productShow.map((data, index) => (
                        <div className='mt-4' key={index}>
                            <figure>
                                <img className="w-96 h-48 object-cover rounded-xl" src={domain + data.image} alt={data.name} />
                            </figure>
                            <p className='flex flex-col justify-center mt-10'>
                                <span className='font-medium text-2xl text-black mb-4'>{data.name}</span>
                                <span className='font-medium text-md text-gray-700'>$ {data.price} pesos</span>
                            </p>
                        </div>
                    ))
                ) : (
                    <div className='mt-4'>
                        <p className='text-lg text-gray-700'>No hay productos seleccionados</p>
                    </div>
                )}
                <div className="flex justify-start mt-10 text-black">
                    <button className="flex gap-3 bg-[#fab779] p-4 rounded-2xl">
                        Ordenar <ShoppingCart />
                    </button>
                </div>
            </div>
        </aside>
    );
};