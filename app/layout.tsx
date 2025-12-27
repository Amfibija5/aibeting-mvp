import "./globals.css";

export const metadata = {
  title: "AI Betting",
  description: "Automated value betting for serious bettors.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "black", color: "white", fontFamily: "system-ui" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 24px",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
            position: "sticky",
            top: 0,
            background: "black",
            zIndex: 10,
          }}
        >
          <a href="/" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            AI Betting
          </a>

          <nav style={{ display: "flex", gap: "14px" }}>
            <a href="/login" style={{ color: "white", textDecoration: "none", opacity: 0.85 }}>
              Login
            </a>
            <a href="/register" style={{ color: "white", textDecoration: "none", opacity: 0.85 }}>
              Register
            </a>
          </nav>
        </header>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px" }}>{children}</div>

        <footer
          style={{
            padding: "22px 24px",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            opacity: 0.7,
            fontSize: 13,
          }}
        >
          © {new Date().getFullYear()} AI Betting
        </footer>
      </body>
    </html>
  );
}