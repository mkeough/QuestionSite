import React, { useState, useEffect } from 'react'
import Question from '../components/Question'
import axios from 'axios'
import { Router, Link, Route, Switch } from 'react-router-dom'
import QuestionDetails from './QuestionDetails'

const View = () => {
  const [questions, setQuestions] = useState([])

  const getAllQuestions = async () => {
    const resp = await axios.get('api/questions')
    setQuestions(resp.data)
  }
  useEffect(() => {
    getAllQuestions()
  }, [])
  return (
    <div>
      <h1>
        {questions.map(question => {
          return <Question question={question} />
        })}
      </h1>
    </div>
  )
}

export default View
