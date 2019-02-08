import React from 'react'

const Search = (props) => (
    <div>
        <form onSubmit={props.formsubmit}> 
            <input name="search-field" type="text" placeholder="Keyword or Search Phrase" /> 
            <button>Search</button>
        </form>
    </div>
)
export default Search