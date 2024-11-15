import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SopaDeLetrasMontes from './pages/SopaMontes'
import SopaDeLetrasVenta from './pages/SopaVenta'
import SopaDeLetrasJardines from './pages/SopaJardines'
import SopaDeLetrasHeroes1 from './pages/SopaHeroes1'
import SopaDeLetrasHeroes2 from './pages/SopaHeroes2'
import SopaDeLetrasBosques2 from './pages/SopaBosques2'
import SopaDeLetrasCuahu from './pages/SopaCuahu'
import SopaDeLetrasBosques1 from './pages/SopaBosques1'
import Cruci from './pages/Cruci'


export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/montes' element={<SopaDeLetrasMontes />} />
            <Route path='/venta' element={<SopaDeLetrasVenta />} />
            <Route path='/jardines' element={<SopaDeLetrasJardines />} />
            <Route path='/h1' element={<SopaDeLetrasHeroes1 />} />
            <Route path='/h2' element={<SopaDeLetrasHeroes2 />} />
            <Route path='/b1' element={<SopaDeLetrasBosques1 />} />
            <Route path='/b2' element={<SopaDeLetrasBosques2 />} />
            <Route path='/rama' element={<SopaDeLetrasCuahu />} />
        </Routes>
    )
}
