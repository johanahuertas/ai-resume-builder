import { useState } from "react";

function App() {
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
        {/* LEFT SIDE - EDITOR */}
        <section style={styles.panel}>
          <h2 style={styles.panelTitle}>Resume Editor</h2>

          <textarea
            placeholder="Write your professional summary..."
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            style={styles.textarea}
          />

          <ul style={styles.list}>
            <li>Personal Info</li>
            <li>Summary</li>
            <li>Education</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Skills</li>
          </ul>
        </section>

        {/* RIGHT SIDE - PREVIEW */}
        <section style={styles.panel}>
          <h2 style={styles.panelTitle}>Live Preview</h2>

          <p style={styles.previewText}>
            {summary || "Your summary will appear here..."}
          </p>
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
    marginBottom: "16px",
    fontSize: "24px",
  },
  textarea: {
    width: "100%",
    height: "120px",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "20px",
    fontSize: "14px",
  },
  previewText: {
    fontSize: "16px",
    color: "#334155",
    lineHeight: 1.6,
  },
  list: {
    paddingLeft: "20px",
    lineHeight: 1.8,
  },
};

export default App;