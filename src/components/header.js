import React from 'react'
import Search from './search'
import Menu from './menu'

const Header = (props) => (
    <div>
        <div className="title">
        <h1>React News App</h1>
        <p>Search for latest news updates from all across the world.</p>
        </div>
        <Search search_phrase={props.search_phrase} formsubmit={props.formsubmit}/>
        <Menu searchNews={props.searchNews} search_phrase={props.search_phrase} getNews={props.getNews}/>
    </div>
)
export default Header