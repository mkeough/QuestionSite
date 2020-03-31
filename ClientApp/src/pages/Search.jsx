import React from 'react'

import { Link } from 'react-router-dom'

const Search = () => {
  return (
    <>
      <section className="search-container">
        <h3>Please enter a search prompt in the box below:</h3>
        <input type="search" />
        <button>Search</button>
      </section>
      <main>
        <ul></ul>
        <section className="no-results-message">
          Question not found. <Link to="/add">Add a new one?</Link>
        </section>
      </main>
    </>
  )
}
export default Search
