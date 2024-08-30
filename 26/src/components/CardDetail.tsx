import { useParams } from "react-router"
import { CardItem } from "./Interfaces/CardIterfaces";
import products from "../library";
import { useEffect, useState } from "react";
import { renderImage, renderStars } from "./services/cardServices";
import { Banner } from "./Banner";

export const CardDetail = () => {
    const [currentCard, setCurrentCard] = useState<CardItem | undefined>(undefined)
    const {id} = useParams();
    console.log(id)

    useEffect(() => {
        if(id) { 
        const findCard = products.find(el => el.id === +id)
        if (findCard) {
            setCurrentCard(findCard);
        }
    }}, [])

    return <>
    {currentCard &&  <Banner {...currentCard} />}
     <div className="CardDetails container">
        <div className="row">
            <div className="col-6 text-center">
                {/* {currentCard && <img src={`/img/${currentCard.id}.jpg`} alt=""/>} */}
                {currentCard && renderImage(currentCard.id, "jpg")}
            </div>
            <div className="col-6 info-cont">
                <p className="price">{currentCard?.price}</p>
                <h2 className="title">{currentCard?.title}</h2>
                {/* count stars */}
                {currentCard && renderStars(currentCard?.stars)}
            </div>
        </div>
        Card Details
    </div>
    </>
}