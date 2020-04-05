import axios from 'axios'
import React, { useState, useEffect } from 'react'

const AddAnswer = () => {
  const [newAnswerText, setNewAnswerText] = useState('')
  const sendAnswerToApi = async question => {
    const resp = await axios.post(`/api/questions/${question.id}/answers`, {
      userAnswer: newAnswerText,
    })
    console.log(resp.data)
  }
  return (
    <>
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
    </>
  )
}

export default AddAnswer
