import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshToken } from "../store/AuthSlice";
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const dispatch = useDispatch();
  const {accessToken, isAdmin} = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkToken = async () => {
      if (!accessToken) {
        await dispatch(refreshToken());
      } setLoading(false);
    };
    checkToken();
  }, [accessToken, dispatch]);

  if(loading) {
    return <div>Loading...</div>
  }

  if(!accessToken || !isAdmin) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;












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

