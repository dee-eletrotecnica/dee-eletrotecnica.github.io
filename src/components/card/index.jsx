import { CardStyle } from "./styles"
import { Link } from "react-router-dom"
import { useEffect } from "react";
import { CardPage } from "../../pages/cardPage/CardPage";
export const Card = ({color, url, title, desc, items, imageUrl}) => {
    
    useEffect(() => {
    })

    return (
        <CardStyle color={color}>
        <div className="card">
            <div className="card-header">
            <h3 className="card-title">{title}</h3>
            </div>
            <div className="card-body">
            <div className="card-image">
            <img src={imageUrl} alt="" />
            </div>
            <div className="card-content">
            <p className="card-desc">{desc}</p>
            <div className="card-items">
                <a href={items.item1.url} target="_blank" rel="noreferrer" className="card-item">{items.item1.title}</a>
                <a href={items.item2.url} target="_blank" rel="noreferrer" className="card-item">{items.item2.title}</a>
                <a href={items.item3.url} target="_blank" rel="noreferrer" className="card-item">{items.item3.title}</a>
            </div>
            </div>
            <div className="button">
            <Link to={url} target="_blank" rel="noreferrer" className="linkto">Ler mais</Link>
            </div>
            </div>
        </div>
        </CardStyle>
    )
}