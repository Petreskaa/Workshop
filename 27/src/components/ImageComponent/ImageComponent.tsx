import { Link } from "react-router-dom"
import { ImageFav } from "../ImageListComponent/ImageInterface"

export const ImageComponent = (imgObj: ImageFav) => {
    const handleFav = (event: any) => {
        event.preventDefault();
        if (imgObj.setFavImage) { 
            console.log("set to fav by id", imgObj.id)
            imgObj.setFavImage(imgObj.id);
        }
    }

    return <Link className="Image" to={`/imageDetails/${imgObj.id}`}>
        <img src={imgObj.url} alt="" />
        {imgObj.setFavImage && <i
           className={imgObj.isFavorite ? "fas fa-heart fa-3x": "far fa-heart fa-3x"}
           aria-hidden="true"
           onClick={handleFav}>
        </i>}    
    </Link>
}