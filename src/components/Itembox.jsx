import React, { useEffect, useState } from "react";
import Datat from '../img/default.jpeg';

function ItemBox({ category }) {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error("Error fetching articles:", error));
  }, [category]);

  if (articles.length === 0) {

    return <div style={{textAlign: 'center'}}>Loading...</div>; // Handle loading state
  }

  return (
    <>
    
       <h2 className="text-center">
    Latest <span className="badge bg-danger">News</span>
  </h2>
  <div style={{
      display:"flex",
      flexWrap:'wrap',
      justifyContent:'space-evenly',
      gap:'10px',
      overflow:'auto'
    
    }}>
      {articles.map((news,index) => (
        <div 
        style={
          {
            height:"380px",width:"360px",
            // display:'flex',
            // flexDirection:"column",
            // flexWrap:'wrap',
            // justifyContent:"center",
            // alignItems:'center'
          }
        } 
       className="card bg-dark text-light" key={index} >
          <img style={
          {
            height:"200px",width:"360px",
            objectFit:'cover'
          }
        }  src={news.urlToImage?news.urlToImage:Datat} 
        className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{news.title.slice(0,30)}</h5>
            <p className="card-text">{news.description?news.description.slice(0,60):''}</p>
            <a href={news.url} className="btn btn-primary">
              Read full Article
            </a>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default ItemBox;
