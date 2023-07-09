import { CardStyle } from "./styles"
import { Link } from "react-router-dom"
import { useEffect } from "react";
import { CardPage } from "../../pages/cardPage/CardPage";
export const Card = ({color, url, title, desc, items}) => {

    useEffect(() => {
    })

    return (
        <CardStyle color={color}>
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
            </div>
            <div className="card-body">
                <p className="card-text">{desc}</p>
                <a href={items.item1.url} target="_blank" rel="noreferrer" className="card-item">{items.item1.title}</a>
                <a href={items.item2.url} target="_blank" rel="noreferrer" className="card-item">{items.item2.title}</a>
                <a href={items.item3.url} target="_blank" rel="noreferrer" className="card-item">{items.item3.title}</a>
            <Link to={title} element={<CardPage />} className="linkto">Acessar</Link>
            </div>
        </div>
        </CardStyle>
    )
}