import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import AboutUs from "../pages/AboutUsPage/AboutUsPage"
import Exercises from '../pages/SearchExercicesPage/ExercisesPage'
import Routines from "../pages/ShowRutinesPage/RoutinesPage"
import MyProfile from "../pages/MyProfilePage/MyProfilePage"
import PrivateRoute from "./PrivateRoutes"

import CreateRoutine from "../pages/CreateRoutinePage/CreateRoutinePage"

const AppRoutes = () => {

    return (

        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/aboutus'} element={<AboutUs />} />
            <Route path={'/exercises'} element={<Exercises />} />


            <Route element={<PrivateRoute />}>
                <Route path={'/newroutine'} element={<CreateRoutine />} />
                <Route path={'/myProfile'} element={<MyProfile />} />
                <Route path={'/routines'} element={<Routines />} />
            </Route>

            <Route path={'*'} element={<p>EL ERROR</p>} />
        </Routes>
    )
}


export default AppRoutes