import React from 'react'
import ChannelCard from '../ChannelCard/ChannelCard';
import VideoCard from '../VideoCard/VideoCard';
import './Video.css'

function Video({ ListVideo }) {
    return (
        <div className='Video-container'>
            {
                ListVideo.map((value, index) => {
                    return (
                        <div key={index}>
                            {(value.id.videoId || value.id.playlistId)  && <VideoCard videoo={value} />}
                            {value.id.channelId && <ChannelCard channelDetail={value} />}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Video