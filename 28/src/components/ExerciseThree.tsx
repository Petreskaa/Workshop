import { useEffect, useState } from "react"

export const ExerciseThree = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        console.log("time interval id: ", interval)
        return () => clearInterval(interval)
    }, [time])

    return <div>{time}</div>
}