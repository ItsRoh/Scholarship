import React, { useState, useEffect } from 'react';

const demoScholarships = [
  {
    id: 1,
    name: 'Full Tuition Scholarship',
    amount: 'Full',
    eligibility: { course: 'Computer Science', gpa: 3.5, location: 'New York' },
    deadline: '2025-06-01',
  },
  {
    id: 2,
    name: 'Partial STEM Grant',
    amount: 'Partial',
    eligibility: { course: 'Engineering', gpa: 3.2, location: 'California' },
    deadline: '2025-07-15',
  },
  {
    id: 3,
    name: 'Small Arts Scholarship',
    amount: 'Small',
    eligibility: { course: 'Arts', gpa: 3.0, location: 'Texas' },
    deadline: '2025-05-30',
  },
];

const Scholarships = () => {
  const [scholarships, setScholarships] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [profile, setProfile] = useState({
    course: 'Computer Science',
    gpa: 3.6,
    location: 'New York',
  });

  useEffect(() => {
    // Simulate fetching scholarships
    setScholarships(demoScholarships);
  }, []);

  useEffect(() => {
    const matches = scholarships.filter((sch) => {
      return (
        sch.eligibility.course.toLowerCase() === profile.course.toLowerCase() &&
        profile.gpa >= sch.eligibility.gpa &&
        sch.eligibility.location.toLowerCase() === profile.location.toLowerCase()
      );
    });
    setFiltered(matches);
  }, [profile, scholarships]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Matched Scholarships</h2>
      {filtered.length === 0 ? (
        <p style={styles.noMatchText}>
          No scholarships match your profile right now. Please check back later!
        </p>
      ) : (
        <ul style={styles.list}>
          {filtered.map((sch) => (
            <li key={sch.id} style={styles.card}>
              <h3 style={styles.cardTitle}>{sch.name}</h3>
              <p style={styles.detail}><strong>Amount:</strong> {sch.amount}</p>
              <p style={styles.detail}>
                <strong>Eligibility:</strong> Course: {sch.eligibility.course}, GPA ≥ {sch.eligibility.gpa}, Location: {sch.eligibility.location}
              </p>
              <p style={styles.detail}><strong>Deadline:</strong> {new Date(sch.deadline).toLocaleDateString()}</p>
              <button
                style={styles.applyButton}
                onClick={() => alert(`Apply functionality coming soon for ${sch.name}`)}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#005fa3')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#0077cc')}
              >
                Apply Now
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '60px auto',
    padding: '0 20px 40px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    fontSize: '2.2rem',
    color: '#2c3e50',
    marginBottom: '30px',
    textAlign: 'center',
  },
  noMatchText: {
    fontSize: '1.2rem',
    color: '#7f8c8d',
    textAlign: 'center',
    marginTop: '40px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    padding: '25px 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'default',
  },
  cardTitle: {
    fontSize: '1.6rem',
    color: '#34495e',
    marginBottom: '10px',
  },
  detail: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '8px',
  },
  applyButton: {
    marginTop: 'auto',
    padding: '12px 0',
    backgroundColor: '#0077cc',
    color: '#fff',
    fontWeight: '600',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 6px 18px rgba(0, 119, 204, 0.4)',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
};

export default Scholarships;
