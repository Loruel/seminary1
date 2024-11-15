import React from 'react'
import Grid from './Cuadricula'
import PreguntasCruci from './PreguntasCruci'

export default function Cruci() {
    return (

        <div className="max-w-lg mx-auto p-4 text-white h-full" style={{ backgroundColor: '#022044' }}>

            <h1 className="text-2xl font-semibold text-center mb-2 mt-4">Sopa de Letras</h1>
            <h2 className='text-center text-3xl font-bold mb-4'>JARDINES DE MORELOS</h2>
            <PreguntasCruci />
            <Grid />
        </div>
    )
}
