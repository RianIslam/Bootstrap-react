import React, { useEffect, useState } from "react";
import News from "../News/News";

const TopHeadLine = () => {
    const [articles,setArticles] = useState([])

  useEffect(() => {
    const url =
      "http://newsapi.org/v2/everything?q=tesla&from=2021-02-02&sortBy=publishedAt&apiKey=ed297148d6284d2ebda2180cf2dce808";
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    }, []);
  return (<div>

    <h1>top header :{articles.length}</h1>
    {
        articles.map(article => <News article={article}/>)
    }


  </div>
  );
};

export default TopHeadLine;
