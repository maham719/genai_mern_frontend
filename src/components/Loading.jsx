import React from 'react'
import './Loading.scss'

const Loading = ({ message = 'Preparing your workspace' }) => {
  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <div className="loading-card">
        <div className="loading-mark" aria-hidden="true">
          <div className="loading-mark-core">
            <span className="loading-mark-label">AI</span>
          </div>
        </div>
        <p className="loading-title">AI Resume Analyzer</p>
        <p className="loading-message">
          {message}
          <span className="loading-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </p>
      </div>
    </div>
  )
}

export default Loading
