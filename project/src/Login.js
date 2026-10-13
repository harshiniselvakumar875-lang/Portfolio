import React, { useState } from 'react';
import './Login.css';
import mec1 from './mec1.jpeg';
import logo from './logo.png';
function Login() {
  const [fields, setFields] = useState({
    name: '',
    fatherName: '', 
    dob: '',
    gender: '',
    regNo: '',
    email: '', 
    mobile: '', 
    parentMobile: '',
    community: '',
    firstGraduate: '',
    address: '',
    city: '',
    district: '',
    state: '',
    course: '',
    referredBy: ''
  });

  const updateFieldData = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const executeSubmission = (e) => {
    e.preventDefault();
    console.log("Captured Target Dataset Structure:", fields);
    alert("Application data logged to console wrapper framework setup!");
  };

  return (
    <div className="mec-hero-page" style={{backgroundImage:`url(${mec1})`}}>
      <nav className="mec-navbar-top">
  <div className="mec-logo-area" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
    <img src={logo} alt="Muthayammal Engineering College Logo" style={{ height: '60px', objectFit: 'contain' }}  />
    <div style={{ fontWeight: 'bold', color: '#002147', fontSize: '14px', lineHeight: '1.3', textAlign: 'left' }}>
      MUTHAYAMMAL ENGINEERING COLLEGE
      <span style={{ display: 'block', fontSize: '11px', color: '#e67e22', fontWeight: 'bold' }}>
        (AUTONOMOUS)
      </span>
      <span style={{ display: 'block', fontSize: '10px', color: '#666', fontWeight: 'normal', textTransform: 'none' }}>
        Rasipuram, Namakkal Dist.
      </span>
    </div>
  </div>
  <div className="mec-contact-badges">
    <div className="admission-hotline">For Admissions: 94422 26737 | 94433 48637</div>
    <div className="tnea-badge-box">TNEA Code 2610</div>
  </div>
</nav>
      <div className="mec-content-body">
        <div className="mec-slogan-panel">
          <h2>Learn &<br />Discover.</h2>
        </div>
        <div className="mec-floating-card">
          <h4>Online Admission Enquiry - 2026</h4>
          <form onSubmit={executeSubmission}>
            <div className="form-responsive-grid">
              <div className="input-block-element span-full-row">
                <label>Name</label>
                <input type="text" name="name" value={fields.name} onChange={updateFieldData} required />
              </div>

              <div className="input-block-element">
                <label>Father Name</label>
                <input type="text" name="fatherName" value={fields.fatherName} onChange={updateFieldData} required />
              </div>

              <div className="input-block-element">
                <label>Date of Birth</label>
                <input type="date" name="dob" value={fields.dob} onChange={updateFieldData} required />
              </div>

              <div className="input-block-element">
                <label>Gender</label>
                <select name="gender" value={fields.gender} onChange={updateFieldData} required>
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="input-block-element">
                <label>Register Number [+2 / Diploma / UG]</label>
                <input type="text" name="regNo" value={fields.regNo} onChange={updateFieldData} required />
              </div>

              <div className="input-block-element">
                <label>Email</label>
                <input type="email" name="email" value={fields.email} onChange={updateFieldData} required />
              </div>

              <div className="input-block-element">
                <label>Mobile Number</label>
                <input type="tel" name="mobile" value={fields.mobile} onChange={updateFieldData} required />
              </div>

              <div className="input-block-element">
                <label>Parent Mobile Number</label>
                <input type="tel" name="parentMobile" value={fields.parentMobile} onChange={updateFieldData} required />
              </div>

              <div className="input-block-element">
                <label>Community</label>
                <select name="community" value={fields.community} onChange={updateFieldData} required>
                  <option value="">Select</option>
                  <option value="OC">OC</option>
                  <option value="BC">BC</option>
                  <option value="BCM">BCM</option>
                  <option value="MBC">MBC</option>
                  <option value="SC">SC</option>
                </select>
              </div>

              <div className="input-block-element">
                <label>First Graduate</label>
                <select name="firstGraduate" value={fields.firstGraduate} onChange={updateFieldData} required>
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className="input-block-element span-full-row">
                <label>Address</label>
                <input type="text" name="address" value={fields.address} onChange={updateFieldData} required />
              </div>

              <div className="input-block-element">
                <label>City / Town</label>
                <input type="text" name="city" value={fields.city} onChange={updateFieldData} required />
              </div>

              <div className="input-block-element">
                <label>District</label>
                <input type="text" name="district" value={fields.district} onChange={updateFieldData} required />
              </div>

              <div className="input-block-element span-full-row">
                <label>State</label>
                <select name="state" value={fields.state} onChange={updateFieldData} required>
                  <option value="">Select</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Kerala">Kerala</option>
                </select>
              </div>

              <div className="input-block-element span-full-row">
                <label>Course</label>
                <select name="course" value={fields.course} onChange={updateFieldData} required>
                  <option value="">Select Course</option>
                  <option value="B.E - Computer Science and Engineering">B.E - Computer Science and Engineering</option>
                  <option value="B.Tech - Information Technology">B.Tech - Information Technology</option>
                </select>
              </div>

              <button type="submit" className="mec-green-btn">Apply</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Login;



// import { useState,React } from "react";
// import './Login.css';

//  function Login() {
//   const [form, setForm] = useState({
//     name: "",
//     mobile: "",
//     email: "",
//     gender: "",
//     dob: "",
//     address: "",
//   });

//   const [message, setMessage] = useState("");

//   function handleChange(e) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setMessage("");
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!/^[6-9]\d{9}$/.test(form.mobile)) {
//       setMessage("Enter a valid 10-digit mobile number.");
//       return;
//     }

//     setMessage(`Thank you, ${form.name}! Enquiry submitted.`);
//     setForm({
//       name: "",
//       mobile: "",
//       email: "",
//       gender: "",
//       dob: "",
//       address: "",
//     });
//   }

//   return (
//     <div className="page">
//       <div className="admission-card">
//         <h2>ONLINE ADMISSION ENQUIRY - 2026</h2>

//         <form onSubmit={handleSubmit}>
//           <label>Name</label>
//           <input
//             name="name"
//             placeholder="Enter your name"
//             value={form.name}
//             onChange={handleChange}
//             required
//           />

//           <label>Mobile Number</label>
//           <input
//             name="mobile"
//             type="tel"
//             inputMode="numeric"
//             maxLength={10}
//             placeholder="10-digit mobile number"
//             value={form.mobile}
//             onChange={handleChange}
//             required
//           />

//           <label>Email</label>
//           <input
//             name="email"
//             type="email"
//             placeholder="Enter your email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />

//           <label>Gender</label>
//           <select
//             name="gender"
//             value={form.gender}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select</option>
//             <option value="Female">Female</option>
//             <option value="Male">Male</option>
//             <option value="Prefer not to say">Prefer not to say</option>
//           </select>

//           <label>Date of Birth</label>
//           <input
//             name="dob"
//             type="date"
//             value={form.dob}
//             onChange={handleChange}
//             required
//           />

//           <label>Address</label>
//           <textarea
//             name="address"
//             placeholder="Enter your address"
//             value={form.address}
//             onChange={handleChange}
//             rows="3"
//             required
//           />

//           <button type="submit">Apply</button>

//           {message && <p className="message">{message}</p>}
//         </form>
//       </div>
//     </div>
//   );
// }
// export default Login;