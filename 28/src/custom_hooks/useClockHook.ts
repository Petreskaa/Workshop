import moment from "moment-timezone"
import { useEffect, useState } from "react";
import { ClockInterface } from "./ClockInterface";

export const useClockHook = (timeZone: string) => {


    const momentTime = moment().tz(timeZone).format("hh:mm:ss");

    const [time, setTime] = useState<string>(momentTime)

    useEffect(() => {
        const int = setInterval(() => setTime(momentTime), 1000);
        return () => clearInterval(int);
        
    }, [time, timeZone]); 

    const clockObj: ClockInterface = {
        time
    }

    return clockObj;

}