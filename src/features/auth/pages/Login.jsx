import React, { useState } from 'react'
import "../auth.form.scss"
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth.js'
import { useNavigate } from 'react-router'
import { toast } from "react-toastify";
import Loading from '../../../components/Loading.jsx'
const Login = () => {

    const {loading,handleLogin}=useAuth()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
  const navigate=useNavigate()

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const result = await handleLogin({ email, password });

        toast.success(result?.message || "Login successful!");

        navigate("/home");

    } catch (error) {
        console.error("Login error:", error);

        toast.error(
            error?.response?.data?.message ||
            "Login failed. Please try again."
        );
    }
};
    if(loading){
        return <Loading message="Signing you in" />
    } 
  return (
    <main>
        <div className="form-container">
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                
<div className="input-group">
    <label htmlFor="email">Email</label>
    <input type="email" name='email' id='email' placeholder='Enter Email Address'    value={email} onChange={(e)=>setEmail(e.target.value)}/>
</div>

<div className="input-group">
    <label htmlFor="password">Password</label>
    <input type="password" name='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
</div>

<button type="submit" className='button primary-button'>Login</button>
            </form>
             <p>Don't have an account ? <Link to={"/register"}>Register</Link></p>
        </div>
    </main>
  )
}

export default Login
