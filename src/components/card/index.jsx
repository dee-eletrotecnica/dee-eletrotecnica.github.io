import { CardStyle } from "./styles"


export const Card = ({title, text, link}) => {
    return (
        <CardStyle>
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">{title}</h5>
            </div>
            <div className="card-body">
                <p className="card-text">{text}</p>
            </div>
        </div>
        </CardStyle>
    )
}