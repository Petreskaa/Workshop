import { Link } from "react-router-dom"

export const HeaderComponent = () => {
    return (
        <div className="header">
            <Link to="/">
                <h2>All Images</h2>
            </Link>
            <Link to="/favourites">
                <i className="fa fa-heart fa-4x"></i>
            </Link>
        </div>
    )
}