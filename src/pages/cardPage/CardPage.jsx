import { CardPageStyles } from "./styles"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"


import { Header } from "../../components/header"

export const CardPage = ({ content }) => {

    return (
        <CardPageStyles>
            <Header />
            <div className="wrapper">
                <div className="container">
                    <h1>{content.title}</h1>
                    <div className="separator"></div>
                    <article>{content.description}</article>
                </div>
            </div>
        </CardPageStyles>
    )
}