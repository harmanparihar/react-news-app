import React from 'react'

const Search = (props) => (
    <div>
        <form onSubmit={props.formsubmit}> 
            <input name="search-field" value={props.search_prase} type="text" placeholder="Keyword or Search Phrase" /> 
            <button className="search">Search</button>
        </form>
    </div>
)
export default Search