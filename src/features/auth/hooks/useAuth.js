import { useContext ,useEffect} from "react";
import { AuthContext } from "../services/auth.context.jsx";
import { getme, login, logout, register } from "../services/auth.api.js";


export const useAuth=()=>{
    const context=useContext(AuthContext)
    const {user,setUser,loading,setLoading}=context

    const handleLogin=async({email,password})=>{
   setLoading(true)
   try {
       const data=await login({email,password})
   setUser(data.user)
   } catch (error) {
    
   }finally{
   setLoading(false)

   }

    }

    const handleRegister=async({name,email,password})=>{
        setLoading(true)
        try {
             const data = await register({name,email,password})
        setUser(data.user)
        } catch (error) {
            
        }finally{
        setLoading(false)

        }
       
    }

    const handleLogout=async()=>{
        setLoading(true)
        try {
               const data=await logout()
        setUser(null)
        } catch (error) {
            
        }finally{
        setLoading(false)

        }
     
    }

    useEffect(() => {
      const getAndSetUser = async () => {
        try {
            const data = await getme()
            setUser(data.user)
        } catch (error) {
            setUser(null)
        } finally {
            setLoading(false)
        }
    }
     getAndSetUser() 
  }, [])

    return{user,loading,handleLogin,handleRegister,handleLogout}
}