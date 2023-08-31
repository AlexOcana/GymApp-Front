import { createContext, useEffect, useState } from "react"
import authService from './../services/auth.services'

const AuthContext = createContext()

function AuthProviderWrapper(props) {


    const [loggedUser, setLoggedUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        authenticateUser()
    }, [])


    const authenticateUser = () => {

        const token = localStorage.getItem('authToken')

        if (token) {
            authService
                .verify(token)
                .then(response => {
                    setLoggedUser(response.data.loggedUser)
                    setIsLoading(false)
                })

                .catch(err => logout())
        }
        else {
            logout()
        }
    }

    const logout = () => {
        setLoggedUser(null)
        setIsLoading(false)
        localStorage.removeItem('authToken')
    }

    const storeToken = authToken => localStorage.setItem('authToken', authToken)


    return (
        <AuthContext.Provider value={{ loggedUser, authenticateUser, logout, storeToken }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }