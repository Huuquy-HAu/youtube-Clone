import { Layout } from 'antd';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import ChannelCard from '../ChannelCard/ChannelCard'
import Video from '../Video/Video'
import './ChannelDetail.css'


function ChannelDetail() {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null)
  const [ListVideo, setListVideo] = useState([])

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => {
      setChannelDetail(data?.data.items[0])
      console.log(data?.data.items[0]);
    })
    

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => {
      setListVideo(data?.data.items)
      console.log(data?.data.items);
    })
  }, [id])
  

  return (
    <div>
      <div className="anhBia">

      </div>
      <div className="anhDaidien">
        <ChannelCard channelDetail={channelDetail}/>
      </div>
      <div className="video">
        <Video ListVideo= {ListVideo}/>
      </div>
    </div>
  )
}

export default ChannelDetail