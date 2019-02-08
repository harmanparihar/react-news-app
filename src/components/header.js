import React from 'react'
import Search from './search'
import Menu from './menu'

const Header = (props) => (
    <div>
        <Search search_phrase={props.search_phrase} formsubmit={props.formsubmit}/>
        <Menu searchNews={props.searchNews} search_phrase={props.search_phrase} getNews={props.getNews}/>
    </div>
)
export default Header