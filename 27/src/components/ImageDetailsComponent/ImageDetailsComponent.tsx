import { useParams } from "react-router-dom"
import { dataLocalStore } from "../constants/appconstants";
import { ImageComponent } from "../ImageComponent/ImageComponent";

export const ImageDetailsComponent = () => {
    const {imgId} = useParams();
    console.log(imgId);

    const renderDetails = () => {
        const dataObj = dataLocalStore !== null 
            && JSON.parse(dataLocalStore).find((el:any) => el.id === imgId);
        return <ImageComponent {...dataObj} />
    }
    return <div>{renderDetails()}</div>
}