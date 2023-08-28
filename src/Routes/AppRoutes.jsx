import { Routes, Route } from 'react-router-dom'

import Login from '../components/login/login'
import Signup from '../components/signup/signup'
import Exercises from '../components/Exercises/Exercises'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/login'} element={<Login />} />
            <Route path={'/signup'} element={<Signup />} />
            <Route path={'/exercises'} element={<Exercises />} />
            <Route path={'*'} element={<p>EL ERROR</p>} />
        </Routes>
    )
}

export default AppRoutes