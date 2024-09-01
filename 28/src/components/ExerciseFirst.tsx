import { useState } from "react"
import { useFormHook } from "../custom_hooks/useFormHook";

export const ExerciseFirst = () => {



    const [userName, setUserName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [isSubmit, setIsSubmit] = useState<boolean>(false);


    const userNameObj = useFormHook("");
    const lastNameObj = useFormHook("");

    const handleSubmit = (event: any) => {
        event.preventDefault();

        userNameObj?.handleValueReset();
        lastNameObj?.handleValueReset();
        setIsSubmit((prevState) => !prevState)
        
    }
   
    const revertChanges = () => {
        userNameObj && userNameObj?.revertChanges();
        lastNameObj && lastNameObj?.revertChanges();
        setIsSubmit((prevState) => !prevState)
    }

    const onNameChange = (event: any) => {
        console.log(event.target.value)
        setUserName(event.target.value)
    }

    const onLastNameChange = (event: any) => {
        console.log(event.target.value)
        setLastName(event.target.value)
    }

    return <div>
       
        <form onSubmit={handleSubmit}>
            <label htmlFor="userName">User Name</label>
            <input
                type="text"
                name="userName"
                {...userNameObj} />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input
                type="text"
                name="lastName" 
                {...lastNameObj} />
                <br />
            <button>Save</button> 
            <button
                disabled={!isSubmit}
                onClick={revertChanges}
            >Revert</button>
        </form>
    </div>
}