import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthProvider';
import axios from '../api/axios';
const LOGIN_URL = '/auth';
// import Register from './components/Register'
// import './App.css'

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();    


    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user,pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({username: user, password: pwd}),  // 2-nd param is what the API expects, RestAPI expects to get. If it expects userName or passWord then we will have to provide it after in form of destructuring e.g. userName: user, passWord: pwd 
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data)); 
            //console.log(JSON.stringify(response)); 
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
        setPwd('');
        setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password')
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed')
            }
            errRef.current.focus();
        }

        
    }
  return (
    <>
        {success ? (
            <section>
                <h1>You are logged in!</h1>
                <br />
                <p><a href="#">Go to Homepage</a></p>
            </section>
        ) : (
    
   <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input 
                type="text" 
                id="username" 
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                value={user} // Crucial if you are going to clear inputs upon submission
                required    
            />

            <label htmlFor="password">Password:</label>
            <input 
                type="password" 
                id="password" 
                onChange={(e) => setPwd(e.target.value)}
                value={pwd} // Crucial if you are going to clear inputs upon submission
                required    
            />
            <button>Sign In</button>
        </form>
        <p>
                Need an Account?<br />
                <span className="line">
                    <a to="/register">Sign Up</a>
                </span>
            </p>
   </section>
      
      
      )}
      </>
  )
}

export default Login