import { Plus, X } from 'lucide-react'
import React, { useContext } from 'react'
import { Shoppingcart } from '../context/context'
import { domain } from './urls'

export const ProductDetail = () => {
    const context = useContext(Shoppingcart)

    const addProduct = (products) => {
        context.setCartProducts([...context.CartProducts, products])
        context.setCount(context.count + 1)
      }

      let productShowArray = Object.values(context.cartProducts);

      console.log(context);
    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} w-[360px] flex flex-col fixed right-0 border border-gray-300 rounded-lg top-4 bg-white h-5/6`}>
            <div className='flex flex-col items-center p-6'>
                <div className='flex justify-between w-full mb-16'>
                    <h2 className='font-bold text-xl text-black'> Detalle </h2>

                    <X className='h-6 w-6 text-black' onClick={() => context.CloseproductDetail()} />
                </div>
                <div>
                    <figure>
                        <img className="w-96 h-48 object-cover rounded-xl" src={domain + context.cartProducts.image} />
                    </figure>
                    <p className='flex flex-col  justify-center mt-10'>
                        <span className='font-medium text-2xl text-black mb-4'>{context.cartProducts.name}</span>
                        <span className='ont-medium text-md text-gray-700'>$ {context.cartProducts.price} pesos</span>

                    </p>
                    <div className="flex justify-start mt-10 text-black">
                        <button className="purchase" onClick={() => addProduct(context.cartProducts)}>
                            Agregar al carrito <Plus />
                        </button>
                    </div>
                </div>

            </div>


        </aside>
    )
}
