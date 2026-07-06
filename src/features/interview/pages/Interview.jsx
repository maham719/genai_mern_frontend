import React, { useState,useEffect,useRef } from "react";
import { useNavigate, useParams } from "react-router";
import "../style/interview.scss";
import { useInterview } from "../hook/useInterview.js";
import { useAuth } from "../../auth/hooks/useAuth.js";
const Interview = () => {
  const { interviewID } = useParams();
  const { loading, report, getReportByID,getResumePdf } = useInterview();
  const [activeTab, setActiveTab] = useState("technical");
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const [showTooltip, setShowTooltip] = useState(false);
  const buttonRef = useRef(null);
  const {handleLogout}=useAuth()


 useEffect(() => {
  const loadReport = async () => {
    if (interviewID) {
      await getReportByID(interviewID);
    }
  };

  loadReport();
}, [interviewID]);

  const getSeverityClass = (severity) => {
    return `skill-tag skill-tag--${severity}`;
  };

  const toggleQuestion = (key) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

 if (loading || !report ) {
  return (
    <main>
      <h1>Loading your interview plan...</h1>
    </main>
  );
}
  const renderMainContent = () => {
    if (activeTab === "technical") {
      return (
        <>
          <h2 className="section-heading">Technical Questions</h2>
          <div className="content-section">
            <div className="questions-list">
              {report.technicalQuestions.map((q, idx) => {
                const key = `tech-${idx}`;
                const isExpanded = expandedQuestions[key];
                return (
                  <div key={idx} className="accordion-item">
                    <button
                      className="accordion-trigger"
                      onClick={() => toggleQuestion(key)}
                      aria-expanded={isExpanded}
                    >
                      <span className="question-number">Q{idx + 1}</span>
                      <span className="question-text">{q.question}</span>
                      <span className="accordion-icon">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </button>
                    {isExpanded && (
                      <div className="accordion-content">
                        <div className="question-meta">
                          <p className="intention-label">
                            <strong>Intention:</strong> {q.intention}
                          </p>
                        </div>
                        <div className="answer-box">
                          <p className="answer-label">Answer:</p>
                          <p className="answer-text">{q.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      );
    }

    if (activeTab === "behavioral") {
      return (
        <>
          <h2 className="section-heading">Behavioral Questions</h2>
          <div className="content-section">
            <div className="questions-list">
              {report.behavioralQuestions.map((q, idx) => {
                const key = `behav-${idx}`;
                const isExpanded = expandedQuestions[key];
                return (
                  <div key={idx} className="accordion-item">
                    <button
                      className="accordion-trigger"
                      onClick={() => toggleQuestion(key)}
                      aria-expanded={isExpanded}
                    >
                      <span className="question-number">Q{idx + 1}</span>
                      <span className="question-text">{q.question}</span>
                      <span className="accordion-icon">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </button>
                    {isExpanded && (
                      <div className="accordion-content">
                        <div className="question-meta">
                          <p className="intention-label">
                            <strong>Intention:</strong> {q.intention}
                          </p>
                        </div>
                        <div className="answer-box">
                          <p className="answer-label">Answer:</p>
                          <p className="answer-text">{q.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      );
    }

    if (activeTab === "roadmap") {
      return (
        <>
          <h2 className="section-heading">7-Day Preparation Road Map</h2>
          <div className="content-section">
            <div className="timeline-container">
              {report.preparationPlan.map((plan, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot">
                      <span className="dot-number">Day {plan.day}</span>
                    </div>
                    {idx < report.preparationPlan.length - 1 && (
                      <div className="timeline-line"></div>
                    )}
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{plan.focus}</h3>
                    <ul className="timeline-tasks">
                      {plan.tasks.map((task, taskIdx) => (
                        <li key={taskIdx} className="timeline-task">
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="interview-container">
      {/* Left Sidebar */}
      <aside className="sidebar-left">
        <nav className="nav-tabs">
          <button
            className={`nav-tab ${activeTab === "technical" ? "active" : ""}`}
            onClick={() => setActiveTab("technical")}
          >
            Technical questions
          </button>
          <button
            className={`nav-tab ${activeTab === "behavioral" ? "active" : ""}`}
            onClick={() => setActiveTab("behavioral")}
          >
            Behavioral questions
          </button>
          <button
            className={`nav-tab ${activeTab === "roadmap" ? "active" : ""}`}
            onClick={() => setActiveTab("roadmap")}
          >
            Road Map
          </button>
        </nav>

        <div className="sidebar-footer">
 
       <div className="getpdfcontainer">
        <div className="tooltip-wrapper">
          <button 
          onClick={()=>{getResumePdf(interviewID)}}
            ref={buttonRef}
            className="download-button button primary-button" 
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            { loading? "Generating PDF..." :
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M14 4.4375C15.3462 4.4375 16.4375 3.34619 16.4375 2H17.5625C17.5625 3.34619 18.6538 4.4375 20 4.4375V5.5625C18.6538 5.5625 17.5625 6.65381 17.5625 8H16.4375C16.4375 6.65381 15.3462 5.5625 14 5.5625V4.4375ZM1 11C4.31371 11 7 8.31371 7 5H9C9 8.31371 11.6863 11 15 11V13C11.6863 13 9 15.6863 9 19H7C7 15.6863 4.31371 13 1 13V11ZM17.25 14C17.25 15.7949 15.7949 17.25 14 17.25V18.75C15.7949 18.75 17.25 20.2051 17.25 22H18.75C18.75 20.2051 20.2051 18.75 22 18.75V17.25C20.2051 17.25 18.75 15.7949 18.75 14H17.25Z"></path></svg>   }
            Generate Resume
          </button>
        </div>
        {showTooltip && buttonRef.current && (
          <div 
            className="custom-tooltip"
            style={{
              top: `${buttonRef.current.getBoundingClientRect().top + buttonRef.current.offsetHeight / 2}px`,
              left: `${buttonRef.current.getBoundingClientRect().right + 10}px`
            }}
          >
            Get Ai generated ats friendly resume in pdf format
          </div>
        )}
        </div>
        <button className='logout-btn2 button primary-button' onClick={handleLogout}>
            Logout
          </button>
        </div>
        
      </aside>

      {/* Main Content */}
      <main className="content-main">{renderMainContent()}</main>

      {/* Right Sidebar - Skill Gaps */}
      <aside className="sidebar-right">
        <div className="match-score-banner">
          <div className="match-circle">
            <span className="match-percentage">{report.matchScore}%</span>
          </div>
          <p className="match-text">Overall Match Score</p>
        </div>

        <div className="sidebar-header">
          <h2 className="sidebar-title">Skill Gaps</h2>
        </div>
        <div className="skill-gaps-container">
          {report.skillGap.map((gap, idx) => (
            <div key={idx} className={getSeverityClass(gap.severity)}>
              {gap.skill}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Interview;
