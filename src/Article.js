import React from 'react'; 

const Article = ({title, description, source, link, img}) =>{
    let colors = ["#4285F4", "#DB4437", "#F4B400", "#0F9D58"]; 

    return(
        <a className = "link" href = {link}>
            <div className = "article" style = {{borderLeft: "5px solid" + colors[Math.floor(Math.random()*colors.length)]}}>
                <h3>{title}</h3>
                <h4>{source}</h4>
                <div className = "articleDesc">
                    <img src = {img}/>
                    <p style = {{fontSize: "0.9em"}}>{description}</p>
                </div>
            </div>
        </a>
    ); 
}

export default Article; 