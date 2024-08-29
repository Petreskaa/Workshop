import { useState } from "react";
import { FormData } from "./FormInterface";
import { Contact } from "../ContactsComponent/ContactsInterface";

export const FormComponent = ({setFormData}: Contact) => {
    const [nameInput, setNameInput] = useState<string>("")
    const [emailInput, setEmailInput] = useState<string>("")
    const [phoneInput, setPhoneInput] = useState<string>("")
   

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log("form submited");
        const formObj: FormData = {
            id: Math.floor((Math.random() * (1000 - 10) + 10) * 1000),
            name: nameInput,
            email: emailInput,
            phone: phoneInput
        }
        console.log(JSON.stringify(formObj));
        setFormData(formObj)
        setNameInput("");
        setPhoneInput("");
        setEmailInput("");
    }

    const handleFormInput = (event: any) => {
        setNameInput(event.target.value)
    }

    const handleFormEmail = (event: any) => {
        setEmailInput(event.target.value)
    }

    const handleFormPhone = (event: any) => {
        setPhoneInput(event.target.value)
    }

    const formValidator = () =>
        nameInput.length > 0 &&
        emailInput.length > 0 &&
        phoneInput.length > 0

    return <div className="AddContact">
        <h2>Add Contact</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <br />
            <input type="text"
                placeholder="Enter name"
                value={nameInput} // ?? 
                onChange={handleFormInput} />
                
            <label htmlFor="email">Email</label>
            <br />
            <input type="email"
                placeholder="Enter email"
                value={emailInput} // ?? 
                onChange={handleFormEmail} />
            <br />

            {/* 070123321 */}
            {/* +38907012321312 */}
            <label htmlFor="phone">Phone Number</label>
            <input type="text"
                placeholder="Enter phone"
                value={phoneInput} // ?? 
                onChange={handleFormPhone} /> 
            <br />      
            <button disabled={!formValidator()} type="submit">Add</button>
        </form>
    </div>
}