import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Header from './components/header'
import Main from './components/main'
import './App.css';
import axios from 'axios'
class App extends Component {
  state = {
    articles: [{title: "", author: "", description: "",urlImage:"", publishedAt: "",content: ""}],
  }
  componentDidMount(){
    this.getNews('us');
  }
  getNews(country) {
            axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=b48b8a1b85024c5d8d1db1fe09167c36`)
            .then(response => {
                if (!response.data.errmsg) {
                    console.log('get operation successful')
                    console.log(response.data.articles)
                    this.setState({articles : response.data.articles})
                } else {
                    console.log('resgister operation failed')
                }
            }).catch(error => {
                    console.log('register error: ')
                    console.log(error)
            })
    }
  render() {
   
    return (
      <div className="wrapper">
        <Header/>
        <Route
            exact
            path="/"
            
        render={() => { return(<Main articles =  {this.state.articles}/>)}}
        />
        <Route
            exact
            path="/us"
            render={() => <Main articles = {this.state.articles}/>}
        />
        <Route
            exact
            path="/us"
            render={() => <Main articles = {this.state.articles}/>}
        />
        
      </div>
    );
  }
}

export default App;
