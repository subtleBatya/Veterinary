import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/AuthSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
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
        console.log('Login successful, navigating to /Veterinary');
        navigate('/Veterinary/');
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
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete=""
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

export default Register;





// import React from "react";
// import { useRef, useState, useEffect } from "react";
// import axios from "../api/axios";
// import { Link } from "react-router-dom";
// import {
//   faCheck,
//   faTimes,
//   faInfoCircle,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// // const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const USER_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const EMAIL_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = "/register";

// function Register() {
//   const userRef = useRef();
//   const errRef = useRef();

//   const [user, setUser] = useState("");
//   const [validName, setValidName] = useState(false);
//   const [userFocus, setUserFocus] = useState(false);

//   const [pwd, setPwd] = useState("");
//   const [validPwd, setValidPwd] = useState(false);
//   const [pwdFocus, setPwdFocus] = useState(false);

//   const [matchPwd, setMatchPwd] = useState("");
//   const [validMatch, setValidMatch] = useState(false);
//   const [matchFocus, setMatchFocus] = useState(false);

//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     userRef.current.focus();
//   }, []);
//   useEffect(() => {
//     setValidName(USER_REGEX.test(user));
//   }, [user]);

//   useEffect(() => {
//     setValidPwd(PWD_REGEX.test(pwd));
//     setValidMatch(pwd === matchPwd);
//   }, [pwd, matchPwd]);

//   useEffect(() => {
//     setErrMsg("");
//   }, [user, pwd, matchPwd]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//         // if button enabled with JS hack
//         const v1 = USER_REGEX.test(user);
//         const v2 = PWD_REGEX.test(pwd);
//         if (!v1 || !v2) {
//             setErrMsg("Invalid Entry");
//             return;
//         }
//        try {
//         const response = await axios.post(REGISTER_URL, JSON.stringify({ username: user, password: pwd }), // HAS TO NAME THESE PROPS ACCORDING TO BACKEND PROPS, IN THE TUTORIIAL I WATCHED THEY WERE NAMED THUS BECAUSE THE PROPS WERE PASSED ALIKE IN THE BACKEND API
//         {
//           headers: { 'Content-Type': 'application/json'},
//           withCredentials: true
//         }
//       );
//       console.log(response.data);
//       console.log(response.accessToken) // Not necessary,
//       console.log(JSON.stringify(response)) 
//       setSuccess(true);
//       // clear input fields 
//        } catch (err) {
//         if (!err?.response) {
//           setErrMsg('No server Response');
//         } else if (err.response?.status === 409) {
//           setErrMsg('Username Taken')
//         } else {
//           setErrMsg('Registration Failed')
//         }
//         errRef.current.focus();
//        }
//   }

//   return (
//     <>
//      {success ? (
//                 <section>
//                     <h1>Success!</h1>
//                     <p>
//                         <a href="#">Sign In</a>
//                     </p>
//                 </section>
//             ) : (
//       <section>
//         <p
//           ref={errRef}
//           className={errMsg ? "errmsg" : "offscreen"}
//           aria-live="assertive"
//         >
//           {errMsg}
//         </p>
//         <h1 className="">Agza bol</h1>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="username">Email Adresy:
//           {/* <span className={validName ? "valid" : "hide"}>
//           <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
//           </span> */}
//             <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
//             <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
//           </label>
//           <input
//             type="email"
//             id="username"
//             ref={userRef}
//             autoComplete="off"
//             onChange={(e) => setUser(e.target.value)}
//             value={user}
//             required
//             aria-invalid={validName ? "false" : "true"}
//             aria-describedby="uidnote"
//             onFocus={() => setUserFocus(true)}
//             onBlur={() => setUserFocus(false)}
//           />
//           <p
//             id="uidnote"
//             className={
//               userFocus && user && !validName ? "instructions" : "offscreen"
//             }
//           >
//             <FontAwesomeIcon icon={faInfoCircle} />
//             {/* 4 to 24 characters. */}
//             <br />
//             Setir harp bilen baslanyar.
//             <br />
//             harplar, sanlar, cyzyjaklar, kese-cyzyklar rugsat berilyar.
//           </p>

//           <label htmlFor="password">
//                             Gizlin soz:
//                             <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
//                             <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             onChange={(e) => setPwd(e.target.value)}
//                             value={pwd}
//                             required
//                             aria-invalid={validPwd ? "false" : "true"}
//                             aria-describedby="pwdnote"
//                             onFocus={() => setPwdFocus(true)}
//                             onBlur={() => setPwdFocus(false)}
//                         />
//                         <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
//                             <FontAwesomeIcon icon={faInfoCircle} />
//                             8 to 24 characters.<br />
//                             Must include uppercase and lowercase letters, a number and a special character.<br />
//                             Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
//                         </p>

//                         <label htmlFor="confirm_pwd">
//                             Tassykla:
//                             <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
//                             <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
//                         </label>
//                         <input
//                             type="password"
//                             id="confirm_pwd"
//                             onChange={(e) => setMatchPwd(e.target.value)}
//                             value={matchPwd}
//                             required
//                             aria-invalid={validMatch ? "false" : "true"}
//                             aria-describedby="confirmnote"
//                             onFocus={() => setMatchFocus(true)}
//                             onBlur={() => setMatchFocus(false)}
//                         />
//                         <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
//                             <FontAwesomeIcon icon={faInfoCircle} />
//                             Must match the first password input field.
//                         </p>

//                         <button className=" bg-white border-r-12 text-blue-800 font-bold" disabled={!validName || !validPwd || !validMatch ? true : false}>Yazyl</button>
//         </form>
//                     <p>
//                         Already registered?<br />
//                         <span className="line">
//                             <a to="/">Sign In</a>
//                         </span>
//                     </p>
//       </section>
//             )}
//     </>
//   );
// }

// export default Register;
