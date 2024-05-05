export function FeedbackStars() {
  return (
    <div className="flex items-center gap-1">
      <span>Rate this article: </span>

      {
        [0, 1, 2, 3, 4, 5].map(star => (
          <span key={star} className="mui-icon-filled">star</span>
        ))
      }
    </div>
  )
}
