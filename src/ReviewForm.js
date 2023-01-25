import { useState } from "react"
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
        setFormData({ ...formData, [name]: value })
    }

    function postReview(obj) {
        fetch("http://localhost:3000/reviews", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        })
            .then(r => r.json())
            .then(setFormData(initVals))
    }


    return (
        <form className=" text-center form-control pt-10 pb-16 pr-10 pl-10 align-middle bg-neutral" onSubmit={onSubmit}>

            <div className="form-control bg-inherit pt-4">
                <label className="input-group input-group-vertical">
                    <span>Title</span>
                    <input required onChange={handleChange} type="text" name="title" placeholder="Review Title Here" className="input input-bordered" />
                </label>
            </div>

            <div className="form-control bg-inherit pt-4">
                <label className="input-group input-group-vertical">
                    <span>Name</span>
                    <input required onChange={handleChange} type="text" name="name" placeholder="Your Name Here" className="input input-bordered" />
                </label>
            </div>

            <div className="form-control bg-inherit pt-4">
                <label className="input-group input-group-vertical">
                    <span>Rating</span>
                    <input required onChange={handleChange} type="number" min={1} max={10} name="rating" placeholder="Rating from 1-10" className="input input-bordered" />
                </label>
            </div>

            <div className="form-control pt-4 pb-4 bg-inherit">
                <label className="input-group input-group-vertical">
                    <span>Your Review Here</span>
                    <textarea required onChange={handleChange} minLength={10} type="text" name="text" placeholder="Leave your review here" className="textarea textarea-lg textarea-bordered" />
                </label>
            </div>



            <button className="btn btn-outline btn-success w-24 " type="submit">Submit</button>
        </form>
    )
}
export default ReviewForm;