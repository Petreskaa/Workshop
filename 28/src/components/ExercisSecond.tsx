import { LoginForm } from "../custom_hooks/LoginInterface";
import { useFormHookSecond } from "../custom_hooks/useFormHookSecond";

export const ExerciseSecond = () => {

    
    const userNameProp: LoginForm = {
        initValue: "",
        propName: "text",
        minPasswordLength: 6
    }

    const passProp: LoginForm = {
        initValue: "",
        propName: "password",
        minPasswordLength: 3
    }

    const userNameObj = useFormHookSecond({...userNameProp})
    const passObj = useFormHookSecond({...passProp})

    const handleSubmit = (event: any) => {
        event.preventDefault();
    }

    return <form onSubmit={handleSubmit}>
    <label htmlFor="userName">User Name</label>
    <input
        type="text"
        name="userName"
        {...userNameObj}
         />
    <br />
    <label htmlFor="lastName">Password</label>
    <input
        type="password"
        name="password" 
        {...passObj}
         />
        <br />
    <button disabled={!passObj.isValid}>Save</button>
</form>
}