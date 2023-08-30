import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWrapper } from './contexts/auth.context'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components_/App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <AuthProviderWrapper>
        <App />
      </AuthProviderWrapper>
    </React.StrictMode>
  </Router>
)
