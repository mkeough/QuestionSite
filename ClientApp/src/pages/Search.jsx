import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from '../components/Question'
import { Link } from 'react-router-dom'
import QuestionList from '../components/QuestionList'
import EmptyQuestionList from '../components/EmptyQuestionList'
import image from '../images/Searching.jpg'

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
      <section className="search-page">
        <h1 class="searchContent">Search Questions</h1>
        <h2 class="searchContent">Enter Keyword(s)</h2>
        <input
          type="search"
          value={keyWord}
          onChange={e => setKeyWord(e.target.value)}
        />
        <button className="searchButton" onClick={searchForQuestions}>
          Search
        </button>
        {/* </section>
      <section> */}
        {results.length > 0 ? (
          <QuestionList results={results} />
        ) : (
          <EmptyQuestionList />
        )}
        <img class="search-image" src={image} alt="magnifyingglass with book" />
        <h6>
          {' '}
          Photo by 
          <a href=" https://unsplash.com/@olloweb?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Agence Olloweb{' '}
          </a>{' '}
           on 
          <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
          .{' '}
        </h6>{' '}
      </section>
    </>
  )
}

export default Search
