import { useState } from "react"
import { useFormInterface } from "./useFormInterface"


export const useFormHook = (initValue: string) => {
    const [value, setValue] = useState<string>(initValue)
    const [valueBuffer, setValueBuffer] = useState<string>(initValue)

    const onChange = (event: any) => {
        console.log(event.target.value)
        setValue(event.target.value)
        setValueBuffer(event.target.value)
    }

    const handleValueReset = () => setValue(initValue)

    const revertChanges = () => setValue(valueBuffer)

    const formObj: useFormInterface = {
        value,
        onChange,
        handleValueReset,
        revertChanges
    }

    return formObj;
}