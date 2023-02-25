import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import './SearchBar.css'
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);


function SearchBar() {
  const Nav =useNavigate()
  const [searchTerm,setsearchTerm] = useState('');
  const onSearch = (value) => {
    setsearchTerm(value)
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