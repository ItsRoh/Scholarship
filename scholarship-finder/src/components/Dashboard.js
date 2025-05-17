import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      // Ideally decode JWT here to get username
      setUsername('StudentUser'); // Static for demo
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome, {username}!</h1>
        <p style={styles.subtitle}>
          Find scholarships tailored to you or update your profile to improve recommendations.
        </p>
        <div style={styles.links}>
          <Link to="/profile" style={styles.button}>Update Profile</Link>
          <Link to="/scholarships" style={{ ...styles.button, backgroundColor: '#28a745' }}>View Scholarships</Link>
        </div>
        <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background:
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '40px 20px',
  },
  card: {
    backgroundColor: 'white',
    padding: '40px 50px',
    borderRadius: '15px',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
    maxWidth: '480px',
    width: '100%',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    marginBottom: '10px',
    fontSize: '2.5rem',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.15rem',
    color: '#666',
    marginBottom: '30px',
    lineHeight: 1.5,
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '40px',
  },
  button: {
    flex: '1',
    padding: '14px 0',
    backgroundColor: '#0077cc',
    color: 'white',
    borderRadius: '10px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1.1rem',
    boxShadow: '0 8px 20px rgba(0, 119, 204, 0.3)',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    cursor: 'pointer',
  },
  logoutButton: {
    padding: '12px 0',
    backgroundColor: '#e74c3c',
    color: 'white',
    fontWeight: '700',
    fontSize: '1.1rem',
    borderRadius: '10px',
    border: 'none',
    width: '100%',
    cursor: 'pointer',
    boxShadow: '0 8px 20px rgba(231, 76, 60, 0.3)',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
};

export default Dashboard;
