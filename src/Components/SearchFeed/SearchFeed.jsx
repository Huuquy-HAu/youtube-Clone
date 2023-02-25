import React, { useEffect, useState } from 'react'
import { Layout, Space } from 'antd';
import Video from '../Video/Video';
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';
import './SearchFeed.css'
const { Header, Footer, Sider, Content } = Layout;

const contentStyle = {
  color: '#000',
  backgroundColor: '#fff',
};
const siderStyle = {
  color: '#fff',
  backgroundColor: '#000',
  borderRight: '1px solid #ccc'
};

function SearchFeed() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [ListVideo, setListVideo] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&regionCode=VN&q=${searchTerm}`)
      .then((data) => {
        setListVideo(data.data.items)
      })

  }, [searchTerm])

  return (
    <div className="SearchFeed">
      <Layout>
        <Content style={contentStyle}>
          <div className="Name-Search">
            <span>Kết quả tìm kiếm cho</span> {searchTerm}
          </div>
          <Video ListVideo={ListVideo} />
        </Content>
      </Layout>
    </div>
  )
}

export default SearchFeed