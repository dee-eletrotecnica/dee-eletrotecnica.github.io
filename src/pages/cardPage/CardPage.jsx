import { CardPageStyles } from "./styles"


import { Header } from "../../components/header"

export const CardPage = ({ content }) => {

    return (
        <CardPageStyles>
            <Header />
            <h1>{content.title}</h1>
            <p>{content.description}</p>
        </CardPageStyles>
    )
}