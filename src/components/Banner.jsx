// src/components/Banner.jsx
import React from 'react';

function Banner() {
  return (
    <div style={styles.banner}>
      <img
        src="https://bookspace-d5650-default-rtdb.firebaseio.com/books.json" // Replace with your image URL
        alt="Winter Collection"
        style={styles.image}
      />
    
    </div>
  );
}

const styles = {
  banner: {
    margin: '20px',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  text: {
    position: 'absolute',
    top: '50%',
    left: '10%',
    color: '#333',
  },
};

export default Banner;
