function App() {
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
          <p style={styles.text}>This is where the form sections will go:</p>
          <ul style={styles.list}>
            <li>Personal Info</li>
            <li>Summary</li>
            <li>Education</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Skills</li>
          </ul>
        </section>

        <section style={styles.panel}>
          <h2 style={styles.panelTitle}>Live Preview</h2>
          <p style={styles.text}>
            This is where the resume preview will appear.
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
  text: {
    color: "#475569",
    fontSize: "15px",
  },
  list: {
    paddingLeft: "20px",
    lineHeight: 1.8,
  },
};

export default App;