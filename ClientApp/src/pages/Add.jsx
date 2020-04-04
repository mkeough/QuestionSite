import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const Add = () => {
  const [question, setQuestion] = useState({})
  const [successfullyAdded, setSuccessfullyAdded] = useState({
    shouldRedirect: false,
    newQuestionInfo: {},
  })
  const updateQuestionData = e => {
    const key = e.target.name
    const value = e.target.value
    setQuestion(prevQuestion => {
      prevQuestion[key] = value
      return prevQuestion
    })
  }
  const addQuestionToApi = async () => {
    console.log('adding', question)
    const resp = await axios.post('/api/questions', question)
    if (resp.status === 201) {
      setSuccessfullyAdded({ shouldRedirect: true, newQuestionInfo: resp.data })
    } else {
      return console.log('error', question)
    }
  }

  if (successfullyAdded.shouldRedirect) {
    return (
      <Redirect
        to={{
          pathName: `/question/${successfullyAdded.newQuestionInfo.id}`,
          state: { question: successfullyAdded.newQuestionInfo },
        }}
      />
    )
  } else {
    return (
      <>
        <main>
          <section className="question-entry">
            <h1>Add a question</h1>
            <p>Add Your Question</p>
            <input
              type="text"
              name="userQuestion"
              onChange={updateQuestionData}
            />
            <p>Enter Keyword(s) for your Question</p>
            <input type="text" name="keyWord" onChange={updateQuestionData} />
            <p>Submit</p>
            <button onClick={addQuestionToApi}>Add</button>
          </section>
        </main>
      </>
    )
  }
}

export default Add
