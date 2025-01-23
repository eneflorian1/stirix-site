import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">Stirix News</Link>
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;