
import React, { useState } from "react";

function Login_Task() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin(event) {
    event.preventDefault();

  }

  return (
    <section className="">
      <h1 className="">WELCOME BACK</h1>
      <h3>User Login</h3>

      <form className="con" onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </section>
  );
}

export default Login_Task;
