import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>AI Resume Builder</h1>
        <p style={styles.subtitle}>
          Create and improve your resume with AI assistance.
        </p>
      </header>

      <main style={styles.main}>
        <section style={styles.panel}>
          <h2 style={styles.panelTitle}>Resume Editor</h2>

          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Personal Info</h3>

            <input
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={styles.input}
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />

            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Professional Summary</h3>

            <textarea
              placeholder="Write your professional summary..."
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              style={styles.textarea}
            />
          </div>
        </section>

        <section style={styles.panel}>
          <h2 style={styles.panelTitle}>Live Preview</h2>

          <div style={styles.previewBlock}>
            <h1 style={styles.previewName}>
              {fullName || "Your Name"}
            </h1>

            <p style={styles.previewContact}>
              {email || "your.email@example.com"} | {phone || "(123) 456-7890"}
            </p>
          </div>

          <div style={styles.previewBlock}>
            <h3 style={styles.previewSectionTitle}>Professional Summary</h3>
            <p style={styles.previewText}>
              {summary || "Your summary will appear here..."}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
    color: "#0f172a",
    fontFamily: "Arial, sans-serif",
    padding: "32px",
    boxSizing: "border-box",
  },
  header: {
    marginBottom: "32px",
  },
  title: {
    margin: 0,
    fontSize: "36px",
    fontWeight: "700",
  },
  subtitle: {
    marginTop: "8px",
    fontSize: "16px",
    color: "#475569",
  },
  main: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px",
  },
  panel: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
    minHeight: "420px",
  },
  panelTitle: {
    marginTop: 0,
    marginBottom: "20px",
    fontSize: "24px",
  },
  section: {
    marginBottom: "28px",
  },
  sectionTitle: {
    marginTop: 0,
    marginBottom: "12px",
    fontSize: "18px",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "12px",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    height: "120px",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    boxSizing: "border-box",
    resize: "vertical",
  },
  previewBlock: {
    marginBottom: "24px",
  },
  previewName: {
    margin: 0,
    fontSize: "30px",
  },
  previewContact: {
    marginTop: "8px",
    color: "#475569",
  },
  previewSectionTitle: {
    marginBottom: "10px",
    fontSize: "18px",
    borderBottom: "1px solid #e2e8f0",
    paddingBottom: "6px",
  },
  previewText: {
    fontSize: "16px",
    color: "#334155",
    lineHeight: 1.6,
  },
};

export default App;