import styled from "styled-components"


export const CardStyle = styled.div.attrs((props) => ({color: props.color, imageUrl: props.imageUrl}))`
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: rgba(0, 0, 0, .02);

    .card {
        max-width: 380px;
        min-width: 380px;
        display: flex;
        flex-direction: column;
        text-align: start;
        border: 1px solid ${(props) => props.color};;
        border-radius: 8px;
        min-height: 410px;
        max-height: 410px;
        @media (max-width: 385px) { 
        max-width: 300px;
        min-width: 300px;
    }
    }

    .card-header {
        width: 100%;
        height: 50px;
        background-color: ${(props) => props.color}; 
        margin: 0 auto;
        border-radius: 8px 8px 0px 0px;
    }

    .card-body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        gap: 30px;
    }

    .card-image {
        display: flex;
        justify-content: center;
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        img {
            width: 50%;
            transform: scale(1);
        }
    }

    .card-image:hover {
        img {
            transition: ease-in-out .3s;
            transform: scale(1.1);
        }
    }

    .card-title {
        text-align: center;
        height: 100%;
        margin: 8px auto;
        font-weight: bold;
        color: rgba(0, 0, 0, .5);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .card-text {
        font-weight: 300;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: 'Times New Roman', Times, serif;
    }

    .card-content {
        display: flex;
        width: 100%;
        flex-direction: column;
        line-height: 1.5rem;
    }

    .card-item {
        margin: 0;
        text-decoration: none;
        color: black;
        font-weight: 200;
        border-bottom: 1px solid transparent;
        text-align: center;
    }

    .card-items {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card-item:hover {
        transition: ease-in-out.3s;
        border-bottom: 1px solid ${(props) => props.color};
        transform: scale(1.01);
    }

    .linkto {
        display: flex;
        text-decoration: none;
        width: fit-content;
        border-bottom: 1px solid transparent ;
        align-self: center;
        color: #0A369D;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        &:hover {
            transition: .2s ease-in-out;
            border-bottom: 1px solid ${(props) => props.color};
        }
    }
`