import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import image from '../images/calculator.jpg'

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
          <section>
            <section className="question-entry">
              <h1 class="addContent">Add a question</h1>
              <p class="addContent">Add Your Question</p>
              <input
                type="text"
                name="userQuestion"
                onChange={updateQuestionData}
              />
              <p class="addContent">Enter Keyword(s) for your Question</p>
              <input
                class="addContent"
                type="text"
                name="keyWord"
                onChange={updateQuestionData}
              />
              <p>Submit</p>
              <button class="addContent" onClick={addQuestionToApi}>
                Add
              </button>
              <img class="calc-Image" src={image} alt="add calculator" />
              <h6>
                {' '}
                Photo by 
                <a href=" https://unsplash.com/@anniespratt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Annie Spratt
                </a>{' '}
                 on 
                <a href="https://unsplash.com/s/photos/math-adding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Unsplash
                </a>
                .{' '}
              </h6>
            </section>
          </section>
        </main>
      </>
    )
  }
}

export default Add
