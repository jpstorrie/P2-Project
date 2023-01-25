import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"
import Alert from "./Alert"
import { render } from "@testing-library/react";


function Contact() {

    const navigate = useNavigate()


    const initVals = {
        name: "",
        email: "",
        phone_number: "",
        interested_in: ""
    }

    const [contacts, setContacts] = useState([])
    const [formData, setFormData] = useState(initVals)
    const [isAlertVis, setAlertVis] = useState(false)


    function onSubmit(e) {
        setAlertVis(true)
        e.preventDefault();
        postContact(formData)
        setTimeout(() => {
            setAlertVis(false)
            console.log("fired")
            navigate("/")
        }, 3000)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function postContact(obj) {
        setContacts(...contacts, obj)
        fetch("http://localhost:3000/contacts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        })
            .then(r => r.json())
    }


    return (
        <div className="bg-sky-900 pb-16">
            {isAlertVis ? <Alert message={"Thank you, we will contact you soon!"} /> : null}
            <h1 className="font-serif text-center text-4xl p-4">Contact Us</h1>
            <form className="form-control pr-10 pl-10 align-middle bg-inherit" onSubmit={onSubmit}>
                
                <div className="form-control pt-4">
                    <label className="input-group input-group-vertical">
                        <span>Name</span>
                        <input required onChange={handleChange} type="text" name="name" placeholder="Your Name Here" className="input input-bordered" />
                    </label>
                </div>

                <div className="form-control pt-4">
                    <label className="input-group input-group-vertical">
                        <span>Email</span>
                        <input required onChange={handleChange} type="email" name="email" placeholder="Your.Email@Website.com" className="input input-bordered" />
                    </label>
                </div>

                <div className="form-control pt-4 bg-inherit">
                    <label className="input-group input-group-vertical">
                        <span>Phone Number</span>
                        <input required onChange={handleChange} type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone_number" placeholder="123-456-7890" className="input input-bordered" />
                    </label>
                </div>

                <div className="form-control pt-4 pb-4 bg-inherit">
                    <label className="input-group input-group-vertical">
                        <span>Interested in?</span>
                        <textarea required onChange={handleChange} type="text" minLength={10} name="interested_in" placeholder="What services would you like to know more information about?" 
                        className="textarea textarea-lg textarea-bordered" />
                    </label>
                </div>

                <button className="btn"type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Contact