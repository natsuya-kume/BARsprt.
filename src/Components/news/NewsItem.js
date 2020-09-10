import React from 'react'
import './NewsItem.css'

const NewsItem = ({ newsdata }) => {

    return (
        <>
            <a href={newsdata.url} style={{ color: "initial", textDecoration: "none" }}>
                <div className="news-item">
                    <div className="news-title">{newsdata.title}</div>
                    <img src={newsdata.urlToImage} className="news-img" />
                </div>
            </a>
        </>
    )
}

export default NewsItem