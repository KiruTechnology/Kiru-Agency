import "../../styles/privacy.css";
function SecHeader() {
  return (
    <nav
      className="px-10 border border-red-500 sticky p-8"
      style={{
        padding: "1rem",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        height: "64px",
        background: "rgba(13,17,23,.85)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="w-[99dvw] mx-auto my-0 h-full flex justify-between items-center">
        <a
          href="/"
          style={{
            color: "var(--text-primary)",
            textDecoration: "none",
          }}
          className="font-[.9rem] font-bold"
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
