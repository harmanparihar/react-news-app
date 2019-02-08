import React from 'react'
import Search from './search'
import Menu from './menu'

const Header = (props) => (
    <div>
        <Search />
        <Menu getNews={props.getNews}/>
    </div>
)
export default Header