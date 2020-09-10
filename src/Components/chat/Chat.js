import React from 'react'
import ResponsiveDrawer from '../ResponsiveDrawer'
import BottomNav from '../BottomNav'
// import BottomNavTest fro../BottomNavest'
import PostButton from './PostButton'
import Timeline from "./Timeline"
import Notification from '../Notification'


const Chat = () => {

    const [posts, setPosts] = React.useState([]);

    const addPost = React.useCallback((post) => setPosts((prev) => [post, ...prev]), [setPosts])


    return (
        <>
            <Notification />
            <ResponsiveDrawer>
                <Timeline />
                <PostButton addPost={addPost} />
                <BottomNav />
            </ResponsiveDrawer>
        </>
    )
}

export default Chat