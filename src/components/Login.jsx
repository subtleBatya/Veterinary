import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/AuthSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(login({ username, password }));
      if (login.fulfilled.match(resultAction)) {
        console.log('Login successful, navigating to /contact');
        navigate('/Veterinary/admin/products');
      }
    } catch (error) {
      console.error('Failed to log in:', error);
    }
  };
  
  return (
    // <div className=" flex flex-col  mx-auto w-1/3 gap-3">
    //   <h1>{isAdmin ? 'Welcome Admin' : 'Please Log in'}</h1>
    //   <input
    //     type="text"
    //     placeholder="Username"
    //     value={username}
    //     onChange={(e) => setUsername(e.target.value)}
    //   />
    //   <input
    //     type="password"
    //     placeholder="Password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button onClick={handleLogin}>Login</button>
      
    //   {error && <p>{error}</p>}
    // </div>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            alt="Your Company"
            src="Logo.png"
            className="ms-[170px] h-10 w-auto"
          /> */}
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {isAdmin ? 'Welcome Admin' : 'Sign in to your account'}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  autoComplete="username"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleLogin}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        {error && <p>{error}</p>}
      </div>
  );
};

export default Login;



// import React from 'react'
// import { useRef, useState, useEffect, useContext } from 'react'
// import AuthContext from '../context/AuthProvider';
// import axios from '../api/axios';
// import { useSelector, useDispatch } from 'react-redux';
// const LOGIN_URL = '/login';
// import { login } from '../store/AuthSlice';
// // import { useSelector, useDispatch } from "react-redux";
// // import {
// //     login,
// //     logout
// // } from "../redux/actions/action";
// // import Register from './components/Register'
// // import './App.css'

// const Login = () => {
//     // const signed = useSelector(
//     //     (state) => state.auth.signed
//     // );

//     // const dispatch = useDispatch();

    
    

//     // const { setAuth } = useContext(AuthContext);
//     // const userRef = useRef();
//     // const errRef = useRef();    


//     const [username, setUser] = useState('');
//     const [password, setPwd] = useState('');

//     const isAdmin = useSelector((state) => state.auth.isAdmin);
//     const error = useSelector((state) => state.auth.error);
//     const dispatch = useDispatch;

//     const handleLogin = () => {
//         dispatch(login({ username, password }));
//       };

//     // const [errMsg, setErrMsg] = useState('');
//     // const [success, setSuccess] = useState(false);

//     // useEffect(() => {
//     //     userRef.current.focus();
//     // }, [])

//     // useEffect(() => {
//     //     setErrMsg('');
//     // }, [user,pwd])

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();

//     //     try {
//     //         const response = await axios.post(LOGIN_URL, 
//     //             JSON.stringify({username, password}),  // 2-nd param is what the API expects, RestAPI expects to get. If it expects userName or passWord then we will have to provide it after in form of destructuring e.g. userName: user, passWord: pwd 
//     //             {
//     //                 headers: {'Content-Type': 'application/json'},
//     //                 withCredentials: true
//     //             }
//     //         );
//     //         console.log(JSON.stringify(response?.data)); 
//     //         //console.log(JSON.stringify(response)); 
//     //         const accessToken = response?.data?.accessToken;
//     //         const roles = response?.data?.roles;
//     //         setAuth({ username, password, roles, accessToken });
//     //         setUser('');
//     //     setPwd('');
//     //     setSuccess(true);
//     //     isAdmin(true);
//     //     console.log(isAdmin);
//     //     } catch (err) {
//     //         if (!err?.response) {
//     //             setErrMsg('No Server Response');
//     //         } else if (err.response?.status === 400) {
//     //             setErrMsg('Missing Username or Password')
//     //         } else if (err.response?.status === 401) {
//     //             setErrMsg('Unauthorized');
//     //         } else {
//     //             setErrMsg('Login Failed')
//     //         }
//     //         errRef.current.focus();
//     //     }

        
//     // }
//   return (
//     <>

//             {/* {signed ? (
//                 <button onClick={() => dispatch(logout())}>
//                     LOGOUT
//                 </button>
//             ) : (
//                 <button onClick={() => dispatch(login())}>
//                     LOGIN
//                 </button>
//             )} */}
        
    
//    <section>
//         {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
//         <h1>Sign In</h1>
//         <form className='flex'>
//             <label htmlFor="username">Username:</label>
//             <input 
//                 type="text" 
//                 id="username" 
//                 // ref={userRef}
//                 autoComplete='off'
//                 onChange={(e) => setUser(e.target.value)}
//                 value={username} // Crucial if you are going to clear inputs upon submission
//                 required    
//             />

//             <label htmlFor="password">Password:</label>
//             <input 
//                 type="password" 
//                 id="password" 
//                 onChange={(e) => setPwd(e.target.value)}
//                 value={password} // Crucial if you are going to clear inputs upon submission
//                 required    
//             />
//             <button onClick={handleLogin}>Sign In</button>
//             {error && <p>{error}</p>}
//         </form>
//         <p>
//                 Need an Account?<br />
//                 <span className="line">
//                     <a to="/register">Sign Up</a>
//                 </span>
//             </p>
//    </section>
      
      
      
//       </>
//   )
// }

// export default Login

