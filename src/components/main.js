import React from 'react'
import Article from './article'


const Main = (props) => {
    const mapped_articles = props.articles.map((a) =>
        <Article key={a.title} article = {a}/>
    );
    return(
        <div>
            {mapped_articles}
        </div>
    )
}
    


export default Main