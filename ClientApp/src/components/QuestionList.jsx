import React from 'react'
import { Router, Link, Route, Switch } from 'react-router-dom'

const QuestionList = props => {
  let { results } = props
  return (
    <>
      <section>
        {results.map(question => {
          return (
            <ul>
              <li>
                <Link to={`/question/${question.id}`}>
                  {question.userQuestion}
                </Link>
              </li>
              <li>{question.keyWord}</li>
            </ul>
          )
        })}
      </section>
    </>
  )
}

export default QuestionList
