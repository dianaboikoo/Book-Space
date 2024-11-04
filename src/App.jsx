import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import SearchBar from './components/SearchBar';
import Banner from './components/Banner';
import BookList from './components/BookList';
import BottomNavBar from './components/BottomNavBar';
import HeaderChat from './components/HeaderChat';
import TabSwitcher from './components/TabSwitcher';
import ChatList from './components/ChatList';
import './styles.css'

function App() {
    // App code here
}

export default App;
;


function App() {
 const books = [
    { title: 'The Goldfinch', cover: 'https://example.com/goldfinch.jpg' },
    { title: 'The Secret History', cover: 'https://example.com/secret-history.jpg' },
    { title: 'Pride and Prejudice', cover: 'https://example.com/pride.jpg' },
  ];

  return (
    <div>
      <SearchBar />
      <Banner />
      <h2 style={{ marginLeft: '20px' }}>Discover</h2>
      <BookList title="Currently Reading" books={books} />
      <BookList title="Recommended" books={books} />
      <BookList title="Popular" books={books} />
      <BottomNavBar />
    </div>
  )
}

export default App
