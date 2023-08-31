import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components_/App.jsx'
import './index.css'
import { AuthProviderWrapper } from './contexts/auth.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviderWrapper>
      <Router>
        <App />
      </Router>
    </AuthProviderWrapper>
  </React.StrictMode>
)
