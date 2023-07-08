


import { Header } from "../components/header"

export const DynamicPage = ({ content }) => {

    return (
        <>
        <Header />
        <h1>{content.title}</h1>
        <p>{content.description}</p>
        <ul>
        {Object.values(content.items).map((item) => (
            <li key={item}>{item}</li>
        ))}
        </ul>
        </>
    )
}