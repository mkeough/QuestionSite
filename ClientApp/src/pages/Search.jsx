import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from '../components/Question'
import { Link } from 'react-router-dom'

const Search = () => {
  const [questions, setQuestions] = useState([])
  const [searchFilter, setSearchFilter] = useState('')

  // usestate placeholder for questions
  // const [questions, setQuestions] = useState('')
  const getAllQuestions = async () => {
    const resp = await axios.get('api/questions')
    setQuestions(resp.data)
  }
  useEffect(() => {
    getAllQuestions()
  }, [])

  const updateSearchFilter = e => {
    setSearchFilter(e.target.value)
    console.log(e.target.value)
  }

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
          placeholder="search by keyword"
          onChange={updateSearchFilter}
        />
        <button>Search</button>
      </section>
      <main>
        <ul>
          {questions
            .filter(question => {
              // console.log('Will this work?')
              return question.name
                .toLowerCase()
                .includes(searchFilter.toLowerCase())
            })
            .map(question => {
              return <Question question={question} />
            })}
          <li>Result 1</li>
          <li>Result 2</li>
          <li>Result 3</li>
          <li>Result 4</li>
        </ul>
        <section className="no-results-message">
          Question not found.
          <Link to="/add"> Add a question to Suncoast Overflow?</Link>
        </section>
      </main>
    </>
  )
}

export default Search
