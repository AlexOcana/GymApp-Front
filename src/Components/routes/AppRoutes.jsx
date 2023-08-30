import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import AboutUs from "../pages/AboutUs/AboutUs"
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import Exercises from '../pages/Exercises/Exercises'
import Routines from "../pages/ShowRutines/Routines"
import MyProfile from "../pages/MyProfile/MyProfile"

import CreateRoutine from "../pages/CreateRoutine/CreateRoutine"

const AppRoutes = () => {

    // TODO: RENOMBRAR TODOS LOS COMPONENTS DE /pages CON EL SUFIJO PAGES

    return (

        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/aboutus'} element={<AboutUs />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/signup'} element={<Signup />} />
            <Route path={'/exercises'} element={<Exercises />} />
            <Route path={'/routines'} element={<Routines />} />
            <Route path={'/myProfile'} element={<MyProfile />} />
            <Route path={'/newroutine'} element={<CreateRoutine />} />
            <Route path={'*'} element={<p>EL ERROR</p>} />
        </Routes>
    )
}


export default AppRoutes