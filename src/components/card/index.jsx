import { CursoEletrotecnica } from "../pages/curso-eletroeletronica"
import { CardStyle } from "./styles"
import { Link } from "react-router-dom"

export const Card = ({title, desc, item1, item2, item3, page, image, alt}) => {
    return (
        <CardStyle>
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
            </div>
            <div className="card-body">
                <p className="card-text">{desc}</p>
                <a href={item1.external} target="_blank" className="card-item">{item1.title}</a>
                <a href={item2.external} target="_blank" className="card-item">{item2.title}</a>
                <a href={item3.external} target="_blank" className="card-item">{item3.title}</a>
            <Link to={page} element={<CursoEletrotecnica />} className="linkto">Acessar</Link>
            </div>
        </div>
        </CardStyle>
    )
}