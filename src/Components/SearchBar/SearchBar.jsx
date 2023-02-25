import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Input} from 'antd';
import './SearchBar.css'
const { Search } = Input;

function SearchBar() {
  const Nav =useNavigate()
  const onSearch = (value) => {
    Nav(`/search/${value}`)
  };
  return (
    <div className='Search-Bar'>
       <Search 
            placeholder="Search . . . " 
            onSearch={onSearch} 
            enterButton
            style={{
              width:500
            }}
            />
    </div>
  )
}

export default SearchBar