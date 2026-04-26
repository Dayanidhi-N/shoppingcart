const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 24px",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "16px" }}>
        🛒 ReduxToolkit
      </div>

      <div style={{ fontSize: "14px" }}>Dayanidhi N © {year}</div>
    </footer>
  );
};

export default Footer;
