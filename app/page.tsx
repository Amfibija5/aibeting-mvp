export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "black",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui"
    }}>
      <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>
        AI Betting
      </h1>

      <p style={{ fontSize: "20px", opacity: 0.8, marginBottom: "32px" }}>
        Automated value betting for serious bettors.
      </p>

      <button style={{
        padding: "14px 28px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "8px",
        border: "none"
      }}>
        Get Started
      </button>
    </main>
  );
}