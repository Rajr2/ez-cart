import React, { useState } from 'react';
import './Login.css'
import { Link } from "react-router-dom";
import axios from 'axios';  

function Login(props) {

    const [userData, setuserData] = useState({ email: '', password: '' });

    const Login = (e) => {
        e.preventDefault();
        const data = { email:userData.email, password: userData.password };  
         
        axios.post("http://localhost/usrReg/login.php", data)    
        .then((result) => {    
            console.log(result.data);   
            const serializedState = JSON.stringify(result.data.UserDetails);  
            var a = localStorage.setItem('myData', serializedState);   
            console.log("A:",a)  
            const user = result.data.UserDetails;  
            console.log(result.data.message); 
             
            if (result.data.status == '200')    
                props.history.push('/')    
            else    
                alert('Invalid User');    
        })        
      };    

      const onChange = (e) => {    
        e.persist();     
        setuserData({...userData, [e.target.name]: e.target.value}); 
      }

    return (
        <div className='login'>
            <Link to='/'>
               <h2>Home</h2>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="email"  value={userData.email} onChange={ onChange }  name="email" id="email"  placeholder="Enter email"/> 

                    <h5>password</h5>
                    <input type="password"  value={userData.password} onChange={ onChange }  name="password"  placeholder="Enter password"/>  

                    <button type="submit" onClick={ Login } className='login__signInButton'><span>Login</span></button>

                    <Link to="/signup" className="signup_link">New User? Click here</Link>
                </form>
            </div>
        </div>
    )
}

export default Login
