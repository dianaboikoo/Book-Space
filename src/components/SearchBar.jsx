// src/components/SearchBar.jsx
import React from 'react';

function SearchBar() {
  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search..."
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  container: {
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    padding: '10px',
    borderRadius: '10px',
    border: '1px solid #A9A9A9',
  },
};

export default SearchBar;
