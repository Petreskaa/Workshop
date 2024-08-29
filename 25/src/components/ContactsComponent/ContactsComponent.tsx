import { useEffect, useState } from "react"
import { FormComponent } from "../FormComponent/FormComponent"
import { FormData } from "../FormComponent/FormInterface"

import { ContactListComponent } from "../ContactsLitsComponent/ContactsListComponent"
import axios from "axios"
import { Contact } from "./ContactsInterface"

export const ContactsComponent = () => {

    const [contacts, setContacts] = useState<FormData[]>([])

    useEffect(() => {
        const cachedData: string | null = localStorage.getItem("contacts")
        console.log(cachedData)
        if (!cachedData) {
           getServerData();
        }
        else {
            setContacts(JSON.parse(cachedData))
        }
    }, [])
        
    useEffect(() => {
        if (contacts.length === 0) {
            localStorage.clear();
        }
        else {
            localStorage.setItem("contacts", JSON.stringify(contacts));
        }
    }, [contacts])


    const getServerData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => res.data)
            .then(data => {
                data.splice(0, 3).forEach((el: FormData) => {
                    const formObj: FormData = {
                        id: el.id,
                        name: el.name,
                        email: el.email,
                        phone: el.phone
                    }
                    setContacts((prevState) => [...prevState, formObj])
                })
            })
    }

    const getFormData = (formObj: FormData) => {
        setContacts((prevState) => [...prevState, formObj])
    }

    const contactObj: Contact = {
        setFormData: getFormData
    } 

    const deleteItemData = (id: number) => {
        console.log("delete with id: ", id)
        const contactsCpy = [...contacts];
        setContacts(contactsCpy.filter(el => el.id !== id));
    }

    const renderContacts = () => {
        const contactsCpy = [...contacts];
        return contactsCpy.map((el:FormData, key: number) =>{
            const cardObj: FormData = {
                ...el,
                deleteItem: deleteItemData
            }
            return <ContactListComponent {...cardObj} key={key} />
        } )
    }

    return <div>
        <FormComponent {...contactObj} />
        {renderContacts()}
    </div>
}