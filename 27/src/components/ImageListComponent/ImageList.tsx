import { useEffect, useState } from "react"
import { Image, ImageFav } from "./ImageInterface"
import axios from "axios";
import { apiUrl, dataLocalStore, localStorageKey } from "../constants/appconstants";
import { ImageComponent } from "../ImageComponent/ImageComponent";

export const ImageList = () => {
    const [imageList, setImageList] = useState<Image[]>([]);

    useEffect(() => {
        const dataObj = dataLocalStore !== null && JSON.parse(dataLocalStore);

        if (dataLocalStore === null || dataObj.length === 0) {
             axios(apiUrl)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    setImageList(res.data)
                }
                return res;
            })
            .catch(err => console.error(err));
        } 
        else if(dataObj.length > 0) {
            setImageList(dataObj)
        }
    }, [])


    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(imageList));
    }, [imageList])
    
    const handleFav = (imageId: string) => {
        console.log("set to fav image id: " + imageId)
        const imgListCpy = [...imageList];

        imgListCpy.forEach(el => el.id === imageId ? el.isFavorite = !el.isFavorite : null)
        setImageList(imgListCpy)
    }

    const renderAllImages = () => {
        const imgListCpy = [...imageList];
        return imgListCpy.map((el: Image, key: number) =>{
            const favObj: ImageFav = {
                ...el,
                setFavImage: handleFav
            }
            return <ImageComponent {...favObj} key={key} />
        });
    };

    return <div className="Imagelist">
        {renderAllImages()}
    </div>
}