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
