import React, { Component } from 'react'
import Header from './components/header'
import Main from './components/main'
import './App.css';
import axios from 'axios'
class App extends Component {
  constructor(){
    super()
    this.state = {
      articles: [{title: "", author: "", description: "",urlImage:"", publishedAt: "",url: ""}],
      search_phrase: "",
    }
    this.getNews = this.getNews.bind(this);
    this.searchNews = this.searchNews.bind(this);
    this.formsubmit = this.formsubmit.bind(this);
  }
  componentDidMount(){
    this.getNews('fr');
  }
  getNews(country) {
    axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&pageSize=10&apiKey=b48b8a1b85024c5d8d1db1fe09167c36`)
    .then(response => {
        if (!response.data.errmsg) {
          this.setState({articles : response.data.articles})
            console.log('get operation successful')
            // console.log(response.data.articles)
            
        } else {
            console.log('resgister operation failed')
        }
    }).catch(error => {
            console.log('register error: ')
            console.log(error)
    })
  }
  formsubmit= async (event) => {
    event.preventDefault()
    this.setState({search_phrase: event.target.elements[0].value})
    // console.log(event.target.elements[0].value)
    this.searchNews(event.target.elements[0].value)
  }
  searchNews=(params) => {
    axios.get(`https://newsapi.org/v2/everything?q=${params}&pageSize=10&apiKey=b48b8a1b85024c5d8d1db1fe09167c36`)
    .then(response => {
      if (!response.data.errmsg) {
        this.setState({articles : response.data.articles})
          console.log('get operation successful')
          // console.log(response.data.articles)
          
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
        <Header search_phrase={this.state.search_phrase} formsubmit={this.formsubmit} getNews={this.getNews} searchNews={this.searchNews}/>
        <Main articles={this.state.articles}/>
      </div>
    );
  }
}

export default App;
