import React, { useEffect, useState } from 'react'
import { Layout} from 'antd';
import SliderBar from '../SliderBar/SliderBar';
import Video from '../Video/Video';
import './Feed.css'
import { fetchFromAPI } from '../../utils/fetchFromAPI';
const { Sider, Content } = Layout;

const contentStyle = {
  color: '#000',
  backgroundColor: '#fff',

};
const siderStyle = {
  color: '#000',
  backgroundColor: '#fff',
  borderRight: '1px solid #ccc'
};

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState('Mới')
  const [ListVideo, setListVideo] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setListVideo(data.data.items)
        console.log(data.data.items);
      })

  }, [selectedCategory])

  return (
    <Layout>
      <div className="Feed-slide">
        <Sider style={siderStyle}>
          <SliderBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div className='Copyright'>
            Copyright 2023 Dương Hữu Quý
          </div>
        </Sider>
      </div>
      <div className="Feed-content">
        <Content style={contentStyle}>
          <div className="Feed-title">
            {selectedCategory === 'Mới' ? 'Trang Chủ' : selectedCategory}
          </div>
          <Video ListVideo={ListVideo} />
        </Content>
      </div>
    </Layout>
  )
}

export default Feed