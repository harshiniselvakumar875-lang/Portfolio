
import React, { useState } from "react";

function Contact_Task() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setForm(
      "Message is stored in backend!!"
    )
  }
  return (
    <>
      <h3>Contact Me 📞</h3>

      <form className="con" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <label>Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message"
          rows="5"
        />
<br/>
        <button className="btn" type="submit">
          Send Message
        </button>
      </form>
    </>
  );
}

export default Contact_Task;
