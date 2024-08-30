import { Link } from "react-router-dom"
import { CardItem } from "./Interfaces/CardIterfaces"
import { renderImage, renderStars } from "./services/cardServices"

export const Card = (cardObj: CardItem) => {


    return  <div className="Card col-4">
                <Link to={`/details/${cardObj.id}`}>
                    {cardObj.title}
                    {renderImage(cardObj.id, "jpg")}
                    <h2>{cardObj.title}</h2>
                    {renderStars(cardObj.stars)} 
                </Link>
        </div>
   
    
}