import pages from "../../../paginas.yaml";
import { CardPageStyles } from "./styles";
import { Header } from "../../components/header";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const CardPage = ({ content }) => {
    const location = useLocation();
    const pageNumber = location.state?.page;


    const [pageObj, setPageObj] = useState([]);

    
    async function buscarDados() {
        setPageObj(Object.values(pages[0].pages[pageNumber].links));
      }
    
      
      useEffect(() => {
        buscarDados(pages[0].pages[pageNumber].links);
        }, []);

  
  useEffect(() => {
    buscarDados();
    }, []);
  

    return (
        <CardPageStyles>
            <Header />
            <div className="wrapper">
                <div className="container">
                    <h1>{content.title}</h1>
                    <div className="separator"></div>
                    <article>{content.description}</article>
                    <ul className="links">
                        {pageObj.map((link, i) => (
                            <li className="link">
                                <header className="link-header">
                                    <h2>{link.title}</h2>
                                </header>
                                <section className="link-body">
                                    <p>{link.desc}</p>
                                    <a href={link.url} target="_blank" rel="noreferrer">Abrir Repositório</a>
                                </section>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </CardPageStyles>
    )
}