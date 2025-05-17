import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>Scholarship Finder</h1>
      <ul style={styles.ul}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/register" style={styles.link}>Register</Link></li>
        <li><Link to="/login" style={styles.link}>Login</Link></li>
        <li><Link to="/dashboard" style={styles.link}>Dashboard</Link></li>
        <li><Link to="/profile" style={styles.link}>Profile</Link></li>
        <li><Link to="/scholarships" style={styles.link}>Scholarships</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 32px',
    background: 'linear-gradient(90deg, #4e54c8, #8f94fb)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  title: {
    margin: 0,
    fontSize: '28px',
    fontWeight: '700',
    color: '#fff',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    letterSpacing: '1.2px',
    userSelect: 'none',
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    gap: '24px',
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#e0e0ff',
    fontWeight: '600',
    fontSize: '16px',
    padding: '8px 12px',
    borderRadius: '6px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  linkHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#fff',
  }
};

export default Navbar;
