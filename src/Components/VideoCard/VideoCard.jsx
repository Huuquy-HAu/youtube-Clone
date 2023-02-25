import React from 'react'
import './VideoCard.css'
import { Link } from 'react-router-dom'


function VideoCard({ videoo: { id: { videoId }, snippet } }) {
    return (
        <div className='VideoCard'>
            <div className="img-title">
                <Link to={videoId ? `/video/${videoId}` : `/video/SeGLV0SkKPo`}>
                    <div className="img">
                        <img src={snippet?.thumbnails?.high?.url} alt="" />
                    </div>
                </Link>
                <div className="body">
                    <Link to={videoId ? `/video/${videoId}` : `/video/SeGLV0SkKPo`}>
                        <div className='title'>
                            <span>{snippet?.title}</span>
                        </div>
                    </Link>
                    <div className="channel">
                        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : "/channel/UCMfiIOjAzHZ9vyoqNdcPvNA"} >
                            {snippet?.channelTitle || "Nodemy"}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard