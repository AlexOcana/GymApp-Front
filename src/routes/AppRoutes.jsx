import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import ExercisesPage from '../pages/SearchExercicesPage/ExercisesPage'
import Routines from "../pages/ShowRutinesPage/RoutinesPage"
import MyProfile from "../pages/MyProfilePage/MyProfilePage"
import PrivateRoute from "./PrivateRoutes"
import CommunityPage from "../pages/CommunityPage/CommunityPage"
import CreateRoutine from "../pages/CreateRoutinePage/CreateRoutinePage"
import ProfileDetails from "../pages/ProfileDetails/ProfileDetails"
import EditProfile from "../pages/EditProfilePage/EditProfilePage"
import NutricionalSuplements from "../pages/NutricionalSuplements/NutricionalSuplements"


const AppRoutes = () => {

    return (

        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/exercises'} element={<ExercisesPage />} />
            <Route path={'/community'} element={<CommunityPage />} />
            <Route path={'/profile/:id'} element={<ProfileDetails />} />
            <Route path={'/editProfile/:id'} element={<EditProfile />} />



            <Route element={<PrivateRoute />}>
                <Route path={'/Nutrition'} element={<NutricionalSuplements />} />
                <Route path={'/newroutine'} element={<CreateRoutine />} />
                <Route path={'/myProfile'} element={<MyProfile />} />
                <Route path={'/routines'} element={<Routines />} />
            </Route>

            <Route path={'*'} element={<p>EL ERROR</p>} />
        </Routes>
    )
}


export default AppRoutes