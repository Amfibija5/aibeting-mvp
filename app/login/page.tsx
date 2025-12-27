export default function LoginPage() {
  return (
    <main>
      <h1 style={{ fontSize: 34, marginBottom: 8 }}>Login</h1>
      <p style={{ opacity: 0.75, marginBottom: 24 }}>Sign in with email + password.</p>

      <form style={{ display: "grid", gap: 12, maxWidth: 420 }}>
        <input
          type="email"
          placeholder="Email"
          style={{
            padding: 12,
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(255,255,255,0.06)",
            color: "white",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            padding: 12,
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(255,255,255,0.06)",
            color: "white",
          }}
        />
        <button
          type="button"
          style={{
            padding: "12px 14px",
            borderRadius: 10,
            border: "none",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Login (MVP)
        </button>
      </form>
    </main>
  );
}