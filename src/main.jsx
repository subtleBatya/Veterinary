import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/AuthProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, {persistor} from './store/Store.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      
        
      <Provider store={store}>
        
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
        
      </Provider>
        
      
    </BrowserRouter>
    
    
  </React.StrictMode>,
)
