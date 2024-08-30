import products from "../library"
import { Card } from "./Card"
import { CardDetail } from "./CardDetail"
import { CardItem } from "./Interfaces/CardIterfaces"

export const CardCount = () => {
 

    const renderCards = () =>  
        products.map((el: CardItem, key: number) => <Card key={key} {...el} />)
    

   return <div className="CardCount container">
        <div className="row">
            <div className="col-12">
                <h1 className="title">
                    Products 
                </h1>
            </div>
            <div className="row">
                {renderCards()}
            </div>
        </div>
    </div>
}