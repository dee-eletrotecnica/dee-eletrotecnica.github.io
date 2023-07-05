import { CardStyle } from "./styles"
import { Link } from "react-router-dom"

export const Card = ({title, desc, item1, item2, item3, external, image, alt}) => {
    return (
        <CardStyle>
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
            </div>
            <div className="card-body">
                <p className="card-text">{desc}</p>
                <a href={item1.link} target="_blank" className="card-item">{item1.title}</a>
                <a href={item2.link} target="_blank" className="card-item">{item2.title}</a>
                <a href={item1.link} target="_blank" className="card-item">{item3.title}</a>
            <Link to={external} target="_blank" className="linkto">Conferir</Link>
            </div>
        </div>
        </CardStyle>
    )
}