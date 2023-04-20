import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>, faz com q o exercicio 2 fique carergando 2x no lazy initializer. o ideal é carregar 1x só no mount.
)
