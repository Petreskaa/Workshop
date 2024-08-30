import { Title } from "./Interfaces/CardIterfaces"

export const Banner = (bannerObj: Title) => {
    return <div>
        <div className="Banner">
            <h1>{bannerObj.title}</h1>
        </div>
    </div>
}