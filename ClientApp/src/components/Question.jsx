import React from 'react'
import { Router, Link, Route, Switch } from 'react-router-dom'

const Question = props => {
  const { question, id } = props
  return (
    <>
      <main>
        <section>
          <h1>
            <Link to={`/question/${question.id}`}>{question.userQuestion}</Link>
          </h1>
        </section>
      </main>
    </>
  )
}

export default Question
