
import { useState,React } from "react";
import './Student.css';

function Student() {
  // 1. Store all form values in one object
  const [form, setForm] = useState({
    name: "",
    age: "",
    course: "",
  });

  // Student array
  const [students, setStudents] = useState([]);

  // Other features
  const [showAdults, setShowAdults] = useState(false);
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [deleteStudent, setDeleteStudent] = useState(null);

  // 2. Handle form inputs
  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  // 3. Add a student
  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.age || !form.course.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    if (Number(form.age) <= 0) {
      alert("Please enter a valid age.");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: form.name.trim(),
      age: Number(form.age),
      course: form.course.trim(),
    };

    setStudents([...students, newStudent]);

    setForm({
      name: "",
      age: "",
      course: "",
    });
  }

  // 4. Filter students aged 18 or above
  const displayedStudents = showAdults
    ? students.filter((student) => student.age >= 18)
    : students;

  // 5. Confirm and delete a student
  function confirmDelete() {
    setStudents(
      students.filter((student) => student.id !== deleteStudent)
    );
    setDeleteStudent(null);
  }

  return (
    <div className={dark ? "app dark" : "app"}>
      <header className="header">
        <h1>Student Management App</h1>

        <button onClick={() => setDark(!dark)}>
          {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      {/* Student form */}
      <section className="card">
        <h2>Add Student</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Student Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="age"
            type="number"
            min="1"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
          />

          <input
            name="course"
            placeholder="Course"
            value={form.course}
            onChange={handleChange}
          />

          <button type="submit">Add Student</button>
        </form>
      </section>

      {/* Student list and filter */}
      <section className="card">
        <h2>Student List ({displayedStudents.length})</h2>

        <button onClick={() => setShowAdults(!showAdults)}>
          {showAdults ? "Show All Students" : "Show Students Age 18+"}
        </button>

        {displayedStudents.length === 0 ? (
          <p>No students to display.</p>
        ) : (
          <div className="student-list">
            {displayedStudents.map((student) => (
              <div className="student" key={student.id}>
                <div>
                  <h3>{student.name}</h3>
                  <p>Age: {student.age}</p>
                  <p>Course: {student.course}</p>
                </div>

                <button
                  className="delete-button"
                  onClick={() => setDeleteStudent(student.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Counter */}
      <section className="card">
        <h2>Counter</h2>
        <h3>{count}</h3>

        <div className="button-group">
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>−</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </section>

      {/* Accordion */}
      <section className="card">
        <h2>React Accordion</h2>

        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? "Hide Answer ▲" : "What is React? ▼"}
        </button>

        {showAnswer && (
          <p>
            React is a JavaScript library used to build interactive
            user interfaces. It helps us create reusable UI components.
          </p>
        )}
      </section>

      {/* Delete confirmation modal */}
      {deleteStudent !== null && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Are you sure?</h2>
            <p>Do you want to delete this student?</p>

            <div className="button-group">
              <button onClick={() => setDeleteStudent(null)}>
                Cancel
              </button>

              <button className="delete-button" onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Student;