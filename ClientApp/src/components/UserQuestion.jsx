import React from 'react'

const UserQuestion = props => {
  const { question } = props
  return (
    <>
      <main>
        <section>
          <h1>{question.userQuestion}</h1>
        </section>
      </main>
    </>
  )
}

export default UserQuestion
