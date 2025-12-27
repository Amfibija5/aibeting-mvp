export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#0b0b0f", color: "white" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 800, letterSpacing: 0.5 }}>AiBetting</div>
          <div style={{ display: "flex", gap: 14, opacity: 0.9, fontSize: 14 }}>
            <a href="#how" style={{ color: "white", textDecoration: "none" }}>How it works</a>
            <a href="#pricing" style={{ color: "white", textDecoration: "none" }}>Pricing</a>
            <a href="#faq" style={{ color: "white", textDecoration: "none" }}>FAQ</a>
          </div>
        </div>

        <section style={{ marginTop: 72, display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 28 }}>
          <div>
            <div style={{ display: "inline-flex", gap: 10, alignItems: "center", padding: "8px 12px", borderRadius: 999, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}>
              <span style={{ width: 8, height: 8, borderRadius: 99, background: "#f5c542" }} />
              <span style={{ fontSize: 13, opacity: 0.9 }}>PS3838 AutoBet • Google Sheets driven</span>
            </div>

            <h1 style={{ marginTop: 18, fontSize: 46, lineHeight: 1.05, letterSpacing: -1 }}>
              Auto-betting that actually runs.
              <span style={{ color: "#f5c542" }}> Stable.</span>
            </h1>

            <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.6, opacity: 0.85, maxWidth: 560 }}>
              Connect your PS3838 API, pick a bankroll rule (balance-based), and let the system place bets from your
              “Pinnacle Bets” sheet. Built for reliability, logging, and scaling to multiple accounts.
            </p>

            <div style={{ marginTop: 22, display: "flex", gap: 12, alignItems: "center" }}>
              <a
                href="/login"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px 16px",
                  borderRadius: 12,
                  background: "#f5c542",
                  color: "#111",
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                Get started
              </a>
              <a
                href="#how"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px 16px",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  color: "white",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                See how it works
              </a>
            </div>

            <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap", opacity: 0.9, fontSize: 13 }}>
              <span style={pill()}>Balance → Bankroll</span>
              <span style={pill()}>Kelly staking</span>
              <span style={pill()}>Auto refresh lineId / altLineId</span>
              <span style={pill()}>Telegram + Sheets logs</span>
            </div>
          </div>

          <div
            style={{
              borderRadius: 18,
              background: "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))",
              border: "1px solid rgba(255,255,255,0.10)",
              padding: 18,
            }}
          >
            <div style={{ fontWeight: 800, marginBottom: 10 }}>MVP: what you’ll build</div>

            <div style={card()}>
              <div style={cardTitle()}>1) Register / Login</div>
              <div style={cardText()}>Email + password (Supabase Auth).</div>
            </div>
            <div style={card()}>
              <div style={cardTitle()}>2) Add PS3838 accounts</div>
              <div style={cardText()}>One user can store multiple PS accounts.</div>
            </div>
            <div style={card()}>
              <div style={cardTitle()}>3) Connect Google Sheet</div>
              <div style={cardText()}>Per client: their own sheet + “Pinnacle Bets” tab.</div>
            </div>
            <div style={card()}>
              <div style={cardTitle()}>4) Run provisioning job</div>
              <div style={cardText()}>Creates .env + cron on client VPS.</div>
            </div>

            <div style={{ marginTop: 10, fontSize: 12, opacity: 0.75 }}>
              Next step: add /login + /app page, then connect Supabase.
            </div>
          </div>
        </section>

        <section id="how" style={{ marginTop: 70 }}>
          <h2 style={{ fontSize: 26, letterSpacing: -0.3 }}>How it works</h2>
          <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            <div style={block()}>
              <div style={blockTitle()}>Sheets → Signals</div>
              <div style={blockText()}>Status=READY rows are candidates for placement.</div>
            </div>
            <div style={block()}>
              <div style={blockTitle()}>Refresh odds IDs</div>
              <div style={blockText()}>Before placing, we re-fetch lineId/altLineId to avoid PROCESSED_WITH_ERROR.</div>
            </div>
            <div style={block()}>
              <div style={blockTitle()}>Stake from PS balance</div>
              <div style={blockText()}>Reads /v2/client/balance and uses it as bankroll on every bet.</div>
            </div>
          </div>
        </section>

        <section id="pricing" style={{ marginTop: 70 }}>
          <h2 style={{ fontSize: 26, letterSpacing: -0.3 }}>Pricing model (suggestion)</h2>
          <p style={{ marginTop: 10, opacity: 0.85, maxWidth: 760, lineHeight: 1.6 }}>
            Avoid “% of stake” — it’s hard to justify when results vary and it’s easy to game. Better:
            <b> setup fee + profit share on net profit</b>, settled weekly/monthly, with transparent logs.
          </p>
          <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            <div style={block()}>
              <div style={blockTitle()}>Starter</div>
              <div style={blockText()}>Setup + small monthly (support).</div>
            </div>
            <div style={block()}>
              <div style={blockTitle()}>Profit share</div>
              <div style={blockText()}>e.g. 20–30% of net profit, high-watermark.</div>
            </div>
            <div style={block()}>
              <div style={blockTitle()}>Prepaid credit</div>
              <div style={blockText()}>Client tops up “service credit” that unlocks usage.</div>
            </div>
          </div>
        </section>

        <section id="faq" style={{ marginTop: 70, paddingBottom: 40 }}>
          <h2 style={{ fontSize: 26, letterSpacing: -0.3 }}>FAQ</h2>
          <div style={{ marginTop: 14, display: "grid", gap: 10, maxWidth: 850 }}>
            <div style={qa()}>
              <div style={q()}>Can one user have multiple PS accounts?</div>
              <div style={a()}>Yes. That’s MVP #1 requirement. Each account has its own API credentials and settings.</div>
            </div>
            <div style={qa()}>
              <div style={q()}>Do clients need their own VPS?</div>
              <div style={a()}>For your model: yes. Zero cost if no client; clean isolation; easy scaling to 100+ clients.</div>
            </div>
            <div style={qa()}>
              <div style={q()}>What do you store in the web app?</div>
              <div style={a()}>Only credentials + settings + job status. Actual betting runs on the client VPS.</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function pill(): React.CSSProperties {
  return {
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
  };
}
function card(): React.CSSProperties {
  return {
    borderRadius: 14,
    background: "rgba(0,0,0,0.25)",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: 12,
    marginTop: 10,
  };
}
function cardTitle(): React.CSSProperties {
  return { fontWeight: 800, fontSize: 13, marginBottom: 4 };
}
function cardText(): React.CSSProperties {
  return { fontSize: 13, opacity: 0.8, lineHeight: 1.4 };
}
function block(): React.CSSProperties {
  return {
    borderRadius: 16,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    padding: 14,
  };
}
function blockTitle(): React.CSSProperties {
  return { fontWeight: 800, marginBottom: 6 };
}
function blockText(): React.CSSProperties {
  return { fontSize: 13, opacity: 0.8, lineHeight: 1.5 };
}
function qa(): React.CSSProperties {
  return {
    borderRadius: 14,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    padding: 14,
  };
}
function q(): React.CSSProperties {
  return { fontWeight: 800, marginBottom: 6 };
}
function a(): React.CSSProperties {
  return { fontSize: 13, opacity: 0.85, lineHeight: 1.5 };
}