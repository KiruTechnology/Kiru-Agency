/**
 * pages/LoginPage.tsx
 *
 * Standalone login page (no navbar/footer)
 */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/kiru-styles.css";

export function LoginPage() {
  useEffect(() => {
    document.title = "Sign In - Kiru Tech";
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    console.log("Login attempt:", { email, password });
    setError("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 420 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              marginBottom: 32,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font)",
                fontSize: "1rem",
                fontWeight: 800,
                color: "var(--text-primary)",
              }}
            >
              Kiru Tech
            </span>
          </Link>
          <h1
            style={{
              fontSize: "1.8rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 8,
            }}
          >
            Sign in to your account
          </h1>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: ".95rem",
            }}
          >
            Welcome back! Please sign in to continue.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            padding: 32,
          }}
        >
          {error && (
            <div
              style={{
                padding: 12,
                background: "rgba(255, 100, 100, 0.1)",
                border: "1px solid rgba(255, 100, 100, 0.3)",
                borderRadius: "var(--radius)",
                color: "#ff6464",
                fontSize: ".9rem",
                marginBottom: 20,
              }}
            >
              {error}
            </div>
          )}

          {/* Email field */}
          <div style={{ marginBottom: 20 }}>
            <label
              style={{
                display: "block",
                fontSize: ".85rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: 8,
              }}
            >
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={{
                width: "100%",
                padding: "10px 12px",
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                color: "var(--text-primary)",
                fontFamily: "var(--font)",
                fontSize: ".9rem",
                transition: "border-color .2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--blue)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
            />
          </div>

          {/* Password field */}
          <div style={{ marginBottom: 24 }}>
            <label
              style={{
                display: "block",
                fontSize: ".85rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: 8,
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: "100%",
                padding: "10px 12px",
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                color: "var(--text-primary)",
                fontFamily: "var(--font)",
                fontSize: ".9rem",
                transition: "border-color .2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--blue)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
            />
          </div>

          {/* Remember me & forgot password */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24,
              fontSize: ".85rem",
            }}
          >
            <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input type="checkbox" style={{ cursor: "pointer" }} />
              <span style={{ color: "var(--text-secondary)" }}>
                Remember me
              </span>
            </label>
            <a
              href="#"
              style={{
                color: "var(--blue)",
                textDecoration: "none",
              }}
            >
              Forgot password?
            </a>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px 16px",
              background: "var(--green)",
              color: "#fff",
              border: "none",
              borderRadius: "var(--radius)",
              fontWeight: 600,
              fontSize: ".95rem",
              fontFamily: "var(--font)",
              cursor: "pointer",
              transition: "background .2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--green-dim)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--green)")
            }
          >
            Sign in
          </button>
        </form>

        {/* Sign up link */}
        <div
          style={{
            textAlign: "center",
            marginTop: 24,
            fontSize: ".9rem",
            color: "var(--text-secondary)",
          }}
        >
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            style={{
              color: "var(--blue)",
              textDecoration: "none",
            }}
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
/**
 * pages/LoginPage.tsx
 * Standalone — no RootLayout (no navbar/footer)
 */

// import { useState, type FormEvent } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const STYLES = `
//   @import url('https://fonts.googleapis.com/css2?family=Mona+Sans:wght@400;500;600;700;800&display=swap');

//   .auth-page {
//     min-height: 100vh;
//     background: #0d1117;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     padding: 40px 20px;
//     font-family: 'Mona Sans', -apple-system, sans-serif;
//     position: relative;
//     overflow: hidden;
//   }

//   /* aurora bg */
//   .auth-page::before {
//     content: '';
//     position: fixed; inset: 0;
//     background:
//       radial-gradient(ellipse 80% 50% at 50% -20%, rgba(88,166,255,.1) 0%, transparent 60%),
//       radial-gradient(ellipse 50% 40% at -10% 60%, rgba(163,113,247,.08) 0%, transparent 60%),
//       radial-gradient(ellipse 50% 40% at 110% 60%, rgba(63,185,80,.06) 0%, transparent 60%);
//     pointer-events: none; z-index: 0;
//   }

//   /* dot grid */
//   .auth-page::after {
//     content: '';
//     position: fixed; inset: 0;
//     background-image: radial-gradient(rgba(255,255,255,.025) 1px, transparent 1px);
//     background-size: 28px 28px;
//     pointer-events: none; z-index: 0;
//   }

//   .auth-card {
//     position: relative; z-index: 1;
//     width: 100%; max-width: 400px;
//     background: #161b22;
//     border: 1px solid #30363d;
//     border-radius: 12px;
//     padding: 32px;
//     box-shadow: 0 16px 48px rgba(0,0,0,.6);
//   }

//   .auth-logo {
//     display: flex; align-items: center;
//     justify-content: center; gap: 10px;
//     text-decoration: none; margin-bottom: 28px;
//   }
//   .auth-logo-text {
//     font-size: 1.1rem; font-weight: 800;
//     color: #e6edf3; letter-spacing: -.02em;
//   }

//   .auth-title {
//     font-size: 1.4rem; font-weight: 800;
//     color: #e6edf3; letter-spacing: -.03em;
//     text-align: center; margin-bottom: 6px;
//   }
//   .auth-sub {
//     font-size: .82rem; color: #8b949e;
//     text-align: center; margin-bottom: 28px;
//     line-height: 1.6;
//   }

//   /* OAuth buttons */
//   .oauth-btn {
//     width: 100%; display: flex; align-items: center;
//     justify-content: center; gap: 10px;
//     padding: 10px 16px; border-radius: 6px;
//     border: 1px solid #30363d; background: #21262d;
//     color: #e6edf3; font-family: inherit;
//     font-size: .86rem; font-weight: 600;
//     cursor: pointer; transition: background .15s, border-color .15s, transform .1s;
//     text-decoration: none; margin-bottom: 10px;
//   }
//   .oauth-btn:hover {
//     background: #2d333b; border-color: #8b949e;
//     transform: translateY(-1px);
//   }
//   .oauth-btn svg { flex-shrink: 0; }

//   .auth-divider {
//     display: flex; align-items: center; gap: 12px;
//     margin: 20px 0; color: #656d76; font-size: .78rem;
//   }
//   .auth-divider::before, .auth-divider::after {
//     content: ''; flex: 1; height: 1px; background: #30363d;
//   }

//   .auth-form { display: flex; flex-direction: column; gap: 14px; }

//   .auth-field { display: flex; flex-direction: column; gap: 6px; }
//   .auth-label {
//     font-size: .75rem; font-weight: 600; text-transform: uppercase;
//     letter-spacing: .08em; color: #8b949e;
//   }
//   .auth-input {
//     font-family: inherit; font-size: .9rem; color: #e6edf3;
//     background: #0d1117; border: 1px solid #30363d;
//     border-radius: 6px; padding: 10px 14px; outline: none;
//     transition: border-color .2s, box-shadow .2s; width: 100%;
//     box-sizing: border-box;
//   }
//   .auth-input::placeholder { color: #656d76; }
//   .auth-input:focus {
//     border-color: #58a6ff;
//     box-shadow: 0 0 0 3px rgba(88,166,255,.15);
//   }
//   .auth-input.error { border-color: #f85149; }

//   .auth-field-meta {
//     display: flex; justify-content: space-between; align-items: center;
//   }
//   .auth-forgot {
//     font-size: .75rem; color: #58a6ff; text-decoration: none;
//     transition: color .15s;
//   }
//   .auth-forgot:hover { color: #79c0ff; text-decoration: underline; }

//   .auth-submit {
//     width: 100%; padding: 11px;
//     background: #238636; border: 1px solid rgba(240,246,252,.1);
//     border-radius: 6px; color: #fff;
//     font-family: inherit; font-size: .9rem; font-weight: 700;
//     cursor: pointer; transition: background .15s, transform .1s, box-shadow .15s;
//     position: relative; overflow: hidden; margin-top: 4px;
//   }
//   .auth-submit::before {
//     content: ''; position: absolute; inset: 0;
//     background: linear-gradient(180deg, rgba(255,255,255,.08) 0%, transparent 100%);
//     pointer-events: none;
//   }
//   .auth-submit:hover {
//     background: #2ea043; transform: translateY(-1px);
//     box-shadow: 0 0 0 3px rgba(63,185,80,.2), 0 4px 16px rgba(0,0,0,.4);
//   }
//   .auth-submit:disabled {
//     opacity: .6; cursor: not-allowed; transform: none;
//   }

//   .auth-error-msg {
//     background: rgba(248,81,73,.08); border: 1px solid rgba(248,81,73,.3);
//     border-radius: 6px; padding: 10px 14px;
//     font-size: .82rem; color: #f85149; text-align: center;
//   }

//   .auth-footer {
//     text-align: center; margin-top: 20px;
//     font-size: .82rem; color: #8b949e;
//   }
//   .auth-footer a {
//     color: #58a6ff; text-decoration: none; font-weight: 600;
//   }
//   .auth-footer a:hover { text-decoration: underline; }

//   .auth-legal {
//     position: relative; z-index: 1;
//     text-align: center; margin-top: 20px;
//     font-size: .72rem; color: #656d76; line-height: 1.6;
//   }
//   .auth-legal a { color: #656d76; text-decoration: underline; }
//   .auth-legal a:hover { color: #8b949e; }

//   /* loading spinner */
//   @keyframes spin { to { transform: rotate(360deg); } }
//   .spinner {
//     width: 16px; height: 16px; border-radius: 50%;
//     border: 2px solid rgba(255,255,255,.3);
//     border-top-color: #fff;
//     animation: spin .7s linear infinite;
//     display: inline-block; margin-right: 8px;
//     vertical-align: middle;
//   }

//   /* entrance animation */
//   @keyframes auth-in {
//     from { opacity: 0; transform: translateY(20px) scale(.98); }
//     to   { opacity: 1; transform: translateY(0) scale(1); }
//   }
//   .auth-card { animation: auth-in .45s cubic-bezier(.16,1,.3,1) both; }
// `;

// export function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);
//     // Replace with your auth logic (Supabase / Firebase / custom API)
//     await new Promise((r) => setTimeout(r, 1200)); // simulate
//     setLoading(false);
//     // On success:
//     // navigate("/dashboard");
//     setError("Invalid credentials. Please try again."); // demo error
//   };

//   return (
//     <>
//       <style>{STYLES}</style>
//       <div className="auth-page">
//         <div className="auth-card">
//           {/* Logo */}
//           {/* <Link to="/" className="auth-logo">
//             {/* <img src="/assets/kiru.png" alt="Kiru Tech" style={{ height: 28 }} />
//             <span className="auth-logo-text">Kiru Tech</span>
//           </Link> */}

//           <h1 className="auth-title">Welcome back</h1>
//           <p className="auth-sub">Sign in to your Kiru Tech account</p>

//           {/* OAuth */}
//           {/* <button className="oauth-btn" onClick={() => {}}>
//             <IconGh /> Continue with GitHub
//           </button>
//           <button className="oauth-btn" onClick={() => {}}>
//             <GgIcon /> Continue with Google
//           </button> */}

//           <div className="auth-divider">or sign in with email</div>

//           {/* Form */}
//           <form className="auth-form" onSubmit={handleSubmit}>
//             {error && <div className="auth-error-msg">{error}</div>}

//             <div className="auth-field">
//               <label className="auth-label">Email address</label>
//               <input
//                 className={`auth-input${error ? " error" : ""}`}
//                 type="email"
//                 placeholder="you@company.com"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                   setError("");
//                 }}
//                 required
//                 autoComplete="email"
//               />
//             </div>

//             <div className="auth-field">
//               <div className="auth-field-meta">
//                 <label className="auth-label">Password</label>
//                 <a href="#" className="auth-forgot">
//                   Forgot password?
//                 </a>
//               </div>
//               <input
//                 className={`auth-input${error ? " error" : ""}`}
//                 type="password"
//                 placeholder="••••••••"
//                 value={password}
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                   setError("");
//                 }}
//                 required
//                 autoComplete="current-password"
//               />
//             </div>

//             <button
//               type="submit"
//               className="auth-submit"
//               disabled={loading || !email || !password}
//             >
//               {loading && <span className="spinner" />}
//               {loading ? "Signing in…" : "Sign in"}
//             </button>
//           </form>

//           <div className="auth-footer">
//             New to Kiru Tech? <Link to="/signup">Create an account</Link>
//           </div>
//         </div>

//         <p className="auth-legal">
//           By signing in, you agree to our{" "}
//           <Link to="/terms">Terms of Service</Link> and{" "}
//           <Link to="/privacy">Privacy Policy</Link>.
//         </p>
//       </div>
//     </>
//   );
// }
