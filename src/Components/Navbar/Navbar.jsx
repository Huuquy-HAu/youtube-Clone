import React from 'react'
import { Link } from 'react-router-dom'
import { YoutubeFilled  } from '@ant-design/icons';
import './Navbar.css'
import SearchBar from '../SearchBar/SearchBar';

function Navbar() {
  return (
    <div className='Navbar-container'>
      <div className="Navbar-logo">
        <Link to={"/"}>
          <YoutubeFilled /> <span>YeuTuBe</span>
        </Link>
      </div>
      <SearchBar/>
    </div>
  )
}

export default Navbar