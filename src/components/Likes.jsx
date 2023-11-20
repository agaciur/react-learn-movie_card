export function Likes({ onLikeButtonClick, onLoveButtonClick, numberOfLikes }) {
  return (
    <>
      <h3>Liczba polubień: {numberOfLikes}</h3>
      <button onClick={onLikeButtonClick}>Lubię to</button>
      <button onClick={onLoveButtonClick}>Kocham to</button>
    </>
  )
}
