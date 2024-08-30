export const renderImage = 
    (imgId: number, imgFormat: string) => <img src={`../img/${imgId}.${imgFormat}`} alt=""/>

export const renderStars = (numStars: number) => 
    Array.from(Array(numStars).keys()).map((key: number) => <i key={key} className="fa fa-star"></i>)