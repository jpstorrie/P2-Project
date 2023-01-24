import { useState, useEffect } from 'react'
import Review from "./Review"
import { NavLink } from "react-router-dom"
function ReviewList() {
    const [reviews, setReviews] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:3000/reviews")
            .then(r => r.json())
            .then(data => setReviews(data))
    }, [])


    


    const allReviews = reviews.map(review => { return (
    <div className='p-5 float-left'>
    <Review key={review.id} review={review} />
    </div>
    ) })

    return (
        <div >
            <h1 className="font-serif text-center text-4xl p-4">Reviews</h1>
            <h4  className='text-center font-extralight'>Check out our awesome reviews or <NavLink to="/reviews/new" className="font-bold hover:bg-cyan-900">write your own!</NavLink></h4>
            {allReviews}
        </div>
    )
}
export default ReviewList