import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', form);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Create Your Account</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
          style={styles.input}
          autoComplete="username"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
          style={styles.input}
          autoComplete="email"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
          style={styles.input}
          autoComplete="new-password"
        />
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '80px auto',
    padding: '40px 30px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    borderRadius: '12px',
    backgroundColor: '#fff',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: 'center',
  },
  title: {
    marginBottom: '30px',
    color: '#2c3e50',
    fontWeight: '700',
    fontSize: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  input: {
    padding: '14px 18px',
    borderRadius: '8px',
    border: '1.8px solid #ddd',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
    outline: 'none',
  },
  button: {
    padding: '14px 0',
    backgroundColor: '#4e54c8',
    color: 'white',
    fontWeight: '700',
    fontSize: '1.1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 5px 15px rgba(78, 84, 200, 0.4)',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
};

export default Register;
