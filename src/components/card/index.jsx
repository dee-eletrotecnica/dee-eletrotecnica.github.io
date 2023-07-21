import { CardStyle } from "./styles"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { CardPage } from "../../pages/cardPage/CardPage";
import pages from "../../../paginas.yaml";

export const Card = ({color, url, title, desc, items, imageUrl, page}) => {
console.log("🚀 ~ file: index.jsx:8 ~ Card ~ imageUrl:", imageUrl)
// console.log(pages[0].pages[page])
//     const [pageObj, setPageObj] = useState([]);
  

//   async function buscarDados(pages) {
//     for (let page in pages) {
//       console.log(pages[page]);
//       setPageObj(prevState => [...Array.from(new Set(prevState)), pages[page]]);
//     }   
//   }

//   console.log(pageObj);
  
//   useEffect(() => {
//     buscarDados(pages[0].pages);
//     console.log(pageObj);
//     }, []);

    return (
        <CardStyle color={color}>
        <div className="card">
            <div className="card-header">
            <h3 className="card-title">{title}</h3>
            </div>
            <div className="card-body">
            <div className="card-image">
            <img src={imageUrl} alt={title} />
            </div>
            <div className="card-content">
            <p className="card-desc">{desc}</p>
            <div className="card-items">
                <a href={items.item1.url} target="_blank" rel="noreferrer" className="card-item">{items.item1.title}</a>
                <a href={items.item2.url} target="_blank" rel="noreferrer" className="card-item">{items.item2.title}</a>
                <a href={items.item3.url} target="_blank" rel="noreferrer" className="card-item">{items.item3.title}</a>
            </div>
            </div>
            <div className="card-readmore">
            <Link key={url} to={title} element={<CardPage page={page} />} className="linkto">Acessar</Link>
            <Link to={url} target="_blank" rel="noreferrer" className="linkto">Ler mais</Link>
            </div>
            </div>
        </div>
        </CardStyle>
    )
}