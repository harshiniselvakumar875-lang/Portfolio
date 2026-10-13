import { useState, useEffect } from "react";

const css = `
// .app{--bg:#f4f6f8;--card:#fff;--text:#1b2430;--muted:#6b7686;--line:#e2e7ed;--accent:#0f766e;
//   min-height:100vh;background:var(--bg);color:var(--text);font-family:system-ui,Segoe UI,sans-serif;padding:24px;transition:background .2s}
// .app.dark{--bg:#10161d;--card:#18212b;--text:#e8edf2;--muted:#93a0b0;--line:#27323f;--accent:#2dd4bf}
// .wrap{max-width:900px;margin:0 auto;display:grid;gap:20px}
// .card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:20px}
// .top{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}
// .user{display:flex;align-items:center;gap:14px}
// .avatar{width:52px;height:52px;border-radius:50%;background:var(--accent);color:#fff;display:grid;place-items:center;font-weight:700;font-size:18px}
// h1{margin:0;font-size:22px} p{margin:2px 0 0;color:var(--muted);font-size:14px}
// button{font:inherit;cursor:pointer;border:1px solid var(--line);background:var(--card);color:var(--text);border-radius:8px;padding:8px 14px}
// button:focus-visible,input:focus-visible,select:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
// .primary{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:600}
// .stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
// .stat{padding:16px;border-radius:12px;border:1px solid var(--line);background:var(--card)}
// .stat b{display:block;font-size:30px;line-height:1.1} .stat span{color:var(--muted);font-size:13px}
// .stat.done b{color:var(--accent)}
// form{display:flex;gap:10px;flex-wrap:wrap}
// input,select{font:inherit;padding:9px 12px;border-radius:8px;border:1px solid var(--line);background:var(--bg);color:var(--text)}
// input{flex:1;min-width:180px}
// ul{list-style:none;margin:0;padding:0;display:grid;gap:10px}
// li{display:flex;align-items:center;gap:12px;padding:12px 14px;border:1px solid var(--line);border-left:6px solid var(--p);border-radius:10px}
// li.High{--p:#dc2626} li.Medium{--p:#d97706} li.Low{--p:#16a34a}
// .name{flex:1} .name.done{text-decoration:line-through;color:var(--muted)}
// .badge{font-size:12px;font-weight:600;color:var(--p);border:1px solid var(--p);border-radius:99px;padding:2px 10px}
// .empty{color:var(--muted);text-align:center;padding:20px}
// @media(max-width:560px){.stats{grid-template-columns:1fr 1fr 1fr}.stat b{font-size:24px}li{flex-wrap:wrap}}
// `;

// switch statement: greeting based on time of day
const getGreeting = () => {
  const hour = new Date().getHours();
  switch (true) {
    case hour < 12: return "Good morning";
    case hour < 17: return "Good afternoon";
    default: return "Good evening";
  }
};

export default function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([
    { id: 1, name: "Finish React assignment", priority: "High", completed: false },
    { id: 2, name: "Revise React notes", priority: "Medium", completed: false },
    { id: 3, name: "Walk in the evening", priority: "Low", completed: true },
  ]);
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [darkMode, setDarkMode] = useState(false);

  // Runs only once when the page loads
  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await res.json();
        setUser({ name: data.name, email: data.email, city: data.address.city });
      } catch (err) {
        setUser({ name: "Harshini", email: "harshini@email.com", city: "Chennai" });
      }
    };
    loadUser();
  }, []);

  const addTask = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    const newTask = { id: Date.now(), name: name.trim(), priority, completed: false };
    setTasks([...tasks, newTask]);
    setName("");
  };

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const toggleTask = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  const initials = user ? user.name.split(" ").map((w) => w[0]).slice(0, 2).join("") : "..";

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <style>{css}</style>
      <div className="wrap">
        <header className="card top">
          <div className="user">
            <div className="avatar">{initials}</div>
            <div>
              {user ? (
                <>
                  <h1>{getGreeting()}, {user.name.split(" ")[0]}!</h1>
                  <p>{user.email} · {user.city}</p>
                </>
              ) : (
                <h1>Loading profile...</h1>
              )}
            </div>
          </div>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light mode" : "Dark mode"}
          </button>
        </header>

        <section className="stats">
          <Stat label="Total tasks" value={total} />
          <Stat label="Completed" value={completed} className="done" />
          <Stat label="Pending" value={pending} />
        </section>

        <section className="card">
          <form onSubmit={addTask}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="What needs to be done?"
              aria-label="Task name"
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)} aria-label="Priority">
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            <button className="primary" type="submit">Add task</button>
          </form>
        </section>

        <section className="card">
          {tasks.length === 0 ? (
            <div className="empty">No tasks yet. Add your first task above.</div>
          ) : (
            <ul>
              {tasks.map(({ id, name, priority, completed }) => (
                <li key={id} className={priority}>
                  <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => toggleTask(id)}
                    aria-label={`Mark ${name} as completed`}
                    style={{ flex: "none", minWidth: 0, width: 18, height: 18 }}
                  />
                  <span className={`name ${completed ? "done" : ""}`}>{name}</span>
                  <span className="badge">{priority}</span>
                  <button onClick={() => deleteTask(id)}>Delete</button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

const Stat = ({ label, value, className = "" }) => (
  <div className={`stat ${className}`}>
    <b>{value}</b>
    <span>{label}</span>
  </div>
);