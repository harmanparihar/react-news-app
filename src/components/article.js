import React from 'react';

class Article extends React.Component {
  render() {   
    return (
        <div>
            <article>
                <img className="" src={this.props.article.urlToImage} alt=""/>
                <div>
                    <h1>{this.props.article.title}</h1>
                    <h2>{this.props.article.publishedAt.substr(0,10)}</h2>
                    <p>
                        {this.props.article.description}
                    </p>
                </div>
            </article>
            <hr/>
        </div>
    );
  }
}

export default Article;