import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from '../components/Question'
// import React from 'react'

const QuestionDetails = props => {
  console.log(props)
  const questionId = props.match.params.questionId
  const [question, setQuestion] = useState()

  const getQuestionData = async () => {
    const resp = await axios.get('/api/questions/' + questionId)
    console.log(resp.data)
    setQuestion(resp.data)
  }

  useEffect(() => {
    getQuestionData()
  }, [])
  if (question) {
    return (
      <>
        <Question question={question} />
      </>
    )
  } else {
    return <p>loading...</p>
  }
}

export default QuestionDetails
