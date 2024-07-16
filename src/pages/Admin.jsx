import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../pages/Footer'
import AdminHome from './AdminHome'
import Example from '../components/Example'
// import AuthContext from '../context/AuthProvider';
// import axios from '../api/axios';
// const LOGIN_URL = '/auth';
// import Register from './components/Register'
// import './App.css'



const Admin = () => {
    // const { setAuth } = useContext(AuthContext);
    // const userRef = useRef();
    // const errRef = useRef();    


    // const [user, setUser] = useState('');
    // const [pwd, setPwd] = useState('');
    // const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    // useEffect(() => {
    //     setErrMsg('');
    // }, [user,pwd])

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await axios.post(LOGIN_URL, 
    //             JSON.stringify({user, pwd}),  // 2-nd param is what the API expects, RestAPI expects to get. If it expects userName or passWord then we will have to provide it after in form of destructuring e.g. userName: user, passWord: pwd 
    //             {
    //                 headers: {'Content-Type': 'application/json'},
    //                 withCredentials: true
    //             }
    //         );
    //         console.log(JSON.stringify(response?.data)); 
    //         //console.log(JSON.stringify(response)); 
    //         const accessToken = response?.data?.accessToken;
    //         const roles = response?.data?.roles;
    //         setAuth({ user, pwd, roles, accessToken });
    //         setUser('');
    //     setPwd('');
    //     setSuccess(true);
    //     } catch (err) {
    //         if (!err?.response) {
    //             setErrMsg('No Server Response');
    //         } else if (err.response?.status === 400) {
    //             setErrMsg('Missing Username or Password')
    //         } else if (err.response?.status === 401) {
    //             setErrMsg('Unauthorized');
    //         } else {
    //             setErrMsg('Login Failed')
    //         }
    //         errRef.current.focus();
    //     }

        
    // }
  return (
    <>
        
        {/* <AdminHome /> */}
        
    </>
  )
}

export default Admin