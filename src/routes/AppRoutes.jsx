import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import AboutUs from "../pages/AboutUs_page/AboutUs"
import Login from '../pages/Login_page/Login'
import Signup from '../pages/Signup_page/Signup'
import Exercises from '../pages/SearchExercices_page/Exercises'
import Routines from "../pages/ShowRutines_page/Routines"
import MyProfile from "../pages/MyProfile_page/MyProfile"
import PrivateRoute from "./PrivateRoutes"

import CreateRoutine from "../pages/CreateRoutine_page/CreateRoutine"

const AppRoutes = () => {

    // TODO: RENOMBRAR TODOS LOS COMPONENTS DE /pages CON EL SUFIJO PAGES

    return (

        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/aboutus'} element={<AboutUs />} />
            <Route path={'/exercises'} element={<Exercises />} />
            <Route path={'/newroutine'} element={<CreateRoutine />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/signup'} element={<Signup />} />


            <Route element={<PrivateRoute />}>
                <Route path={'/myProfile'} element={<MyProfile />} />
                <Route path={'/routines'} element={<Routines />} />
            </Route>

            <Route path={'*'} element={<p>EL ERROR</p>} />
        </Routes>
    )
}


export default AppRoutes