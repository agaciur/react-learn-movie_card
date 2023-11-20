import { Review } from "./Review"

export function Reviews({ reviews }) {
  return (
    <ul>
      {reviews.map(review => (
        <Review
          key={review.id}
          author={review.author}
          text={review.text}
        />
      ))}
    </ul>
  )
}
