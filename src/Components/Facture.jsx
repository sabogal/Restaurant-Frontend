import React from 'react'
import { DatatebleOt } from './DatatebleOt'

const Facture = (prop) => {
    return (
        <div className='flex flex-wrap justify-center items-center p-20 bg-slate-100'>
            <div className='w-full flex justify-center bg-slate-300 p-2'>
                <div className='w-full  flex flex-col justify-center mb-2 bg-slate-600 p-2'>
                    <span className='mb-4'>Fecha: 1</span>
                    <span className='mb-4'>Numero: 1</span>


                </div>
            </div>
            <div className='w-full flex justify-center  bg-slate-400 p-2 text-4xl'>Factura</div>
            <div className='w-full flex justify-center mb-1 p-24 gap-5'>
                <div className='w-full  flex flex-col justify-center mb-16 bg-slate-600 p-2'>
                    <span className='mb-4'>Cliente: 1</span>
                    <span className='mb-4'>Cliente: 1</span>
                    <span className='mb-4'>Cliente: 1</span>
                    <span className='mb-4'>Cliente: 1</span>
                    <span className='mb-4'>Cliente: 1</span>

                </div>
                <div className='w-full  flex flex-col justify-center mb-16 bg-slate-600 p-2'>
                    <span className='mb-4'>Cliente: 1</span>
                    <span className='mb-4'>Cliente: 1</span>
                    <span className='mb-4'>Cliente: 1</span>
                    <span className='mb-4'>Cliente: 1</span>
                    <span className='mb-4'>Cliente: 1</span>

                </div>
            </div>
            <div className='w-full flex justify-center mb-16 bg-slate-600 p-24'>Factura</div>
        </div>
    )
}

export default Facture




