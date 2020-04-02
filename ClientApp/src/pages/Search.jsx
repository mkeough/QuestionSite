import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from '../components/Question'
import { Link } from 'react-router-dom'

const Search = () => {
  const [questions, setQuestions] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const searchQuestions = async () => {
    const resp = await axios.get(
      `api/search/questions?searchTerm=${searchTerm}`
    )
    setQuestions(resp.data)
  }
  // useEffect(() => {
  //   getAllQuestions()
  // }, [])

  // const updateSearchFilter = e => {
  //   setSearchFilter(e.target.value)
  //   console.log(e.target.value)
  // }

  // placeholder for API call

  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/tv/top_rated?api_key=1dec07b813675b0a973263be687652ca&language=en-US&page=1/`
  //   )
  //     .then((response) => response.json())
  //     .then((apiData) => {
  //       const allShows = apiData.results
  //       setQuestions(allQuestions)
  //       console.log(allQuestions)

  //     })
  // }, [])

  return (
    <>
      <section className="search-container">
        <h3>Please enter a search prompt in the box below:</h3>
        <input
          type="search"
          value={searchTerm}
          placeholder="search by keyword"
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button onClick={e => searchQuestions(e.target.value)}>Search</button>
      </section>
      <main>
        {questions.length > 0 ? <Question questions={questions} /> : <h4></h4>}

        <section className="no-results-message">
          Question not found.
          <Link to="/add"> Add a question to Suncoast Overflow?</Link>
        </section>
      </main>
    </>
  )
}

export default Search
