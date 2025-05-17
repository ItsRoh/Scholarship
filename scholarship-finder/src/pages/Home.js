import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Scholarship Finder 🎓</h1>
      <p style={styles.text}>
        Discover scholarships tailored to your profile — based on your course, grades, location, and more.
      </p>
      <div style={styles.buttonGroup}>
        <Link to="/register" style={{ ...styles.button, ...styles.registerButton }}>
          Register
        </Link>
        <Link to="/login" style={{ ...styles.button, ...styles.loginButton }}>
          Login
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '120px auto',
    padding: '0 20px',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#fdfdfd',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '20px',
    color: '#2c3e50',
    fontWeight: '800',
  },
  text: {
    fontSize: '1.25rem',
    color: '#555',
    marginBottom: '40px',
    lineHeight: 1.6,
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
  },
  button: {
    padding: '14px 36px',
    borderRadius: '30px',
    fontWeight: '700',
    fontSize: '1.1rem',
    textDecoration: 'none',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.3s ease',
    userSelect: 'none',
  },
  registerButton: {
    background: 'linear-gradient(45deg, #6a11cb, #2575fc)',
    color: 'white',
  },
  loginButton: {
    background: 'linear-gradient(45deg, #ff416c, #ff4b2b)',
    color: 'white',
  }
};

export default Home;
