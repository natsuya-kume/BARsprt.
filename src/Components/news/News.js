import React, { useState, useEffect } from 'react'
import ResponsiveDrawer from '../ResponsiveDrawer';
import NewsTitle from './NewsTitle'
import NewsList from './NewsList'
import BottomNav from '../BottomNav';
// import BottomNavTest fro../BottomNavest'
import Notification from '../Notification';
// import newsData from './newsData.json';
import latestdata from './latestdata.json'

const News = () => {
    const [newsDataState, setNewsDataState] = useState([])

    useEffect(() => {
        // setNewsDataState(newsData.articles)
        setNewsDataState(latestdata.articles)
    }, [])

    return (
        <div>
            <Notification />
            <ResponsiveDrawer>
                <NewsTitle />
                <NewsList newsInfo={newsDataState} />
                <BottomNav />
            </ResponsiveDrawer>
        </div>
    )
}

export default News;