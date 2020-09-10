import React from 'react'
import './VideoItem.css'
import Loading from '../chat/Loading'


const VideoItem = ({ video, onVideoSelect }) => {

    if (!video) {
        return <div><Loading /></div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`


    // return (
    //     <div className="video-container" onClick={() => onVideoSelect(video)}>
    //         <iframe className="video" title="video player" src={videoSrc} />
    //         <div className="video-name">
    //             <div className="header">{video.snippet.title}</div>
    //         </div>
    //     </div>
    // )
    return (
        <div className="video-container" onClick={() => onVideoSelect(video)}>
            <div className="video-title">
                {video.snippet.title}
            </div>
            {/* <div> */}
            <iframe className="video" title="video player" src={videoSrc} />
            {/* </div> */}
        </div>
    )
}

export default VideoItem