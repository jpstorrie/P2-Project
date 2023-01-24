import {useState} from "react"
import { useNavigate } from "react-router-dom";

function ReviewForm() {

    const navigate = useNavigate()

    const initVals = {
        title: "",
        name: "",
        text: "",
        rating: 0
    }


    const [formData, setFormData] = useState(initVals)

    function onSubmit(e) {
        e.preventDefault();
        postReview(formData)
        navigate("/reviews")
    }

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({...formData, [name]:value})
    }

    function postReview(obj){
        fetch("http://localhost:3000/reviews",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        })
            .then(r => r.json())
            .then(setFormData(initVals))
    }


    return (
        <form onSubmit={onSubmit}>
            <input onChange={handleChange} name="title" type="text" placeholder="Review Title Here" />
            <br />
            <input onChange={handleChange} name="name" type="text" placeholder="Your Name Here" />
            <br />
            <input onChange={handleChange} name="text" type="text" placeholder="Leave your review here" />
            <br />
            <input onChange={handleChange} name="rating" type="number" placeholder="Rating from 1-10" />
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}
export default ReviewForm;