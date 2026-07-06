import { useContext } from "react"
import {getInterviewReport,getInterviewReportByID,getAllInterviewReports,generateResumePdf} from "../services/interview.api.js"
import { interviewContext } from "../interview.context.jsx";


export const useInterview=()=>{
 const context=useContext(interviewContext);

 const {loading,setLoading,report,setReport,reports,setReports}=context;

  const generateReport=async({jobDescription,selfDescription,resume})=>{
   setLoading(true)
   let response=null
   try {
     response =await getInterviewReport({jobDescription,selfDescription,resume})
    setReport(response.interviewReport)
   } catch (error) {
    console.log(error)
   }finally{
setLoading(false)
   }

   return response.interviewReport
 }

 const getReportByID=async(interviewID)=>{
    setLoading(true)
    let response=null
    try {
         response = await getInterviewReportByID(interviewID)
         setReport(response.interviewReport)
    } catch (error) {
        console.log(error)
    }finally{
       setLoading(false)
    }

   return response.interviewReport
}

 const getReports=async()=>{
   setLoading(true)
   let response=null
   try {
       response= await getAllInterviewReports()
      setReports(response.interviewReports)
   } catch (error) {
    console.log(error)
   }finally{
    setLoading(false)

   }

   return response.interviewReports
}

  const getResumePdf = async (interviewID) => {
        setLoading(true)
        let response = null
        try {
            response = await generateResumePdf({ interviewID })
            const url = window.URL.createObjectURL(new Blob([ response ], { type: "application/pdf" }))
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", `resume_${interviewID}.pdf`)
            document.body.appendChild(link)
            link.click()
        }
        catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }


return {loading,report,reports,generateReport,getReportByID,getReports,getResumePdf}
}