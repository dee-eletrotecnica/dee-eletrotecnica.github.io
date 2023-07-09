import { CardStyle } from "./styles"
import { Link } from "react-router-dom"
import { useEffect } from "react";
import { DynamicPage } from "../../pages/DynamicPage";

export const Card = ({url, title, desc, items}) => {

    useEffect(() => {

    })

    return (
        <CardStyle>
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
            </div>
            <div className="card-body">
                <p className="card-text">{desc}</p>
                <a href={url} target="_blank" rel="noreferrer" className="card-item">{items.item1}</a>
                <a href={url} target="_blank" rel="noreferrer" className="card-item">{items.item2}</a>
                <a href={url} target="_blank" rel="noreferrer" className="card-item">{items.item3}</a>
            <Link to={title} element={<DynamicPage />} className="linkto">Acessar</Link>
            </div>
        </div>
        </CardStyle>
    )
}