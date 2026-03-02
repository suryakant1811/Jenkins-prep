import axios from "axios";

import { useEffect, useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");


  // const API_BASE = "http://backend:7000";
  const API_BASE = "/api";

  const fetchItems = async () => {
    try {
      // const res = await axios.get(`${API_BASE}/api/show`);
      const res = await axios.get(`${API_BASE}/show`);
      console.log("FETCHED DATA →", res.data);

      // works for multiple backend formats
      const data = res.data?.data || res.data?.items || res.data || [];
      setItems(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log("FETCH ERROR →", error.message);
      setItems([]);
    }
  };

  // ✅ load on first render
  useEffect(() => {
    fetchItems();
  }, []);

  // ✅ add item then refresh list
  const addItem = async () => {
    if (!input.trim()) return;

    try {
      // await axios.post(`${API_BASE}/api/add`, {
      //   name: input
      // });

       await axios.post(`${API_BASE}/add`, {
        name: input
      });

      setInput("");
      await fetchItems(); // important
    } catch (error) {
      console.log(error.message);
      alert("Failed to add item");
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <header style={styles.header}>
          <div style={styles.logo}>MyUI</div>
          <nav>
            <a style={styles.link}>Home</a>
            <a style={styles.link}>Features</a>
            <a style={styles.link}>About</a>
            <a style={styles.link}>Contact</a>
          </nav>
        </header>

        <section style={styles.hero}>
          <div>
            <h1>Build Beautiful Interfaces V1</h1>
            <p>Add values to backend and view stored data below.</p>

            <div style={styles.inputRow}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Enter value..."
                style={styles.input}
              />
              <button onClick={addItem} style={styles.button}>
                Add
              </button>
            </div>
          </div>

          <img
            src="https://picsum.photos/500/350"
            alt="preview"
            style={styles.image}
          />
        </section>

        <section style={styles.cardGrid}>
          {items.length === 0 ? (
            <div style={styles.card}>No data from backend</div>
          ) : (
            items.map(item => (
              <div key={item._id} style={styles.card}>
                {item.name}
              </div>
            ))
          )}
        </section>

        <footer style={styles.footer}>
          © 2026 Modern UI Page
        </footer>
      </div>
    </div>
  );
}

const styles = {
  body: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontFamily: "Segoe UI, sans-serif"
  },

  container: {
    width: "90%",
    maxWidth: 1100,
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    borderRadius: 20,
    padding: 40,
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 40
  },

  logo: {
    fontSize: 24,
    fontWeight: "bold"
  },

  link: {
    marginLeft: 20,
    cursor: "pointer",
    opacity: 0.85
  },

  hero: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 40,
    alignItems: "center"
  },

  inputRow: {
    display: "flex",
    gap: 10,
    marginTop: 15
  },

  input: {
    padding: 12,
    borderRadius: 8,
    border: "none",
    width: 220
  },

  button: {
    padding: "12px 20px",
    borderRadius: 30,
    border: "none",
    fontWeight: "bold",
    cursor: "pointer"
  },

  image: {
    width: "100%",
    borderRadius: 15
  },

  cardGrid: {
    marginTop: 50,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 20
  },

  card: {
    padding: 20,
    borderRadius: 16,
    background: "white",
    color: "black"
  },

  footer: {
    marginTop: 40,
    textAlign: "center",
    opacity: 0.7
  }
};