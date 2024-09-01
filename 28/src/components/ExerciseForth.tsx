import { useClockHook } from "../custom_hooks/useClockHook";

export const ExerciseForth = () => {


    const timeZone = "Europe/London";
    const timeZoneSecond = "Europe/Skopje";
    const timeZoneThird = "America/New_York";


    const timeFirst = useClockHook(timeZone)
    const timeSecond = useClockHook(timeZoneSecond)
    const timeThird = useClockHook(timeZoneThird)

    return <div>
            {timeFirst.time} <br />
            {timeSecond.time} <br />
            {timeThird.time} <br />
        </div>
}