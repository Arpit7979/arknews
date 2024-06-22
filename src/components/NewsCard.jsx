import React from 'react'
import "../components/Card.css"

const NewsCard = ({author,source,title,description,publishedAt,urlToImage,url}) => {
    
  return (
    <div className="card">
        <h3 className='source' >{source}</h3>
        <h4 className='author'>By {author}</h4>
        <h2>{title}</h2>
        <a href={urlToImage} target='_blank' >
        <img src={urlToImage} alt="" />
        </a>
        <p>{description}</p>
        <a href={url} target='_blank'>
        <button >Read More...</button>
        </a>
    </div>
  )
}

export default NewsCard