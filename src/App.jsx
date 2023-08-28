import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './Components/routes/AppRoutes'
import Navigation from './Components/Navigation/Navigation'

function App() {
  return (

    <div className="App">

      <Navigation />
      <AppRoutes />
    </div>
  )
}

export default App
