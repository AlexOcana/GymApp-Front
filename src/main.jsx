import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './Components/App.jsx'
import './index.css'


// TODO: RENOMBRAR DIRECTORIO COMPONENTS
// TODO: REORGANIZAR DIRECTORIOS DE SRC

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
)
