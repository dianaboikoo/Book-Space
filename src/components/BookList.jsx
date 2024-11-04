// src/components/BookList.jsx
import React from 'react';

function BookList({ title, books }) {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3>{title}</h3>
        <a href="#" style={styles.moreLink}>More &gt;</a>
      </div>
      <div style={styles.bookList}>
        {books.map((book, index) => (
          <div key={index} style={styles.bookItem}>
            <img src={book.cover} alt={book.title} style={styles.cover} />
            <p style={styles.title}>{book.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    margin: '10px 20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moreLink: {
    fontSize: '0.8rem',
    color: '#888',
  },
  bookList: {
    display: 'flex',
    gap: '10px',
    overflowX: 'scroll',
  },
  bookItem: {
    width: '100px',
    textAlign: 'center',
  },
  cover: {
    width: '100%',
    borderRadius: '5px',
  },
  title: {
    fontSize: '0.9rem',
    marginTop: '5px',
  },
};

export default BookList;
