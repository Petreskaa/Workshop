import { useState } from "react"
import { FormData } from "../FormComponent/FormInterface"

export const ContactListComponent = (cardObj: FormData) => {

    const [showItems, setShowItems] = useState<boolean>(true)

    const handleDelete = () => {
        console.log("delete item id: " + cardObj.id)
        cardObj.deleteItem(cardObj.id)
    }

    const toggleList = () => {
        setShowItems(prevState => !prevState)
    }

    return <div className="Contact">
        <h4>{cardObj.name}
            <i className={`fas fa-sort-${showItems ? "down" : "up"}`} onClick={toggleList}></i>

            <i className="fas fa-times" style={{float: "right", color: "red"}}
                onClick={handleDelete}>
            </i>

            {showItems && <ul>
                <li>Email: {cardObj.email}</li>
                <li>Phone: {cardObj.phone}</li>
            </ul>}
        </h4>
    </div>
}