import React ,{useState,useRef, useEffect}from 'react'
import '../style/InterviewReport.scss'
import { useInterview } from '../hook/useInterview.js'
import { useNavigate } from 'react-router'
import { useAuth } from '../../auth/hooks/useAuth.js'
const InterviewReport = () => {
const {handleLogout}=useAuth()
const{loading,generateReport,reports,getReports}=useInterview()
const [jobDescription,setJobDescription]=useState("")
const [selfDescription,setSelfDescription]=useState("")
const resumeInputRef=useRef(null)
const navigate=useNavigate()
console.log(reports)

useEffect(() => {
  getReports();
}, []);

const handleGenerateReport=async()=>{
  
  const resume=resumeInputRef?.current.files[0]
  const data=await generateReport({jobDescription,selfDescription,resume})
   navigate(`/interview/${data._id}`)
}


if (loading) {
  return (
    <main className="full-page-loader">
      <h1>Loading...</h1>
    </main>
  );
}
  return (
    <div className='interview-report-container'>
      <div  className='report-header-container'>
      <div className='report-header'>
         <h1 className='report-title'>Interview Report</h1>
        <p className='report-subtitle'>Generate a tailored preparation report based on your profile and job goals</p>
        
      </div>
  <button className='logout-btn' onClick={handleLogout}>
            Logout
          </button>
      </div>

      <div className='report-content'>
        {/* Job Description Section */}
        <div className='form-section job-description-section'>
          <div className='section-header'>
            <div className='header-bar'></div>
            <h2 className='section-title'>JOB DESCRIPTION</h2>
          </div>
          <textarea
          value={jobDescription}
          onChange={(e)=>setJobDescription(e.target.value)}
            className='textarea-input'
            placeholder='Paste the job requirements and responsibilities here...'
            name='jobDescription'
            id='jobDescription'
          ></textarea>
        </div>

        {/* Right Column */}
        <div className='form-right-column'>
          {/* Resume Section */}
          <div className='form-section resume-section'>
            <div className='section-header'>
              <div className='header-bar'></div>
              <h2 className='section-title'>RESUME</h2>
            </div>

         <div
  className='upload-area'
  onClick={() => resumeInputRef.current.click()}
>
  <div className='upload-icon'>
    <svg width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='currentColor'>
      <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>
      <polyline points='9 22 9 12 15 12 15 22'></polyline>
    </svg>
  </div>

  <p className='upload-text'>Upload your Resume</p>
  <p className='upload-subtext'>Max file size up to 2 MB</p>

  <input
    ref={resumeInputRef}
    type='file'
    id='resume'
    name='resume'
    accept='.pdf,.doc,.docx'
    className='file-input'
  />
</div>

            {/* Upload Progress - Optional state */}
            <div className='upload-progress-container'>
              <div className='progress-item'>
                <div className='progress-label'>
                  <span className='progress-text'>Uploading resume...</span>
                  <span className='progress-percentage'>68%</span>
                </div>
                <div className='progress-bar-wrapper'>
                  <div className='progress-bar' style={{ width: '68%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Self Description Section */}
          <div className='form-section self-description-section'>
            <div className='section-header'>
              <div className='header-bar'></div>
              <h2 className='section-title'>SELF DESCRIPTION</h2>
            </div>
            <textarea
            value={selfDescription}
            onChange={(e)=>setSelfDescription(e.target.value)}
              className='textarea-input'
              placeholder='Briefly describe your goals or specific experiences...'
              name='selfDescription'
              id='selfDescription'
            ></textarea>
          </div>

          {/* Warning Message */}
          <p className='warning-message'>
            ⚠ Pro tip: Use both resume and description for better results.
          </p>

          {/* Generate Button */}
          <button className='generate-button' onClick={handleGenerateReport}>
            Generate Interview Report
            <span className='button-arrow'>→</span>
          </button>
        </div>
      </div>
  

     {reports.length>0 && (
      <div className='previous-reports-section'>
        <h2 className='previous-reports-title'>Previous Interview Reports</h2>
        <ul className='reports-list'>
          {reports.map((r) => (
            
            <li key={r._id} className='report-item' onClick={() => navigate(`/interview/${r._id}`)}>

              <span className='report-title'>{r.jobtitle}</span>
              <span className='report-date'>{new Date(r.createdAt).toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
      </div>
     )}

    </div>
  )
}

export default InterviewReport
