import React from "react";
import { useNavigate } from "react-router";
import "../style/landingpage.scss";
import bg from "/bg.png"
const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35" fill="currentColor"><path d="M2 12H4V21H2V12ZM5 14H7V21H5V14ZM16 8H18V21H16V8ZM19 10H21V21H19V10ZM9 2H11V21H9V2ZM12 4H14V21H12V4Z"></path></svg>,
      title: "Interview Report",
      description: "Get a comprehensive analysis of your performance with detailed insights",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 12.3369 23.4855 12.6704 23.4571 13H21.9506C21.4489 18.0533 17.1853 22 12 22C6.47715 22 2 17.5228 2 12C2 6.81465 5.94668 2.5511 11 2.04938V0.542876C11.3296 0.514488 11.6631 0.5 12 0.5ZM11 4.06189C7.05369 4.55399 4 7.92038 4 12C4 16.4183 7.58172 20 12 20C16.0796 20 19.446 16.9463 19.9381 13H11V4.06189ZM13 2.552V11H21.448C20.9827 6.55197 17.448 3.01732 13 2.552Z"></path></svg>,
      title: "Match Score",
      description: "See how well your resume matches the job requirements",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M12 1.99999C12.5523 1.99999 13 2.4477 13 2.99999C12.9999 3.55224 12.5522 3.99999 12 3.99999C7.58172 3.99999 4 7.58171 4 12C4.00004 16.4182 7.58174 20 12 20C16.4182 20 19.9999 16.4182 20 12C20 11.4477 20.4477 11 21 11C21.5523 11 22 11.4477 22 12C21.9999 17.5228 17.5228 22 12 22C6.47717 22 2.00004 17.5228 2 12C2 6.47714 6.47715 1.99999 12 1.99999ZM12 5.99999C12.5523 5.99999 13 6.4477 13 6.99999C12.9999 7.55224 12.5522 7.99999 12 7.99999C9.79085 7.99999 7.99999 9.79085 7.99999 12C8.00004 14.2091 9.79088 16 12 16C14.2091 16 15.9999 14.2091 16 12C16 11.4477 16.4477 11 17 11C17.5523 11 18 11.4477 18 12C17.9999 15.3137 15.3137 18 12 18C8.68631 18 6.00004 15.3137 6 12C6 8.68628 8.68629 5.99999 12 5.99999ZM17.6562 2.10057C18.0468 1.71005 18.6807 1.71005 19.0713 2.10057C19.4614 2.49105 19.4615 3.12419 19.0713 3.51463L18.3633 4.22069L18.3642 4.22167C17.9737 4.61219 17.9737 5.2452 18.3642 5.63573C18.7548 6.02612 19.3878 6.02621 19.7783 5.63573L20.4853 4.9287C20.8759 4.53839 21.5089 4.53826 21.8994 4.9287C22.2899 5.31915 22.2897 5.95222 21.8994 6.34276L19.7783 8.46483C19.5909 8.65223 19.3363 8.75671 19.0713 8.75682H16.6572L12.707 12.707C12.3165 13.0974 11.6834 13.0974 11.293 12.707C10.9025 12.3165 10.9026 11.6835 11.293 11.293L15.2422 7.34374V4.9287C15.2422 4.66356 15.3477 4.40916 15.5351 4.22167L17.6562 2.10057Z"></path></svg>,
      title: "Skill Gap Analysis",
      description: "Identify missing skills and areas for improvement",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M5.45455 15L1 18.5V3C1 2.44772 1.44772 2 2 2H17C17.5523 2 18 2.44772 18 3V15H5.45455ZM4.76282 13H16V4H3V14.3851L4.76282 13ZM8 17H18.2372L20 18.3851V8H21C21.5523 8 22 8.44772 22 9V22.5L17.5455 19H9C8.44772 19 8 18.5523 8 18V17Z"></path></svg>,
      title: "Technical Questions",
      description: "Practice with AI-generated technical interview questions",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 12H9C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12H17C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z"></path></svg>,
      title: "Behavioral Questions",
      description: "Prepare for behavioral interview scenarios",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M4 6.14286V18.9669L9.06476 16.7963L15.0648 19.7963L20 17.6812V4.85714L21.303 4.2987C21.5569 4.18992 21.8508 4.30749 21.9596 4.56131C21.9862 4.62355 22 4.69056 22 4.75827V19L15 22L9 19L2.69696 21.7013C2.44314 21.8101 2.14921 21.6925 2.04043 21.4387C2.01375 21.3765 2 21.3094 2 21.2417V7L4 6.14286ZM16.2426 11.2426L12 15.4853L7.75736 11.2426C5.41421 8.89949 5.41421 5.10051 7.75736 2.75736C10.1005 0.414214 13.8995 0.414214 16.2426 2.75736C18.5858 5.10051 18.5858 8.89949 16.2426 11.2426ZM12 12.6569L14.8284 9.82843C16.3905 8.26633 16.3905 5.73367 14.8284 4.17157C13.2663 2.60948 10.7337 2.60948 9.17157 4.17157C7.60948 5.73367 7.60948 8.26633 9.17157 9.82843L12 12.6569Z"></path></svg>,
      title: "Learning Roadmap",
      description: "Get a 7-day preparation plan to bridge skill gaps",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM13.529 14.4464C11.9951 15.3524 9.98633 15.1464 8.66839 13.8284C7.1063 12.2663 7.1063 9.73367 8.66839 8.17157C10.2305 6.60948 12.7631 6.60948 14.3252 8.17157C15.6432 9.48951 15.8492 11.4983 14.9432 13.0322L17.1537 15.2426L15.7395 16.6569L13.529 14.4464ZM12.911 12.4142C13.6921 11.6332 13.6921 10.3668 12.911 9.58579C12.13 8.80474 10.8637 8.80474 10.0826 9.58579C9.30156 10.3668 9.30156 11.6332 10.0826 12.4142C10.8637 13.1953 12.13 13.1953 12.911 12.4142Z"></path></svg>,
      title: "ATS-Friendly Resume",
      description: "Generate optimized resume that passes ATS screening",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M22 4C22 3.44772 21.5523 3 21 3H3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4ZM4 15H7.41604C8.1876 16.7659 9.94968 18 12 18C14.0503 18 15.8124 16.7659 16.584 15H20V19H4V15ZM4 5H20V13H15C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13H4V5ZM16 11H13V14H11V11H8L12 6.5L16 11Z"></path></svg>,
      title: "PDF Export",
      description: "Download your generated resume as a professional PDF",
    },
  ];

  const stats = [
    { number: "1000+", label: "Resumes Analyzed" },
    { number: "95%", label: "ATS Pass Rate" },
    { number: "4.8/5", label: "User Rating" },
  ];

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            AI-Powered Resume Analyzer
          </h1>
          <p className="hero-subtitle">
            Get instant feedback on your resume, prepare for interviews, and land your dream job
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => navigate("/login")}
            >
              Start Analysis
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="btn btn-secondary">
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-circle">
            <img src={bg} alt="" width={150} />

          </div>
          <div className="visual-accent"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="heading">Powerful Features</h2>
          <p className="section-subtitle">
            Everything you need to succeed in your interview preparation
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="section-header">
          <h2 className="heading">How It Works</h2>
          <p className="section-subtitle">
            Simple 3-step process to get your interview analysis
          </p>
        </div>

        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3 className="step-title">Upload Resume & Job Description</h3>
            <p className="step-description">
              Share your resume and the job description you're targeting
            </p>
          </div>

          <div className="step-connector"></div>

          <div className="step">
            <div className="step-number">2</div>
            <h3 className="step-title">AI Analysis</h3>
            <p className="step-description">
              Our AI analyzes your qualifications against the job requirements
            </p>
          </div>

          <div className="step-connector"></div>

          <div className="step">
            <div className="step-number">3</div>
            <h3 className="step-title">Get Detailed Report</h3>
            <p className="step-description">
              Receive comprehensive insights and a personalized preparation plan
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Ace Your Interview?</h2>
          <p className="cta-subtitle">
            Join thousands of successful candidates who used our platform
          </p>
          <button 
            className="btn btn-primary btn-large"
            onClick={() => navigate("/login")}
          >
            Get Started Now
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 AI Resume Analyzer. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
