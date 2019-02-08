import React from 'react'

const Menu = (props) => (
    // clickHandler(country_code){
    //     console.log(country_code + " clicked")
    //     this.props.getNews(country_code)
    // }
    // render() {
    //    return(
            <div>
                <ul>
                    <a href="#" onClick={() =>{props.getNews("ca")}}>Canada</a>
                    <a href="#" onClick={() =>{props.getNews("us")}}>USA</a>
                    <a href="#" onClick={() =>{props.searchNews(props.search_phrase)}}>Search Results</a>
                    <a href="#" onClick={() =>{props.getNews("in")}}>India</a>
                    <a href="#" onClick={() =>{props.getNews("ar")}}>Argentina</a>
                </ul>
            </div>
)

    


export default Menu