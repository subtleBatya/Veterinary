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
import ProductList from './pages/admin/products/ProductList';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector } from 'react-redux';
function App() {
  
    const isAdmin = useSelector(state=> state.auth.isAdmin);
    console.log(isAdmin);
    // const isAdmin = useSelector(state=> state.auth.isAdmin);
    // console.log(isAdmin);

  return (
    <>
    
   {/* <Register /> */}
   {/* <Login />  */}
   
   <Navbar />
   {isAdmin ? <ProductList /> : <Login /> }
   <Routes>
    <Route path="Veterinary/" exact element={<Contact />} />
    <Route path="/login" exact element={<Login />} />
    <Route path="/admin/products" exact element={
    <ProtectedRoute>
      <ProductList />
    </ProtectedRoute>
    } />
    <Route path="/contact" exact element={<Contact />} />
    <Route path="*" exact element={<NotFound />} />
   </Routes>
      <Footer />
      <div className=' mb-[1000px]'></div>
      
      
    </>
  )
}

export default App
