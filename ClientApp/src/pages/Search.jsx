import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from '../components/Question'
import { Link } from 'react-router-dom'
import QuestionList from '../components/QuestionList'
import EmptyQuestionList from '../components/EmptyQuestionList'

const Search = () => {
  const [keyWord, setKeyWord] = useState('')
  const [results, setResults] = useState([])
  const searchForQuestions = async () => {
    const resp = await axios.get(`api/search/questions?keyWord=${keyWord}`)
    console.log(resp.data)
    setResults(resp.data)
  }
  return (
    <>
      <section>
        <h1>Search Questions</h1>
        <h2>Enter Keyword(s)</h2>
        <input
          type="search"
          value={keyWord}
          onChange={e => setKeyWord(e.target.value)}
        />
        <button onClick={searchForQuestions}>Search</button>
      </section>
      <section>
        {results.length > 0 ? (
          <QuestionList results={results} />
        ) : (
          <EmptyQuestionList />
        )}
      </section>
    </>
  )
}

export default Search
