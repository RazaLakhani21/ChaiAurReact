import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // you can remove this part "<React.StrictMode>" whenever you want !
  <React.StrictMode>  
    <App />
    <Chai />
  </React.StrictMode>,
)
