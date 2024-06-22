import { useEffect, useState } from 'react'
import "../App.css"
import NewsApi from '../api/NewsApi';
import NewsCard from './NewsCard';

function Home({data,ark}) {
  const [news,setNews] = useState([]);
  console.log(ark)
  
  useEffect(()=>{
    NewsApi().then((item)=>setNews(item.articles)).catch(err=>console.log(err));
  },[]);

  
  return (
    <>
     
     {
      news?<div className='main-container'>
        {   
          news.filter((item)=>(data.toLowerCase()===""?item:item.title.toLowerCase().includes(data))).map(
            (item,index)=>(<NewsCard key={index} source={item.source.name} author={item.author} title={item.title} description={item.description} urlToImage={item.urlToImage} publishedAt={item.publishedAt} url={item.url} />)
          )
        }
      </div>:
      <h4>Something went wrong</h4>
     }
    </>
  )
}

export default Home
