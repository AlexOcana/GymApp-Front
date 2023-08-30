import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import AboutUs from "../pages/AboutUs_page/AboutUs"
import Login from '../pages/Login_page/Login'
import Signup from '../pages/Signup_page/Signup'
import Exercises from '../pages/SearchExercices_page/Exercises'
import Routines from "../pages/ShowRutines_page/Routines"
import MyProfile from "../pages/MyProfile_page/MyProfile"
import CreateRoutine from "../pages/CreateRoutine_page/CreateRoutine"

const AppRoutes = () => {

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