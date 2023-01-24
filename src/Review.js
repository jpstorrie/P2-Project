
function Review({ review }) {
    return (
        <div className="card">
            <h3>{review.title}</h3>
            <p className="reviewName">{review.name}</p>
            <p className="reviewText">{review.text}</p>
            <p>{review.rating}</p>
        </div>
    )
}

export default Review;