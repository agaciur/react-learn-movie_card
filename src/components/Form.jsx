import { useState } from "react"

export function Form({ onChangeReviews }) {
  const [inputValue, setInputValue] = useState("")
  const [textareaValue, setTextareaValue] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    const author = inputValue
    const text = textareaValue
    onChangeReviews(author, text)
    setInputValue("")
    setTextareaValue("")
  }

  return (
    <>
      <hr />

      <div>
        <h1>Dodaj recenzję</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='author'>Autor</label>
            <div>
              <input
                onChange={event => setInputValue(event.target.value)}
                type='text'
                value={inputValue}
                id='author'
                name='author'
              />
              <div>
                <label htmlFor='text'>Tekst</label>
              </div>

              <textarea
                value={textareaValue}
                id='text'
                onChange={event => setTextareaValue(event.target.value)}></textarea>
            </div>
          </div>
          <button
            disabled={inputValue === "" || textareaValue === ""}
            type='submit'>
            Dodaj
          </button>
        </form>
      </div>
    </>
  )
}
