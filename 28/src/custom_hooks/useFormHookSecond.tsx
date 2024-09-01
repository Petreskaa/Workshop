import { useEffect, useState } from "react"
import { useFormInterface } from "./useFormInterface"
import { LoginForm } from "./LoginInterface"


export const useFormHookSecond = (formProps: LoginForm) => {
    const [value, setValue] = useState<string>(formProps.initValue)
    const [isValid, setIsValid] = useState<boolean>(false)
    const [inputTypeActivated, setInputTypeActivated] = useState<string>("")

    useEffect(() => {
        if (formProps.propName.toLowerCase().trim() === inputTypeActivated) {
            {formProps.minPasswordLength && setIsValid(value.length > formProps?.minPasswordLength)}
        }
    }, [value]);

    const onChange = (event: any) => {
        console.log(event.target.type)
        setInputTypeActivated(event.target.type)
        setValue(event.target.value)
    }
    
    const formObj: useFormInterface = {
        value,
        onChange,
        isValid
    }

    return formObj;
}