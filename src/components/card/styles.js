import styled from "styled-components"


export const CardStyle = styled.div.attrs((props) => ({color: props.color}))`
    width: 300px;
    min-width: 150px;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .card {
        display: flex;
        flex-direction: column;
        text-align: start;
        /* border: 1px solid rgba(0,0,0,0.1); */

    }

    .card-header {
        width: 100%;
        height: 50px;
        background-color: #CFDEE7;
        border-left: 5px solid ${(props) => props.color};
        border-radius: 5px 5px 1px 5px;
        margin: 0 auto;
    }

    .card-body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 250px;
        padding: 8px;
    }

    .card-title {
        text-align: center;
        height: 100%;
        margin: 0 auto;
        font-weight: 300;
    }

    .card-text {
        font-weight: 300;
    }

    .card-item {
        margin: 0;
    }

    .linkto {
        display: flex;
        text-decoration: none;
        height: 30px;
        border: 1px solid rgba(0,0,0,0.1);
        width: fit-content;
        padding: 2px 5px;
        border-radius: 5px;
        align-self: center;
        background-color: #CFDEE7;
        color: #0A369D;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        &:hover {
            background-color: #5E7CE2;
            color: #ffffff;
            transition: .2s ease-in-out;
        }
    }
`