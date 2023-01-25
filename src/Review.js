
function Review({ review }) {
    return (
        
        <div className="card bordered w-96 bg-slate-700 text-primary-content shadow-xl p-3">
            <div className="card-body">
                <h2 className="card-title">{review.title}</h2>
                <h5>{review.name}</h5>
                <p>{review.text}</p>
                <div className="card-actions justify-end">
                    <p >Score: {review.rating}/10</p>
                </div>
            </div>
        </div>
    )
}

export default Review;