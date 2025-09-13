import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// NOTE: For a real application, NEVER store credentials in frontend code.
// This is for demonstration purposes only.
const allowedUsers = [
  { email: 'navyabandaru65@gmail.com', password: 'SECUREDATA' },
  { email: 'nandinisandineni@gmail.com', password: 'SECUREDATA' },
  { email: 'shivanaroj72@gmail.com', password: 'SECUREDATA' },
  { email: 'arandkarpranav@gmail.com', password: 'SECUREDATA' },
  { email: 'sunnykothakonda4@gmail.com', password: 'SECUREDATA' },
  { email: 'dineshjillala@gmail.com', password: 'SECUREDATA' }
];

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setMessageType("");

    const user = allowedUsers.find((u) => u.email === email.trim().toLowerCase());

    if (!user) {
      setMessage("Email not found or unauthorized.");
      setMessageType("error");
    } else if (user.password !== password) {
      setMessage("Incorrect password.");
      setMessageType("error");
    } else {
      setMessage("Login successful! Redirecting...");
      setMessageType("success");
      setIsSubmitting(true);
      localStorage.setItem("isAuthenticated", "true");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-dark relative font-sans">
      <div className="background-dots"></div>
      <div className="login-card">
        <div className="logo-container">
          <span className="logo-icon">🔒</span>
          <div className="logo-text">SecureData Wiping for Admin</div>
        </div>
        <h2 className="text-3xl font-bold">Sign In</h2>
        <p className="sub-title">Enter your email and password to access the portal.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
            <span className="password-toggle" onClick={togglePassword}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {showPassword ? (
                  <>
                    <path d="M2 2l20 20M12 6c3.78 0 7.23 4.14 8.71 5.94.13.16.2.33.2.5s-.07.34-.2.5M12 22c-3.56 0-7.3-4.74-8.72-6.04a.85.85 0 0 0-1.2-.02c-.01-.01-.02-.01-.02-.02"/>
                    <path d="M2.06 12.06c.01.01.02.01.02.02a.85.85 0 0 0 1.2.02c.7-.6 1.87-1.48 3.25-2.06M12 14c-1.57 0-3-.5-4.24-1.39M12 14c1.57 0 3-.5 4.24-1.39"/>
                    <circle cx="12" cy="14" r="3"/>
                  </>
                ) : (
                  <>
                    <path d="M2.06 12.06c.01.01.02.01.02.02a.85.85 0 0 0 1.2.02C4.7 10.74 8.44 6 12 6c3.78 0 7.23 4.14 8.71 5.94.13.16.2.33.2.5s-.07.34-.2.5C19.23 17.86 15.78 22 12 22c-3.56 0-7.3-4.74-8.72-6.04a.85.85 0 0 0-1.2-.02c-.01-.01-.02-.01-.02-.02"/>
                    <circle cx="12" cy="14" r="3"/>
                  </>
                )}
              </svg>
            </span>
          </div>
          <button type="submit" className="btn-submit" disabled={isSubmitting}>
            Login
          </button>
          {message && (
            <p className={`message ${messageType} show`}>{message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;