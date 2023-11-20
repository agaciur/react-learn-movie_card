import { useState } from "react"
export function Plot() {
  const [isSpoilerShown, setIsSpoilerShown] = useState(false)
  const [isWarningShown, setIsWarningShown] = useState(true)
  function handleShownSpoilerClick() {
    setIsSpoilerShown(true)
    setIsWarningShown(false)
  }
  function handleCloseWarningClick() {
    setIsWarningShown(false)
  }
  return (
    <>
      <h2>Fabuła</h2>
      {isWarningShown && (
        <p>
          Uwaga opis zawiera spoilery! <button onClick={handleCloseWarningClick}>X</button>
        </p>
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magnam, architecto natus nostrum deserunt at
        voluptatem dolorum quasi in perspiciatis.
      </p>
      {isSpoilerShown ? (
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      ) : (
        <button onClick={handleShownSpoilerClick}>Pokaż spoiler</button>
      )}
    </>
  )
}
