import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { fetchFromAPI } from '../../utils/fetchFromAPI'
import Video from '../Video/Video'
import './VideoDetail.css'
import { Row, Col } from 'antd';
import { Link, useParams } from 'react-router-dom';


function VideoDetail() {
  const [videoDetail, setvideoDetail] = useState(null)
  const [Videos, setVideos] = useState([])
  const { id } = useParams()
  useEffect(() => {
    fetchFromAPI(`videos?part=contentDetails,snippet,statistics&id=${id}`)
      .then((data) => {
        setvideoDetail(data.data.items[0])
      })

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => {
        setVideos(data.data.items)
      })
  }, [id])

  if (!videoDetail?.snippet) return 'Loading . . . ';

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail


  return (
    <Row>
      <Col span={18} style={{ padding: '0px 30px'}}>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="VideoDetail-Player" playing={true} controls />
        <p className='channelView-title'>
        {title}
        </p>
        <div className="channelView">
          <div className="Left">
            <Link to={`/channel/${channelId}`} >
              <div className='title'>
                {channelTitle}
              </div>
            </Link>
          </div>
          <div className="right">
            <div className="right-left">
              <div>
                {Number(viewCount).toLocaleString()} Lượt xem
              </div>
            </div>
            <div className="right-r">
              <div>
                {likeCount}Lượt thích
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col span={6}>
        <Video ListVideo={Videos} />
      </Col>
    </Row>
  )
}

export default VideoDetail