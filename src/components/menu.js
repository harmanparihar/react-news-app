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
                    <button onClick={() =>{props.getNews("ca")}}>Canada</button>
                    <button onClick={() =>{props.getNews("us")}}>USA</button>
                    <button onClick={() =>{props.searchNews(props.search_phrase)}}>Search Results</button>
                    <button onClick={() =>{props.getNews("in")}}>India</button>
                    <button onClick={() =>{props.getNews("ar")}}>Argentina</button>
                </ul>
            </div>
)

    


export default Menu