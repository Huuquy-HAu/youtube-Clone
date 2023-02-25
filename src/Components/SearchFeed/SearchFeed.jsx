import React, { useEffect, useState } from 'react'
import { Layout } from 'antd';
import Video from '../Video/Video';
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';
import './SearchFeed.css'
const { Content } = Layout;

const contentStyle = {
  color: '#000',
  backgroundColor: '#fff',
};

function SearchFeed() {
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