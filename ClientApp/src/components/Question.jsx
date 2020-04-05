import React, { useState, useEffect } from 'react'
import { Router, Link, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Answer from '../components/Answer'
import AddAnswer from '../components/AddAnswer'
const Question = props => {
  const { question } = props

  const upVoteQuestion = async () => {
    const resp = await axios.post(`api/questions/${question.id}/upvote`)
    console.log(resp.data)
  }
  const downVoteQuestion = async () => {
    const resp = await axios.post(`api/questions/${question.id}/downvote`)
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
          <p>
            UpVotes:{question.upVote}DownVotes:{question.downVote}
          </p>
          <h3>Like This Question</h3>
          <button onClick={upVoteQuestion}>UpVote</button>
          <button onClick={downVoteQuestion}>DownVote</button>
          <section>
            <h2>Here the current answers</h2>

            <ul>
              {question.answers.map(answer => {
                return <Answer answer={answer} />
              })}
            </ul>
            <AddAnswer />
          </section>
        </section>
      </main>
    </>
  )
}

export default Question
