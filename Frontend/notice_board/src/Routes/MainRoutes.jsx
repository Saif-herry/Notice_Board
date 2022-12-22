
import React from "react"
import {Routes,Route} from "react-router-dom"
import { Home } from "../component/Home"
import { Notice } from "../component/Notice"

export const MainRoutes = () =>{
    return(
        <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/notice' element={<Notice/>}/>       
        </Routes>
    )
}

