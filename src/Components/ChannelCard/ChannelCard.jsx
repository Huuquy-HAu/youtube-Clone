import React from 'react'
import { Link } from 'react-router-dom'
import './ChannelCard.css'

function ChannelCard({channelDetail}) {
  return (
    <Link  to={`/channel/${channelDetail?.id?.channelId}`}>
      <div className='ChannelCard'>
          <div className="ChannelCard-img">
            <img src={channelDetail?.snippet?.thumbnails?.high?.url || ""} alt="" />
          </div>
          <div className="Channel-title">
            {channelDetail?.snippet?.title}
          </div>
      </div>
      
    </Link>
  )
}

export default ChannelCard
