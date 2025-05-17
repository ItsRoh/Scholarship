import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState({
    course: '',
    gpa: '',
    location: '',
    incomeStatus: '',
    specialCategories: '',
  });

  const [message, setMessage] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.data) {
          setProfile(res.data.profile || {});
        }
      } catch (error) {
        console.error('Failed to load profile:', error);
        setMessage('Failed to load profile. Please log in again.');
      }
    };

    fetchProfile();
  }, [token]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/profile', profile, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage('Profile updated successfully!');
    } catch (error) {
      console.error(error);
      setMessage('Failed to update profile.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User Profile</h2>
      {message && <p style={styles.message}>{message}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        {[
          { label: 'Course of Study', name: 'course', type: 'text', required: true },
          { label: 'GPA', name: 'gpa', type: 'number', step: '0.01', required: true },
          { label: 'Location', name: 'location', type: 'text', required: true },
          { label: 'Income Status', name: 'incomeStatus', type: 'text' },
          { label: 'Special Categories', name: 'specialCategories', type: 'text' },
        ].map(({ label, name, type, required, step }) => (
          <div key={name} style={styles.inputGroup}>
            <label htmlFor={name} style={styles.label}>{label}:</label>
            <input
              id={name}
              name={name}
              type={type}
              step={step}
              value={profile[name]}
              onChange={handleChange}
              required={required}
              style={styles.input}
            />
          </div>
        ))}
        <button type="submit" style={styles.button}>Save Profile</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '550px',
    margin: '60px auto',
    padding: '30px 25px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    fontSize: '2rem',
    color: '#2c3e50',
    marginBottom: '25px',
    textAlign: 'center',
  },
  message: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#27ae60',
    fontWeight: '600',
    fontSize: '1.1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '8px',
    fontWeight: '600',
    color: '#34495e',
    fontSize: '1rem',
  },
  input: {
    padding: '12px 15px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1.8px solid #bdc3c7',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  button: {
    padding: '14px',
    backgroundColor: '#0077cc',
    color: 'white',
    fontWeight: '700',
    fontSize: '1.1rem',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    boxShadow: '0 7px 20px rgba(0, 119, 204, 0.4)',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
};

export default Profile;
