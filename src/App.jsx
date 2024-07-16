import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Login from './components/Login'
// import Register from './components/Register'
import Admin from './pages/Admin'
import './App.css'
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Navbar from './components/navbar/Navbar'
import Footer from './pages/Footer'
function App() {


  return (
    <>
     <h1>HELLO</h1>
   {/* <Register /> */}
   {/* <Login />  */}
   <Navbar />
   <Routes>
    <Route path="/" exact element={<Admin />} />
    <Route path="/contact" exact element={<Contact />} />
    <Route path="*" exact element={<NotFound />} />
   </Routes>
      <Footer />
      <div className=' mb-[1000px]'></div>
      
      
    </>
  )
}

export default App
