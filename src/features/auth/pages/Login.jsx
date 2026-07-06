import React, { useState } from 'react'
import "../auth.form.scss"
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth.js'
import { useNavigate } from 'react-router'
const Login = () => {

    const {loading,handleLogin}=useAuth()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
  const navigate=useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault()
       await handleLogin({email,password})
       navigate("/home")
    }

    if(loading){
        return(<main><h1>Loading...</h1></main>)
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
