import { Form } from "./components/Form.jsx"
import { Plot } from "./components/Plot.jsx"
import { Likes } from "./components/Likes.jsx"
import { Reviews } from "./components/Reviews.jsx"
import { useState } from "react"

const initialState = [
  { author: "Anna", text: "Film jest super", id: 1 },
  { author: "Jan", text: "Polecam", id: 2 },
]
function App() {
  const [reviews, setReviews] = useState(initialState)
  const [isShownCounterButton, setIsShownCounterButton] = useState(true)
  const [numberOfLikes, setNumberOfLikes] = useState(50)

  function HandleLikeClick() {
    setNumberOfLikes(previousNumberOfLikes => previousNumberOfLikes + 1)
  }

  function HandleLoveClick() {
    setNumberOfLikes(previousNumberOfLikes => previousNumberOfLikes + 3)
  }

  return (
    <>
      <h1>Film</h1>
      <h2>Rok produkcji: 2022</h2>
      <button
        onClick={() => {
          setIsShownCounterButton(prevCounterShown => !prevCounterShown)
        }}>
        {isShownCounterButton ? "Schowaj counter" : "Pokaż counter"}
      </button>

      {isShownCounterButton && (
        <Likes
          numberOfLikes={numberOfLikes}
          onLikeButtonClick={HandleLikeClick}
          onLoveButtonClick={HandleLoveClick}
        />
      )}
      <Plot />
      <Reviews reviews={reviews} />
      <Form
        onChangeReviews={(author, text) => {
          setReviews(previousReviews => {
            return [{ author, text, id: previousReviews.length + 1 }, ...previousReviews]
          })
        }}
      />
    </>
  )
}

export default App
