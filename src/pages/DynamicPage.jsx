


import { Header } from "../components/header"

export const DynamicPage = ({ content }) => {

    return (
        <>
        <Header />
        <h1>{content.title}</h1>
        <h1>teste</h1>
        </>
    )
}