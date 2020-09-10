import React from 'react';
import NewsItem from './NewsItem'


const NewsInfo = ({ newsInfo }) => {

    const renderList = newsInfo.map((newsdata) => {
        return <NewsItem
            key={newsdata.url}
            newsdata={newsdata}
        />
    })

    return (
        <div>{renderList}</div>
    )
}

export default NewsInfo