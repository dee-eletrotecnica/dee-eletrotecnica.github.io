import { CardStyle } from "./styles"
import { Link } from "react-router-dom"

export const Card = ({title, text, link, image, alt}) => {
    return (
        <CardStyle>
        <div className="card">
            <div className="card-header">
                <img src={image} alt="" />
                <h5 className="card-title">{title}</h5>
            </div>
            <div className="card-body">
                <p className="card-text">{text}</p>
            </div>
            <Link className="linkto">Acessar</Link>
        </div>
        </CardStyle>
    )
}