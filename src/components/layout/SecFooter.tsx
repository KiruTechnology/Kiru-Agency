function SecFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "48px 40px 32px",
        background: "#010409",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max)",
          margin: "0 auto",
          paddingBottom: "32px",
          borderBottom: "1px solid var(--border)",
          textAlign: "center",
          fontSize: ".72rem",
          color: "var(--text-muted)",
        }}
      >
        <p>© {currentYear} Kiru Tech. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default SecFooter;
