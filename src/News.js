import React, {useState, useEffect} from 'react'; 
import Article from './Article'; 


// f3ee3d6f1ff740b8847c85cd93d6cb34

const News = () => {
    const [articles, setArticles] = useState([]); 

    useEffect(() => {
        var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' + 'pageSize=5&' + 
          'apiKey=f3ee3d6f1ff740b8847c85cd93d6cb34';
        var req = new Request(url);
        fetch(req).then(function(response) {
            //setArticles(response.json().articles); 
            response.json().then(function(parsedJson) {
                setArticles(parsedJson.articles); 
                console.log(parsedJson.articles);
              });

        });
    }, articles); 

    return(
        <div>
            <h2>Top Headlines:</h2>
            {articles && (articles.length === 0 ? <h5>Loading</h5> : articles.map((article, index) => {
                    return <Article img = {article.urlToImage} title = {article.title} description = {article.description} source = {article.source.name} link = {article.url}/>
                  }))}
        </div>
    ); 
}

export default News; 