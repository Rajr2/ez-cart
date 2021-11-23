import React, { useState } from "react";
import "./Signup.css";
import { Link }  from "react-router-dom";
import axios from "axios";  

function Signup() {

    const [data, setdata] = useState({ username: '', email: '', password: ''});

    
    const Registration = (e) => {
        e.preventDefault();
        const data1 = { username: data.username, email: data.email, password: data.password };
        axios.post("http://localhost/usrReg/signup", data1)
        .then(response => { 
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        });   
    }  

    const onChange = (e) => {  
        e.persist();   
        setdata({ ...data, [e.target.name]: e.target.value });  
    } 


    return (
        <div className="signup">
            <Link to="/">
               <h2>Home</h2>
            </Link>

            <div className="signup__container">
                <h2>Create account</h2>

                <form>
                    <h5>Username</h5>
                    <input type="text" name="username" onChange={onChange} value={data.username}  placeholder="Your Name" />

                    <h5>E-mail</h5>
                    <input type="text" name="email" onChange={onChange} value={data.email}  placeholder="Your email" />

                    <h5>Password</h5>
                    <input type="password" name="password" onChange={onChange} value={data.password}  placeholder="Your Password" />

                    <button type="submit" onClick={Registration} className="signup__registerButton">  Register  </button>
                </form>
            </div>
        </div>
    )
}

export default Signup;
