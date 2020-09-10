import React from 'react'
import ResponsiveDrawer from '../ResponsiveDrawer';
import BottomNav from '../BottomNav';
// import BottomNavTest fro../BottomNavest'
import useVideos from '../../hooks/useVideos'
import VideoList from './VideoList'
import Notification from '../Notification'

const Video = () => {
    const [videos, search] = useVideos('バルセロナ')
    return (
        <>
            <Notification />
            <ResponsiveDrawer>
                <VideoList
                    videos={videos}
                />
                <BottomNav />
            </ResponsiveDrawer>
        </>
    )
}

export default Video