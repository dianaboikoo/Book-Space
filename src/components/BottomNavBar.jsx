// src/components/BottomNavBar.jsx
import React from 'react';

function BottomNavBar() {
  return (
    <div style={styles.navBar}>
      <button style={styles.button}>🏠</button>
      <button style={styles.button}>💬</button>
      <button style={styles.button}>📊</button>
      <button style={styles.button}>👤</button>
    </div>
  );
}

const styles = {
  navBar: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '60px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTop: '1px solid #ddd',
  },
  button: {
    fontSize: '1.5rem',
    color: '#555',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
};

export default BottomNavBar;
