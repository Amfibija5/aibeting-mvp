export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#0b0b0b", color: "white" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px" }}>
        <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 20 }}>
          AI Betting Automation
        </h1>

        <p style={{ fontSize: 20, opacity: 0.85, marginBottom: 40 }}>
          Fully automated value betting system connected directly to PS3838.
          No signals. No emotions. Just execution.
        </p>

        <div style={{ display: "flex", gap: 16 }}>
          <button
            style={{
              background: "#f5c542",
              color: "#000",
              padding: "14px 24px",
              borderRadius: 8,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
            }}
          >
            Get Early Access
          </button>

          <button
            style={{
              background: "transparent",
              color: "white",
              padding: "14px 24px",
              borderRadius: 8,
              border: "1px solid #444",
              cursor: "pointer",
            }}
          >
            How it works
          </button>
        </div>

        <div style={{ marginTop: 80, opacity: 0.6 }}>
          <p>✔ Direct PS3838 API connection</p>
          <p>✔ Kelly staking & bankroll management</p>
          <p>✔ One user → multiple PS accounts</p>
          <p>✔ Fully automated VPS execution</p>
        </div>
      </div>
    </main>
  );
}