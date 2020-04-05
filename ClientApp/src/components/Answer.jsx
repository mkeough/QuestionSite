import axios from 'axios'
import React from 'react'

const Answer = props => {
  const { answer } = props

  const sendUpVoteToApi = async question => {
    const resp = await axios.post(
      `/api/questions/${question.id}/answers/${answer.id}/upvote`
    )
    console.log(resp.data)
  }
  const sendDownVoteToApi = async question => {
    const resp = await axios.post(
      `/api/questions/${question.id}/answers/${answer.id}/downvote`
    )
    console.log(resp.data)
  }
  return (
    <>
      <li>
        <p>{answer.userAnswer}</p>
        <p>
          UpVotes:{answer.upVote}DownVotes:{answer.downVote}
        </p>

        <h3>Like this answer?</h3>
        <button onClick={() => sendUpVoteToApi(answer)}>UpVote</button>
        <button onClick={() => sendDownVoteToApi(answer)}>DownVote</button>
      </li>
    </>
  )
}

export default Answer
