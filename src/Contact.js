import { useNavigate } from "react-router-dom";
import { useState } from "react"


function Contact() {

    const navigate = useNavigate()


    const initVals = {
        name: "",
        email: "",
        phone_number: "",
        interested_in: ""
    }


    const [formData, setFormData] = useState(initVals)

    function onSubmit(e) {
        e.preventDefault();
        postContact(formData)
        navigate("/")
    }

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({...formData, [name]:value})
    }

    function postContact(obj){
        fetch("http://localhost:3000/contact",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        })
            .then(r => r.json())
            .then(setFormData(initVals))
            .then(alert("Thank you, we will contact you soon!"))
    }


    return (
        <div>
            <h1 className="font-serif text-center text-4xl p-4">Contact Us</h1>
            <form onSubmit={onSubmit}>
            <input onChange={handleChange} name="name" type="text" placeholder="Name"></input>
            <input onChange={handleChange} name="email" type="email" placeholder="Email"></input>
            <input onChange={handleChange} name="phone_number" type="number" placeholder="Phone Number"></input>
            <input onChange={handleChange} name="interested_in" type="text" placeholder="Interested in?"></input>
            <button  type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Contact