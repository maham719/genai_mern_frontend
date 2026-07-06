import axios from "axios"

const api=axios.create({
    baseURL: window.location.hostname === "localhost"
      ? "http://localhost:3005"
      : "https://genai-mern.vercel.app/",
    withCredentials:true
})

export const getInterviewReport=async({jobDescription,selfDescription,resume})=>{
    const formData=new FormData()
    formData.append("jobDescription",jobDescription)
    formData.append("selfDescription",selfDescription)
    formData.append("resume",resume)

    const response =await api.post("/api/interview/",formData)
    return response.data
}


export const getInterviewReportByID=async(interviewID)=>{
        const response= await api.get(`/api/interview/report/${interviewID}`)
        return response.data
    }

    export const  getAllInterviewReports=async()=>{
   const response =await api.get("/api/interview/")

   return response.data
    }


  export const generateResumePdf = async ({ interviewID }) => {
  const response = await api.post(
    `/api/interview/resume/pdf/${interviewID}`,
    {}, // request body (empty if not needed)
    {
      responseType: "blob",
    }
  )

  console.log(response)
  return response.data
}