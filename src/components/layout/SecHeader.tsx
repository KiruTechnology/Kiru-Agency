import "../../styles/other.css";
function SecHeader() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        height: "64px",
        background: "rgba(13,17,23,.85)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max)",
          margin: "0 auto",
          height: "100%",
          padding: "0 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href="/"
          style={{
            fontSize: ".9rem",
            fontWeight: 800,
            color: "var(--text-primary)",
            textDecoration: "none",
          }}
        >
          Kiru Tech
        </a>
        <a
          href="/"
          style={{ color: "var(--text-secondary)", textDecoration: "none" }}
        >
          Back to Home
        </a>
      </div>
    </nav>
  );
}

export default SecHeader;
