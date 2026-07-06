import  axios from "axios"
 window.location.hostname === "localhost"
      ? "http://localhost:3005"
      : "https://genai-mern.vercel.app/"
export async function register({name,email,password}){
   try {
    const response= await api.post("/api/auth/register",{
        name,email,password
    })
    return response.data
   } catch (error) {
    console.log(error)
   }
}

export async function login({email,password}){
    try {
        const response =await api.post("/api/auth/login",{
            email,
            password
        }
   )

    return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function logout(){
try {
    const response =await api.get("/api/auth/logout")

    return response.data
} catch (error) {
    console.log(error)
}
}

export async function getme (){
    try {
        const response=await api.get("/api/auth/get-me")

        return response.data
    } catch (error) {
        console.log(error)
    }
}