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
import Register from './components/Register';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import AdminHome from './pages/AdminHome'
import { useSelector } from 'react-redux';
import CategoryList from './pages/CategoryList';
import CreateProduct from './pages/admin/products/CreateProduct';
import BrandList from './components/BrandList'
import CreateBrand from './components/CreateBrand';
import EditProduct from './pages/admin/products/EditProduct';
import EditBrand from './components/EditBrand';
import CreateCategory from './components/CreateCategory';
import EditCategory from './components/EditCategory';
import Home from './pages/Home';

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
    <Route path="Veterinary/" exact element={<Home />} />
    <Route path="Veterinary/admin"  element={<AdminHome />} />
    <Route path="Veterinary/register" element={<Register />} />
    <Route path="Veterinary/login" element={<Login />} />
    <Route path="Veterinary/categories" element={<CategoryList />} />
    <Route path="Veterinary/brands" element={<BrandList />} />
    <Route path="Veterinary/admin/products"  element={
    <ProtectedRoute>
      <ProductList />
    </ProtectedRoute>
    } />
    <Route path="Veterinary/contact"  element={<Contact />} />
    <Route path="Veterinary/admin/products/create"  element={<CreateProduct />} />
    <Route path="Veterinary/admin/products/edit/:id"  element={<EditProduct />} />
    <Route path="Veterinary/brands/create"  element={<CreateBrand />} />
    <Route path="Veterinary/brands/:id/edit"  element={<EditBrand />} />
    <Route path="Veterinary/categories/create"  element={<CreateCategory />} />
    <Route path="Veterinary/categories/:id/edit"  element={<EditCategory />} />
    <Route path="*"  element={<NotFound />} />
   </Routes>
      <Footer />
      <div className=' mb-[1000px]'></div>
      
      
    </>
  )
}

export default App
