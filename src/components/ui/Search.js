import React from 'react'

const Search = ({ getQuery }) => {

    const onChange = (q) => {
        getQuery(q);
    }

    return (
        <section className='search'>
            <form>
                <input 
                type="text" 
                className='form-control' 
                placeholder='Search Character' 
                autoFocus 
                onChange={(e) => onChange(e.target.value)}
                />
            </form>
        </section>
    )
}

export default Search
