import { useAuth } from "../hooks/useAuth.js";
import { Navigate } from "react-router";
import React from 'react'
import Loading from '../../../components/Loading.jsx'

const Protected = ({children}) => {
const {loading,user}=useAuth()
if(loading){
  return <Loading message="Checking your session" />
}
if(!user){

return <Navigate to={"/login"}/>
}
  return  children
}

export default Protected
