import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div
            className='w-full h-screen flex flex-col items-center justify-center'
            style={{
                backgroundImage: "url('/mini3.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>

            <div className='mb-6 flex flex-col items-center text-white'>
                <h1 className='font-bold text-3xl'>
                    SOPA DE LETRAS
                </h1>
                <p className='w-8/12 font-semibold text-base text-center mt-2'>
                    Elige tu barrio y cuando tengas el mensaje de felicitación acercate a tu lider para registrarte.
                </p>
            </div>

            <div className='w-full flex flex-col gap-y-4 items-center justify-center'>

                <div className='w-8/12 flex justify-center gap-x-4'>
                    <Link
                        className='w-1/2'
                        to={'/b1'}>
                        <button className='bg-fuchsia-500 rounded-lg w-full h-14 text-white font-semibold'>
                            Bosques 1
                        </button>
                    </Link>
                    <Link
                        className='w-1/2'
                        to={'/b2'}>
                        <button className='bg-red-500 rounded-lg w-full h-14 text-white font-semibold'>
                            Bosques 2
                        </button>
                    </Link>
                </div>
                <div className='w-8/12 flex justify-center gap-x-4'>
                    <Link
                        className='w-1/2'
                        to={'/rama'}>
                        <button className='bg-yellow-500 rounded-lg w-full h-14 text-white font-semibold'>
                            Cuahutemoc
                        </button>
                    </Link>
                    <Link
                        className='w-1/2'
                        to={'/h1'}>
                        <button className='bg-lime-500 rounded-lg w-full h-14 text-white font-semibold'>
                            Héroes 1
                        </button>
                    </Link>
                </div>
                <div className='w-8/12 flex justify-center gap-x-4'>
                    <Link
                        className='w-1/2'
                        to={'/h2'}>
                        <button className='bg-teal-500 rounded-lg w-full h-14 text-white font-semibold'>
                            Héroes 2
                        </button>
                    </Link>
                    <Link
                        className='w-1/2'
                        to={'/jardines'}>
                        <button className='bg-violet-500 rounded-lg w-full h-14 text-white font-semibold'>
                            Jardines <br />
                            de Morelos
                        </button>
                    </Link>
                </div>
                <div className='w-8/12 flex justify-center gap-x-4'>
                    <Link
                        className='w-1/2'
                        to={'/montes'}>
                        <button className='bg-pink-500 rounded-lg w-full h-14 text-white font-semibold'>
                            Montes
                        </button>
                    </Link>
                    <Link
                        className='w-1/2'
                        to={'/venta'}>
                        <button className='bg-blue-500 rounded-lg w-full h-14 text-white font-semibold'>
                            Venta <br />
                            de Carpio
                        </button>
                    </Link>
                </div>
            </div>

            <div className='mt-6 text-white text-center'>
                <p className='font-semibold'>
                    Trimestral noviembre 2024
                </p>
                <p className='font-bold text-lg'>
                    Estaca Los Héroes Tecmac
                </p>
            </div>

        </div>
    )
}
