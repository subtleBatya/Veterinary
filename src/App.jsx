import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate, useNavigate } from 'react-router-dom';
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
import AdminHome from './pages/AdminHome'
import { useSelector } from 'react-redux';
import CategoryList from './pages/CategoryList';
import CreateProduct from './pages/admin/products/CreateProduct';
function App() {
  const Navigate = useNavigate();
    const isAdmin = useSelector(state=> state.auth.isAdmin);
    console.log(isAdmin);
    // const isAdmin = useSelector(state=> state.auth.isAdmin);
    // console.log(isAdmin);
  // const useEffect = useEffect();
  // useEffect () => {
  //   {isAdmin ? <Navigate to="<ProductList />" />  : <Login /> } 
  // }
  return (
    <>
    
   {/* <Register /> */}
   {/* <Login />  */}
   
   <Navbar />
    {/* {isAdmin ? <AdminHome /> : <Login />} */}
   <Routes>
    <Route path="Veterinary/" exact element={<AdminHome />} />
    <Route path="/login" element={<Login />} />
    <Route path="/categories" element={<CategoryList />} />
    <Route path="/admin/products"  element={
    <ProtectedRoute>
      <ProductList />
    </ProtectedRoute>
    } />
    <Route path="/contact" exact element={<Contact />} />
    <Route path="/admin/products/create" exact element={<CreateProduct />} />
    <Route path="*" exact element={<NotFound />} />
   </Routes>
      <Footer />
      <div className=' mb-[1000px]'></div>
      
      
    </>
  )
}

export default App
