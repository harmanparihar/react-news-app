import React from 'react';

const Article = (props) => (
        <div>
            <article>
                <img className="" src={props.article.urlToImage} alt=""/>
                <div>
                    <h1>{props.article.title}</h1>
                    <h2>{props.article.publishedAt.substr(0,10)}</h2>
                    <p>
                        {props.article.description}
                    </p>
                </div>
            </article>
            <hr/>
        </div>
)

export default Article;