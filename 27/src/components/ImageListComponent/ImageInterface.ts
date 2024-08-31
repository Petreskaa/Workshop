export interface Image {
    id: string;
    url: string;
    isFavorite: boolean;

}

export interface ImageFav extends Image {
    setFavImage?: (id: string) => void
}