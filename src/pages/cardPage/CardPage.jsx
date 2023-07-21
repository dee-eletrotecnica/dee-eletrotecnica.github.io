import pages from "../../../paginas.yaml";
import { CardPageStyles } from "./styles";
import { Header } from "../../components/header";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const CardPage = ({ content }) => {
    const location = useLocation();
    const pageNumber = location.state.page;


    const [pageObj, setPageObj] = useState([]);

    
    async function buscarDados() {
        setPageObj(Object.values(pages[0].pages[pageNumber].links));
      }
    
      
      useEffect(() => {
        console.log(pages[0].pages[pageNumber].links)
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
                    <div className="links">
                        {pageObj.map((link, i) => (
                            <div className="link">
                                <a key={link.url+i} href={link.url}>{link.title}</a>
                                <div className="link-body">
                                    <p>{link.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </CardPageStyles>
    )
}