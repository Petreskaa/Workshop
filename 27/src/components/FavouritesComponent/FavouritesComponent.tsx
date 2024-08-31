import { ImageComponent } from "../ImageComponent/ImageComponent"
import { Image } from "../ImageListComponent/ImageInterface"
import { dataLocalStore, localStorageKey } from "../constants/appconstants"

export const FavouritesComponent = () => {
    const renderFavs = () => dataLocalStore !== null && JSON.parse(dataLocalStore)
                                .map((el: Image) => el.isFavorite && <ImageComponent {...el}/>)

    return <div>{renderFavs()}</div>
}