import { useState, useEffect } from 'react'
import Review from "./Review"
import ReviewForm from "./ReviewForm"
import { NavLink } from "react-router-dom"
function ReviewList() {
    const [reviews, setReviews] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:3000/reviews")
            .then(r => r.json())
            .then(data => setReviews(data))
    }, [])


    


    const allReviews = reviews.map(review => { return (<Review key={review.id} review={review} />) })

    return (
        <div>
            <h1>Reviews</h1>
            <h4>Check out our awesome reviews or <NavLink to="/reviews/new">write your own!</NavLink></h4>
            {allReviews}
        </div>
    )
}
export default ReviewList