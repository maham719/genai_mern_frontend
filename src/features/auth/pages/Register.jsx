import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth.js'
const Register = () => {
    const {loading,handleRegister}=useAuth()
    const [name,setName]=useState("")
     const [email,setEmail]=useState("")
        const [password,setPassword]=useState("")

    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await handleRegister({name,email,password})
        navigate("/login")
    }
  return (
    <main>
        <div className="form-container">
            <h1>Register</h1>
            <form action="" onSubmit={handleSubmit}>

                <div className="input-group">
    <label htmlFor="name">Username</label>
    <input type="text" name='name' id='name' placeholder='Enter Username' value={name} onChange={(e)=>setName(e.target.value)} />
</div>
                
<div className="input-group">
    <label htmlFor="email">Email</label>
    <input type="email" name='email' id='email' placeholder='Enter Email Address' value={email} onChange={(e)=>setEmail(e.target.value)}/>
</div>

<div className="input-group">
    <label htmlFor="password">Password</label>
    <input type="password" name='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
</div>

<button type="submit" className='button primary-button'>Register</button>
            </form>

            <p>Already have an account ? <Link to={"/login"}>Login</Link></p>
        </div>
    </main>
  )
}

export default Register
