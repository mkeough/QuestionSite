import React, { useState } from 'react'
import { Router, Link, Route, Switch } from 'react-router-dom'
import axios from 'axios'
const Question = props => {
  const { question } = props
  // const { answer } = props
  const [newAnswerText, setNewAnswerText] = useState('')
  const sendAnswerToApi = async () => {
    const resp = await axios.post(`/api/questions/${question.id}/answers`, {
      userAnswer: newAnswerText,
    })
    console.log(resp.data)
  }
  const sendUpVoteToApi = async answer => {
    const resp = await axios.post(
      `/api/questions/${question.id}/answers/${answer.id}/upvote`
    )
    console.log(resp.data)
  }
  const sendDownVoteToApi = async answer => {
    const resp = await axios.post(
      `/api/questions/${question.id}/answers/${answer.id}/downvote`
    )
    console.log(resp.data)
  }
  return (
    <>
      <main>
        <section>
          <h1>
            <Link to={`/question/${question.id}`}>{question.userQuestion}</Link>
          </h1>
          <h2>KeyWord(s) for this question:</h2>
          <p>{question.keyWord}</p>
          <section>
            <h2>Here the current answers</h2>
            <ul>
              {question.answers.map(answer => {
                return (
                  <li>
                    <p>{answer.userAnswer}</p>
                    <p>
                      Upvotes:{answer.upVote}Downvotes:{answer.downVote}
                    </p>

                    <h3>Like this answer?</h3>
                    <button onClick={() => sendUpVoteToApi(answer)}>
                      Upvote
                    </button>
                    <button onClick={() => sendDownVoteToApi(answer)}>
                      Downvote
                    </button>
                  </li>
                )
              })}
            </ul>

            <h2>Add Your Answer</h2>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Answer Here"
              value={newAnswerText}
              onChange={e => setNewAnswerText(e.target.value)}
            ></textarea>
            <button onClick={sendAnswerToApi}>Add</button>
          </section>
        </section>
      </main>
    </>
  )
}

export default Question
